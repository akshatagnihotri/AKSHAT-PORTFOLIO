export const personalInfo = {
  name: "Akshat Agnihotri",
  title: "Data Analyst | Business Analyst | AI Solutions Builder",
  tagline: "Transforming data into actionable insights through analytics, machine learning, and AI-powered solutions.",
  email: "akshatagnihotri2001@gmail.com",
  phone: "+91-9098451248",
  linkedin: "https://www.linkedin.com/in/akshat-agnihotri/",
  github: "https://github.com/akshat-agnihotri",
  location: "India",
};

export const experiences = [
  {
    id: 1,
    role: "Data Analyst",
    company: "Akalp Techno Media Solutions",
    period: "Sep 2025 – Present",
    type: "Full-time",
    color: "#6366f1",
    achievements: [
      "Led a 15+ member team on the Election Atlas project, delivering comprehensive political data analytics",
      "Built automated data pipelines and Power BI dashboards reducing reporting time by 60%",
      "Developed LLM-powered analytics solutions enabling natural language data querying",
      "Increased client social media engagement by 34% through data-driven content strategy",
      "Delivered e-commerce analytics platform increasing client profits by 18%",
    ],
  },
  {
    id: 2,
    role: "Business Analyst",
    company: "KultureHire",
    period: "Sep 2024 – Feb 2025",
    type: "Full-time",
    color: "#8b5cf6",
    achievements: [
      "Conducted comprehensive market research identifying key growth opportunities",
      "Built business intelligence reports enabling data-driven executive decisions",
      "Improved product recommendation strategy through collaborative filtering algorithms",
      "Increased revenue by 20% through targeted analytics and optimization initiatives",
    ],
  },
  {
    id: 3,
    role: "Data Analyst",
    company: "Coding Thinker",
    period: "Jul 2023 – Dec 2023",
    type: "Internship",
    color: "#a78bfa",
    achievements: [
      "Performed statistical analysis on large datasets to uncover meaningful patterns",
      "Created interactive data visualizations using Python (Matplotlib, Seaborn, Plotly)",
      "Automated reporting workflows reducing manual effort by 40%",
      "Established analytics best practices and documentation for the team",
    ],
  },
];

export const skillCategories = [
  {
    name: "Data Analytics",
    icon: "📊",
    color: "#6366f1",
    skills: [
      { name: "SQL", level: 95 },
      { name: "Python", level: 92 },
      { name: "Excel", level: 90 },
      { name: "Power BI", level: 88 },
      { name: "Tableau", level: 85 },
    ],
  },
  {
    name: "Machine Learning",
    icon: "🤖",
    color: "#8b5cf6",
    skills: [
      { name: "Regression", level: 90 },
      { name: "Random Forest", level: 85 },
      { name: "Decision Trees", level: 88 },
      { name: "KNN", level: 82 },
      { name: "Clustering", level: 85 },
    ],
  },
  {
    name: "AI & Automation",
    icon: "✨",
    color: "#a855f7",
    skills: [
      { name: "LLMs", level: 88 },
      { name: "Ollama", level: 80 },
      { name: "FastAPI", level: 85 },
      { name: "AI Agents", level: 82 },
      { name: "NLP", level: 78 },
    ],
  },
  {
    name: "Databases",
    icon: "🗄️",
    color: "#7c3aed",
    skills: [
      { name: "PostgreSQL", level: 90 },
      { name: "MySQL", level: 88 },
      { name: "Supabase", level: 82 },
    ],
  },
  {
    name: "Development",
    icon: "💻",
    color: "#6d28d9",
    skills: [
      { name: "React", level: 80 },
      { name: "Next.js", level: 78 },
      { name: "TypeScript", level: 75 },
      { name: "Docker", level: 72 },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "TalentMind AI",
    subtitle: "Multi-Agent HR Intelligence Platform",
    description:
      "Production-grade SaaS platform using 9 AI agents for complete HR workflow automation. Features ATS Resume Scoring, Candidate Ranking, AI Recruiter Copilot, and Resume Screening Automation.",
    tech: ["Python", "FastAPI", "PostgreSQL", "Next.js", "Docker", "Llama 3"],
    features: [
      "ATS Resume Scoring",
      "Candidate Ranking",
      "AI Recruiter Copilot",
      "Resume Screening Automation",
    ],
    highlight: "Production-grade SaaS using 9 AI agents",
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    category: "AI",
    demo: "#",
    github: "https://github.com/akshat-agnihotri",
    icon: "🧠",
  },
  {
    id: 2,
    title: "IndiNest",
    subtitle: "Indian Housing Cost Predictor",
    description:
      "ML-powered real estate price prediction model trained on 13,910 property listings. Achieves R² Score of 0.92 for rental price prediction across major Indian cities.",
    tech: ["Python", "Machine Learning", "FastAPI", "Scikit-learn"],
    features: [
      "Rental Price Prediction",
      "13,910 Property Listings",
      "R² Score 0.92",
      "REST API",
    ],
    highlight: "R² Score of 0.92 – Top 8% accuracy",
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    category: "ML",
    demo: "#",
    github: "https://github.com/akshat-agnihotri",
    icon: "🏠",
  },
  {
    id: 3,
    title: "MP-ElexAgent",
    subtitle: "MP Election Dashboard & AI Agent",
    description:
      "Interactive election analytics platform for Madhya Pradesh with AI-powered query assistant, swing simulation, and real-time constituency data visualization.",
    tech: ["React", "NLP", "Analytics", "Python"],
    features: [
      "Interactive Election Dashboard",
      "AI Query Assistant",
      "Swing Simulation",
      "Constituency Analytics",
    ],
    highlight: "Part of Election Atlas – Led 15+ member team",
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
    category: "Analytics",
    demo: "#",
    github: "https://github.com/akshat-agnihotri",
    icon: "🗳️",
  },
  {
    id: 4,
    title: "MM Properties",
    subtitle: "Real Estate Platform",
    description:
      "Modern real estate listing platform with responsive design, property search, filtering, and a clean user experience built with React and TypeScript.",
    tech: ["React", "TypeScript", "Supabase", "Tailwind CSS"],
    features: [
      "Property Listings",
      "Advanced Filtering",
      "Modern UI",
      "Responsive Design",
    ],
    highlight: "Full-stack real estate SaaS application",
    gradient: "from-emerald-500 via-green-500 to-lime-500",
    category: "Development",
    demo: "#",
    github: "https://github.com/akshat-agnihotri",
    icon: "🏢",
  },
];

export const achievements = [
  { value: 15, suffix: "+", label: "Team Members Led", icon: "👥" },
  { value: 34, suffix: "%", label: "Social Media Growth", icon: "📈" },
  { value: 20, suffix: "%", label: "Revenue Increase", icon: "💰" },
  { value: 18, suffix: "%", label: "Profit Growth", icon: "📊" },
  { value: 4, suffix: "+", label: "Production Projects", icon: "🚀" },
];

export const certifications = [
  {
    title: "Data Visualization: Empowering Business with Effective Insights",
    issuer: "IBM / Coursera",
    icon: "📊",
    color: "#6366f1",
  },
  {
    title: "Data Analytics and Visualization Job Simulation",
    issuer: "Accenture / Forage",
    icon: "🎯",
    color: "#8b5cf6",
  },
];
