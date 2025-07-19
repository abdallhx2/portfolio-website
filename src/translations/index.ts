export type Language = 'en' | 'ar';

export interface Translations {
  // Navigation
  nav: {
    home: string;
    projects: string;
    services: string;
    about: string;
    shop: string;
    blog: string;
    contact: string;
    bookmark: string;
    search: string;
  };

  // Common UI elements
  common: {
    available: string;
    unavailable: string;
    backToHome: string;
    backToServices: string;
    viewAll: string;
    readMore: string;
    viewLive: string;
    viewCode: string;
    allProjects: string;
    loading: string;
    featured: string;
    viewDetails: string;
    startProject: string;
    learnMore: string;
    bookMeeting: string;
    getStarted: string;
    getInTouch: string;
    callNow: string;
    sendMessage: string;
    download: string;
    previous: string;
    next: string;
    close: string;
    open: string;
    save: string;
    cancel: string;
    edit: string;
    delete: string;
    share: string;
    copy: string;
    search: string;
    filter: string;
    sort: string;
    category: string;
    all: string;
    none: string;
    select: string;
    clear: string;
    apply: string;
    reset: string;
    projectImage: string;
    blogImage: string;
  };

  // Home page
  home: {
    hero: {
      greeting: string;
      aboutButton: string;
      exploreButton: string;
      availableStatus: string;
      techStack: string;
      yearsExperience: string;
      projectsDone: string;
      happyClients: string;
      getInTouch: string;
      viewProjects: string;
      followMe: string;
      cta: {
        primary: string;
        secondary: string;
      };
    };
    services: {
      title: string;
      description: string;
      webDevelopment: {
        title: string;
        description: string;
      };
      mobileDevelopment: {
        title: string;
        description: string;
      };
      aiMl: {
        title: string;
        description: string;
      };
      backend: {
        title: string;
        description: string;
      };
    };
    projects: {
      title: string;
      description: string;
      viewAll: string;
    };
    blog: {
      title: string;
      description: string;
      viewAll: string;
    };
    cta: {
      title: string;
      description: string;
      primary: string;
      secondary: string;
    };
    featuredWork: {
      title: string;
      description: string;
      projectLabel: string;
    };
    recentWorks: string;
    satisfiedBrands: string;
    latestProjects: string;
    latestProjectsDesc: string;
    servicesTitle: string;
    servicesDesc: string;
    impactNumbers: string;
    impactDesc: string;
    stats: {
      experience: string;
      projects: string;
      clients: string;
      awards: string;
    };
    recentBlogs: string;
    recentBlogsDesc: string;
    ctaText: string;
    ctaTitle: string;
    ctaButton: string;
    theme: string;
    themeDesc: string;
    themeHint: string;
    customization: {
      title: string;
      subtitle: string;
      themeMode: string;
      darkMode: string;
      lightMode: string;
      darkModeDesc: string;
      lightModeDesc: string;
      switchToDark: string;
      switchToLight: string;
      language: string;
      currentTheme: string;
      colorTheme: string;
      colorThemes: string;
      colorThemesDesc: string;
    };
    roadmap: {
      title: string;
      subtitle: string;
      ideaDiscussion: string;
      ideaDiscussionDesc: string;
      designPlanning: string;
      designPlanningDesc: string;
      developmentCoding: string;
      developmentCodingDesc: string;
      launchSupport: string;
      launchSupportDesc: string;
      features: {
        requirementsAnalysis: string;
        feasibilityStudy: string;
        goalSetting: string;
        uiuxDesign: string;
        databasePlanning: string;
        technologySelection: string;
        frontendDevelopment: string;
        backendDevelopment: string;
        testing: string;
        projectDeployment: string;
        technicalSupport: string;
        updates: string;
      };
    };
  };

  // About page
  about: {
    title: string;
    subtitle: string;
    description: string;
    downloadCV: string;
    skills: string;
    skillsDesc: string;
    experience: string;
    experienceDesc: string;
    education: string;
    educationDesc: string;
    achievements: string;
    achievementsDesc: string;
    personalInfo: string;
    personalInfoDesc: string;
    processTitle: string;
    processDesc: string;
    journeyTitle: string;
    journeyDesc: string;
    skillsTitle: string;
    ctaTitle: string;
    ctaDesc: string;
    process: {
      discovery: string;
      discoveryDesc: string;
      design: string;
      designDesc: string;
      development: string;
      developmentDesc: string;
      testing: string;
      testingDesc: string;
    };
  };

  // Projects page
  projects: {
    title: string;
    description: string;
    filterBy: string;
    categories: {
      all: string;
      webDev: string;
      mobileDev: string;
      design: string;
      security: string;
      other: string;
    };
    noProjectsFound: string;
    noProjectsDesc: string;
    projectInfo: string;
    technologies: string;
    client: string;
    duration: string;
    year: string;
    overview: string;
    challenge: string;
    solution: string;
    results: string;
    gallery: string;
  };

  // Services page
  services: {
    title: string;
    description: string;
    servicesOffered: string;
    servicesDesc: string;
    process: string;
    processDesc: string;
    pricing: string;
    pricingDesc: string;
    ctaTitle: string;
    ctaDesc: string;
    whatIncludes: string;
    consultation: string;
    consultationDesc: string;
    development: string;
    developmentDesc: string;
    delivery: string;
    deliveryDesc: string;
    readyToStart: string;
    ctaDescription: string;
  };

  // Blog page
  blog: {
    title: string;
    description: string;
    categories: {
      all: string;
      design: string;
      development: string;
      security: string;
      tutorial: string;
      opinion: string;
    };
    readTime: string;
    publishedOn: string;
    author: string;
    tags: string;
    relatedPosts: string;
    comments: string;
    leaveComment: string;
    newsletter: string;
    newsletterDesc: string;
    subscribe: string;
  };

  // Contact page
  contact: {
    title: string;
    subtitle: string;
    description: string;
    getInTouch: string;
    getInTouchDesc: string;
    contactInfo: string;
    contactForm: string;
    form: {
      name: string;
      email: string;
      subject: string;
      message: string;
      send: string;
      namePlaceholder: string;
      emailPlaceholder: string;
      subjectPlaceholder: string;
      messagePlaceholder: string;
    };
    socialMedia: string;
    faq: string;
    faqDesc: string;
    emailDesc: string;
    phone: string;
    phoneDesc: string;
    location: string;
    locationDesc: string;
    responseTime: string;
    formDesc: string;
    formNote: string;
    stillHaveQuestions: string;
    questionDesc: string;
    askQuestion: string;
  };

  // Shop page
  shop: {
    title: string;
    description: string;
    templates: string;
    templatesDesc: string;
    allAccess: string;
    allAccessDesc: string;
    pricing: string;
    features: string;
    purchase: string;
    preview: string;
    download: string;
  };

  // Bookmark page
  bookmark: {
    title: string;
    description: string;
    myBookmarks: string;
    noBookmarks: string;
    noBookmarksDesc: string;
    addBookmark: string;
    categories: {
      all: string;
      design: string;
      development: string;
      inspiration: string;
      tools: string;
      articles: string;
    };
  };

  // Theme settings
  theme: {
    settings: string;
    dark: string;
    light: string;
    darkMode: string;
    lightMode: string;
    mode: string;
    colors: string;
    language: string;
    purple: string;
    ocean: string;
    sunset: string;
    forest: string;
    rose: string;
  };

  // Language settings
  language: {
    switch: string;
    english: string;
    arabic: string;
  };

  // Profile
  profile: {
    available: string;
    unavailable: string;
  };

  // Footer
  footer: {
    copyright: string;
    role: string;
    madeBy: string;
    crafted: string;
    by: string;
    connect: string;
    version: string;
    allRights: string;
    links: {
      privacy: string;
      terms: string;
      sitemap: string;
    };
  };

  error: {
    notFound: string;
    notFoundDesc: string;
    serverError: string;
    serverErrorDesc: string;
    backHome: string;
  };

  // Forms and validation
  validation: {
    required: string;
    email: string;
    minLength: string;
    maxLength: string;
    pattern: string;
    success: string;
    error: string;
  };

  // Time and dates
  time: {
    ago: string;
    minute: string;
    minutes: string;
    hour: string;
    hours: string;
    day: string;
    days: string;
    week: string;
    weeks: string;
    month: string;
    months: string;
    year: string;
    years: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      services: 'Services',
      about: 'About Me',
      shop: 'Buy Designs',
      blog: 'Blogs',
      contact: 'Contact',
      bookmark: 'Bookmark',
      search: 'Search',
    },
    common: {
      available: 'Available for New projects',
      unavailable: 'Currently not available for new projects',
      backToHome: 'Back to Home',
      backToServices: 'Back to Services',
      viewAll: 'View all',
      readMore: 'Read More',
      viewLive: 'View Live',
      viewCode: 'View Code',
      allProjects: 'All Projects',
      loading: 'Loading...',
      featured: 'Featured',
      viewDetails: 'View Details',
      startProject: 'Start a Project',
      learnMore: 'Learn More',
      bookMeeting: 'Book a Meeting',
      getStarted: 'Get Started',
      getInTouch: 'Get In Touch',
      callNow: 'Call Now',
      sendMessage: 'Send Message',
      download: 'Download',
      previous: 'Previous',
      next: 'Next',
      close: 'Close',
      open: 'Open',
      save: 'Save',
      cancel: 'Cancel',
      edit: 'Edit',
      delete: 'Delete',
      share: 'Share',
      copy: 'Copy',
      search: 'Search',
      filter: 'Filter',
      sort: 'Sort',
      category: 'Category',
      all: 'All',
      none: 'None',
      select: 'Select',
      clear: 'Clear',
      apply: 'Apply',
      reset: 'Reset',
      projectImage: 'Project Image',
      blogImage: 'Blog Image',
    },
    home: {
      hero: {
        greeting: 'Hey, I\'m',
        aboutButton: 'About Me',
        exploreButton: 'Explore Works',
        availableStatus: 'Available for new projects',
        techStack: 'Tech Stack',
        yearsExperience: 'Years Experience',
        projectsDone: 'Projects Done',
        happyClients: 'Happy Clients',
        getInTouch: 'Get In Touch',
        viewProjects: 'View Projects',
        followMe: 'Follow me:',
        cta: {
          primary: 'Get In Touch',
          secondary: 'View Projects',
        },
      },
      services: {
        title: 'Services',
        description: 'What I can help you with',
        webDevelopment: {
          title: 'Web Development',
          description: 'Building modern, responsive websites and web applications',
        },
        mobileDevelopment: {
          title: 'Mobile Development',
          description: 'Creating cross-platform mobile applications',
        },
        aiMl: {
          title: 'AI & Machine Learning',
          description: 'Implementing AI solutions and machine learning models',
        },
        backend: {
          title: 'Backend Development',
          description: 'Building scalable server-side applications and APIs',
        },
      },
      projects: {
        title: 'Featured Projects',
        description: 'Some of my recent work',
        viewAll: 'View All',
      },
      blog: {
        title: 'Latest Articles',
        description: 'Thoughts and insights on development',
        viewAll: 'View All',
      },
      cta: {
        title: 'Ready to Start Your Project?',
        description: 'Let\'s collaborate and bring your ideas to life with cutting-edge technology',
        primary: 'Get Started',
        secondary: 'Learn More',
      },
      featuredWork: {
        title: 'Featured Work',
        description: 'A showcase of my latest projects and creative endeavors',
        projectLabel: 'Project',
      },
      recentWorks: 'Recent works',
      satisfiedBrands: 'satisfied brands',
      latestProjects: 'Latest Projects',
      latestProjectsDesc: 'From concept to reality—explore how we\'re bringing groundbreaking ideas to life.',
      servicesTitle: 'Services I Provide',
      servicesDesc: 'Pushing the limits of innovation with services that redefine possibilities.',
      impactNumbers: 'Impact in Numbers',
      impactDesc: 'Delivering results that speak for themselves',
      stats: {
        experience: 'Years Experience',
        projects: 'Projects Completed',
        clients: 'Clients',
        awards: 'Awards Won',
      },
      recentBlogs: 'Recent Blogs',
      recentBlogsDesc: 'Exploring design trends, lessons, and offering a peek behind the scenes.',
      ctaText: 'Have a project idea in mind?',
      ctaTitle: 'Let\'s Discuss about the Project Details',
      ctaButton: 'Book a Meeting',
      theme: 'Choose Your Favorite Theme',
      themeDesc: 'Make your experience unique with a wonderful collection of colorful themes',
      themeHint: 'Theme will be saved automatically',
      customization: {
        title: 'Customize Your Experience',
        subtitle: 'Choose the perfect appearance, language, and color theme for you',
        themeMode: 'Display Mode',
        darkMode: 'Dark Mode',
        lightMode: 'Light Mode',
        darkModeDesc: 'Dark mode for comfortable viewing',
        lightModeDesc: 'Light mode for optimal clarity',
        switchToDark: 'Switch to Dark Mode',
        switchToLight: 'Switch to Light Mode',
        language: 'Choose Language',
        currentTheme: 'Current Theme',
        colorTheme: 'Choose Color Theme',
        colorThemes: 'Color Theme Collection',
        colorThemesDesc: 'Choose from a variety of beautiful colorful themes',
      },
      roadmap: {
        title: 'Let\'s Turn Your Idea Into Reality',
        subtitle: 'Your project development journey from start to finish in a professional and distinctive way',
        ideaDiscussion: 'Idea Discussion',
        ideaDiscussionDesc: 'We listen to your idea and discuss details to fully understand your vision',
        designPlanning: 'Design & Planning',
        designPlanningDesc: 'We design the user interface and plan the technical architecture',
        developmentCoding: 'Development & Coding',
        developmentCodingDesc: 'We start developing the project using the latest technologies and standards',
        launchSupport: 'Launch & Support',
        launchSupportDesc: 'We launch the project and provide ongoing support and maintenance',
        features: {
          requirementsAnalysis: 'Requirements Analysis',
          feasibilityStudy: 'Feasibility Study',
          goalSetting: 'Goal Setting',
          uiuxDesign: 'UI/UX Design',
          databasePlanning: 'Database Planning',
          technologySelection: 'Technology Selection',
          frontendDevelopment: 'Frontend Development',
          backendDevelopment: 'Backend Development',
          testing: 'Testing',
          projectDeployment: 'Project Deployment',
          technicalSupport: 'Technical Support',
          updates: 'Updates',
        },
      },
    },
    about: {
      title: 'About Me',
      subtitle: 'Get to know me better',
      description: 'Learn about my journey, skills, and passion for creating exceptional digital experiences.',
      downloadCV: 'Download CV',
      skills: 'Skills & Expertise',
      skillsDesc: 'Technologies and tools I work with',
      experience: 'Work Experience',
      experienceDesc: 'My professional journey and achievements',
      education: 'Education & Certifications',
      educationDesc: 'Academic background and professional certifications',
      achievements: 'Achievements',
      achievementsDesc: 'Key milestones and accomplishments',
      personalInfo: 'Personal Information',
      personalInfoDesc: 'A bit more about who I am',
processTitle: 'My Methodology in Building Solutions',
processDesc: 'My methodology is simple, but built on depth and experience. I blend analysis with intuition, expertise with research, and leverage every observation or experiment to perfect the final result.',
      journeyTitle: 'Professional Experience',
      journeyDesc: 'My professional journey in software development, spanning mobile applications, web development, and technical project management.',
      skillsTitle: 'Technical Skills & Tools',
      ctaTitle: 'Let\'s Build Something Amazing Together',
      ctaDesc: 'Ready to turn your ideas into reality? Let\'s discuss your project and create innovative solutions that drive results.',
      process: {
       discovery: 'Discovery & Vision Crafting',
    discoveryDesc: 'I understand your project\'s nature, goals, and the audience you want to reach. I research, ask, analyze... and craft a technical vision that serves your purpose from the start. If the idea is floating, we ground it in reality. If it\'s ready, we move forward with confidence.',
    design: 'Technical Thinking & Solution Architecture',
    designDesc: 'Before we develop, we plan. We map the structure, choose the tools, and design the technical blueprint that serves the project with minimal cost and maximum efficiency. Whether we\'re building a system or an AI-powered application — we must know how to choose "the solution," not just "write code."',
    development: 'Development & Implementation',
    developmentDesc: 'I start working, laying down code line by line, following the logic, user interfaces, and connecting every piece. I build you an integrated system — clear, flexible, scalable. Whether backend, frontend, or AI integration, the work is transparent and engineered.',
    testing: 'Testing & Refinement',
    testingDesc: 'I don\'t consider the project finished after the first version. I test, listen, observe, and improve as needed. I build an experience that\'s used and works, not just displayed. After delivery? I provide support and development according to changing needs.'
      },
    },
    projects: {
      title: 'My Projects',
      description: 'A showcase of projects that demonstrate technical expertise, creative problem-solving, and innovative solutions across various domains.',
      filterBy: 'Filter by category:',
      categories: {
        all: 'All',
        webDev: 'Web Development',
        mobileDev: 'Mobile Development',
        design: 'UI/UX Design',
        security: 'Security',
        other: 'Other',
      },
      noProjectsFound: 'No projects found',
      noProjectsDesc: 'Try selecting a different category to see more projects.',
      projectInfo: 'Project Info',
      technologies: 'Technologies Used',
      client: 'Client',
      duration: 'Duration',
      year: 'Year',
      overview: 'Project Overview',
      challenge: 'Challenge',
      solution: 'Solution',
      results: 'Results & Impact',
      gallery: 'Project Gallery',
    },
    services: {
      title: 'Services',
      description: 'Professional services to help bring your ideas to life',
      servicesOffered: 'Services I Offer',
      servicesDesc: 'Comprehensive solutions for your digital needs',
      process: 'My Process',
      processDesc: 'How I work with clients to deliver exceptional results',
      pricing: 'Pricing',
      pricingDesc: 'Transparent and competitive pricing for quality work',
      ctaTitle: 'Ready to Get Started?',
      ctaDesc: 'Let\'s discuss your project and bring your ideas to life with professional development services.',
      whatIncludes: 'What\'s Included',
      consultation: 'Consultation',
      consultationDesc: 'We discuss your needs and requirements in detail.',
      development: 'Development',
      developmentDesc: 'We build your solution using best practices and modern technologies.',
      delivery: 'Delivery',
      deliveryDesc: 'We deliver and deploy your solution with ongoing support.',
      readyToStart: 'Ready to Get Started?',
      ctaDescription: 'Let\'s discuss your project and bring your ideas to life with professional development services.',
    },
    blog: {
      title: 'Blog Posts',
      description: 'Insights, tutorials, and thoughts on design, development, and technology.',
      categories: {
        all: 'All',
        design: 'Design',
        development: 'Development',
        security: 'Security',
        tutorial: 'Tutorial',
        opinion: 'Opinion',
      },
      readTime: 'min read',
      publishedOn: 'Published on',
      author: 'Author',
      tags: 'Tags',
      relatedPosts: 'Related Posts',
      comments: 'Comments',
      leaveComment: 'Leave a Comment',
      newsletter: 'Newsletter',
      newsletterDesc: 'Stay updated with the latest posts and insights',
      subscribe: 'Subscribe',
    },
    contact: {
      title: 'Contact Me',
      subtitle: 'Let\'s work together',
      description: 'Have a project in mind? Let\'s discuss how we can bring your ideas to life.',
      getInTouch: 'Get in Touch',
      getInTouchDesc: 'I\'m always excited to work on new projects and collaborate with amazing people.',
      contactInfo: 'Contact Information',
      contactForm: 'Send a Message',
      form: {
        name: 'Name',
        email: 'Email',
        subject: 'Subject',
        message: 'Message',
        send: 'Send Message',
        namePlaceholder: 'Your full name',
        emailPlaceholder: 'your.email@example.com',
        subjectPlaceholder: 'What is this about?',
        messagePlaceholder: 'Tell me about your project...',
      },
      socialMedia: 'Follow Me',
      faq: 'Frequently Asked Questions',
      faqDesc: 'Common questions about working together',
      emailDesc: 'Send me an email anytime',
      phone: 'Phone Number',
      phoneDesc: 'Available during business hours',
      location: 'Location',
      locationDesc: 'Remote work available worldwide',
      responseTime: 'Response Time',
      formDesc: 'Fill out the form below and I will get back to you as soon as possible.',
      formNote: 'This form will open your email client with the message pre-filled.',
      stillHaveQuestions: 'Still have questions?',
      questionDesc: "Don't hesitate to reach out! I'm here to help with any questions about your project.",
      askQuestion: 'Ask a Question',
    },
    shop: {
      title: 'Design Templates',
      description: 'Premium design templates and UI kits for your next project',
      templates: 'Templates',
      templatesDesc: 'High-quality design templates for various needs',
      allAccess: 'All Access Pass',
      allAccessDesc: 'Get unlimited access to all templates and future releases',
      pricing: 'Pricing',
      features: 'Features',
      purchase: 'Purchase',
      preview: 'Preview',
      download: 'Download',
    },
    bookmark: {
      title: 'Bookmarks',
      description: 'Curated collection of useful resources and inspiration',
      myBookmarks: 'My Bookmarks',
      noBookmarks: 'No bookmarks yet',
      noBookmarksDesc: 'Start bookmarking useful resources and inspiration.',
      addBookmark: 'Add Bookmark',
      categories: {
        all: 'All',
        design: 'Design',
        development: 'Development',
        inspiration: 'Inspiration',
        tools: 'Tools',
        articles: 'Articles',
      },
    },
    theme: {
      settings: 'Theme Settings',
      dark: 'Dark',
      light: 'Light',
      darkMode: 'Dark Mode',
      lightMode: 'Light Mode',
      mode: 'Theme Mode',
      colors: 'Colors',
      language: 'Language',
      purple: 'Purple',
      ocean: 'Ocean',
      sunset: 'Sunset',
      forest: 'Forest',
      rose: 'Rose',
    },
    language: {
      switch: 'Switch Language',
      english: 'English',
      arabic: 'العربية',
    },
    profile: {
      available: 'Available for projects',
      unavailable: 'Currently unavailable',
    },
    footer: {
      copyright: '© 2025 Harry Bardon',
      role: 'Product Designer',
      madeBy: 'Made by',
      crafted: 'Crafted with',
      by: 'by',
      connect: 'Connect with me',
      version: 'Portfolio v2.0',
      allRights: 'All rights reserved',
      links: {
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        sitemap: 'Sitemap',
      },
    },
    error: {
      notFound: 'Page Not Found',
      notFoundDesc: 'The page you are looking for does not exist.',
      serverError: 'Server Error',
      serverErrorDesc: 'Something went wrong on our end.',
      backHome: 'Back to Home',
    },
    validation: {
      required: 'This field is required',
      email: 'Please enter a valid email address',
      minLength: 'Must be at least {min} characters',
      maxLength: 'Must be no more than {max} characters',
      pattern: 'Please enter a valid format',
      success: 'Success!',
      error: 'An error occurred',
    },
    time: {
      ago: 'ago',
      minute: 'minute',
      minutes: 'minutes',
      hour: 'hour',
      hours: 'hours',
      day: 'day',
      days: 'days',
      week: 'week',
      weeks: 'weeks',
      month: 'month',
      months: 'months',
      year: 'year',
      years: 'years',
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      projects: 'المشاريع',
      services: 'الخدمات',
      about: 'نبذة عني',
      shop: 'شراء التصاميم',
      blog: 'المدونة',
      contact: 'تواصل معي',
      bookmark: 'المفضلة',
      search: 'بحث',
    },
    common: {
      available: 'متاح لمشاريع جديدة',
      unavailable: 'غير متاح حالياً لمشاريع جديدة',
      backToHome: 'العودة للرئيسية',
      backToServices: 'العودة للخدمات',
      viewAll: 'عرض الكل',
      readMore: 'اقرأ المزيد',
      viewLive: 'عرض المشروع',
      viewCode: 'عرض الكود',
      allProjects: 'جميع المشاريع',
      loading: 'جاري التحميل...',
      featured: 'مميز',
      viewDetails: 'عرض التفاصيل',
      startProject: 'ابدأ مشروع',
      learnMore: 'تعرف أكثر',
      bookMeeting: 'احجز اجتماع',
      getStarted: 'ابدأ الآن',
      getInTouch: 'تواصل معي',
      callNow: 'اتصل الآن',
      sendMessage: 'إرسال رسالة',
      download: 'تحميل',
      previous: 'السابق',
      next: 'التالي',
      close: 'إغلاق',
      open: 'فتح',
      save: 'حفظ',
      cancel: 'إلغاء',
      edit: 'تحرير',
      delete: 'حذف',
      share: 'مشاركة',
      copy: 'نسخ',
      search: 'بحث',
      filter: 'تصفية',
      sort: 'ترتيب',
      category: 'فئة',
      all: 'الكل',
      none: 'لا يوجد',
      select: 'اختيار',
      clear: 'مسح',
      apply: 'تطبيق',
      reset: 'إعادة تعيين',
      projectImage: 'صورة المشروع',
      blogImage: 'صورة المقال',
    },
    home: {
    hero: {
  greeting: 'مرحباً، أنا',
  aboutButton: 'تعرف علي',
  exploreButton: 'شوف الأعمال',
  availableStatus: 'جاهز لمشاريع جديدة',
  techStack: 'التقنيات اللي أستخدمها',
  yearsExperience: 'سنوات الخبرة',
  projectsDone: 'مشاريع نفذتها',
  happyClients: 'عملاء راضين',
  getInTouch: 'خلّنا نتواصل',
  viewProjects: 'شاهد المشاريع',
  followMe: 'تابعني هنا:',
        cta: {
          primary: 'خلّنا نتواصل',
          secondary: 'شاهد المشاريع',
        },
      },
      services: {
        title: 'الخدمات',
        description: 'إيش أقدر أساعدك فيه',
        webDevelopment: {
          title: 'تطوير المواقع',
          description: 'بناء مواقع حديثة ومتجاوبة وتطبيقات ويب',
        },
        mobileDevelopment: {
          title: 'تطوير التطبيقات',
          description: 'إنشاء تطبيقات متعددة المنصات',
        },
        aiMl: {
          title: 'الذكاء الاصطناعي والتعلم الآلي',
          description: 'تطبيق حلول الذكاء الاصطناعي ونماذج التعلم الآلي',
        },
        backend: {
          title: 'تطوير الخادم',
          description: 'بناء تطبيقات خادم قابلة للتوسع وواجهات برمجة التطبيقات',
        },
      },
      projects: {
        title: 'المشاريع المميزة',
        description: 'بعض من أعمالي الأخيرة',
        viewAll: 'عرض الكل',
      },
      blog: {
        title: 'أحدث المقالات',
        description: 'أفكار ورؤى حول التطوير',
        viewAll: 'عرض الكل',
      },
      cta: {
        title: 'مستعد تبدأ مشروعك؟',
        description: 'خلّنا نتعاون ونحوّل أفكارك لواقع بتقنيات متطورة',
        primary: 'ابدأ الآن',
        secondary: 'تعرف أكثر',
      },
      featuredWork: {
        title: 'الأعمال المميزة',
        description: 'عرض لأحدث مشاريعي والمساعي الإبداعية',
        projectLabel: 'مشروع',
      },
      recentWorks: 'الأعمال الحديثة',
      satisfiedBrands: 'علامة تجارية راضية',
      latestProjects: 'أحدث المشاريع',
latestProjectsDesc: 'من فكرة على ورق، إلى منتج حقيقي يخدم الهدف — شوف كيف طورت كل مشروع.',
      servicesTitle: 'الخدمات التي أقدمها',
servicesDesc: 'خدمات تقنية تعيد تعريف الحلول الذكية، وتخلي التقنية تشتغل لصالحك.',
      impactNumbers: 'التأثير بالأرقام',
      impactDesc: 'تقديم نتائج تتحدث عن نفسها',
      stats: {
        experience: 'سنوات الخبرة',
        projects: 'المشاريع المكتملة',
        clients: 'العملاء',
        awards: 'الجوائز المحققة',
      },
      recentBlogs: 'أحدث المقالات',
      recentBlogsDesc: 'استكشاف اتجاهات التصميم والدروس ونظرة خلف الكواليس.',
      ctaText: 'لديك فكرة مشروع؟',
      ctaTitle: 'لنناقش تفاصيل المشروع',
      ctaButton: 'احجز اجتماع',
      theme: 'اختر الثيم المفضل',
      themeDesc: 'اجعل تجربتك مميزة مع مجموعة رائعة من الثيمات الملونة',
      themeHint: 'الثيم سيتم حفظه تلقائياً',
      customization: {
        title: 'خصص تجربتك بنفسك',
        subtitle: 'اختر المظهر واللغة والثيم المناسبين لك',
        themeMode: 'وضع العرض',
        darkMode: 'الوضع الداكن',
        lightMode: 'الوضع الفاتح',
        darkModeDesc: 'الوضع الداكن للعيون المريحة',
        lightModeDesc: 'الوضع الفاتح للوضوح الأمثل',
        switchToDark: 'التبديل للوضع الداكن',
        switchToLight: 'التبديل للوضع الفاتح',
        language: 'اختر اللغة',
        currentTheme: 'الثيم الحالي',
        colorTheme: 'اختر الثيم ',
        colorThemes: 'مجموعة الثيمات اللونية',
        colorThemesDesc: 'اختر من مجموعة متنوعة من الثيمات الملونة الجميلة',
      },
      roadmap: {
        title: 'تعال نحول فكرتك لواقع',
        subtitle: 'رحلة تطوير مشروعك من البداية حتى النهاية بطريقة احترافية ومميزة',
        ideaDiscussion: 'مناقشة الفكرة',
        ideaDiscussionDesc: 'نستمع لفكرتك ونناقش التفاصيل لفهم رؤيتك بشكل كامل',
        designPlanning: 'التصميم والتخطيط',
        designPlanningDesc: 'نصمم واجهة المستخدم ونخطط للبنية التقنية للمشروع',
        developmentCoding: 'التطوير والبرمجة',
        developmentCodingDesc: 'نبدأ بتطوير المشروع باستخدام أحدث التقنيات والمعايير',
        launchSupport: 'الإطلاق والمتابعة',
        launchSupportDesc: 'نطلق المشروع ونقدم الدعم والصيانة المستمرة',
        features: {
          requirementsAnalysis: 'تحليل المتطلبات',
          feasibilityStudy: 'دراسة الجدوى',
          goalSetting: 'تحديد الأهداف',
          uiuxDesign: 'تصميم واجهة المستخدم',
          databasePlanning: 'تخطيط قاعدة البيانات',
          technologySelection: 'اختيار التقنيات',
          frontendDevelopment: 'البرمجة الأمامية',
          backendDevelopment: 'البرمجة الخلفية',
          testing: 'الاختبارات',
          projectDeployment: 'نشر المشروع',
          technicalSupport: 'الدعم الفني',
          updates: 'التحديثات',
        },
      },
    },
    about: {
      title: 'نبذة عني',
      subtitle: 'تعرف علي أكثر',
description: 'أنا عبدالله، مهندس برمجيات أدمج بين الذكاء الاصطناعي والهندسة التقنية لبناء حلول حقيقية تخدم الفكرة وتحقق الأثر.',
      downloadCV: 'تحميل السيرة الذاتية',
      skills: 'المهارات والخبرات',
      skillsDesc: 'التقنيات والأدوات التي أعمل بها',
      experience: 'الخبرة العملية',
      experienceDesc: 'رحلتي المهنية وإنجازاتي',
      education: 'التعليم والشهادات',
      educationDesc: 'الخلفية الأكاديمية والشهادات المهنية',
      achievements: 'الإنجازات',
      achievementsDesc: 'المعالم الرئيسية والإنجازات',
      personalInfo: 'المعلومات الشخصية',
      personalInfoDesc: 'المزيد عن شخصيتي',
      processTitle: 'منهجيتي في بناء الحلول',
processDesc: 'طريقتي تبدأ من فهم عميق وتنتهي بنتيجة محسوبة. ما أشتغل عشوائي — بل أوزن، أختبر، وأطوّر كل تفصيلة.',
      journeyTitle: 'الخبرة المهنية',
      journeyDesc: 'رحلتي المهنية في تطوير البرمجيات، تشمل تطبيقات الهاتف المحمول وتطوير الويب وإدارة المشاريع التقنية.',
      skillsTitle: 'المهارات التقنية والأدوات',
      ctaTitle: 'لنبني شيئاً مذهلاً معاً',
      ctaDesc: 'مستعد لتحويل أفكارك إلى واقع؟ لنناقش مشروعك وننشئ حلولاً مبتكرة تحقق النتائج.',
      process: {
        discovery: 'الاستكشاف وصياغة الرؤية',
        discoveryDesc: 'أفهم طبيعة مشروعك، أهدافك، والجمهور اللي تبغى توصله.  أبحث، أسأل، أحلل... وأصيغ رؤية تقنية تخدم هدفك من البداية. إذا كانت الفكرة عائمة، نربطها بواقع، وإذا كانت جاهزة، نمشي فيها بثقة.',
        design: 'التفكير التقني وهندسة الحل',
        designDesc: 'قبل لا نطوّر، نخطّط.نرسم البنية، نحدّد الأدوات، ونصمم النموذج التقني اللي يخدم المشروع بأقل تكلفة وأعلى كفاءة. سواء كنا نبني نظام، أو تطبيق مدعوم بـ AI — لازم نعرف كيف نختار "الحل"، مو بس "نكتب كود".',
        development: 'التطوير والتنفيذ',
        developmentDesc: 'أبدأ أشتغل، أسطر الكود سطر سطر،أتابع المنطق، واجهات الاستخدام، والربط بين كل جزء.أبني لك نظام متكامل، واضح، مرن، قابل للتوسعة. سواء backend أو frontend أو دمج ذكاء اصطناعي، الشغل يكون واضح ومهندَس. ',
        testing: 'الاختبار والتحسين',
        testingDesc: 'ما أعتبر المشروع منتهي بعد أول نسخة، أختبر، أسمع، ألاحظ، وأحسّن حسب الحاجة. أبني تجربة تستخدم وتشتغل، مو بس تُعرض. وبعد التسليم؟ أقدّم دعم وتطوير حسب المتغيرات.',
      },
    },
    projects: {
      title: 'مشاريعي',
description: 'مجموعة من المشاريع اللي جمعت بين التفكير التقني والتطبيق الذكي — حلول صنعت الفرق في مجالات مختلفة.',
      filterBy: 'تصفية حسب الفئة:',
      categories: {
        all: 'الكل',
        webDev: 'تطوير الويب',
        mobileDev: 'تطوير التطبيقات',
        design: 'تصميم واجهات',
        security: 'الأمان',
        other: 'أخرى',
      },
      noProjectsFound: 'لم يتم العثور على مشاريع',
      noProjectsDesc: 'جرب اختيار فئة مختلفة لرؤية المزيد من المشاريع.',
      projectInfo: 'معلومات المشروع',
      technologies: 'التقنيات المستخدمة',
      client: 'العميل',
      duration: 'المدة',
      year: 'السنة',
      overview: 'نظرة عامة على المشروع',
      challenge: 'التحدي',
      solution: 'الحل',
      results: 'النتائج والتأثير',
      gallery: 'معرض المشروع',
    },
    services: {
      title: 'الخدمات',
description: 'خدمات مبنية على فهم، مدعومة بتقنيات حديثة، ومصممة لحلول عملية تطلع منها بنتيجة.',
      servicesOffered: 'الخدمات التي أقدمها',
      servicesDesc: 'حلول شاملة لاحتياجاتك الرقمية',
      process: 'منهجيتي في العمل',
      processDesc: 'كيف أعمل مع العملاء لتقديم نتائج استثنائية',
      pricing: 'الأسعار',
      pricingDesc: 'أسعار شفافة وتنافسية لعمل عالي الجودة',
      ctaTitle: 'هل أنت مستعد لبدء مشروعك؟',
      ctaDesc: 'لنناقش مشروعك ونحول أفكارك إلى واقع بخدمات تطوير مهنية.',
      whatIncludes: 'ما يشمله العرض',
      consultation: 'الاستشارة',
      consultationDesc: 'نناقش احتياجاتك ومتطلباتك بالتفصيل.',
      development: 'التطوير',
      developmentDesc: 'نقوم ببناء حلولك باستخدام أفضل الممارسات والتقنيات الحديثة.',
      delivery: 'التسليم',
      deliveryDesc: 'نقوم بتسليم ونشر حلولك مع الدعم المستمر.',
      readyToStart: 'مستعد للبدء؟',
      ctaDescription: 'لنناقش مشروعك ونحول أفكارك إلى واقع بخدمات تطوير مهنية.',
    },
    blog: {
      title: 'مقالات المدونة',
      description: 'رؤى ودروس وأفكار حول التصميم والتطوير والتكنولوجيا.',
      categories: {
        all: 'الكل',
        design: 'تصميم',
        development: 'تطوير',
        security: 'أمان',
        tutorial: 'دروس',
        opinion: 'رأي',
      },
      readTime: 'دقيقة قراءة',
      publishedOn: 'نُشر في',
      author: 'الكاتب',
      tags: 'العلامات',
      relatedPosts: 'مقالات ذات صلة',
      comments: 'التعليقات',
      leaveComment: 'اترك تعليق',
      newsletter: 'النشرة الإخبارية',
      newsletterDesc: 'ابق على اطلاع بأحدث المقالات والرؤى',
      subscribe: 'اشتراك',
    },
    contact: {
      title: 'تواصل معي',
      subtitle: 'لنعمل معاً',
description: 'عندك فكرة؟ خلّنا نناقشها ونحوّلها لحل فعلي يخدم أهدافك.',
      getInTouch: 'تواصل معي',
      getInTouchDesc: 'أنا متحمس دائماً للعمل على مشاريع جديدة والتعاون مع أشخاص رائعين.',
      contactInfo: 'معلومات التواصل',
      contactForm: 'إرسال رسالة',
      form: {
        name: 'الاسم',
        email: 'البريد الإلكتروني',
        subject: 'الموضوع',
        message: 'الرسالة',
        send: 'إرسال رسالة',
        namePlaceholder: 'اسمك الكامل',
        emailPlaceholder: 'your.email@example.com',
        subjectPlaceholder: 'ما هو موضوع رسالتك؟',
        messagePlaceholder: 'أخبرني عن مشروعك...',
      },
      socialMedia: 'تابعني',
      faq: 'الأسئلة المتكررة',
      faqDesc: 'أسئلة شائعة حول العمل معاً',
      emailDesc: 'راسلني في أي وقت',
      phone: 'رقم الهاتف',
      phoneDesc: 'متاح خلال ساعات العمل',
      location: 'الموقع',
      locationDesc: 'العمل عن بُعد متاح عالمياً',
      responseTime: 'وقت الاستجابة',
      formDesc: 'املأ النموذج أدناه وسأرد عليك في أقرب وقت ممكن.',
      formNote: 'هذا النموذج سيفتح برنامج البريد الإلكتروني مع الرسالة مُعبأة مسبقاً.',
      stillHaveQuestions: 'لا تزال لديك أسئلة؟',
      questionDesc: 'لا تتردد في التواصل! أنا هنا للمساعدة في أي أسئلة حول مشروعك.',
      askQuestion: 'اسأل سؤال',
    },
    shop: {
      title: 'قوالب التصميم',
      description: 'قوالب تصميم متميزة ومجموعات واجهات لمشروعك القادم',
      templates: 'القوالب',
      templatesDesc: 'قوالب تصميم عالية الجودة لاحتياجات مختلفة',
      allAccess: 'تصريح دخول شامل',
      allAccessDesc: 'احصل على وصول غير محدود لجميع القوالب والإصدارات المستقبلية',
      pricing: 'الأسعار',
      features: 'المميزات',
      purchase: 'شراء',
      preview: 'معاينة',
      download: 'تحميل',
    },
    bookmark: {
      title: 'المفضلة',
      description: 'مجموعة منتقاة من الموارد المفيدة والإلهام',
      myBookmarks: 'مفضلتي',
      noBookmarks: 'لا توجد مفضلة بعد',
      noBookmarksDesc: 'ابدأ بحفظ الموارد المفيدة والإلهام.',
      addBookmark: 'إضافة مفضلة',
      categories: {
        all: 'الكل',
        design: 'تصميم',
        development: 'تطوير',
        inspiration: 'إلهام',
        tools: 'أدوات',
        articles: 'مقالات',
      },
    },
    theme: {
      settings: 'إعدادات المظهر',
      dark: 'داكن',
      light: 'فاتح',
      darkMode: 'الوضع المظلم',
      lightMode: 'الوضع المضيء',
      mode: 'وضع المظهر',
      colors: 'الألوان',
      language: 'اللغة',
      purple: 'البنفسجي',
      ocean: 'المحيط',
      sunset: 'الغروب',
      forest: 'الغابة',
      rose: 'الوردي',
    },
    language: {
      switch: 'تغيير اللغة',
      english: 'English',
      arabic: 'العربية',
    },
    profile: {
      available: 'متاح للمشاريع',
      unavailable: 'غير متاح حالياً',
    },
    footer: {
      copyright: '© ٢٠٢٥ هاري باردون',
      role: 'مصمم منتجات',
      madeBy: 'تم التصميم بواسطة',
      crafted: 'صُنع بـ',
      by: 'بواسطة',
      connect: 'تواصل معي',
      version: 'الموقع الإصدار ٢.٠',
      allRights: 'جميع الحقوق محفوظة',
      links: {
        privacy: 'سياسة الخصوصية',
        terms: 'شروط الخدمة',
        sitemap: 'خريطة الموقع',
      },
    },
    error: {
      notFound: 'الصفحة غير موجودة',
      notFoundDesc: 'الصفحة التي تبحث عنها غير موجودة.',
      serverError: 'خطأ في الخادم',
      serverErrorDesc: 'حدث خطأ من جانبنا.',
      backHome: 'العودة للرئيسية',
    },
    validation: {
      required: 'هذا الحقل مطلوب',
      email: 'يرجى إدخال عنوان بريد إلكتروني صحيح',
      minLength: 'يجب أن يكون على الأقل {min} أحرف',
      maxLength: 'يجب ألا يزيد عن {max} أحرف',
      pattern: 'يرجى إدخال تنسيق صحيح',
      success: 'نجح!',
      error: 'حدث خطأ',
    },
    time: {
      ago: 'منذ',
      minute: 'دقيقة',
      minutes: 'دقائق',
      hour: 'ساعة',
      hours: 'ساعات',
      day: 'يوم',
      days: 'أيام',
      week: 'أسبوع',
      weeks: 'أسابيع',
      month: 'شهر',
      months: 'أشهر',
      year: 'سنة',
      years: 'سنوات',
    },
  },
};