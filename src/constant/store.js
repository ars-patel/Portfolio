// data.js
import { Github, Linkedin, Mail } from "lucide-react";
import snap from "./../assets/snap.png"; // Optional default image
import store from "./../assets/store.png"
import head from "./../assets/headphone.png"
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiShadcnui,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPrisma,
  SiPostgresql,
  SiPython,
  SiFlask,
  SiFastapi,
  SiPostman,
  SiGit,
  SiGithub,
  SiVercel,
} from "react-icons/si";

import { FiServer } from "react-icons/fi";

export const counterItems = [
  { value: 15, suffix: "+", label: "Projects Completed" },
  { value: 2, suffix: "+", label: "Years Learning" },
  { value: 20, suffix: "+", label: "Technologies Learned" },
  { value: 4, suffix: "+", label: "Certificates Achieved" },
];

export const footerLinks = [
  {
    href: "https://github.com/ars-patel",
    label: "GitHub",
    Icon: Github,
  },
  {
    href: "https://linkedin.com/in/arskumar-patel-1395a12a3",
    label: "LinkedIn",
    Icon: Linkedin,
  },
  {
    href: "mailto:arspatel2@gmail.com",
    label: "Email",
    Icon: Mail,
  },
];

export const roles = [
  "Full-Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "ReactJs Expert",
  "API Backend Engineer"
];

export const projects = [
  {
    id: "snapgram",
    title: "SnapGram",
    description:
      "📸 Snapgram — A modern social app with infinite scroll, mobile-first UI, blazing-fast performance, built with React, TypeScript & Appwrite.",
    tech: ["Node.js", "MongoDB", "Redis", "React.js", "TailwindCSS", "AppWrite", "Cloudinary"],
    github: "https://github.com/ars-patel/snapgram_social_media_app",
    live: "https://snapcircle.vercel.app",
    image: snap,
  },
  {
    id: "storefront",
    title: "StoreFront Ecommerce app",
    description:
      "🛍️ Storefront E-commerce — A fully responsive and interactive storefront built with HTML, CSS & JavaScript, featuring smooth animations, dynamic filters, and a basic cart system.",
    tech: ["React", "GSAP", "Framer Motion", "TailwindCSS", "Html", "Css", "Js"],
    github: "https://github.com/ars-patel/Storefront-E-commerce-",
    live: "https://storefront-ecommerce.vercel.app",
    image: store,
  },
  {
    id: "headphone",
    title: "HeadPhone Websites",
    description:
      "🎧 Animated Headphone Website — A sleek, animated landing page for headphones with interactive UI, smooth scroll, and engaging GSAP animations using HTML, CSS, and JavaScript.",
    tech: ["HTML", "Shadcn/ui", "Bootstrap 5", "CSS", "Js", "GSAP"],
    github: "https://github.com/ars-patel/Animated_Head_Phone_Website",
    live: "https://head-phones-page.vercel.app",
    image: head,
  },
];

export const skills = [
  { name: "HTML", icon: SiHtml5, color: "bg-orange-600", textColor: "text-white" },
  { name: "CSS", icon: SiCss3, color: "bg-blue-600", textColor: "text-white" },
  { name: "JavaScript", icon: SiJavascript, color: "bg-yellow-400", textColor: "text-black" },
  { name: "TypeScript", icon: SiTypescript, color: "bg-blue-700", textColor: "text-white" },
  { name: "ReactJS", icon: SiReact, color: "bg-cyan-500", textColor: "text-black" },
  { name: "Next.js", icon: SiNextdotjs, color: "bg-black border border-white", textColor: "text-white" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "bg-teal-500", textColor: "text-white" },
  { name: "Framer Motion", icon: SiFramer, color: "bg-purple-600", textColor: "text-white" },
  { name: "Shadcn", icon: SiShadcnui, color: "bg-gray-800", textColor: "text-white" },
  { name: "NodeJS", icon: SiNodedotjs, color: "bg-green-600", textColor: "text-white" },
  { name: "ExpressJS", icon: SiExpress, color: "bg-gray-700", textColor: "text-white" },
  { name: "MongoDB", icon: SiMongodb, color: "bg-green-500", textColor: "text-white" },
  { name: "MySQL", icon: SiMysql, color: "bg-blue-800", textColor: "text-white" },
  { name: "Prisma", icon: SiPrisma, color: "bg-gray-900", textColor: "text-white" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "bg-blue-900", textColor: "text-white" },
  { name: "Python", icon: SiPython, color: "bg-blue-500", textColor: "text-white" },
  { name: "Flask", icon: SiFlask, color: "bg-gray-600", textColor: "text-white" },
  { name: "FastAPI", icon: SiFastapi, color: "bg-teal-600", textColor: "text-white" },
  { name: "Postman", icon: SiPostman, color: "bg-orange-500", textColor: "text-white" },
  { name: "Git", icon: SiGit, color: "bg-red-500", textColor: "text-white" },
  { name: "GitHub", icon: SiGithub, color: "bg-gray-900", textColor: "text-white" },
  { name: "Vercel", icon: SiVercel, color: "bg-black border border-white", textColor: "text-white" },
  { name: "Render", icon: FiServer, color: "bg-indigo-700", textColor: "text-white" },
];