export type SkillCategory = {
  title: string;
  items: string[];
};

export const technicalSkills: SkillCategory[] = [
  {
    title: "Programming Languages",
    items: ["Python", "C++"],
  },
  {
    title: "AI / ML Domains",
    items: [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "Computer Vision",
      "Generative AI",
      "LLMs",
      "RAG",
      "Agentic AI",
      "Prompt Engineering",
    ],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      "TensorFlow",
      "Keras",
      "Scikit-learn",
      "Hugging Face Transformers",
      "LangChain",
    ],
  },
  {
    title: "Data & Tools",
    items: ["Pandas", "NumPy", "Power BI", "Excel", "Git", "GitHub"],
  },
  {
    title: "APIs & Development",
    items: ["REST APIs", "Pre-trained Models"],
  },
];

export const softSkills: string[] = [
  "Problem-Solving",
  "Communication",
  "Team Collaboration",
  "Leadership",
  "Adaptability",
];

export const languages = [
  { name: "Arabic", level: "Native / Bilingual" },
  { name: "English", level: "Professional Working Proficiency" },
];

export const quickStats = [
  { value: "8", label: "Applied ML / DL / NLP projects built" },
  { value: "5", label: "Structured applied training programs" },
  { value: "15", label: "Completed certifications" },
  { value: "3.15", label: "GPA / 4.0 — B.Eng. AI Engineering" },
];
