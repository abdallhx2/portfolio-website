import { Language } from '@/translations';

export interface ProjectTranslation {
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

export const projectsTranslations: Record<Language, ProjectTranslation[]> = {
  en: [
   {
    id: "portfolio-app",
    title: "Portfolio App",
    description: "An advanced and innovative personal application that showcases developers' portfolios in a professional and attractive manner worthy of the quality of work delivered. The app idea originated from a genuine personal need to find a distinctive way to display portfolios flexibly and attractively across all devices. The application provides a smooth and seamless browsing experience across different devices with multiple organized sections for projects, skills, articles, and experiences. Developed using advanced Flutter technology to work on mobile and web with the same efficiency and quality, with easy and flexible customization capabilities. The goal of the application is not just to display work but to reflect the quality of experience that can be delivered to any future project, making it a powerful marketing tool for professional developers.",
    shortDescription: "Portfolio showcase app for developers",
    category: "Mobile Development",
    tags: ["Flutter", "Dart", "Responsive Design", "Cross-Platform"],
    image: "/project/cv/1.png",
    gallery: [
      "/project/cv/1.png",
      "/project/cv/2.png",
      "/project/cv/3.png",
      "/project/cv/4.png"
    ],
    client: "Personal Project",
    duration: "2 months",
    year: 2023,
    url: "https://an11one.netlify.app/",
    github: "https://github.com/abdallhx2/portofilo",
    featured: false,
    challenge: "Creating an application that reflects work quality and provides an exceptional browsing experience across all devices.",
    solution: "Developing a responsive Flutter application with attractive design and organized sections for projects and skills.",
    result: "Achieved a professional platform for showcasing work and improving professional impression.",
    technologies: ["Flutter", "Dart", "Responsive Design", "Material Design", "Firebase"]
  },
    {
      id: "raseem-app",
      title: "Raseem - AI Diagram Generator",
      description: "An innovative mobile application that transforms text descriptions into professional diagrams using AI technology. Raseem supports multiple diagram types including flowcharts, mind maps, and network diagrams, making technical documentation faster and more accessible.",
      shortDescription: "AI-powered app that converts text to professional diagrams",
      category: "AI Development",
      tags: ["AI", "Machine Learning","Next.js"],
      image: "/project/rassem/1.jpg",
      gallery: [
        "/project/rassem/1.jpg",
        "/project/rassem/2.jpg",
        "/project/rassem/3.jpg",
        "/project/rassem/4.jpg"
      ],
      client: "Personal Project",
      duration: "4 Days",
      year: 2024,
      url: "https://www.raseemai.com/",
      github: "https://github.com/abdallhx2/RaseemAi",
      featured: true,
      challenge: "Bridging the gap between complex technical documentation and user-friendly diagram creation.",
      solution: "Developed an AI-powered Flutter application with natural language processing capabilities and intelligent diagram generation.",
      result: "Successfully streamlined diagram creation process for technical teams and educators.",
      technologies: ["AI/ML", "Natural Language Processing", "Next.js","Firebase"]
    },
    {
    id: "fruitai-app",
    title: "FruitAI",
    description: "An intelligent and advanced application that utilizes the latest artificial intelligence technologies to help farmers make better and more accurate decisions about their agricultural production. The app idea originated from a real situation experienced by most farmers who put tremendous effort into their lands but lack the technical tools that support their important decisions, especially during critical harvest times or when needing to determine fruit quality and ripeness. The application provides advanced solutions through machine learning techniques and image analysis to determine fruit type, quality, and optimal harvest timing with high accuracy. It also displays useful data and comprehensive analytics that help farmers improve their production and increase the efficiency of their agricultural operations, representing an important step towards smarter, more conscious, and effective farming in the future.",
    shortDescription: "AI app for fruit quality analysis and harvest timing",
    category: "AI Development",
    tags: ["Flutter", "AI", "Machine Learning", "Computer Vision"],
    image:       "/project/fruit/1.png",
     gallery: [
      "/project/fruit/2.png",
      "/project/fruit/3.png",
      "/project/fruit/4.png"
    ],
    client: "Agricultural Sector",
    duration: "4 months",
    year: 2023,
    github: "https://github.com/abdallhx2/fruitAi",
    featured: true,
    challenge: "Developing a tool that helps farmers make better decisions about harvest and fruit quality.",
    solution: "An application that uses artificial intelligence to analyze images and provide accurate instant information.",
    result: "Improved agricultural production efficiency and reduced crop waste.",
    technologies: ["Flutter", "Dart", "TensorFlow", "Computer Vision", "Machine Learning", "Firebase"]
  },
   {
    id: "izahab-app",
    title: "iZahab - Hajj Luggage Tracker",
    description: "An integrated and advanced application for tracking luggage and managing reports during the Hajj season, specifically designed to solve real and recurring problems that occur every year. The app idea originated from a precise observation of a problem that recurs annually with pilgrims, which is the loss of luggage or delayed arrival after entering the holy sites, causing great inconvenience to pilgrims and pressure on organizing teams. The application provides an intelligent and advanced tracking system for lost luggage and cases of lost pilgrims, in addition to a comprehensive and integrated control panel that allows organizing teams to monitor all operations and locations with high accuracy. The application is distinguished by its ability to determine geographical coordinates with extreme precision and provide detailed reports on the situation on the ground. The project started with a simple idea but evolved and expanded to become a comprehensive solution serving all entities working in Hajj, saving organizing teams significant time and effort and giving them complete and effective control in managing the field situation.",
    shortDescription: "Hajj luggage tracking and incident management app",
    category: "Web Development",
    tags: ["Next.js", "GPS", "Real-time Tracking"],
       image: "/project/zahab/1.jpg",
    gallery: [
      "/project/zahab/1.jpg",
        "/project/zahab/2.jpg",
      "/project/zahab/3.jpg",
      "/project/zahab/4.jpg",
      "/project/zahab/5.jpg",
      "/project/zahab/6.jpg",
      "/project/zahab/7.jpg",
      "/project/zahab/8.jpg",


    ],
     client: "Belad Al-Haramain Company",
    duration: "2 months",
    year: 2025,
    featured: true,
    challenge: "Solving the problem of lost luggage and lost pilgrims through an effective technical approach.",
    solution: "A comprehensive application that tracks luggage and manages reports with an integrated control panel for teams.",
    result: "Improved pilgrim experience and saved time and effort for organizing teams.",
    technologies: ["GPS", "Next.js", "Real-time Database", "Firebase", "Google Maps"]
  }
   
  ],
  ar: [
   {
    id: "portfolio-app",
    title: "Portfolio App",
    description: "تطبيق شخصي متطور ومبتكر يعرض الملف الشخصي للمطورين بشكل احترافي وجذاب يليق بجودة العمل المقدم. نشأت فكرة التطبيق من حاجة شخصية حقيقية لإيجاد طريقة مميزة لعرض الملف الشخصي بشكل مرن وجذاب على جميع الأجهزة. يوفر التطبيق تجربة تصفح سلسة وناعمة عبر الأجهزة المختلفة مع أقسام متعددة ومنظمة للمشاريع والمهارات والمقالات والخبرات. مطور بتقنية Flutter المتقدمة ليعمل على الجوال والويب بنفس الكفاءة والجودة، مع إمكانية التخصيص السهل والمرن. الهدف من التطبيق ليس فقط عرض الأعمال بل عكس جودة التجربة التي يمكن توصيلها لأي مشروع مستقبلي، مما يجعله أداة تسويقية قوية للمطورين المحترفين.",
    shortDescription: "تطبيق عرض الملف الشخصي للمطورين",
    category: "Mobile Development",
    tags: ["Flutter", "Dart", "Responsive Design", "Cross-Platform"],
    image:       "/project/cv/1.png",
  gallery: [
      "/project/cv/1.png",
      "/project/cv/2.png",
      "/project/cv/3.png",
      "/project/cv/4.png"
    ],
    client: "Personal Project",
    duration: "2 months",
    year: 2023,
   url: "https://an11one.netlify.app/",
    github: "https://github.com/abdallhx2/portofilo",
    featured: true,
    challenge: "إنشاء تطبيق يعكس جودة العمل ويوفر تجربة تصفح مميزة عبر جميع الأجهزة.",
    solution: "تطوير تطبيق Flutter متجاوب مع تصميم جذاب وأقسام منظمة للمشاريع والمهارات.",
    result: "حصلت على منصة احترافية لعرض الأعمال وتحسين الانطباع المهني.",
    technologies: ["Flutter", "Dart", "Responsive Design", "Material Design", "Firebase"]
  },
  {
    id: "fruitai-app",
    title: "FruitAI",
    description: "تطبيق ذكي ومتقدم يستخدم أحدث تقنيات الذكاء الاصطناعي لمساعدة المزارعين في اتخاذ قرارات أفضل وأكثر دقة حول إنتاجهم الزراعي. نشأت فكرة التطبيق من واقع حقيقي يعيشه أغلب المزارعين الذين يبذلون جهوداً كبيرة في أراضيهم لكن يفتقرون إلى الأدوات التقنية التي تدعم قراراتهم المهمة، خاصة في أوقات الحصاد الحرجة أو عند الحاجة لمعرفة صلاحية الفاكهة وجودتها. يوفر التطبيق حلولاً متقدمة عبر استخدام تقنيات التعلم الآلي وتحليل الصور لتحديد نوع الفاكهة وجودتها والتوقيت المثالي للحصاد بدقة عالية. كما يعرض بيانات مفيدة وتحليلات شاملة تساعد المزارعين في تحسين إنتاجهم وزيادة كفاءة عملياتهم الزراعية، مما يمثل خطوة مهمة نحو زراعة أكثر ذكاءً ووعياً وفعالية في المستقبل.",
    shortDescription: "تطبيق AI لتحليل جودة الفاكهة والحصاد",
    category: "AI Development",
    tags: ["Flutter", "AI", "Machine Learning", "Computer Vision"],
    image: "/project/fruit/1.png",
    gallery: [
      "/project/fruit/2.png",
      "/project/fruit/3.png",
      "/project/fruit/4.png"
    ],
    client: "Agricultural Sector",
    duration: "4 months",
    year: 2023,
    github: "https://github.com/abdallhx2/fruitAi",
    featured: false,
    challenge: "تطوير أداة تساعد المزارعين في اتخاذ قرارات أفضل حول الحصاد وجودة الفاكهة.",
    solution: "تطبيق يستخدم الذكاء الاصطناعي لتحليل الصور وتقديم معلومات دقيقة فورية.",
    result: "تحسين كفاءة الإنتاج الزراعي وتقليل الفاقد في المحاصيل.",
    technologies: ["Flutter", "Dart", "TensorFlow", "Computer Vision", "Machine Learning", "Firebase"]
  },
  {
    id: "raseem-app",
    title: "Raseem - AI Diagram Generator",
    description: "أداة مبتكرة وثورية تحوّل الوصف النصي إلى مخططات هندسية احترافية ودقيقة باستخدام أحدث تقنيات الذكاء الاصطناعي ومعالجة اللغة الطبيعية. نشأت فكرة رسيم من حاجة حقيقية وتحدي يومي كان يواجه المطورين والمهندسين في عملية توثيق الأنظمة، حيث تستغرق هذه العملية وقتاً طويلاً وأحياناً لا تكون واضحة لجميع أفراد الفريق. تدعم الأداة أنواعاً متعددة ومتنوعة من المخططات الهندسية مثل مخططات قواعد البيانات (ER) ومخططات التدفق (Flow) ومخططات التسلسل (Sequence) وغيرها الكثير، وكلها تُنتج بشكل فوري وبجودة عالية. الهدف من رسيم هو توفير الوقت الثمين وخدمة المطورين والمصممين ومدراء المشاريع بطريقة تجعل التوثيق جزءاً طبيعياً وسلساً من العملية التطويرية وليس عبئاً إضافياً يثقل كاهل الفرق التقنية.",
    shortDescription: "أداة AI لتحويل النص إلى مخططات هندسية",
    category: "AI Development",
    tags: ["Flutter", "AI", "Machine Learning", "Dart"],
   image: "/project/rassem/1.jpg",

   gallery: [
        "/project/rassem/1.jpg",
        "/project/rassem/2.jpg",
        "/project/rassem/3.jpg",
        "/project/rassem/4.jpg"
      ],
    client: "Tuwaiq Academy",
    duration: "4 Days",
    year: 2024,
    url: "https://www.raseemai.com/",
    github: "https://github.com/abdullah/raseem",
    featured: true,
    challenge: "تسهيل عملية توثيق الأنظمة وجعلها جزءاً من العملية وليس عبئاً إضافياً.",
    solution: "تطوير أداة ذكية تحول الوصف النصي لمخططات هندسية فورية باستخدام الذكاء الاصطناعي.",
    result: "توفير الوقت والجهد للمطورين والمصممين في عملية التوثيق.",
    technologies: ["Flutter", "Dart", "AI/ML", "Natural Language Processing", "Firebase"]
  },
  {
    id: "izahab-app",
    title: "iZahab - Hajj Luggage Tracker",
    description: "تطبيق متكامل ومتطور لتتبع الحقائب وإدارة البلاغات خلال موسم الحج، مصمم خصيصاً لحل مشاكل حقيقية ومتكررة تحدث كل عام. نشأت فكرة التطبيق من ملاحظة دقيقة لمشكلة تتكرر سنوياً مع الحجاج وهي ضياع الحقائب أو تأخر وصولها بعد دخولهم إلى المشاعر المقدسة، مما يسبب إزعاجاً كبيراً للحجاج وضغطاً على فرق التنظيم. يوفر التطبيق نظام تتبع ذكي ومتقدم للحقائب المفقودة وحالات تيه الحجاج، بالإضافة إلى لوحة تحكم شاملة ومتكاملة تتيح لفرق التنظيم متابعة جميع العمليات والمواقع بدقة عالية. يتميز التطبيق بقدرته على تحديد الإحداثيات الجغرافية بدقة متناهية وتوفير تقارير مفصلة عن الحالة على الأرض. بدأ المشروع بفكرة بسيطة لكنه تطور وتوسع ليصبح حلاً شاملاً يخدم جميع الجهات العاملة في الحج، مما يوفر على فرق التنظيم وقتاً وجهداً كبيرين ويمنحهم تحكماً كاملاً وفعالاً في إدارة الوضع الميداني.",
    shortDescription: "تطبيق تتبع الحقائب وإدارة البلاغات للحج",
    category: "Web Development",
    tags: ["Next.js", "GPS", "Real-time Tracking"],
    image: "/project/zahab/1.jpg",
    gallery: [
      "/project/zahab/1.jpg",
        "/project/zahab/2.jpg",
      "/project/zahab/3.jpg",
      "/project/zahab/4.jpg",
      "/project/zahab/5.jpg",
      "/project/zahab/6.jpg",
      "/project/zahab/7.jpg",
      "/project/zahab/8.jpg",


    ],
    client: "Belad Al-Haramain Company",
    duration: "2 months",
    year: 2025,
    featured: true,
    challenge: "حل مشكلة ضياع الحقائب وتيه الحجاج بطريقة تقنية فعالة.",
    solution: "تطبيق شامل يتتبع الحقائب ويدير البلاغات مع لوحة تحكم متكاملة للفرق.",
    result: "تحسين تجربة الحجاج وتوفير الوقت والجهد لفرق التنظيم.",
 technologies: ["GPS", "Next.js", "Real-time Database", "Firebase", "Google Maps"]  }
]
};

export const projectCategoriesTranslations: Record<Language, string[]> = {
  en: ['All', 'Web Development', 'Mobile Development', 'AI Development', 'Security'],
  ar: ['الكل', 'تطوير الويب', 'تطوير التطبيقات', 'تطوير الذكاء الاصطناعي', 'الأمان']
};

export function getProjectsByCategoryTranslated(category: string, language: Language): ProjectTranslation[] {
  const projects = projectsTranslations[language];
  
  if (category === 'All' || category === 'الكل') {
    return projects;
  }
  
  return projects.filter(project => project.category === category);
}

export const featuredProjectsTranslations: Record<Language, ProjectTranslation[]> = {
  en: projectsTranslations.en.filter(project => project.featured),
  ar: projectsTranslations.ar.filter(project => project.featured)
};