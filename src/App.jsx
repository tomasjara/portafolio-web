import { FiGithub } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import Navbar from "./components/Navbar";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaDocker,
  FaDatabase,
  FaRocket,
  FaCogs,
  FaFireAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiFirebase,
  SiSupabase,
  SiJest,
  SiTestinglibrary,
  SiMarkdown,
  SiNotion
} from "react-icons/si";


export const IconLinkContainer = ({ icon, link }) => {
  return (
    <a className="text-lg border-2 border-white border-opacity-30 rounded-full p-2" href={link} target="_blank" rel="noopener noreferrer">
      {icon}
    </a>
  )
}

const Card = ({ children, className, id }) => {
  return (
    <div id={id} className={`flex flex-col gap-3 rounded-3xl bg-[#10151f] p-5 ${className}`} style={{ border: ".0625rem solid #292929" }}>
      {children}
    </div>
  )
}

const stackTecnologico = [
  {
    category: "Frontend",
    items: [
      { icon: <FaHtml5 className="text-orange-600" />, name: "HTML" },
      { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS" },
      { icon: <SiJavascript className="text-yellow-400" />, name: "JavaScript" },
      { icon: <FaReact className="text-cyan-400" />, name: "React" },
      { icon: <FaReact className="text-cyan-400" />, name: "React Native" },
      { icon: <SiTailwindcss className="text-sky-400" />, name: "TailwindCSS" },
    ],
  },
  {
    category: "Backend",
    items: [
      { icon: <FaNodeJs className="text-green-600" />, name: "Node.js" },
      { icon: <FaNodeJs className="text-green-600" />, name: "Express.js" },
      { icon: <SiSupabase className="text-green-500" />, name: "Supabase" },
      { icon: <SiFirebase className="text-yellow-500" />, name: "Firebase" },
    ],
  },
  {
    category: "Testing",
    items: [
      { icon: <SiJest className="text-pink-500" />, name: "Jest" },
      { icon: <SiTestinglibrary className="text-red-500" />, name: "React Testing Library" },
    ],
  },
  {
    category: "DevOps / Control de versiones",
    items: [
      { icon: <FaGitAlt className="text-red-600" />, name: "Git" },
      { icon: <FaDocker className="text-blue-500" />, name: "Docker" },
      { icon: <FaCogs className="text-red-600" />, name: "Kubernetes" },
    ],
  },
  {
    category: "Documentación",
    items: [
      { icon: <SiMarkdown className="" />, name: "Markdown" },
      { icon: <SiNotion className="" />, name: "Notion" },
    ],
  },
];

const TagStack = ({ icon, name }) => {
  return (
    <div className="flex items-center gap-2 rounded-xl py-1 px-2 bg-blue-950">
      {icon}
      {name}
    </div>
  )
}

export const App = () => {
  return (
    <div className="flex flex-col gap-20 px-4 md:px-6 lg:px-8 max-w-screen-xl mx-auto text-white pt-40 pb-20">
      <Navbar />
      <div className="flex flex-col gap-3 scroll-mt-40" id="inicio">
        <Card className={"md:col-span-2"} >
          <h1 className="text-4xl font-bold text-center"><span className="animate-bounce text-4xl">👋 </span>Hola, Soy Tomás Jara</h1>
          <h2 className="text-md text-center font-extralight">Frontend Developer · Web & Mobile</h2>
          <div className="flex justify-center gap-5">
            <IconLinkContainer icon={<MdOutlineEmail />} link="mailto:tomasignaciojd@gmail.com" />
            {/* <IconLinkContainer icon={<CiLinkedin />} link="mailto:tomas.garcia.dev@gmail.com" /> */}
            {/* <IconLinkContainer icon={<FaInstagram />} link="mailto:tomas.garcia.dev@gmail.com" /> */}
            <IconLinkContainer icon={<FiGithub />} link="https://github.com/tomasjara" />
            {/* <IconLinkContainer icon={<FaThreads />} link="mailto:tomas.garcia.dev@gmail.com" /> */}
          </div>
          <p className="text-lg text-center">Motivado por encontrar oportunidades para crear, optimizar y mantener software funcional, útil y de calidad.</p>
        </Card>
        <Card className="flex flex-col gap-1 w-full">
          <h2 className="text-2xl font-bold">🧑‍💻 Formación Académica</h2>
          <p><strong>Inacap</strong> (2019 - 2021) Analista Programador</p>
        </Card>
      </div>

      <Card className="flex gap-2 scroll-mt-20" id="habilidades">
        <h2 className="text-2xl font-bold mb-3">👷‍♂️ Habilidades</h2>
        <div className="flex flex-col gap-4">
          {stackTecnologico.map((grupo) => (
            <div
              key={grupo.category}
              className=""
            >
              <h3 className="text-xl font-semibold mb-4 text-white">
                {grupo.category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {grupo.items.map((item) => (
                  <TagStack icon={item.icon} name={item.name} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Card>

      <Card className="scroll-mt-20" id="experiencia">
        <h2 className="text-2xl font-bold mb-3">📈 Experiencia</h2>
        <div className="border-l-4 border-green-500 pl-4 space-y-10">
          <div>
            <h3 className="text-lg font-bold text-green-400">Mis Gastos</h3>
            {/* <h4 className="text-xl font-semibold">Mis Gastos</h4> */}
            {/* <h5 className="text-md italic text-gray-400">Subtítulo del 2023</h5> */}
            <p className="text-gray-300 text-md">
              <p>Aplicación móvil enfocada en facilitar el registro y seguimiento de gastos personales</p>
              <div className="leading-8">
                <p>- <strong>Funciones principales:</strong> Registro de gastos, categorización de movimientos, generación de estadísticas.</p>
                <p>- <strong>Estado:</strong> Publicación próxima en Google Play Store.</p>
                {/* <p>- <strong>Tecnologías:</strong> React Native, Expo, AsyncStorage</p> */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {[{ icon: <FaReact className="text-cyan-400" />, name: "React Native" },  { icon: <FaDatabase className="text-green-500" />, name: "AsyncStorage" }, { icon: <FaRocket className="" />, name: "Expo" }].map((item) => (
                    <TagStack icon={item.icon} name={item.name} />
                  ))}
                </div>
              </div>
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-green-400">Plataforma de Gestión para Comunidades</h3>
            {/* <h4 className="text-xl font-semibold">Plataforma de Gestión para Comunidades</h4> */}
            {/* <h5 className="text-md italic text-gray-400">Subtítulo del 2024</h5> */}
            <p className="text-gray-300 text-md">
              <p>Desarrollo colaborativo de una solución digital para la administración de condominios y edificios.</p>
              <div className="leading-8">
                <p>- <strong>Contribuciones:</strong> Desarrollo móvil y colaboración en la integración de servicios backend.</p>
                <p>- <strong>Estado:</strong> Proyecto detenido antes de lanzamiento.</p>
                {/* <p>- <strong>Tecnologías:</strong> React Native, Expo, Docker, Kubernetes, Express.js, Nest.js</p> */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {[{ icon: <FaReact className="text-cyan-400" />, name: "React Native" }, { icon: <FaRocket className="" />, name: "Expo" }, { icon: <FaDocker className="text-blue-500" />, name: "Docker" }, { icon: <FaGitAlt className="text-red-600" />, name: "Git" }, { icon: <FaCogs className="" />, name: "Kubernetes" }, { icon: <FaNodeJs className="" />, name: "Express.js" }, { icon: <FaFireAlt className="text-red-600" />, name: "Nest.js" }].map((item) => (
                    <TagStack icon={item.icon} name={item.name} />
                  ))}
                </div>
              </div>
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-green-400">Plataforma Modular para Negocios</h3>
            {/* <h4 className="text-xl font-semibold">Plataforma Modular para Negocios</h4> */}
            {/* <h5 className="text-md italic text-gray-400">Subtítulo del 2025</h5> */}
            <p className="text-gray-300 text-md ">
              <p>Desarrollo frontend de una plataforma escalable para la gestión de múltiples negocios mediante componentes reutilizables.</p>
              <div className="leading-8">
                {/* <p>- <strong>Tecnologías:</strong> React, JavaScript, TailwindCSS</p> */}
                <p>- <strong>Contribuciones:</strong> Implementación de arquitectura modular y diseño responsivo.</p>
                <p>- <strong>Estado:</strong> Proyecto detenido antes de lanzamiento.</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {[{ icon: <FaReact className="text-cyan-400" />, name: "React" }, { icon: <SiJavascript className="text-yellow-400" />, name: "JavaScript" }, { icon: <SiTailwindcss className="text-sky-400" />, name: "TailwindCSS" }].map((item) => (
                    <TagStack icon={item.icon} name={item.name} />
                  ))}
                </div>
              </div>
            </p>
          </div>
        </div>
      </Card>

      <Card className="scroll-mt-20" id="sobre-mi">
        <h2 className="text-2xl font-bold">🙋 Sobre mí</h2>
        <p className="text-sm text-gray-600">Frontend Developer</p>
        <div className="text-lg space-y-4 text-gray-300">
          <p>Mi camino ha estado lleno de <strong className="font-semibold text-green-500">intentos, aprendizajes y exploraciones.</strong> Contribuí en proyectos que nunca llegaron a lanzarse, comencé proyectos propios que quedaron a mitad del camino, seguí tutoriales y documentación técnica, y en el proceso fui descubriendo <strong className="font-semibold text-green-500">mi forma de aprender y construir.</strong></p>
          <p>He adquirido conocimientos en <strong className="font-semibold text-green-500">testing, arquitectura de software y documentación de proyectos</strong>, y hoy estoy terminando “Mis Gastos”, una aplicación móvil que pronto estará disponible en la Play Store. Este proyecto marca un hito personal, porque representa lo que logré sostener, terminar y pulir.</p>
          <p>Reconozco que aún me queda mucho por aprender, pero en el camino he fortalecido mis fundamentos y hoy cuento con un abanico de <strong className="font-semibold text-green-500">herramientas, librerías y tecnologías</strong> que puedo seguir ampliando para avanzar y crecer en cada desafío.</p>
        </div>
      </Card>

    </div>
  )
}