import { useState } from "react";
import { useActiveSection } from "../hooks/useActiveSection";
import { MdOutlineEmail } from "react-icons/md";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { IconLinkContainer } from "../App";
import { CgFileDocument } from "react-icons/cg";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Cambia sectionIds a una lista de objetos con id y name
  const sections = [
    { id: '', name: 'Inicio' },
    { id: 'habilidades', name: 'Habilidades' },
    { id: 'experiencia', name: 'Experiencia' },
    { id: 'sobre-mi', name: 'Sobre mí' },
  ];

  const activeSection = useActiveSection(sections.map(section => section.id));
  // w-full p-4 rounded-full flex bg-black bg-opacity-10 justify-between items-center sticky backdrop-blur-lg top-0 z-50
  return (

    <nav className="fixed top-0 left-0 w-full bg-transparent text-white z-50 sm:pt-2 transition-all">
      <div className="md:px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto transition-all">
        <div className={`bg-[#06080c] ${isOpen ? '' : 'backdrop-blur-lg bg-opacity-10'}  md:rounded-md border border-[#292929] transition-all duration-600`}>
          <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
            <a href="#" onClick={() => setIsOpen(false)} className="text-3xl font-bold select-none">TJ</a>

            <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            <div className="hidden md:flex gap-6 justify-center">
              {sections.map(({ id, name }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setIsOpen(false)}
                  className={`hover:text-white font-medium hover:bg-gray-800 rounded-md p-2 transition-all text-white`}
                >
                  {name}
                </a>
              ))}
            </div>
            <div className="hidden md:flex justify-center  gap-1 md:gap-5">
            <IconLinkContainer icon={<MdOutlineEmail />} ariaLabel="Mandar correo a Tomás Jara" link="mailto:tomasignaciojd@gmail.com" name="Email" />
            <IconLinkContainer icon={<FiGithub />} ariaLabel="Ir a Github de Tomás Jara" link="https://github.com/tomasjara" name="GitHub" />
            <IconLinkContainer icon={<FiLinkedin />} ariaLabel="Ir a LinkedIn de Tomás Jara" link="https://www.linkedin.com/in/tomas-jara-diaz/" name="LinkedIn" />
            <IconLinkContainer icon={<CgFileDocument />} ariaLabel="Descargar CV de Tomás Jara" link="/CV Tomás Jara Díaz.pdf" download name="CV" />
            </div>
          </div>

          {isOpen && (
            <>
              <div className="md:hidden flex flex-col gap-4 pt-1 pb-6 px-4 h-screen">
                {sections.map(({ id, name }) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    onClick={() => setIsOpen(false)}
                    className={`text-center hover:text-white hover:bg-gray-800 rounded-md py-5 transition-all text-white text-2xl`}
                  >
                    {name}
                  </a>
                ))}
                <div className="flex justify-center gap-5 mt-5">
                  <IconLinkContainer icon={<MdOutlineEmail className="w-10 h-10" />} ariaLabel="Mandar correo a Tomás Jara" link="mailto:tomasignaciojd@gmail.com" name="Email" />
                  <IconLinkContainer icon={<FiGithub className="w-10 h-10" />} ariaLabel="Ir a Github de Tomás Jara" link="https://github.com/tomasjara" name="GitHub" />
                  <IconLinkContainer icon={<FiLinkedin className="w-10 h-10" />} ariaLabel="Ir a LinkedIn de Tomás Jara" link="https://www.linkedin.com/in/tomas-jara-diaz/" name="LinkedIn" />
                  <IconLinkContainer icon={<CgFileDocument className="w-10 h-10" />} ariaLabel="Descargar CV de Tomás Jara" link="/CV Tomás Jara Díaz.pdf" download name="CV" />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
