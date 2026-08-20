import { data } from "framer-motion/client";

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  businessProblem: string;
  myRole: string;
  technologies: string[];
  projectType: string;
  imageUrl: string;
  liveUrl?: string | null;
  demoVideo?: string | null;
  githubUrl?: string | null;
}

export const stackData = {
  frontend: ['React', 'JavaScript', 'TypeScript', 'Tailwind CSS'],
  backend: ['PHP', 'Python', 'Node.js'],
  database: ['MySQL', 'PostgreSQL', 'Pocketbase'],
  cloud: ['Azure Functions', 'AWS Cloud - Básico'],
  ai: ['Embeddings', 'Bases de datos vectoriales', 'Integraciones con modelos de IA', 'OpenAI API'],
  integrations: ['Niubiz', 'WhatsApp API', 'APIs REST']
//   automation: ['Automatización de procesos', 'Sincronización de servicios externos']
};

export const projectsData: Project[] = [
  {
    id: "1",
    title: "GEOTHON",
    shortDescription: "Sistema de consulta de información mediante búsqueda semántica.",
    businessProblem: "El cliente necesitaba reducir el tiempo de búsqueda en documentos extensos. Implementé una solución que permite consultar información corporativa utilizando búsqueda semántica mediante embeddings y una base de datos vectorial.",
    myRole: "Diseño de arquitectura, integración de IA y desarrollo Backend/Frontend.",
    technologies: ["Python", "React", "Embeddings", "Vector DB", "Azure Functions"],
    projectType: "IA & Automatización",
    imageUrl: "[URL_DE_IMAGEN_O_PLACEHOLDER]",
    demoVideo: "[URL_DEL_VIDEO_DE_DEMOSTRACION]",
    liveUrl: null,
    githubUrl: null
  },
  {
    id: "2",
    title: "BIOSPACE NAVIGATOR",
    shortDescription: "",
    businessProblem: "Plataforma web orientada a mostrar mas de 600 documentos de la nasa organizada por categorias, asi como un buscador inteligente que permite encontrar documentos de manera rapida y eficiente con LLM. Integra un chatBot que permite interactuar con los documentos de manera conversacional y realizar preguntas sobre el documento en especifico o en general. Se utilizó RAG para la integración de LLM y la base de datos vectorial.",
    myRole: "Diseño de arquitectura, integración de IA y desarrollo Backend/Frontend.",
    technologies: ["Python", "Vanilla JS", "Embeddings", "Vector DB", "Azure Functions"],
    projectType: "IA & Automatización",
    imageUrl: "[URL_DE_IMAGEN_O_PLACEHOLDER]",
    demoVideo: "[URL_DEL_VIDEO_DE_DEMOSTRACION]",
    liveUrl: null,
    githubUrl: null
  },
   {
    id: "6",
    title: "UDEP - IE",
    shortDescription: "Sistema de notificaciones y atención automatizada vía WhatsApp.",
    businessProblem: "El proceso de atención al cliente era manual y lento. Se diseñó un flujo automatizado que conecta los sistemas internos con la API de WhatsApp para respuestas en tiempo real.",
    myRole: "Colaborador en el desarrollo de la página del Plan de Trabajo. Desarrollo fronted y backend completo del módulo del Sistemas de Evaluaciones.",
    technologies: ["Python","Vanilla JS", "Azure Fuctions", "Microsoft OAuth 2.0"],
    projectType: "Integración API",
    imageUrl: "[URL_DE_IMAGEN_O_PLACEHOLDER]",
    demoVideo: "[URL_DEL_VIDEO_DE_DEMOSTRACION]",
    liveUrl: "https://innovacioneducativa.udep.edu.pe",
    githubUrl: "[URL_DE_GITHUB_SI_APLICA]"
  },
  {
    id: "3",
    title: "ONE LEARNING",
    shortDescription: "Plataforma web orientada a la venta de productos con pasarela de pagos.",
    businessProblem: "Optimización del embudo de ventas digital. Desarrollé una landing page de alta conversión integrada con pagos online y notificaciones automáticas.",
    myRole: "Desarrollo Frontend completo e integración de pasarela de pagos.",
    technologies: ["React", "JavaScript", "Niubiz", "APIs REST"],
    projectType: "Web & Conversión",
    imageUrl: "[URL_DE_IMAGEN_O_PLACEHOLDER]",
    liveUrl: "https://onelearning.pe",
    demoVideo: null,
    githubUrl: null
  },
   {
    id: "4",
    title: "LIRA & LINO",
    shortDescription: "Plataforma web orientada a la venta de productos con pasarela de pagos.",
    businessProblem: "Optimización del embudo de ventas digital. Desarrollé una landing page de alta conversión integrada con pagos online y notificaciones automáticas.",
    myRole: "Desarrollo Frontend completo e integración de pasarela de pagos.",
    technologies: ["React", "JavaScript", "Niubiz", "APIs REST"],
    projectType: "Web & IA",
    imageUrl: "[URL_DE_IMAGEN_O_PLACEHOLDER]",
    liveUrl: "https://onelearning.pe",
    demoVideo: "[URL_DEL_VIDEO_DE_DEMOSTRACION]",
    githubUrl: null
  },
     {
    id: "5",
    title: "SISPRE",
    shortDescription: "Plataforma web orientada a la venta de productos con pasarela de pagos.",
    businessProblem: "Optimización del embudo de ventas digital. Desarrollé una landing page de alta conversión integrada con pagos online y notificaciones automáticas.",
    myRole: "Desarrollo Frontend completo",
    technologies: ["React", "JavaScript", "Niubiz", "APIs REST"],
    projectType: "Web Page",
    imageUrl: "[URL_DE_IMAGEN_O_PLACEHOLDER]",
    liveUrl: "https://sispre.app/",
    demoVideo: null,
    githubUrl: null
  },
 
    {
    id: "7",
    title: "[NOMBRE DE AUTOMATIZACIÓN WHATSAPP]",
    shortDescription: "Sistema de notificaciones y atención automatizada vía WhatsApp.",
    businessProblem: "El proceso de atención al cliente era manual y lento. Se diseñó un flujo automatizado que conecta los sistemas internos con la API de WhatsApp para respuestas en tiempo real.",
    myRole: "Desarrollo de scripts de automatización e integración de APIs.",
    technologies: ["Python", "WhatsApp API", "PHP"],
    projectType: "Integración API",
    imageUrl: "[URL_DE_IMAGEN_O_PLACEHOLDER]",
    demoVideo: "[URL_DEL_VIDEO_DE_DEMOSTRACION]",
    liveUrl: null,
    githubUrl: "[URL_DE_GITHUB_SI_APLICA]"
  }
];