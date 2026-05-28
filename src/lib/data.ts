export const personalInfo = {
  name: "Alan Acharya",
  initials: "AA",
  role: "Full Stack Developer",
  tagline: "Building apps that make a difference.",
  handwritten: "Hi, I'm",
  bio: "I'm a 20-year-old developer passionate about full stack web development and mobile apps with React Native & Expo. I love turning ideas into real, working products.",
  about: "I started coding out of curiosity and fell in love with building things that people actually use. From web apps to mobile experiences, I enjoy the full journey of creation. When I'm not coding, I'm exploring new tech or leveling up my skills.",
  education: "BSc.CSIT student at Mid West University",
  email: "alanacharya1@gmail.com",
  location: "Nepal",
  signature: "Alan",
  resumeUrl: "/resume.pdf",
  social: {
    github: "https://github.com/alanacharya-19",
    linkedin: "https://www.linkedin.com/in/alan-acharya-169725410/",
    instagram: "https://www.instagram.com/im_alanacharya_/?hl=en",
    youtube: "https://www.youtube.com/@deadcodedump-19",
  },
};

export const stats = [
  { value: "1", label: "Year of Experience", icon: "Sparkles" },
  { value: "17", label: "Projects", icon: "Code2" },
  { value: "10", label: "Technologies", icon: "Zap" },
  { value: "∞", label: "Learning Everyday", icon: "Smile" },
];

export const techStack = [
  { name: "React", icon: "react", gradient: "from-cyan-400 to-blue-500", level: 75, category: "Web" },
  { name: "Next.js", icon: "nextdotjs", gradient: "from-gray-800 to-gray-600", level: 70, category: "Web" },
  { name: "TypeScript", icon: "typescript", gradient: "from-blue-500 to-blue-700", level: 68, category: "Web" },
  { name: "Tailwind CSS", icon: "tailwindcss", gradient: "from-cyan-400 to-sky-500", level: 80, category: "Web" },
  { name: "JavaScript", icon: "javascript", gradient: "from-yellow-400 to-yellow-600", level: 78, category: "Web" },
  { name: "Node.js", icon: "nodedotjs", gradient: "from-green-500 to-emerald-600", level: 72, category: "Web" },
  { name: "MongoDB", icon: "mongodb", gradient: "from-green-600 to-green-800", level: 55, category: "Web" },
  { name: "Git", icon: "git", gradient: "from-orange-500 to-red-500", level: 70, category: "Web" },
  { name: "React Native", icon: "react", gradient: "from-blue-500 to-indigo-600", level: 65, category: "App" },
  { name: "Expo", icon: "expo", gradient: "from-gray-700 to-gray-900", level: 60, category: "App" },
];

export const projects = [
  {
    id: 1,
    title: "CineVerse",
    image: "https://raw.githubusercontent.com/alanacharya-19/CineVerse/main/assets/ss/1.jpeg",
    description: "A modern movie streaming mobile app built with React Native & Expo. Discover trending movies, save favorites, and enjoy a seamless cinematic experience with stunning visuals and smooth navigation.",
    tags: ["React Native", "TypeScript", "TMDB API"],
    gradient: "from-slate-900 to-slate-800",
    link: "https://github.com/alanacharya-19/CineVerse",
  },
  {
    id: 2,
    title: "Chattify",
    image: "https://raw.githubusercontent.com/alanacharya-19/Chattify-ChatApp/main/assets/ss/1.jpeg",
    description: "A chat app with a clean UI inspired by top messaging platforms, Chattify offers instant messaging, real-time updates, and a seamless user experience powered by the latest technologies like TypeScript and Expo.",
    tags: ["Clerk", "TypeScript", "Tailwind", "Firebase"],
    gradient: "from-violet-500 to-purple-600",
    link: "https://github.com/alanacharya-19/Chattify-ChatApp",
  },
  {
    id: 3,
    title: "CookMate",
    image: "https://raw.githubusercontent.com/alanacharya-19/CookMate-AiRecipeApp/main/assets/ss/landing.jpeg",
    description: "A smart cooking assistant app that helps users discover recipes effortlessly. Simply enter ingredients, and the app generates creative, step-by-step recipes powered by AI.",
    tags: ["OpenRouter", "Typescript", "Cloudinary", "Firebase"],
    gradient: "from-amber-500 to-orange-600",
    link: "https://github.com/alanacharya-19/CookMate-AiRecipeApp",
  },
  {
    id: 4,
    title: "Instagram-Clone",
    image: "https://raw.githubusercontent.com/alanacharya-19/Instagram-Clone---MERN-Stack/main/screenshots/home.png",
    description: "A modern, full-featured social media web application inspired by Instagram, built with the MERN stack.",
    tags: ["React", "Socket.io", "Axios", "MongoDB", "Cloudinary"],
    gradient: "from-cyan-500 to-blue-600",
    link: "https://github.com/alanacharya-19/Instagram-Clone---MERN-Stack",
  },
  {
    id: 5,
    title: "AlanCart",
    image: "https://raw.githubusercontent.com/alanacharya-19/AlanCart-Smart-Shopping-Made-Easy-REACT-NATIVE-APP/main/assets/screenshots/home.jpeg",
    description: "A e-com app where provide all-in-one shopping companion, designed to make buying groceries, essentials, and everyday products faster and smarter.",
    tags: ["Expo Router", "Typescript", "Cloudinary", "React Native"],
    gradient: "from-amber-500 to-orange-600",
    link: "https://github.com/alanacharya-19/AlanCart-Smart-Shopping-Made-Easy-REACT-NATIVE-APP",
  },
  {
    id: 6,
    title: "Student-Note",
    image: "https://raw.githubusercontent.com/alanacharya-19/Student-Note-Sharing-Platform-MERN-/main/screenshots/home.png",
    description: "A MERN stack web application for students to share, view, and manage academic notes.",
    tags: ["React", "Multer", "MongoDB", "Cloudinary"],
    gradient: "from-cyan-500 to-blue-600",
    link: "https://github.com/alanacharya-19/Student-Note-Sharing-Platform-MERN-",
  },
  {
    id: 7,
    title: "Fire Ai",
    image: "https://github.com/alanacharya-19/Fire-AI/blob/main/assets/ss/logo.png?raw=true",
    description: "A simple AI chat app for Android built with Expo and React Native. Uses the Groq API to power conversations.",
    tags: ["React Native", "Clerk", "GroqApi", "ExpoSDK 56"],
    gradient: "from-cyan-500 to-blue-600",
    link: "https://github.com/alanacharya-19/Fire-AI",
  },
];

export const experience = [
  {
    id: 1,
    period: "2026 — Present",
    role: "Learning Full Stack Development",
    company: "Self-Taught Journey",
    description: "Deep diving into React, Next.js, Node.js, and React Native. Building real-world projects to master full stack and mobile development.",
  },
  {
    id: 2,
    period: "2025 — 2026",
    role: "Started Coding",
    company: "The Beginning",
    description: "Fell in love with programming. Started with HTML, CSS, and JavaScript, then quickly moved to React and modern frameworks.",
  },
];
