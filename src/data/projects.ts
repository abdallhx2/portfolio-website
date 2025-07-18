export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  category: string;
  tags: string[];
  image: string;
  gallery: string[];
  client: string;
  duration: string;
  year: number;
  url?: string;
  github?: string;
  featured: boolean;
  challenge: string;
  solution: string;
  result: string;
  technologies: string[];
  testimonial?: {
    text: string;
    author: string;
    role: string;
    company: string;
  };
}

export const projects: Project[] = [
  {
    id: "portfolio-app",
    title: "Portfolio App",
    description: "This cross-platform app was built to reflect a developer’s professional identity in a clean, dynamic, and responsive way. Using Flutter, it ensures seamless experience across mobile and web, supports localization and theming, and allows visitors to explore projects, skills, and contact forms effortlessly.",
    shortDescription: "Cross-platform portfolio app with responsive design and elegant UI",
    category: "Web Development",
    tags: ["Flutter", "Dart", "Firebase"],
    image: "/projects/portfolio-app-hero.jpg",
    gallery: [
      "/projects/portfolio-app-1.jpg",
      "/projects/portfolio-app-2.jpg",
      "/projects/portfolio-app-3.jpg"
    ],
    client: "Personal",
    duration: "2 months",
    year: 2024,
    url: "https://abdullah.dev",
    github: "https://github.com/abdullah/portfolio-app",
    featured: true,
    challenge: "Creating a responsive, elegant and personal portfolio that works across platforms.",
    solution: "Built using Flutter and Firebase with theme toggling, CV download, and localization support.",
    result: "Boosted branding and lead generation with high engagement.",
    technologies: ["Flutter", "Dart", "Firebase"],
    testimonial: {
      text: "Exactly what I needed — intuitive and smooth.",
      author: "Abdullah",
      role: "Developer",
      company: "Personal"
    }
  },
  {
    id: "fruitai-app",
    title: "FruitAI",
    description: "FruitAI empowers farmers with on-the-spot AI analysis of fruit quality, type, and harvest readiness. Built for real-world field use, it runs without internet access using TensorFlow Lite and Flutter, delivering insights that improve farming decisions and boost productivity.",
    shortDescription: "Offline-capable AI farming assistant for fruit recognition and harvest insights",
    category: "AI",
    tags: ["AI", "Flutter", "TensorFlow Lite", "Firebase"],
    image: "/projects/fruitai-app-hero.jpg",
    gallery: [
      "/projects/fruitai-app-1.jpg",
      "/projects/fruitai-app-2.jpg",
      "/projects/fruitai-app-3.jpg"
    ],
    client: "AgriTech Lab",
    duration: "3 months",
    year: 2024,
    github: "https://github.com/abdullah/fruitai-app",
    featured: true,
    challenge: "Enabling AI fruit recognition in offline environments for farmers.",
    solution: "Trained mobile AI model with offline-first architecture and Firebase sync.",
    result: "Improved harvest decisions and efficiency in pilot farms.",
    technologies: ["Flutter", "TensorFlow Lite", "Firebase"],
    testimonial: {
      text: "Early results show great promise and precision.",
      author: "Field Engineer",
      role: "Researcher",
      company: "AgriTech Lab"
    }
  },
  {
    id: "raseem-tool",
    title: "Raseem AI Tool",
    description: "Raseem converts textual system ideas into accurate architecture diagrams like ER, flowcharts, and sequences using AI. Designed to save time and boost communication clarity, it uses OpenAI for interpretation and Flutter for visualization.",
    shortDescription: "Text-to-diagram tool using AI to generate ER, flow, and sequence charts",
    category: "AI",
    tags: ["OpenAI", "Flutter", "Visualization"],
    image: "/projects/raseem-tool-hero.jpg",
    gallery: [
      "/projects/raseem-tool-1.jpg",
      "/projects/raseem-tool-2.jpg"
    ],
    client: "Internal",
    duration: "1.5 months",
    year: 2024,
    github: "https://github.com/abdullah/raseem-tool",
    featured: true,
    challenge: "Automatically converting technical input into accurate visual diagrams.",
    solution: "Used OpenAI API for parsing and modular visualization engine.",
    result: "Reduced documentation time and enhanced clarity across teams.",
    technologies: ["Flutter", "OpenAI API", "Dart"],
    testimonial: {
      text: "Solves a real dev pain — super useful.",
      author: "Abdullah",
      role: "Creator",
      company: "Raseem"
    }
  },
  {
    id: "izahab-app",
    title: "iZahab",
    description: "iZahab helps manage and track pilgrims’ luggage and lost item reports during Hajj. With real-time location updates, incident alerts, and an admin dashboard, it improves logistics efficiency and coordination in high-density events.",
    shortDescription: "Real-time luggage tracking and pilgrim incident reporting system",
    category: "Logistics",
    tags: ["Flutter", "Firebase", "Maps"],
    image: "/projects/izahab-app-hero.jpg",
    gallery: [
      "/projects/izahab-app-1.jpg",
      "/projects/izahab-app-2.jpg"
    ],
    client: "HajjTech",
    duration: "2 months",
    year: 2024,
    github: "https://github.com/abdullah/izahab-app",
    featured: true,
    challenge: "Tracking items in crowded areas and enabling efficient incident responses.",
    solution: "Live maps integration, GPS support, and admin panel for managing reports.",
    result: "Faster incident resolution and better coordination during Hajj.",
    technologies: ["Flutter", "Firebase", "Google Maps API"],
    testimonial: {
      text: "Game-changing tool for on-ground coordination.",
      author: "Operations Manager",
      role: "Lead Organizer",
      company: "HajjTech"
    }
  }
];

export const featuredProjects = projects.filter(project => project.featured);

export const projectCategories = [
  "All",
  "Cyber Security",
  "Web Development",
  "DevOps",
  "API Security",
  "Education",
  "AI",
  "Logistics"
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.id === slug);
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === "All") return projects;
  return projects.filter(project => project.category === category);
}
