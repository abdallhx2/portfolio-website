export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  shortBio: string;
  email: string;
  phone: string;
  location: string;
  available: boolean;
  socialLinks: {
    github: string;
    linkedin: string;
    twitter?: string;
    instagram?: string;
    dribbble?: string;
    behance?: string;
  };
}

export interface Experience {
  company: string;
  position: string;
  duration: string;
  startDate: string;
  endDate?: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  description?: string;
  achievements?: string[];
}

export interface Skill {
  name: string;
  level: number; // 1-5
  category: 'programming' | 'design' | 'soft' | 'tools' | 'languages';
}

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  url?: string;
  image?: string;
}

export interface ServiceOffering {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Testimonial {
  name: string;
  position: string;
  company: string;
  text: string;
  image?: string;
}

export interface Statistics {
  yearsExperience: number;
  projectsCompleted: number;
  happyClients: number;
  awardsWon: number;
}

export const personalInfo: PersonalInfo = {
  name: "Abdullah Nasser Alhasani",
  title: "Application Developer & IT Project Manager",
  bio: "Innovative Software Developer and IT Professional with 7+ years of experience in application development and IT project management. Proven expertise in developing web and mobile applications using cutting-edge technologies and frameworks. Strong background in technical project management and team leadership, with a track record of delivering innovative solutions that drive business value.",
  shortBio: "Application Developer & IT Project Manager specializing in web and mobile development with expertise in Flutter, Next.js, and AI-powered solutions.",
  email: "3bdallhx2@gmail.com",
  phone: "0542002960",
  location: "Makkah - Riyadh, Saudi Arabia",
  available: true,
  socialLinks: {
    github: "https://github.com/abdullahAlhasani",
    linkedin: "https://linkedin.com/in/abdullahAlhasani",
    twitter: "https://twitter.com/abdullahAlhasani",
    instagram: "https://instagram.com/abdullahAlhasani"
  }
};

export const experiences: Experience[] = [
  {
    company: "Al-Sabaan Contracting Co.",
    position: "IT Project Manager",
    duration: "1 year",
    startDate: "2023",
    endDate: "2024",
    description: "Led and managed comprehensive IT infrastructure project at Public Security Training City. Developed and implemented IT strategies to optimize operational efficiency. Orchestrated technical infrastructure deployment ensuring alignment with project requirements. Established IT governance frameworks and security protocols.",
    technologies: ["Project Management", "IT Infrastructure", "Security Protocols", "Systems Integration"],
    achievements: [
      "Successfully led IT infrastructure project at Public Security Training City",
      "Developed and implemented IT strategies to optimize operational efficiency",
      "Established comprehensive IT governance frameworks and security protocols"
    ]
  },
  {
    company: "Ministry of Hajj",
    position: "Administrative & Field Coordinator",
    duration: "Seasonal",
    startDate: "2023",
    endDate: "Present",
    description: "Coordinated and managed field operations during Hajj season. Implemented technical solutions to enhance administrative efficiency. Utilized technical expertise to streamline processes and improve service delivery.",
    technologies: ["Field Operations Management", "Process Optimization", "Administrative Systems"],
    achievements: [
      "Coordinated field operations for thousands of pilgrims during Hajj season",
      "Implemented technical solutions that enhanced administrative efficiency",
      "Streamlined processes and improved service delivery systems"
    ]
  },
  {
    company: "Al-Jazeera Construction Co.",
    position: "IT Department Supervisor",
    duration: "6 years",
    startDate: "2017",
    endDate: "2023",
    description: "Supervised IT department operations and managed technical staff. Planned and executed hardware/software maintenance and upgrade strategies. Managed IT procurement processes and resource optimization.",
    technologies: ["IT Management", "Hardware/Software Maintenance", "Team Leadership", "Resource Optimization"],
    achievements: [
      "Successfully supervised IT department operations for 6+ years",
      "Managed and developed technical staff capabilities",
      "Implemented cost-effective IT procurement and resource optimization strategies"
    ]
  }
];

export const education: Education[] = [
  {
    institution: "Umm Al-Qura University",
    degree: "Bachelor's Degree",
    field: "Computer Science",
    startDate: "2016",
    endDate: "2022",
    description: "Bachelor of Computer Science from Jamoum University College with focus on software development, systems analysis, and project management.",
    achievements: [
      "Specialized in software development and systems analysis",
      "Completed comprehensive computer science curriculum"
    ]
  }
];

export const skills: Skill[] = [
  // Programming Skills
  { name: "JavaScript", level: 4, category: "programming" },
  { name: "TypeScript", level: 4, category: "programming" },
  { name: "HTML/CSS", level: 5, category: "programming" },
  { name: "Flutter", level: 5, category: "programming" },
  { name: "Dart", level: 5, category: "programming" },
  { name: "Next.js", level: 4, category: "programming" },
  { name: "React", level: 4, category: "programming" },
  { name: "Firebase", level: 4, category: "programming" },
  { name: "API Integration", level: 4, category: "programming" },
  
  // Design Skills
  { name: "UI/UX Development", level: 4, category: "design" },
  { name: "Responsive Design", level: 4, category: "design" },
  { name: "Figma", level: 3, category: "design" },
  
  // Tools
  { name: "Git", level: 4, category: "tools" },
  { name: "GitHub", level: 4, category: "tools" },
  { name: "Project Management", level: 5, category: "tools" },
  { name: "Systems Analysis & Design", level: 4, category: "tools" },
  { name: "Web & Mobile Development", level: 5, category: "tools" },
  
  // Soft Skills
  { name: "Problem Solving", level: 5, category: "soft" },
  { name: "Analytical Thinking", level: 5, category: "soft" },
  { name: "Time Management", level: 4, category: "soft" },
  { name: "Project Coordination", level: 5, category: "soft" },
  { name: "Rapid Learning and Adaptability", level: 5, category: "soft" },
  
  // Languages
  { name: "Arabic", level: 5, category: "languages" },
  { name: "English", level: 4, category: "languages" }
];

export const certificates: Certificate[] = [
  {
    title: "Certified Ethical Hacker (CEH V11)",
    issuer: "EC-Council",
    date: "September 2022",
    image: "/certificates/ceh.png"
  },
  {
    title: "Certified Application Developer",
    issuer: "Tuwaiq Academy",
    date: "2023",
    image: "/certificates/tuwaiq-developer.png"
  },
  {
    title: "Flutter Mobile App Development",
    issuer: "Tuwaiq Academy",
    date: "January 2023",
    image: "/certificates/tuwaiq-flutter.png"
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco",
    date: "2022"
  },
  {
    title: "IoT Fundamentals",
    issuer: "Cisco",
    date: "2022"
  },
  {
    title: "STEP English Proficiency Test",
    issuer: "National Center for Assessment",
    date: "October 2022"
  },
  {
    title: "Multiple Programming Certificates",
    issuer: "Ministry of Communications",
    date: "2021-2023"
  }
];

export const services: ServiceOffering[] = [
  {
    title: "Mobile App Development",
    description: "Building cross-platform mobile applications using Flutter with modern UI/UX design and native performance.",
    icon: "📱",
    features: [
      "Cross-platform development with Flutter",
      "Firebase integration for backend services",
      "RESTful API integration",
      "Responsive and intuitive user interfaces",
      "App store deployment and maintenance"
    ]
  },
  {
    title: "Web Application Development",
    description: "Creating modern, scalable web applications using Next.js, React, and TypeScript with cutting-edge architecture.",
    icon: "💻",
    features: [
      "Full-stack development with Next.js and React",
      "TypeScript for type-safe development",
      "Responsive design for all devices",
      "API integration and development",
      "Performance optimization and SEO"
    ]
  },
  {
    title: "AI & Machine Learning Solutions",
    description: "Developing intelligent applications that leverage AI, machine learning, and automation to solve complex problems.",
    icon: "🤖",
    features: [
      "AI algorithm integration and implementation",
      "Machine learning model development",
      "Automated diagram and document generation",
      "Natural language processing solutions",
      "Custom AI chatbots and virtual assistants"
    ]
  },
  {
    title: "Backend & API Development",
    description: "Building robust, scalable backend systems and RESTful APIs with modern frameworks and cloud integration.",
    icon: "⚡",
    features: [
      "RESTful API design and development",
      "Database design and optimization",
      "Cloud integration (Firebase, AWS)",
      "Microservices architecture",
      "Authentication and security implementation"
    ]
  },
  {
    title: "Software Architecture & Consulting",
    description: "Providing technical consulting and software architecture design for scalable, maintainable applications.",
    icon: "🏗️",
    features: [
      "Software architecture design and planning",
      "Code review and optimization",
      "Performance analysis and improvement",
      "Technology stack selection",
      "Development best practices implementation"
    ]
  },
  {
    title: "IT Project Management",
    description: "Leading and managing complex IT projects from conception to deployment using proven methodologies and agile practices.",
    icon: "📊",
    features: [
      "Complete project lifecycle management",
      "Technical team leadership and coordination",
      "IT infrastructure planning and implementation",
      "Risk management and quality assurance",
      "Stakeholder communication and reporting"
    ]
  }
];

export const testimonials: Testimonial[] = [
  {
    name: "محمد العتيبي",
    position: "Project Manager",
    company: "Public Security Training City",
    text: "عبدالله أظهر مهارات استثنائية في إدارة مشروع البنية التحتية لتقنية المعلومات. قدرته على تنسيق الفرق التقنية وتطبيق أفضل الممارسات كانت مفتاح نجاح المشروع."
  },
  {
    name: "سارة الحربي",
    position: "IT Director",
    company: "Al-Jazeera Construction Co.",
    text: "خلال فترة عمل عبدالله كمشرف قسم تقنية المعلومات، أظهر قيادة متميزة وقدرة على تطوير الفريق التقني. إسهاماته في تحسين العمليات كانت ملحوظة."
  },
  {
    name: "أحمد القحطاني",
    position: "Student",
    company: "Tuwaiq Academy",
    text: "التطبيقات التي طورها عبدالله خلال البرنامج التدريبي تظهر مستوى عالي من الإبداع والتقنية. خاصة تطبيق 'رسيم' الذي يحل مشكلة حقيقية في مجال التوثيق التقني."
  }
];

export const statistics: Statistics = {
  yearsExperience: 7,
  projectsCompleted: 15,
  happyClients: 12,
  awardsWon: 2
};