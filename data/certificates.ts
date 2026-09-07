export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  date: string; // display string
  sortDate: string; // ISO date used for sorting only
  hours?: string;
  score?: string;
  description: string;
  image: string;
  verification?: string;
};

export const certificates: Certificate[] = [
  {
    id: "cv-nti",
    title: "Computer Vision — Summer Training",
    issuer: "National Telecommunication Institute (NTI) · ITIDA",
    date: "Jul 12 – Aug 6, 2026",
    sortDate: "2026-08-06",
    hours: "120 hrs (90 technical + 30 freelancing)",
    score: "96.5%",
    description:
      "Applied Computer Vision summer training covering practical techniques and structured project work.",
    image: "/images/certs/cert-computer-vision-nti.jpg",
  },
  {
    id: "datacamp-python",
    title: "Introduction to Python",
    issuer: "DataCamp",
    date: "Jun 20, 2026",
    sortDate: "2026-06-20",
    hours: "4 hrs",
    description: "Core Python programming fundamentals for data and AI work.",
    image: "/images/certs/cert-datacamp-intro-python.jpg",
  },
  {
    id: "datacamp-ai-ethics",
    title: "AI Ethics",
    issuer: "DataCamp",
    date: "Mar 19, 2026",
    sortDate: "2026-03-19",
    hours: "1 hr",
    description:
      "Principles of responsible and ethical AI development and deployment.",
    image: "/images/certs/cert-datacamp-ai-ethics.jpg",
  },
  {
    id: "datacamp-ai-agents",
    title: "Introduction to AI Agents",
    issuer: "DataCamp",
    date: "Jan 9, 2026",
    sortDate: "2026-01-09",
    hours: "1 hr 30 min",
    description: "Foundations of agentic AI systems and agent-based workflows.",
    image: "/images/certs/cert-datacamp-ai-agents.jpg",
  },
  {
    id: "datacamp-llm-business",
    title: "Large Language Models for Business",
    issuer: "DataCamp",
    date: "Jan 8, 2026",
    sortDate: "2026-01-08",
    hours: "1 hr",
    description: "Applying LLMs to real business use cases and decision-making.",
    image: "/images/certs/cert-datacamp-llms-business.jpg",
  },
  {
    id: "deep-learning-cairo",
    title: "AI (Deep Learning) — Two-Week Online Course",
    issuer: "Cairo Syndicate of Engineers",
    date: "Oct 25, 2025",
    sortDate: "2025-10-25",
    description:
      "Built and evaluated neural networks and CNNs for image classification, with structured preprocessing and evaluation methodology.",
    image: "/images/certs/cert-deep-learning-cairo-syndicate.jpg",
  },
  {
    id: "genai-nvidia-iti",
    title: "Generative AI — NVIDIA DLI Summer Training Program",
    issuer: "NVIDIA Deep Learning Institute (DLI) & ITI",
    date: "Aug 28 – Sep 7, 2025",
    sortDate: "2025-09-07",
    hours: "35 hrs",
    description:
      "Covered Python fundamentals, generative AI foundations, building LLM applications with prompt engineering, and augmenting LLMs with RAG.",
    image: "/images/certs/cert-generative-ai-nvidia-iti.jpg",
  },
  {
    id: "nvidia-getting-started-dl",
    title: "Getting Started with Deep Learning",
    issuer: "NVIDIA — Certificate of Competency",
    date: "Aug 31, 2025",
    sortDate: "2025-08-31",
    description: "Demonstrated competence in core deep learning fundamentals.",
    image: "/images/certs/cert-nvidia-getting-started-dl.jpg",
    verification: "zPlOqT4xRviwhqxwjiLW-g",
  },
  {
    id: "data-analysis-mcit",
    title: "Data Analysis Training Course",
    issuer: "Microsoft Egypt & Ministry of Communications and Information Technology (MCIT)",
    date: "Aug 24 – Sep 4, 2025",
    sortDate: "2025-09-04",
    description:
      "Cleaned, preprocessed, and analyzed real-world datasets, building interactive dashboards to communicate insights.",
    image: "/images/certs/cert-data-analysis-mcit-microsoft.jpg",
  },
  {
    id: "nvidia-ai-for-all",
    title: "AI for All: From Basics to GenAI Practice",
    issuer: "NVIDIA Academy",
    date: "Aug 2025",
    sortDate: "2025-08-15",
    description: "Introductory-to-applied path from AI basics to generative AI practice.",
    image: "/images/certs/cert-nvidia-ai-for-all.jpg",
  },
  {
    id: "udacity-genai-gcloud",
    title: "Introduction to Generative AI with Google Cloud",
    issuer: "Udacity (in collaboration with Google Cloud)",
    date: "Aug 3, 2025",
    sortDate: "2025-08-03",
    description: "Core concepts of generative AI on Google Cloud infrastructure.",
    image: "/images/certs/cert-udacity-genai-google-cloud.jpg",
  },
  {
    id: "udacity-image-gen-gcloud",
    title: "Introduction to Image Generation with Google Cloud",
    issuer: "Udacity (in collaboration with Google Cloud)",
    date: "Aug 3, 2025",
    sortDate: "2025-08-03",
    description: "Fundamentals of generative image models on Google Cloud.",
    image: "/images/certs/cert-udacity-image-gen-google-cloud.jpg",
  },
  {
    id: "iti-python-basics",
    title: "Python Programming Basics",
    issuer: "ITI Mahara-Tech — Artificial Intelligence Academy",
    date: "Aug 3, 2025",
    sortDate: "2025-08-03",
    hours: "1 hr 38 min",
    description: "Python programming fundamentals via the ITI Mahara-Tech platform.",
    image: "/images/certs/cert-iti-python-basics.jpg",
    verification: "jZSMqcrBSN",
  },
  {
    id: "microsoft-ai-concepts",
    title: "Introduction to AI Concepts",
    issuer: "Microsoft",
    date: "Jul 31, 2025",
    sortDate: "2025-07-31",
    description: "Foundational concepts underpinning modern artificial intelligence systems.",
    image: "/images/certs/cert-microsoft-ai-concepts.jpg",
  },
  {
    id: "ml-nti",
    title: "Machine Learning — Summer Training",
    issuer: "National Telecommunication Institute (NTI) · ITIDA",
    date: "Jun 29 – Jul 24, 2025",
    sortDate: "2025-07-24",
    hours: "120 hrs (90 technical + 30 freelancing)",
    score: "91%",
    description:
      "Developed and validated predictive models for customer churn, flight pricing, and salary estimation using Python and Scikit-learn.",
    image: "/images/certs/cert-machine-learning-nti.jpg",
  },
];
