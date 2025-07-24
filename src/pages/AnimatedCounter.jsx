"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { counterItems } from "../constant/store";

gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = () => {
  const counterRef = useRef(null);
  const countersRef = useRef([]);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      countersRef.current.forEach((counter, index) => {
        const item = counterItems[index];
        if (!counter || !item) return;

        const numberElement = counter.querySelector(".counter-number");
        if (!numberElement) return;

        const obj = { val: 0 };

        // Animate number increment
        gsap.to(obj, {
          val: item.value,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: counter,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          onUpdate: () => {
            numberElement.textContent = `${Math.floor(obj.val)}${item.suffix}`;
          },
        });

        // Animate card fade + slide in
        gsap.from(counter, {
          opacity: 0,
          y: 40,
          duration: 1,
          delay: index * 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: counter,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });
    }, counterRef);

    return () => {
      ctx.revert(); // Cleanup all animations in this context on unmount
    };
  }, []);

  return (
    <section
      id="counter"
      ref={counterRef}
      className="w-full px-4 mt-24 xl:mt-32 py-12 bg-gradient-to-b from-[#1e0034] via-[#2a003f] to-[#3a0055] relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {counterItems.map(({ label, suffix }, index) => (
          <div
            key={index}
            ref={(el) => (countersRef.current[index] = el)}
            className="bg-purple-800/20 backdrop-blur-md border border-purple-600 rounded-2xl p-8 flex flex-col items-center justify-center shadow-lg hover:shadow-purple-700/50 transition-all duration-300"
          >
            <div className="counter-number text-purple-300 text-5xl font-extrabold mb-2 drop-shadow-lg">
              0{suffix}
            </div>
            <div className="text-purple-100 text-center text-base sm:text-lg font-medium opacity-90">
              {label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AnimatedCounter;