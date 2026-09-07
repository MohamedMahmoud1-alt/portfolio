export type Project = {
  slug: string;
  title: string;
  category: string;
  featured: boolean;
  overview: string;
  implementation: string;
  result?: string;
  technologies: string[];
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "facial-emotion-recognition",
    title: "Facial Emotion Recognition (FER)",
    category: "Computer Vision · Transfer Learning",
    featured: true,
    overview:
      "A 7-class facial emotion classifier trained on a dataset of more than 50,000 images, combining convolutional neural networks with transfer learning to improve accuracy on a limited, imbalanced image set.",
    implementation:
      "Built and trained CNN architectures with transfer learning on the labeled image set, then diagnosed a training-configuration bug that had been silently masking the model's true validation performance — correcting it to reveal an accurate read on generalization.",
    result:
      "Identified and resolved a hidden training-configuration bug — turning a misleading validation signal into a trustworthy measure of real model performance.",
    technologies: ["TensorFlow", "Keras", "CNNs", "Transfer Learning"],
  },
  {
    slug: "multilingual-fake-news-detection",
    title: "Multilingual Fake News Detection",
    category: "NLP · Transformers",
    featured: true,
    overview:
      "A text classification system fine-tuned to detect fake news across both Arabic and English, addressing the added difficulty of doing so reliably across two languages at once.",
    implementation:
      "Fine-tuned pre-trained transformer models from Hugging Face on labeled news data, then ran a structured error analysis on misclassified samples to trace recurring failure patterns.",
    result:
      "Misclassification analysis directly informed changes that improved the model's robustness across both languages.",
    technologies: ["Hugging Face Transformers", "NLP", "Python"],
  },
  {
    slug: "bemo-conversational-chatbot",
    title: "Bemo — Conversational Chatbot",
    category: "Generative AI · LLMs",
    featured: true,
    overview:
      "A context-aware conversational chatbot built on LLM APIs, designed to hold coherent multi-turn dialogue rather than respond to isolated prompts.",
    implementation:
      "Used LangChain to orchestrate LLM calls, designing and validating conversational flows, intent handling, and dialogue-management logic through REST API integration.",
    result:
      "A working conversational agent with validated intent handling and dialogue flow — direct groundwork for the generative-AI and agentic-workflow focus of current training.",
    technologies: ["LangChain", "LLMs", "REST APIs", "Python"],
  },
  {
    slug: "structural-crack-detection",
    title: "Structural Crack Detection",
    category: "Computer Vision · CNN",
    featured: true,
    overview:
      "A binary image classifier that detects structural cracks, aimed at automating a visual inspection task that is normally done manually.",
    implementation:
      "Preprocessed and augmented the image dataset to improve model generalization, then trained a CNN classifier and evaluated it using precision, recall, and F1-score.",
    technologies: ["TensorFlow", "Keras", "CNN", "Computer Vision"],
  },
  {
    slug: "customer-label-evaluation-deepx",
    title: "Customer Label Evaluation — DeepX Hackathon",
    category: "NLP · Multilingual",
    featured: false,
    overview:
      "Built at the DeepX Hackathon: an NLP pipeline for multilingual customer-feedback label evaluation, including Franco-Arabic (code-switched) text.",
    implementation:
      "Implemented intent classification and entity extraction for code-switched text, handling the ambiguity that comes with customer feedback written across multiple languages at once.",
    technologies: ["NLP", "Multilingual", "Franco-Arabic"],
  },
  {
    slug: "customer-churn-prediction",
    title: "Customer Churn Prediction",
    category: "Classical ML",
    featured: false,
    overview:
      "A multi-algorithm classification pipeline for customer-churn prediction, built to compare model families rather than commit to a single approach upfront.",
    implementation:
      "Applied cross-validation and standard evaluation metrics (accuracy, precision, recall, F1-score) to compare models and select the most reliable approach.",
    technologies: ["Python", "Scikit-learn", "ML Optimization"],
  },
  {
    slug: "bank-management-system",
    title: "Bank Management System",
    category: "Software Engineering",
    featured: false,
    overview:
      "A full-stack banking system with integrated database design for account management and transaction tracking.",
    implementation:
      "Designed the relational schema and built the application logic for account management, transaction tracking, and data integrity.",
    technologies: ["Python", "SQL", "Database Design"],
  },
  {
    slug: "ai-solar-energy-optimization",
    title: "AI & Solar Energy Optimization",
    category: "Applied Research",
    featured: false,
    overview:
      "Ongoing research into AI/ML techniques for solar-energy performance prediction and efficiency optimization.",
    implementation:
      "Researching modeling approaches for predicting solar panel performance and identifying levers for efficiency gains using machine learning techniques.",
    technologies: ["Machine Learning", "Research"],
  },
];
