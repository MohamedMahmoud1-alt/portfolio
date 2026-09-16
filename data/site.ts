export const site = {
  name: "Mohamed Mahmoud Salem",
  legalName: "Mohamed Mahmoud Mohamed Salem",
  role: "AI Engineering Student",
  tagline: "Machine Learning · Deep Learning · NLP · Computer Vision · Generative AI",
  location: "Ismailia, Egypt",
  email: "mohamedmahmoud121519@gmail.com",
  phone: "+20 127 406 6941",

  // Override at build time with NEXT_PUBLIC_SITE_URL once you have a real
  // domain (see .env.example) — this is used for canonical/OG/sitemap URLs.
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://mohamedmahmoudsalem.vercel.app",

  heroHeadline: "I build AI that has to actually work.",
  heroSubheadline:
    "Fourth-year AI Engineering student and 2nd-place finisher in the IEEE Suez Canal University AI Competition — turning coursework into working systems across ML, computer vision, NLP, and generative AI, trained through 500+ hours of applied programs at NTI, NVIDIA DLI, ITI, and MCIT.",

  seoDescription:
    "Portfolio of Mohamed Mahmoud Salem, an AI Engineering student specializing in Machine Learning, Deep Learning, NLP, Computer Vision, and Generative AI. 12 applied projects, a 2nd-place IEEE AI Competition finish, and hands-on training from NTI, NVIDIA DLI, MCIT, and ITI.",

  seoKeywords: [
    "AI Engineer",
    "Machine Learning Engineer",
    "Artificial Intelligence Engineering Student",
    "Deep Learning",
    "NLP Engineer",
    "Computer Vision",
    "Generative AI",
    "LLM",
    "Mohamed Mahmoud Salem",
  ],

  about: {
    eyebrow: "About",
    heading: "Building AI systems that hold up under real evaluation.",
    paragraphs: [
      "I'm a fourth-year AI Engineering student who has spent the past two years turning coursework into competitive, working systems. In May 2026, I placed 2nd in the IEEE Suez Canal University AI Competition — proof that my models hold up under real evaluation, not just in a notebook.",
      "My project range covers the full AI stack: a bilingual Arabic/English fake-news classifier, a 7-class facial emotion recognizer trained on 50,000+ images, a Gemini-powered multimodal assistant, a YOLO11-based workplace safety detector, and a rule-based expert system combining fuzzy logic with MYCIN and Bayesian confidence models — each one debugged, evaluated, and pushed past \"it runs\" to \"it's reliable.\" That same rigor carries into research: I'm a co-author on a peer-reviewed paper (currently under review) applying a hybrid ELM + Harris Hawks Optimization model to solar power forecasting, achieving an R² of 0.993.",
      "The technical foundation behind all of this is structured and evaluated — over 500 hours of applied training across NTI, MCIT, NVIDIA's Deep Learning Institute, and ITI, plus 15 completed certifications. I'm currently training in Agentic AI at DEPI (Round 5, through January 2027), extending my GenAI work into LLM orchestration and RAG.",
      "Outside of my own projects, I lead as Technical Head of the Microsoft Student Club at Suez Canal University, organizing AI/ML workshops and mentoring other students — the kind of role that comes from being trusted with other people's learning, not just my own. I'm currently looking for an AI/ML Engineering internship where that combination of competitive results, research discipline, and technical leadership can go to work on real problems.",
    ],
  },

  usp: {
    eyebrow: "Why work with me",
    heading: "What I bring to an AI team",
    points: [
      {
        title: "Competition-tested, not just coursework-tested",
        description:
          "Placed 2nd in the IEEE Suez Canal University AI Competition (May 2026) — my models have been benchmarked against other engineers under real constraints, not just graded on a syllabus.",
      },
      {
        title: "Full-spectrum AI builder",
        description:
          "Twelve applied projects spanning classical ML, deep learning, computer vision, multilingual NLP, expert systems, and generative AI — the same breadth reflected in my formal training.",
      },
      {
        title: "Research-grade rigor",
        description:
          "Co-author on a peer-reviewed paper (under review) combining ELM and Harris Hawks Optimization for solar power forecasting, reaching an R² of 0.993 against CatBoost, XGBoost, and Transformer baselines.",
      },
      {
        title: "Structured, evaluated training — not casual learning",
        description:
          "500+ hours across five applied programs (NTI, MCIT, NVIDIA DLI, ITI), each closed out with a scored evaluation, plus 15 completed certifications and ongoing Agentic AI training at DEPI.",
      },
      {
        title: "Leads technical teams, not just projects",
        description:
          "Technical Head of the Microsoft Student Club at Suez Canal University, running AI/ML workshops and mentoring other students — leadership earned through consistent delivery, not a title alone.",
      },
    ],
  },
} as const;
