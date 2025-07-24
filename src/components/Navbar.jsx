import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const navLinks = [
  { name: "Home", id: "hero" },
  { name: "Who I Am", id: "about" },
  { name: "What I Learn", id: "skills" },
  { name: "What I Build", id: "projects" },
];

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle scrolling behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide if scrolling down, show if up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (id) => {
    if (location.pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      navigate("/");

      const scrollToSection = () => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          requestAnimationFrame(scrollToSection);
        }
      };

      requestAnimationFrame(scrollToSection);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{
        background:
          "linear-gradient(to right, rgba(0,0,0,0.5) 20%, rgba(0,0,0,0.9) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        <h1
          className="text-white text-lg sm:text-xl md:text-2xl font-bold tracking-tight cursor-pointer hover:text-purple-400 transition-colors"
          onClick={() => handleNavClick("hero")}
        >
          Ars Patel
        </h1>

        <ul className="hidden md:flex gap-6 lg:gap-10 text-white text-sm lg:text-base font-medium tracking-wide">
          {navLinks.map(({ name, id }) => (
            <li
              key={id}
              className="relative group cursor-pointer transition-colors hover:text-purple-400"
              onClick={() => handleNavClick(id)}
            >
              <span>{name}</span>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-500 transition-all duration-300 group-hover:w-full" />
            </li>
          ))}
        </ul>

        <button
          onClick={() => handleNavClick("contact")}
          className="px-4 py-2 sm:px-6 sm:py-2.5 text-white bg-purple-600 hover:bg-purple-700 rounded-lg text-sm sm:text-base font-medium transition duration-300 mr-1"
        >
          Contact Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;