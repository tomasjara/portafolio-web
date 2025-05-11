import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaDocker, FaDatabase, FaRocket, FaCogs, FaFireAlt } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiJest, SiTestinglibrary, SiMarkdown, SiNotion, SiSupabase, SiFirebase } from "react-icons/si";

export const tecnologias = {
    react: {
        icon: <FaReact className="text-cyan-400" />,
        name: "React"
    },
    reactNative: {
        icon: <FaReact className="text-cyan-400" />,
        name: "React Native"
    },
    expo: {
        icon: <FaRocket className="" />,
        name: "Expo"
    },
    nodejs: {
        icon: <FaNodeJs className="text-green-600" />,
        name: "Node.js"
    },
    nestjs: {
        icon: <FaFireAlt className="text-green-600" />,
        name: "Nest.js"
    },
    express: {
        icon: <FaNodeJs className="text-green-600" />,
        name: "Express.js"
    },
    docker: {
        icon: <FaDocker className="text-blue-500" />,
        name: "Docker"
    },
    git: {
        icon: <FaGitAlt className="text-red-600" />,
        name: "Git"
    },
    html: {
        icon: <FaHtml5 className="text-orange-600" />,
        name: "HTML"
    },
    css: {
        icon: <FaCss3Alt className="text-blue-500" />,
        name: "CSS"
    },
    javascript: {
        icon: <SiJavascript className="text-yellow-400" />,
        name: "JavaScript"
    },
    tailwindcss: {
        icon: <SiTailwindcss className="text-sky-400" />,
        name: "TailwindCSS"
    },
    jest: {
        icon: <SiJest className="text-pink-500" />,
        name: "Jest"
    },
    supabase: {
        icon: <SiSupabase className="text-green-500" />,
        name: "Supabase"
    },
    firebase: {
        icon: <SiFirebase className="text-yellow-500" />,
        name: "Firebase"
    },
    markdown: {
        icon: <SiMarkdown className="" />,
        name: "Markdown"
    },
    notion: {
        icon: <SiNotion className="" />,
        name: "Notion"
    },
    kubernetes: {
        icon: <FaCogs className="text-red-600" />,
        name: "Kubernetes"
    },
    asyncStorage: {
        icon: <FaDatabase className="text-green-500" />,
        name: "AsyncStorage"
    },
    reactTestingLibrary: {
        icon: <SiTestinglibrary className="text-red-500" />,
        name: "React Testing Library"
    }
}

export const stackTecnologico = [
    {
        category: "Frontend",
        items: [
            tecnologias.javascript,
            tecnologias.html,
            tecnologias.css,
            tecnologias.react,
            tecnologias.reactNative,
            tecnologias.expo,
            tecnologias.tailwindcss,
        ],
    },
    {
        category: "Backend",
        items: [
            tecnologias.nodejs,
            tecnologias.express,
            tecnologias.supabase,
            tecnologias.firebase,
        ],
    },
    {
        category: "Testing",
        items: [
            tecnologias.jest,
            tecnologias.reactTestingLibrary,
        ],
    },
    {
        category: "DevOps / Control de versiones",
        items: [
            tecnologias.git,
            tecnologias.docker,
            tecnologias.kubernetes,
        ],
    },
    {
        category: "Documentación",
        items: [
            tecnologias.markdown,
            tecnologias.notion,
        ],
    },
]