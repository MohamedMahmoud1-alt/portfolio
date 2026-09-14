export type ExperienceItem = {
  title: string;
  organization: string;
  period: string;
  location: string;
  bullets: string[];
};

// Ordered most recent first.
export const experience: ExperienceItem[] = [
  {
    title: "Agentic AI Trainee",
    organization: "Digital Egypt Pioneers Initiative (DEPI) — Round 5",
    period: "Jul 2026 – Jan 2027 (ongoing)",
    location: "Remote, Egypt",
    bullets: [
      "Training in agentic AI workflows, LLM orchestration, and Retrieval-Augmented Generation (RAG).",
      "Extends earlier generative-AI training into building autonomous, tool-using LLM agents.",
    ],
  },
  {
    title: "Computer Vision Trainee",
    organization: "National Telecommunication Institute (NTI)",
    period: "Jul 12 – Aug 6, 2026 · 120 hrs · Score 96.5%",
    location: "Ismailia, Egypt",
    bullets: [
      "Completed 120 hours of Computer Vision summer training, including 90 technical hours and 30 freelancing hours.",
      "Applied computer vision concepts and practical techniques through structured technical training.",
    ],
  },
  {
    title: "Deep Learning Trainee",
    organization: "Cairo Syndicate of Engineers",
    period: "Oct 2025",
    location: "Cairo, Egypt",
    bullets: [
      "Built and evaluated neural networks and Convolutional Neural Networks (CNNs) for image classification.",
      "Applied structured preprocessing, model training, and performance-evaluation methodologies.",
    ],
  },
  {
    title: "Generative AI Trainee",
    organization: "NVIDIA Deep Learning Institute (DLI) & ITI",
    period: "Aug – Sep 2025",
    location: "Ismailia, Egypt",
    bullets: [
      "Completed applied training covering Large Language Models (LLMs), prompt engineering, and Retrieval-Augmented Generation (RAG).",
      "Built LLM-based applications using REST API integration and evaluated prompt outputs for accuracy and relevance.",
    ],
  },
  {
    title: "Data Analysis Trainee",
    organization: "Ministry of Communications and Information Technology (MCIT)",
    period: "Aug 2025",
    location: "Ismailia, Egypt",
    bullets: [
      "Cleaned, preprocessed, and analyzed real-world datasets using Python, Pandas, and NumPy.",
      "Built interactive Power BI and Excel dashboards to communicate data-driven business insights.",
    ],
  },
  {
    title: "Machine Learning Trainee",
    organization: "National Telecommunication Institute (NTI)",
    period: "Jun – Jul 2025 · 120 hrs · Score 91%",
    location: "Ismailia, Egypt",
    bullets: [
      "Completed 120 hours of applied Machine Learning training, developing and validating predictive models for customer churn, flight pricing, and salary estimation using Python and Scikit-learn.",
      "Applied preprocessing pipelines and evaluated models using accuracy, precision, recall, and F1-score.",
      "Collaborated on applied ML case studies and delivered technical presentations communicating model findings and results.",
    ],
  },
];

export type LeadershipItem = {
  title: string;
  organization: string;
  period: string;
  bullets: string[];
  image?: string;
};

export const leadership: LeadershipItem[] = [
  {
    title: "Technical Head",
    organization: "Microsoft Student Club – SCU",
    period: "Jan 2026 – Present",
    bullets: [
      "Lead the technical team in organizing AI/ML workshops and technology sessions.",
      "Mentor members and produce technical content for student-focused initiatives.",
    ],
    image: "/images/certs/cert-msc-technical-head.jpg",
  },
  {
    title: "Golden AI Member",
    organization: "IEEE Suez Canal University Student Branch",
    period: "Feb 2026 – Jun 2026",
    bullets: [
      "Recognized as Golden Member of the AI Committee for April 2026 for outstanding dedication and performance.",
      "Delivered NLP and Computer Vision projects under expert mentorship while exploring agentic AI workflows.",
    ],
    image: "/images/certs/cert-ieee-golden-member.jpg",
  },
  {
    title: "Golden HR",
    organization: "EYE — Ministry of Youth and Sports of Egypt",
    period: "2025 – Present",
    bullets: [
      "Managed HR and organizational operations for a national youth initiative.",
      "Developed formal documentation, including a monthly member-evaluation system for team-performance tracking.",
    ],
  },
];

export type Achievement = {
  title: string;
  description: string;
  year: string;
  image?: string;
  featured?: boolean;
};

// Headline achievements shown prominently.
export const achievements: Achievement[] = [
  {
    title: "2nd Place — IEEE Suez Canal University AI Competition",
    description:
      "Placed 2nd in the AI Competition organized by IEEE Suez Canal University Student Branch, competing against other student engineers on a live evaluation.",
    year: "May 2026",
    image: "/images/certs/cert-ieee-ai-competition.jpg",
    featured: true,
  },
  {
    title: "Hult Prize 2025 — Egypt National Competition",
    description: "Startup team member in Egypt's national round of the global Hult Prize competition.",
    year: "2025",
    featured: true,
  },
];

// Smaller participation / appreciation certificates shown as supporting proof.
export const recognitions: Achievement[] = [
  {
    title: "Tech Nights — Artificial Intelligence Track",
    description: "Completed the AI track of the Tech Nights program by IEEE Suez Canal University during Ramadan 2026.",
    year: "Mar 2026",
    image: "/images/certs/cert-ieee-tech-nights.jpg",
  },
  {
    title: "Skill It Up Week",
    description: "Certificate of Appreciation from IEEE SCU and Enactus Ismailia for contribution to Skill It Up Week (team WIN/WIN).",
    year: "2026",
    image: "/images/certs/cert-ieee-skill-it-up.jpg",
  },
  {
    title: "Create the Crowd Camp",
    description: "Participated in Create the Crowd Camp organized by the Egyptian Youth Entity (EYE), Apr 11–18, 2026.",
    year: "Apr 2026",
    image: "/images/certs/cert-eye-crowd-camp.jpg",
  },
  {
    title: "DeepX 2026 Hackathon",
    description: "Certificate of Participation for the DeepX 2026 Hackathon.",
    year: "2026",
    image: "/images/certs/cert-deepx-hackathon.jpg",
  },
];
