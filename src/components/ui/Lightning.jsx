import { useRef, useEffect } from "react";

const Lightning = ({
  hue = 171,
  xOffset = 1.1,
  speed = 1,
  intensity = 0.1,
  size = 0.4,
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const gl = canvas.getContext("webgl", { alpha: true }); // enable transparency
    if (!gl) return console.error("WebGL not supported");

    const vertexSrc = `
      attribute vec2 aPosition;
      void main() {
        gl_Position = vec4(aPosition, 0.0, 1.0);
      }
    `;

    const fragmentSrc = `
      precision mediump float;
      uniform vec2 iResolution;
      uniform float iTime;
      uniform float uHue, uXOffset, uSpeed, uIntensity, uSize;

      float rand(vec2 co) {
        return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);
      }

      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        return mix(mix(rand(i), rand(i + vec2(1, 0)), f.x),
                   mix(rand(i + vec2(0, 1)), rand(i + vec2(1, 1)), f.x), f.y);
      }

      vec3 hsv2rgb(vec3 c) {
        vec3 rgb = clamp(abs(mod(c.x * 6. + vec3(0,4,2), 6.) - 3.) - 1., 0., 1.);
        return c.z * mix(vec3(1.), rgb, c.y);
      }

      void main() {
        vec2 uv = (gl_FragCoord.xy / iResolution.xy) * 2.0 - 1.0;
        uv.x *= iResolution.x / iResolution.y;
        uv.x += uXOffset;

        float t = iTime * uSpeed;
        uv += noise(uv * uSize + t) - 0.5;

        float brightness = 1.0 / abs(uv.x);
        vec3 color = hsv2rgb(vec3(uHue / 360.0, 0.7, 0.8)) * brightness * uIntensity;

        // ⬇️ Fade alpha from top (1.0) to bottom (0.0)
        float alphaFade = smoothstep(1.0, 0.3, gl_FragCoord.y / iResolution.y);

        gl_FragColor = vec4(color, alphaFade);
      }
    `;

    const compile = (type, source) => {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
        return null;
      }
      return shader;
    };

    const vs = compile(gl.VERTEX_SHADER, vertexSrc);
    const fs = compile(gl.FRAGMENT_SHADER, fragmentSrc);
    const program = gl.createProgram();

    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1, -1, 1, 1, -1]),
      gl.STATIC_DRAW
    );

    const aPosition = gl.getAttribLocation(program, "aPosition");
    gl.enableVertexAttribArray(aPosition);
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);

    const getUniform = (name) => gl.getUniformLocation(program, name);
    const uRes = getUniform("iResolution");
    const uTime = getUniform("iTime");
    const uHueLoc = getUniform("uHue");
    const uXOffsetLoc = getUniform("uXOffset");
    const uSpeedLoc = getUniform("uSpeed");
    const uIntensityLoc = getUniform("uIntensity");
    const uSizeLoc = getUniform("uSize");

    const start = performance.now();
    const render = () => {
      resize();
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.useProgram(program);
      gl.clear(gl.COLOR_BUFFER_BIT);

      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, (performance.now() - start) / 1000);
      gl.uniform1f(uHueLoc, hue);
      gl.uniform1f(uXOffsetLoc, xOffset);
      gl.uniform1f(uSpeedLoc, speed);
      gl.uniform1f(uIntensityLoc, intensity);
      gl.uniform1f(uSizeLoc, size);

      gl.drawArrays(gl.TRIANGLES, 0, 6);
      requestAnimationFrame(render);
    };
    requestAnimationFrame(render);

    return () => window.removeEventListener("resize", resize);
  }, [hue, xOffset, speed, intensity, size]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full absolute pointer-events-none"
    />
  );
};

export default Lightning;
