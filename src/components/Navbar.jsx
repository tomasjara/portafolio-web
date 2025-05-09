import { useState } from "react";
import { useActiveSection } from "../hooks/useActiveSection";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  // Cambia sectionIds a una lista de objetos con id y name
  const sections = [
    { id: 'inicio', name: 'Inicio' },
    { id: 'sobre-mi', name: 'Sobre mí' },
    { id: 'experiencia', name: 'Experiencia' },
  ];

  const activeSection = useActiveSection(sections.map(section => section.id));

  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent text-white z-50 pt-2 ">
      <div className="px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
        <div className="bg-[#06080c] rounded-md border border-[#292929] ">
          <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
            <div className="text-xl font-bold">TJ</div>

            <button
              className="sm:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  className={`hover:text-white hover:bg-gray-800 rounded-md p-2 transition-all ${activeSection === id ? 'text-white' : 'text-gray-500'}`}
                >
                  {name}
                </a>
              ))}
            </div>
            <div className="hidden sm:flex"></div>
          </div>

          {isOpen && (
            <div className="sm:hidden flex flex-col gap-1 pt-1 pb-6 px-4 ">
              {sections.map(({ id, name }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setIsOpen(false)}
                  className={`text-center hover:text-white hover:bg-gray-800 rounded-md p-2 transition-all ${activeSection === id ? 'text-white' : 'text-gray-500'}`}
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
