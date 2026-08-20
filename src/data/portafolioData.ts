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
  backend: ['PHP', 'Python'],
  cloud: ['Azure Functions'],
  ai: ['Embeddings', 'Bases de datos vectoriales', 'Integraciones con modelos de IA'],
  integrations: ['Niubiz', 'WhatsApp API', 'APIs REST'],
  automation: ['Automatización de procesos', 'Sincronización de servicios externos']
};

export const projectsData: Project[] = [
  {
    id: "1",
    title: "[NOMBRE DEL SISTEMA CON IA Y EMBEDDINGS]",
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
    title: "[NOMBRE DE LANDING PAGE DE CONVERSIÓN]",
    shortDescription: "Plataforma web orientada a la venta de productos con pasarela de pagos.",
    businessProblem: "Optimización del embudo de ventas digital. Desarrollé una landing page de alta conversión integrada con pagos online y notificaciones automáticas.",
    myRole: "Desarrollo Frontend completo e integración de pasarela de pagos.",
    technologies: ["React", "JavaScript", "Niubiz", "APIs REST"],
    projectType: "Web & Conversión",
    imageUrl: "[URL_DE_IMAGEN_O_PLACEHOLDER]",
    liveUrl: "[URL_DEL_PROYECTO_EN_VIVO]",
    demoVideo: null,
    githubUrl: null
  },
  {
    id: "3",
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