import React, { useEffect } from "react";
import { useState } from "react";

import TransitionStyles from "../styles/TransitionStyles";
import { createGlobalStyle } from "styled-components";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GoMail } from "react-icons/go";
import About from "../components/about";
import Experiences from "../components/experiences";
import Certifications from "../components/certifications";
import Projects from "../components/projects";
import { motion, AnimatePresence } from "framer-motion";

const GlobalStyles = createGlobalStyle`${TransitionStyles}`;

function Index() {
  const [section, setSection] = useState("about");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  let componentToRender;

  switch (section) {
    case "about":
      componentToRender = <About />;
      break;
    case "experiences":
      componentToRender = <Experiences />;
      break;
    case "certifications":
      componentToRender = <Certifications />;
      break;
    case "projects":
      componentToRender = <Projects />;
      break;
    default:
      componentToRender = <About />;
  }

  // Fonction qui met à jour la position de la souris
  const handleMouseMove = (e) => {
    setMousePosition({
      x: e.clientX - 225, // Centrer l'halo par rapport à la souris
      y: e.clientY - 225, // Centrer l'halo par rapport à la souris
    });
  };

  // Attacher l'événement de suivi de la souris au montage du composant
  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        className="halo bg-slate-700"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        }}
      ></div>
      <div className="bg-slate-900">
        <div className="container flex justify-between max-w-screen-xl min-h-screen py-12 mx-auto font-sans text-white md:px-12 md:py-20 lg:px-24 lg:py-0">
          <section className="flex flex-col w-1/2 h-screen pt-32">
            <h1 className="mb-3 text-2xl font-bold leading-7 sm:truncate sm:text-4xl sm:tracking-tight">
              <a href="#">Enzo Taurines</a>
            </h1>
            <h2 className="mb-3 text-xl font-semibold leading-7 text-gray-300 sm:truncate sm:text-lg sm:tracking-tight">
              Dev Web Fullstack Junior
            </h2>
            <p className="max-w-xs mb-16 text-lg text-gray-500">
              Je développe des projets accessibles qui rendent le monde
              meilleur.
            </p>
            <ul>
              <li>
                <a
                  className={`flex items-center py-3 ${
                    section == "about" ? "active" : ""
                  }`}
                  href="#"
                  onClick={() => setSection("about")}
                >
                  <span className="w-8 h-px mr-4 transition-all nav-indicator bg-slate-600 group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                  <span className="text-xs font-bold tracking-widest uppercase nav-text text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                    About
                  </span>
                </a>
              </li>
              <li>
                <a
                  className={`flex items-center py-3 ${
                    section == "experiences" ? "active" : ""
                  }`}
                  href="#"
                  onClick={() => setSection("experiences")}
                >
                  <span className="w-8 h-px mr-4 transition-all nav-indicator bg-slate-600 group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                  <span className="text-xs font-bold tracking-widest uppercase nav-text text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                    Expériences
                  </span>
                </a>
              </li>
              <li>
                <a
                  className={`flex items-center py-3 ${
                    section == "projects" ? "active" : ""
                  }`}
                  href="#"
                  onClick={() => setSection("projects")}
                >
                  <span className="w-8 h-px mr-4 transition-all nav-indicator bg-slate-600 group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                  <span className="text-xs font-bold tracking-widest uppercase nav-text text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                    Projets
                  </span>
                </a>
              </li>
              <li>
                <a
                  className={`flex items-center py-3 ${
                    section == "certifications" ? "active" : ""
                  }`}
                  href="#"
                  onClick={() => setSection("certifications")}
                >
                  <span className="w-8 h-px mr-4 transition-all nav-indicator bg-slate-600 group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                  <span className="text-xs font-bold tracking-widest uppercase nav-text text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                    Certifications
                  </span>
                </a>
              </li>
            </ul>
            <div className="flex mt-auto mb-32 space-x-4">
              <a
                href="https://github.com/taurinese"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/enzo-taurines/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />{" "}
              </a>
              <a
                href="https://x.com/dev_taurinese"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
              >
                <FaXTwitter size={24} />{" "}
              </a>
              <a href="mailto:enzodylan.taurines@gmail.com" aria-label="Email">
                <GoMail size={24} />
              </a>
            </div>
          </section>
          <section className="w-1/2 pt-32 transition-container">
            <AnimatePresence mode="wait">
              <motion.div
                key={section}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -100, opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                {componentToRender}
              </motion.div>
            </AnimatePresence>
          </section>
        </div>
      </div>
    </>
  );
}

export default Index;
