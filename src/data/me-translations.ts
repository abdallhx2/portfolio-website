import { Language } from '@/translations';

export interface PersonalInfoTranslation {
  name: string;
  title: string;
  bioParagraph1: string;
  bioParagraph2: string;
  bioParagraph3: string;
  bioParagraph4: string;
  poetryQuote: string;
  poetryAuthor: string;
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

export interface ExperienceTranslation {
  company: string;
  position: string;
  duration: string;
  startDate: string;
  endDate?: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

export interface EducationTranslation {
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  description?: string;
  achievements?: string[];
}

export interface SkillTranslation {
  name: string;
  level: number; // 1-5
  category: 'programming' | 'design' | 'soft' | 'tools' | 'languages';
}

export interface CertificateTranslation {
  title: string;
  issuer: string;
  date: string;
  url?: string;
  image?: string;
}

export interface ServiceOfferingTranslation {
  title: string;
  description: string;
  icon: string;
  features: string[];
  href: string;
}

export interface TestimonialTranslation {
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

export interface FAQTranslation {
  question: string;
  answer: string;
}


export const personalInfoTranslations: Record<Language, PersonalInfoTranslation> = {
  en: {
    name: "Abdullah Alhasani",
    title: "Software Engineer & Application Developer",
    bioParagraph1: "I am Abdullah Alhasani, a Saudi software engineer. I grew up in a tech-savvy environment and studied Information Technology until I mastered software engineering, combining the outcomes of knowledge, the curiosity of discovery, and the precision of execution.",
    bioParagraph2: "I love to start from a point, an idea, even if it's floating, then weave around it a structure, and build upon it a product worthy of being seen, used, and emulated.",
    bioParagraph3: "I master system building and application development, and dive deep into the worlds of artificial intelligence, especially Large Language Models (LLMs). I engineer prompts, design contexts, and harness tools to serve the purpose.",
    bioParagraph4: "I believe that AI technologies will lead civilization and humanity toward a new refinement, to a safe, bright future, full of surprises, and bound by miracles.",
    poetryQuote: "If you dare to pursue an honor sought, do not settle for anything less than the stars",
    poetryAuthor: "Al-Mutanabbi",
    shortBio: "developer applications and websites and build technical solutions powered by artificial intelligence, making a difference and reducing effort and time with the highest quality standards and best results.",
    email: "3bdallhx2@gmail.com",
    phone: "0542002960",
    location: "Makkah - Riyadh, Saudi Arabia",
    available: true,
    socialLinks: {
      github: "https://github.com/abdallhx2",
      linkedin: "https://www.linkedin.com/in/abdullahx2/",
      twitter: "https://twitter.com/abdallhx2"
    }
  },
  ar: {
    name: "عبدالله الحسني",
    title: "مهندس برمجيات ومطور تطبيقات",
    bioParagraph1: "أنا عبدالله الحسني، مهندس برمجيات سعودي. نشأت في بيئة تقنية، ودرست تخصص تقنية المعلومات حتى تمكنت من هندسة البرمجيات، فجمعت بين مخرجات العلم، وفضول الاكتشاف، ودقة التنفيذ.",
    bioParagraph2: "أحب أن أبدأ من نقطة، فكرة، حتى لو كانت عائمة، ثم أحيك حولها هيكلًا، وأبني عليها منتجًا يستحق أن يُرى، ويُستخدم، ويُحتذى به.",
    bioParagraph3: "أُتقن بناء الأنظمة وتطوير التطبيقات، وأغوص في عوالم الذكاء الاصطناعي، خصوصًا النماذج اللغوية الكبيرة (LLMs)، أُهندس البرمبت، أُصمّم السياق، وأطوّع الأداة لخدمة الهدف.",
    bioParagraph4: "أؤمن أن تقنيات الذكاء ستقود الحضارة والإنسان نحو رُقيٍّ جديد، إلى مستقبلٍ آمنٍ، مشرق، مليء بالمفاجآت، ومرهونٍ بالمعجزات.",
    poetryQuote: "إذا غامرتَ في شرفٍ مرومِ، فلا تقنعْ بما دونَ النجومِ",
    poetryAuthor: "المتنبي",
    shortBio: "أطوّر تطبيقات ومواقع وأبني حلولًا تقنية مدعومة بالذكاء الاصطناعي، تحدث الفرق وتقلل الجهد والوقت بأعلى معاير الجودة وافضل النتائج",
    email: "3bdallhx2@gmail.com",
    phone: "0542002960",
    location: "مكة المكرمة - الرياض، المملكة العربية السعودية",
    available: true,
       socialLinks: {
   github: "https://github.com/abdallhx2",
      linkedin: "https://www.linkedin.com/in/abdullahx2/",
      twitter: "https://twitter.com/abdallhx2"
    }
  }
};
export const experiencesTranslations: Record<Language, ExperienceTranslation[]> = {
  en: [
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
  ],
  ar: [
    {
      company: "شركة الصبان للمقاولات",
      position: "مدير مشاريع تقنية المعلومات",
      duration: "سنة واحدة",
      startDate: "2023",
      endDate: "2024",
      description: "قاد وأدار مشروع شامل للبنية التحتية لتقنية المعلومات في مدينة التدريب الأمني. طور ونفذ استراتيجيات تقنية المعلومات لتحسين الكفاءة التشغيلية. نسق نشر البنية التحتية التقنية مع ضمان التوافق مع متطلبات المشروع. وضع أطر حوكمة تقنية المعلومات وبروتوكولات الأمان.",
      technologies: ["إدارة المشاريع", "البنية التحتية لتقنية المعلومات", "بروتوكولات الأمان", "تكامل الأنظمة"],
      achievements: [
        "قاد بنجاح مشروع البنية التحتية لتقنية المعلومات في مدينة التدريب الأمني",
        "طور ونفذ استراتيجيات تقنية المعلومات لتحسين الكفاءة التشغيلية",
        "وضع أطر شاملة لحوكمة تقنية المعلومات وبروتوكولات الأمان"
      ]
    },
    {
      company: "وزارة الحج",
      position: "منسق إداري وميداني",
      duration: "موسمي",
      startDate: "2023",
      endDate: "الحاضر",
      description: "نسق وأدار العمليات الميدانية خلال موسم الحج. نفذ حلول تقنية لتعزيز الكفاءة الإدارية. استخدم الخبرة التقنية لتبسيط العمليات وتحسين تقديم الخدمات.",
      technologies: ["إدارة العمليات الميدانية", "تحسين العمليات", "الأنظمة الإدارية"],
      achievements: [
        "نسق العمليات الميدانية لآلاف الحجاج خلال موسم الحج",
        "نفذ حلول تقنية عززت الكفاءة الإدارية",
        "بسط العمليات وحسن أنظمة تقديم الخدمات"
      ]
    },
    {
      company: "شركة الجزيرة للإنشاءات",
      position: "مشرف قسم تقنية المعلومات",
      duration: "6 سنوات",
      startDate: "2017",
      endDate: "2023",
      description: "أشرف على عمليات قسم تقنية المعلومات وأدار الموظفين التقنيين. خطط ونفذ استراتيجيات صيانة وترقية الأجهزة والبرمجيات. أدار عمليات الشراء لتقنية المعلومات وتحسين الموارد.",
      technologies: ["إدارة تقنية المعلومات", "صيانة الأجهزة والبرمجيات", "قيادة الفرق", "تحسين الموارد"],
      achievements: [
        "أشرف بنجاح على عمليات قسم تقنية المعلومات لأكثر من 6 سنوات",
        "أدار وطور قدرات الموظفين التقنيين",
        "نفذ استراتيجيات فعالة من حيث التكلفة لشراء تقنية المعلومات وتحسين الموارد"
      ]
    }
  ]
};

export const educationTranslations: Record<Language, EducationTranslation[]> = {
  en: [
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
  ],
  ar: [
    {
      institution: "جامعة أم القرى",
      degree: "درجة البكالوريوس",
      field: "علوم الحاسب",
      startDate: "2016",
      endDate: "2022",
      description: "بكالوريوس علوم الحاسب من كلية الجموم الجامعية مع التركيز على تطوير البرمجيات وتحليل الأنظمة وإدارة المشاريع.",
      achievements: [
        "تخصص في تطوير البرمجيات وتحليل الأنظمة",
        "أكمل منهج شامل في علوم الحاسب"
      ]
    }
  ]
};

export const skillsTranslations: Record<Language, SkillTranslation[]> = {
  en: [
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
  ],
  ar: [
    // مهارات البرمجة
    { name: "جافاسكريبت", level: 4, category: "programming" },
    { name: "تايب سكريبت", level: 4, category: "programming" },
    { name: "HTML/CSS", level: 5, category: "programming" },
    { name: "فلاتر", level: 5, category: "programming" },
    { name: "دارت", level: 5, category: "programming" },
    { name: "Next.js", level: 4, category: "programming" },
    { name: "ريأكت", level: 4, category: "programming" },
    { name: "فايربيس", level: 4, category: "programming" },
    { name: "تكامل واجهات البرمجة", level: 4, category: "programming" },
    
    // مهارات التصميم
    { name: "تطوير واجهات المستخدم وتجربة المستخدم", level: 4, category: "design" },
    { name: "التصميم المتجاوب", level: 4, category: "design" },
    { name: "فيجما", level: 3, category: "design" },
    
    // الأدوات
    { name: "جت", level: 4, category: "tools" },
    { name: "جت هاب", level: 4, category: "tools" },
    { name: "إدارة المشاريع", level: 5, category: "tools" },
    { name: "تحليل وتصميم الأنظمة", level: 4, category: "tools" },
    { name: "تطوير الويب والهاتف المحمول", level: 5, category: "tools" },
    
    // المهارات الشخصية
    { name: "حل المشكلات", level: 5, category: "soft" },
    { name: "التفكير التحليلي", level: 5, category: "soft" },
    { name: "إدارة الوقت", level: 4, category: "soft" },
    { name: "تنسيق المشاريع", level: 5, category: "soft" },
    { name: "التعلم السريع والتكيف", level: 5, category: "soft" },
    
    // اللغات
    { name: "العربية", level: 5, category: "languages" },
    { name: "الإنجليزية", level: 4, category: "languages" }
  ]
};

export const certificatesTranslations: Record<Language, CertificateTranslation[]> = {
  en: [
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
  ],
  ar: [
    {
      title: "مخترق أخلاقي معتمد (CEH V11)",
      issuer: "EC-Council",
      date: "سبتمبر 2022",
      image: "/certificates/ceh.png"
    },
    {
      title: "مطور تطبيقات معتمد",
      issuer: "أكاديمية طويق",
      date: "2023",
      image: "/certificates/tuwaiq-developer.png"
    },
    {
      title: "تطوير تطبيقات الهاتف المحمول بالفلاتر",
      issuer: "أكاديمية طويق",
      date: "يناير 2023",
      image: "/certificates/tuwaiq-flutter.png"
    },
    {
      title: "مقدمة في الأمن السيبراني",
      issuer: "سيسكو",
      date: "2022"
    },
    {
      title: "أساسيات إنترنت الأشياء",
      issuer: "سيسكو",
      date: "2022"
    },
    {
      title: "اختبار الكفاءة في اللغة الإنجليزية STEP",
      issuer: "المركز الوطني للقياس",
      date: "أكتوبر 2022"
    },
    {
      title: "شهادات متعددة في البرمجة",
      issuer: "وزارة الاتصالات",
      date: "2021-2023"
    }
  ]
};

export const servicesTranslations: Record<Language, ServiceOfferingTranslation[]> = {
en: [
  {
    title: "Mobile App Development",
    description: "Building modern, smart mobile applications using Flutter with responsive UI and smooth UX.",
    icon: "/services/app.png",
    features: [
      "Cross-platform Flutter development",
      "Firebase and backend integration",
      "Responsive and intuitive UI",
      "REST or GraphQL API integration",
      "App publishing and continuous updates"
    ],
    href: "/services/mobile-app-development"
  },
  {
    title: "Web Application Development",
    description: "Creating modern, scalable, and fast web applications using Next.js, React, and TypeScript.",
    icon: "/services/web.png",
    features: [
      "Full-stack development with Next.js & React",
      "Type-safe coding with TypeScript",
      "Responsive design across all devices",
      "API and database integration",
      "Performance optimization and SEO readiness"
    ],
    href: "/services/web-app-development"
  },
  {
    title: "Custom AI-Powered Solutions",
    description: "Developing intelligent solutions tailored to your needs — from LLMs to smart agents and data tools.",
    icon: "/services/ai.png",
    features: [
      "LLM integration (like GPT, Claude, etc.)",
      "Building custom AI agents and chatbots",
      "Prompt engineering & context design",
      "Smart analytics and decision support tools",
      "Embedding AI into existing systems"
    ],
    href: "/services/ai-powered-solutions"
  },
  {
    title: "UI/UX Design & Prototyping",
    description: "Crafting functional and beautiful user interfaces focused on clarity, usability, and identity.",
    icon: "/services/ui.png",
    features: [
      "Responsive UI/UX design",
      "User journey and flow optimization",
      "Interactive wireframes & prototypes",
      "Figma & modern design tools",
      "Design-to-development handoff"
    ],
    href: "/services/ui-ux-design"
  },
  {
    title: "Technical & AI Consulting",
    description: "Consulting based on real-world development experience — from product planning to AI integration.",
    icon: "/services/consultation.png",
    features: [
      "AI adoption & use-case strategy",
      "Product architecture and tech direction",
      "Audit of existing solutions",
      "Tool & stack recommendations",
      "Mentoring technical teams"
    ],
    href: "/services/technical-consulting"
  },
  {
    title: "Workshops & Technical Training",
    description: "Educational sessions tailored for developers and learners in software and AI fields.",
    icon: "/services/training.png",
    features: [
      "Flutter and Next.js training",
      "LLMs & AI toolchain explanation",
      "Guidance for students and engineers",
      "Live or recorded sessions",
      "Project-based mentoring available"
    ],
    href: "/services/mentorship"
  },
  {
    title: "IT Project Management",
    description: "Managing full project lifecycles — from ideation to launch — with structure and technical clarity.",
    icon: "/services/mangment.png",
    features: [
      "Planning and execution roadmap",
      "Managing development teams",
      "Risk assessment & quality assurance",
      "Client reporting and updates",
      "Post-launch maintenance strategy"
    ],
    href: "/services/it-project-management"
  }
],
 ar: [
  {
    title: "تطوير تطبيقات الهاتف المحمول",
    description: "أبني تطبيقات جوال ذكية باستخدام Flutter، بواجهات جذابة وتجربة استخدام مرنة ومتجاوبة.",
    icon: "/services/app.png",
    features: [
      "تطوير متعدد المنصات باستخدام Flutter",
      "ربط مع Firebase وخدمات الخلفية",
      "تصميم سلس ومتجاوب لجميع الأجهزة",
      "تكامل مع REST APIs أو GraphQL",
      "نشر التطبيق وتحديثه بشكل دوري"
    ],
    href: "/services/mobile-app-development"
  },
  {
    title: "تطوير تطبيقات الويب",
    description: "أطوّر مواقع وتطبيقات ويب باستخدام Next.js و React و TypeScript — سريعة، آمنة، وقابلة للتوسعة.",
    icon: "/services/web.png",
    features: [
      "Full-stack تطوير باستخدام Next.js و React",
      "استخدام TypeScript لضمان الجودة",
      "تصميم متجاوب لجميع الأجهزة",
      "تكامل مع قواعد البيانات وواجهات البرمجة",
      "تحسين الأداء وتجهيز للسيو"
    ],
    href: "/services/web-app-development"
  },
  {
    title: "حلول الذكاء الاصطناعي المخصصة",
    description: "أطوّر حلول مدعومة بالذكاء الاصطناعي مصممة لخدمة هدفك — من الوكلاء الذكيين إلى أدوات التحليل.",
    icon: "/services/ai.png",
    features: [
      "تصميم وربط نماذج لغوية كبيرة (LLMs)",
      "تطوير بوتات ووكلاء ذكيين مخصصين",
      "هندسة البرومبت والسياق للوصول لأفضل النتائج",
      "أدوات تحليل بيانات ذكية",
      "دمج الذكاء الاصطناعي في المنتجات الحالية"
    ],
    href: "/services/ai-powered-solutions"
  },
  {
    title: "تطوير الواجهات وتجربة المستخدم",
    description: "أبني واجهات استخدام عملية وجمالية، تركّز على تجربة سلسة للمستخدم، تعكس هوية المنتج.",
    icon: "/services/ui.png",
    features: [
      "تصميم UI/UX احترافي ومتجاوب",
      "تحليل وتحسين تجربة المستخدم",
      "تصميم نماذج أولية تفاعلية",
      "استخدام أحدث أدوات التصميم",
      "تسليم قابل للتطبيق الفوري"
    ],
    href: "/services/ui-ux-design"
  },
  {
    title: "استشارات تقنية  ",
    description: "أقدم استشارات عملية مبنية على تجربة واقعية، لتساعدك في اتخاذ القرار التقني الصحيح.",
    icon: "/services/consultation.png",
    features: [
      "استشارات في استخدام الذكاء الاصطناعي",
      "تحليل الفكرة وتوجيهها تقنياً",
      "مراجعة مشاريع حالية واقتراح تحسينات",
      "مساعدة في اختيار الأدوات والتقنيات",
      "توجيه فرق العمل التقني"
    ],
    href: "/services/technical-consulting"
  },
  {
    title: "شروحات ودروس خاصة",
    description: "جلسات تعليمية وشروحات عملية في تطوير البرمجيات والتقنيات الحديثة، مناسبة للطلاب والممارسين.",
    icon: "/services/training.png",
    features: [
      "تدريب على Flutter وNext.js",
      "شروحات في الذكاء الاصطناعي والنماذج اللغوية",
      "توجيه للطلاب والباحثين التقنيين",
      "جلسات مباشرة أو مسجلة",
      "متابعة مخصصة حسب المشروع أو المهارة"
    ],
    href: "/services/mentorship"
  },
  {
    title: "إدارة مشاريع تقنية",
    description: "أقود المشاريع التقنية من البداية للإطلاق، بخطة واضحة، وتنسيق فعال بين كل الجهات.",
    icon: "/services/mangment.png",
    features: [
      "تخطيط شامل للمشروع وجدول زمني دقيق",
      "تنسيق الفرق التقنية وضمان الجودة",
      "إدارة المخاطر وتقديم الحلول",
      "متابعة وتحديث مستمر لكل مرحلة",
      "تواصل شفاف مع العميل"
    ],
    href: "/services/it-project-management"
  }
]
};

export const testimonialsTranslations: Record<Language, TestimonialTranslation[]> = {
  en: [
    {
      name: "Mohammed Al-Otaibi",
      position: "Project Manager",
      company: "Public Security Training City",
      text: "Abdullah demonstrated exceptional skills in managing the IT infrastructure project. His ability to coordinate technical teams and implement best practices was key to the project's success."
    },
    {
      name: "Sarah Al-Harbi",
      position: "IT Director",
      company: "Al-Jazeera Construction Co.",
      text: "During Abdullah's tenure as IT Department Supervisor, he showed outstanding leadership and ability to develop the technical team. His contributions to process improvement were remarkable."
    },
    {
      name: "Ahmed Al-Qahtani",
      position: "Student",
      company: "Tuwaiq Academy",
      text: "The applications that Abdullah developed during the training program show a high level of creativity and technical skill. Especially the 'Raseem' app which solves a real problem in technical documentation."
    }
  ],
  ar: [
    {
      name: "محمد العتيبي",
      position: "مدير مشروع",
      company: "مدينة التدريب الأمني",
      text: "عبدالله أظهر مهارات استثنائية في إدارة مشروع البنية التحتية لتقنية المعلومات. قدرته على تنسيق الفرق التقنية وتطبيق أفضل الممارسات كانت مفتاح نجاح المشروع."
    },
    {
      name: "سارة الحربي",
      position: "مديرة تقنية المعلومات",
      company: "شركة الجزيرة للإنشاءات",
      text: "خلال فترة عمل عبدالله كمشرف قسم تقنية المعلومات، أظهر قيادة متميزة وقدرة على تطوير الفريق التقني. إسهاماته في تحسين العمليات كانت ملحوظة."
    },
    {
      name: "أحمد القحطاني",
      position: "طالب",
      company: "أكاديمية طويق",
      text: "التطبيقات التي طورها عبدالله خلال البرنامج التدريبي تظهر مستوى عالي من الإبداع والتقنية. خاصة تطبيق 'رسيم' الذي يحل مشكلة حقيقية في مجال التوثيق التقني."
    }
  ]
};

export const statistics: Statistics = {
  yearsExperience: 5,
  projectsCompleted: 57,
  happyClients: 76,
  awardsWon: 2
};
export const faqTranslations: Record<Language, FAQTranslation[]> = {
  en: [
    {
      question: "What is your typical project timeline?",
      answer: "It depends on the complexity and scope. Custom software or AI-powered solutions can take between 4–12 weeks. Lighter systems or feature additions may take 1–3 weeks."
    },
    {
      question: "Do you work with clients outside Saudi Arabia?",
      answer: "Absolutely. I collaborate with clients across different time zones and regions, and I adapt to their preferred communication methods."
    },
    {
      question: "Do you offer technical consulting?",
      answer: "Yes. I provide tailored consulting sessions to help companies validate ideas, choose the right tech stack, or architect scalable systems and AI-driven workflows."
    },
    {
      question: "Can you help with both frontend and backend development?",
      answer: "Yes, I develop full-stack solutions, from the user interface to backend logic and database design. I also integrate APIs and AI models where needed."
    },
    {
      question: "Do you work alone or with a team?",
      answer: "I lead development personally, but I also collaborate with a trusted network of designers and engineers for larger or multidisciplinary projects."
    }
  ],
  ar: [
    {
      question: "ما هو الجدول الزمني المعتاد لمشاريعك؟",
      answer: "يعتمد على حجم وتعقيد المشروع. الحلول البرمجية المتكاملة أو المعززة بالذكاء الاصطناعي تستغرق عادة من 4 إلى 12 أسبوعًا، بينما المهام البسيطة أو الإضافات قد تنجز خلال أسبوع إلى ثلاثة."
    },
    {
      question: "هل تعمل مع عملاء خارج السعودية؟",
      answer: "بالتأكيد. أتعامل مع عملاء من مختلف الدول والمناطق الزمنية، وأتكيف مع طرق التواصل التي يفضلونها."
    },
    {
      question: "هل تقدم خدمة الاستشارات التقنية؟",
      answer: "نعم. أقدّم جلسات استشارية مخصصة لمساعدة الشركات على تقييم أفكارها، واختيار التقنية المناسبة، وتصميم بنية أنظمة قابلة للتوسع أو مدعومة بالذكاء الاصطناعي."
    },
    {
      question: "هل تتولى تطوير الواجهة الخلفية والواجهة الأمامية؟",
      answer: "نعم، أطور الحلول البرمجية الكاملة بدءًا من واجهة المستخدم وحتى المنطق الخلفي وقواعد البيانات، بالإضافة إلى التكامل مع الـ APIs والنماذج الذكية."
    },
    {
      question: "هل تعمل بشكل فردي أم ضمن فريق؟",
      answer: "أقود تنفيذ المشاريع بنفسي، وأتعاون عند الحاجة مع شبكة موثوقة من المصممين والمهندسين في المشاريع الكبرى أو متعددة التخصصات."
    }
  ]
};