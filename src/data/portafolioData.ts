// import { data } from "framer-motion/client";
import logo_Innova from '../../public/proyectos/UDEP_IE.svg'
import logo_Sispre from '../../public/proyectos/Sipre.png'
import logo_OneLearning from '../../public/proyectos/One_Learning.png'
import logo_BioSpace_Navigator from '../../public/proyectos/BioSpace_Navigator.png'


import video_UDEP_IE from '../../public/proyectos/UDEP-IE.mp4'
export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  businessProblem: string;
  myRole: string | string[];
  technologies: string[];
  projectType: string;
  imageUrl: string;
  liveUrl?: string | null;
  demoVideo?: string | null;
  githubUrl?: string | null;
  tipoProyecto?: string;
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
    id: "4",
    title: "LIRA & LINO",
    shortDescription: "Plataforma digital creada para visibilizar y conectar el trabajo artesanal de un grupo de mujeres emprendedoras. LIRA & LINO busca transformar el valor de lo hecho a mano en una experiencia digital, permitiendo descubrir, conocer y solicitar piezas únicas elaboradas artesanalmente, desde flores de cinta y limpiapipas hasta muñecos, tejidos y elementos decorativos.",
    businessProblem: `Las artesanas no contaban con un espacio digital donde mostrar y compartir sus productos más allá de su entorno cercano. LIRA & LINO nace como una iniciativa para llevar su trabajo artesanal al mundo digital, organizando sus productos en un catálogo accesible y facilitando el contacto con potenciales clientes.
                      
                      La plataforma incorpora un buscador inteligente basado en búsqueda semántica y RAG, además de un Backend en PocketBase para gestionar productos e imágenes. Su arquitectura está preparada para incorporar nuevas funcionalidades como carrito de compras y pagos en línea.`,
    myRole: ["Creadora y desarrolladora del proyecto.", 
              "Responsable del diseño y desarrollo Frontend completo", 
              "Responsable del diseño y desarrollo Frontend completo", 
              "Implementación del buscador inteligente e integración con el Backend y sus APIs."],
    technologies: ["React", "JavaScript", "Tailwind CSS", "PocketBase", "APIs REST", "RAG","Embeddings","Búsqueda semántica"],
    projectType: "Web & IA",
    imageUrl: "[URL_DE_IMAGEN_O_PLACEHOLDER]",
    liveUrl: "https://onelearning.pe",
    demoVideo: "[URL_DEL_VIDEO_DE_DEMOSTRACION]",
    githubUrl: null,
    tipoProyecto: "Personal"
  },
  {
    id: "1",
    title: "GEO-HIDRO LLM",
    shortDescription: "Plataforma interactiva de respuesta rápida que integra Sistemas de Información Geográfica (SIG) e inteligencia artificial para identificar y analizar el impacto potencial de fuentes contaminantes sobre la red hídrica nacional. Permite localizar puntos de riesgo, evaluar su proximidad a fuentes hídricas y generar recomendaciones contextualizadas mediante LLM.",
    businessProblem: `La identificación y análisis de riesgos asociados a fuentes contaminantes sobre los recursos hídricos requiere integrar información geográfica y múltiples fuentes de datos. 
                      
                      GEO-HIDRO LLM centraliza esta información para detectar fuentes contaminantes, como vertimientos y relaves, y determinar aquellas ubicadas dentro de un radio de 1 km respecto a la ubicación del usuario o a un punto seleccionado en el mapa.
                      
                      La plataforma utiliza datos geoespaciales almacenados en PostGIS y aplica técnicas de búsqueda semántica y RAG para complementar el análisis. A partir de la información recuperada, el sistema genera una evaluación del nivel de riesgo,
                      explica de manera clara el posible impacto y proporciona recomendaciones orientadas a la toma de decisiones.`,
    myRole: ["Desarrollo Frontend e integración de APIs.",
             "Responsable de construir la interfaz de usuario.",
             "implementar la interacción con el mapa y consumir los servicios del Backend mediante APIs."
    ],
    technologies: ["Python", "React","PostGIS", "RAG", "Embeddings", "Vector Database", "Azure Functions.", "LLM"],
    projectType: "IA & Automatización",
    imageUrl: "[URL_DE_IMAGEN_O_PLACEHOLDER]",
    demoVideo: "[URL_DEL_VIDEO_DE_DEMOSTRACION]",
    liveUrl: null,
    githubUrl: null,
    tipoProyecto: "Concurso GEOTÓN PERÚ"
  },
  {
    id: "2",
    title: "BIOSPACE NAVIGATOR",
    shortDescription: `Plataforma web desarrollada para explorar y consultar más de 600 documentos de la NASA mediante búsqueda semántica e inteligencia artificial. El proyecto integra un chatbot basado en LLM y RAG, permitiendo a los usuarios realizar consultas sobre documentos específicos o sobre el conjunto de información disponible.`,
    businessProblem: `La gran cantidad de documentos científicos disponibles dificultaba encontrar información específica de manera rápida y eficiente. Para resolverlo, desarrollamos una plataforma que organiza más de 600 documentos de la NASA
                      por categorías e incorpora un buscador semántico capaz de comprender la intención de las consultas del usuario.

                      Además, se implementó un chatbot conversacional que permite realizar preguntas sobre documentos específicos o consultar información de manera general.

                      La solución utiliza embeddings y una base de datos vectorial para la búsqueda semántica, junto con una arquitectura RAG (Retrieval-Augmented Generation) para proporcionar respuestas contextualizadas a partir de los documentos. La integración
                      con modelos de IA se realizó mediante la API de Generative AI.`,
    myRole: ["Líder del equipo y desarrolladora.", 
              "Responsable del diseño de la arquitectura de la solución, integración de inteligencia artificial, y desarrollo de funcionalidades Backend y Frontend",
              "Coordiné al equipo durante el desarrollo del proyecto y la participación en la NASA Space Apps Challenge."],
    technologies: ["Python", "Vanilla JS", "LLM", "RAG", "Embeddings", "Vector Database", "Generative AI API","Azure Functions"],
    projectType: "IA & Automatización",
    imageUrl: logo_BioSpace_Navigator,
    demoVideo: "[URL_DEL_VIDEO_DE_DEMOSTRACION]",
    liveUrl: null,
    githubUrl: null,
    tipoProyecto: "Nasa Space Apps Challenge - 4º lugar"
  },
  
   {
    id: "6",
    title: "UDEP - IE",
    shortDescription: "Plataforma integral en la nube para la gestión, evaluación y reportería de procesos docentes.",
    businessProblem: `La institución necesitaba centralizar y digitalizar la evaluación docente y los planes de trabajo. 
                       
                      Se diseñó un ecosistema web seguro en Azure con módulos dedicados (Planes, Evaluaciones, Reportería y Planillas). 
                      
                      La arquitectura serverless garantiza alta disponibilidad, mientras que la integración con Microsoft OAuth 2.0 asegura la protección estricta de la información institucional.`,
    myRole: [
      "Colaborador en el desarrollo de la página del Plan de Trabajo.",
      "Desarrollo frontend y backend completo del módulo del Sistemas de Evaluaciones.",
      "Desarrollo frontend y backend completo del módulo de Reportería para ambas secciones."
    ],
    technologies: ["Python","Vanilla JS", "Azure Fuctions", "Microsoft OAuth 2.0"],
    projectType: "Integración API",
    imageUrl: logo_Innova,
    demoVideo: video_UDEP_IE,
    // demoVideo: "https://drive.google.com/file/d/1W56umy7MezDsHUkxqAF1ssfEOqSaR1P4/view?usp=share_link",
    liveUrl: "https://innovacioneducativa.udep.edu.pe",
    // githubUrl: "[URL_DE_GITHUB_SI_APLICA]"
    tipoProyecto: "Corporativo"
  },
  {
    id: "3",
    title: "ONE LEARNING EIRL",
    shortDescription: "Plataforma web orientada a la comercialización de cursos y servicios de formación para personas y empresas. La web fue desarrollada como un punto central para presentar la propuesta de valor de ONE LEARNING, mostrar su oferta formativa y dirigir a los usuarios hacia el proceso de compra mediante una pasarela de pagos.",
    businessProblem: `ONE LEARNING es un emprendimiento enfocado en la formación de personas y empresas mediante cursos y estrategias relacionadas con la investigación y el desarrollo de negocios. 
                      
                      Sin embargo, no contaban con una plataforma web propia que les permitiera presentar su oferta y centralizar el acceso de sus usuarios al proceso de compra. Se desarrolló la plataforma desde cero, incorporando la integración con Niubiz para gestionar los pagos. 
                      
                      Actualmente, el proyecto se encuentra en evolución, con el desarrollo de nuevas funcionalidades como el carrito de compras y una integración más completa del proceso de compra.`,
    myRole: ["Responsable del desarrollo Frontend completo de la plataforma e integración de la pasarela de pagos.",
             "Estructuración de las páginas y conexión con servicios externos mediante APIs REST."
            ],
    technologies: ["React", "JavaScript", "Niubiz", "APIs REST", "php", "MySql"],
    projectType: "Web & Conversión",
    imageUrl: logo_OneLearning,
    liveUrl: "https://onelearning.pe",
    demoVideo: "[URL_DEL_VIDEO_DE_DEMOSTRACION]",
    githubUrl: null,
    tipoProyecto: "Corporativo - Freelance"
  },
   
     {
    id: "5",
    title: "SISPRE",
    shortDescription: `Página web con fines de call to actions para nuevos clientes, Se usó la libreria tree para montar un objeto 3D. 
                       
                       Se implementó un carrusel en el que se mostraban los diferentes rubros que abarcaba el ERP (cajas, bancos, cooperativas, etc). Se implementó toda la web completa con sumision y visión ya que la marca no tenia una predefinida. 
                       
                       Se implementó Google Sheets para el guardado básico de los datos de los formularios`,
    businessProblem: `SISPRE necesitaba una presencia digital que permitiera presentar su solución ERP de manera clara y atractiva, así como generar oportunidades de contacto con potenciales clientes.
                      
                      La marca no contaba con una estructura web ni una identidad digital previamente definida, por lo que fue necesario organizar el contenido, definir la propuesta de comunicación y desarrollar la plataforma desde cero.`,
    myRole: [ "Responsable del desarrollo integral de la web.", 
              "Encargada del desarrollo Frontend, organización y estructuración del contenido, definición de la propuesta visual y funcional.",
              "Implementación de componentes interactivos e integración de formularios con Google Sheets."],
    technologies: ["React", "JavaScript", "Tailwind CSS", "Google Sheets","Tree.js"],
    projectType: "Web Page",
    imageUrl: logo_Sispre,
    liveUrl: "https://sispre.app/",
    demoVideo: null,
    githubUrl: null,
    tipoProyecto: "Corporativo"
  }
];