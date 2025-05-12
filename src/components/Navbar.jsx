import { useState } from "react";
import { useActiveSection } from "../hooks/useActiveSection";
import { MdOutlineEmail } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { IconLinkContainer } from "../App";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Cambia sectionIds a una lista de objetos con id y name
  const sections = [
    { id: 'inicio', name: 'Inicio' },
    { id: 'habilidades', name: 'Habilidades' },
    { id: 'experiencia', name: 'Experiencia' },
    { id: 'sobre-mi', name: 'Sobre mí' },
  ];

  const activeSection = useActiveSection(sections.map(section => section.id));
  // w-full p-4 rounded-full flex bg-black bg-opacity-10 justify-between items-center sticky backdrop-blur-lg top-0 z-50
  return (

    <nav className="fixed top-0 left-0 w-full bg-transparent text-white z-50 pt-2 transition-all">
      <div className="px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
        <div className={`bg-[#06080c] ${isOpen ? '' : 'backdrop-blur-lg bg-opacity-10'}  rounded-md border border-[#292929] transition-all duration-600`}>
          <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
            <div className="text-2xl font-bold">TJ</div>

            <button
              className="sm:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            <div className="hidden sm:flex gap-6 justify-center">
              {sections.map(({ id, name }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setIsOpen(false)}
                  className={`hover:text-white font-medium hover:bg-gray-800 rounded-md p-2 transition-all text-white`}
                // className={`hover:text-white hover:bg-gray-800 rounded-md p-2 transition-all ${activeSection === id ? 'text-white' : 'text-gray-500'}`}
                >
                  {name}
                </a>
              ))}
            </div>
            <div className="hidden sm:flex justify-center gap-5">
              <IconLinkContainer icon={<MdOutlineEmail />} link="mailto:tomasignaciojd@gmail.com" />
              {/* <IconLinkContainer icon={<CiLinkedin />} link="mailto:tomas.garcia.dev@gmail.com" /> */}
              {/* <IconLinkContainer icon={<FaInstagram />} link="mailto:tomas.garcia.dev@gmail.com" /> */}
              <IconLinkContainer icon={<FiGithub />} link="https://github.com/tomasjara" />
              {/* <IconLinkContainer icon={<FaThreads />} link="mailto:tomas.garcia.dev@gmail.com" /> */}
            </div>
          </div>

          {isOpen && (
            <div className="sm:hidden flex flex-col gap-4 pt-1 pb-6 px-4 h-screen">
              {sections.map(({ id, name }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setIsOpen(false)}
                  className={`text-center hover:text-white hover:bg-gray-800 rounded-md py-5 transition-all text-white text-2xl`}
                // className={`text-center hover:text-white hover:bg-gray-800 rounded-md p-2 transition-all ${activeSection === id ? 'text-white' : 'text-gray-500'}`}
                >
                  {name}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
