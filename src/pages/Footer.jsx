import React from "react";
import { footerLinks } from "./../constant/store";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-black w-full py-5 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Left: concise & professional */}
        <div className="text-white text-sm mb-3 md:mb-0 text-center md:text-left select-none tracking-wide">
          © {currentYear} Ars Patel — Full Stack Developer driving ideas from concept to code.
        </div>

        {/* Right: Social Icons */}
        <div className="flex gap-6 justify-center">
          {footerLinks.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-800 transition-colors flex items-center justify-center"
            >
              <Icon size={24} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;