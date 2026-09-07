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
    "Fourth-year AI Engineering student turning coursework into working systems — fine-tuned NLP models, computer vision classifiers, and LLM-powered apps, trained through 500+ hours of applied programs at NTI, NVIDIA DLI, ITI, and MCIT.",

  seoDescription:
    "Portfolio of Mohamed Mahmoud Salem, an AI Engineering student specializing in Machine Learning, Deep Learning, NLP, Computer Vision, and Generative AI. 8 applied projects, 15 certifications, and hands-on training from NTI, NVIDIA DLI, MCIT, and ITI.",

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
    heading: "Fourth-year AI Engineering student, trained to build — not just study.",
    paragraphs: [
      "I'm a fourth-year Artificial Intelligence Engineering student at New Ismailia National University, building toward one goal: shipping AI that holds up outside of a notebook. That means writing the preprocessing pipeline, training the model, reading the confusion matrix, and — more often than not — finding the bug that was quietly wrecking my validation scores before I trust a single number.",
      "My hands-on work spans classification and NLP (a bilingual Arabic/English fake-news detector fine-tuned on Hugging Face transformers), computer vision (a 7-class facial emotion classifier trained on 50,000+ images, plus a structural crack detector), and generative AI (a LangChain-based conversational agent and applied training in RAG and prompt engineering through NVIDIA's Deep Learning Institute).",
      "That project work sits on top of structured, evaluated training — over 500 hours across five applied programs at the National Telecommunication Institute, the Ministry of Communications and IT, and NVIDIA DLI/ITI, plus 15 completed certifications from DataCamp, Udacity, and Microsoft. I currently lead the technical team at my university's Microsoft Student Club and hold Golden AI Member recognition from IEEE Suez Canal University for contributions to NLP and computer vision projects.",
      "I'm currently looking for an AI/ML Engineering internship where I can bring that same rigor — building, testing, and debugging models until the metrics can actually be trusted — to a production environment.",
    ],
  },

  usp: {
    eyebrow: "Why work with me",
    heading: "What I bring to an AI team",
    points: [
      {
        title: "I build across the whole AI stack, not one corner of it",
        description:
          "Eight applied projects spanning classical ML (churn prediction), deep learning and computer vision (facial emotion recognition, crack detection), NLP (multilingual fake-news detection), and generative AI (a LangChain conversational agent) — the same range covered by my formal training.",
      },
      {
        title: "I don't trust a metric until I've stress-tested it",
        description:
          "On the Facial Emotion Recognition project, I traced a training-configuration bug that was silently masking the model's true validation performance, and fixed it before reporting results. On the fake-news classifier, I ran misclassification analysis to find and fix failure patterns instead of stopping at accuracy.",
      },
      {
        title: "I'm comfortable with multilingual, code-switched NLP",
        description:
          "Built an NLP pipeline for the DeepX Hackathon handling Franco-Arabic (code-switched) customer feedback — intent classification and entity extraction on text that doesn't fit neatly into one language.",
      },
      {
        title: "My training is structured and evaluated, not casual",
        description:
          "500+ hours across five applied programs — NTI (Machine Learning, Computer Vision), MCIT (Data Analysis), and NVIDIA DLI/ITI (Generative AI, LLMs, RAG) — each assessed with a final score, plus 15 completed certifications from DataCamp, Udacity, and Microsoft.",
      },
      {
        title: "I already lead technical work, not just attend it",
        description:
          "As Technical Head of my university's Microsoft Student Club, I organize AI/ML workshops and mentor other students. IEEE Suez Canal University recognized me as a Golden AI Member for contributions to NLP and computer vision projects while exploring agentic AI workflows.",
      },
    ],
  },
} as const;
