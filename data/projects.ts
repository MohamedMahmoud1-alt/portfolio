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
  liveUrl?: string;
  team?: boolean;
  image: string;
  video?: string;
};

export const projects: Project[] = [
  {
    slug: "guardian-eye",
    image: "/images/projects/guardian-eye.jpg",
    video: "/videos/guardian-eye.mp4",
    title: "GuardianEye — PPE Violation Detection",
    category: "Computer Vision · YOLO",
    featured: true,
    team: true,
    overview:
      "A Streamlit app that scans uploaded video for missing personal protective equipment (helmets, vests) using a fine-tuned YOLO11 model, built with a 5-person team for real-time workplace safety monitoring.",
    implementation:
      "Fine-tuned YOLO11s (9.4M params) on a Roboflow helmet/vest dataset (352 train / 100 val / 48 test images, 4 classes). Detected violations are tracked across frames with ByteTrack so the same worker isn't double-counted, then the frame is blurred for privacy with only the violator's box restored and labeled.",
    result:
      "Test set: 0.805 precision, 0.810 recall, 0.891 mAP@0.50, 0.650 mAP@0.50-0.95.",
    technologies: ["YOLO11", "Streamlit", "ByteTrack", "Computer Vision", "Python"],
    githubUrl: "https://github.com/MohamedMahmoud1-alt/GuardianEye",
  },
  {
    slug: "facial-emotion-recognition",
    image: "/images/projects/facial-emotion-recognition.jpg",
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
    githubUrl: "https://github.com/TensorSquad/fer-emotion-recognition",
    team: true,
  },
  {
    slug: "brain-tumor-segmentation",
    image: "/images/projects/brain-tumor-segmentation.jpg",
    title: "Brain Tumor Segmentation (U-Net)",
    category: "Computer Vision · Medical Imaging",
    featured: true,
    overview:
      "A complete medical image segmentation pipeline that identifies and segments brain tumors from MRI scans using a U-Net architecture with a 4-level encoder-decoder and skip connections.",
    implementation:
      "Preprocessed MRI scans with CLAHE contrast enhancement, gamma correction, denoising, and morphological operations, then trained U-Net with a combined BCE-Dice loss to handle class imbalance between tumor and background pixels.",
    result:
      "Evaluated with Dice coefficient, IoU, PSNR, and SSIM alongside standard accuracy — precision that matters more than raw accuracy on a heavily imbalanced medical dataset.",
    technologies: ["TensorFlow", "U-Net", "OpenCV", "Medical Imaging"],
  },
  {
    slug: "multilingual-fake-news-detection",
    image: "/images/projects/multilingual-fake-news-detection.jpg",
    title: "Multilingual Fake News Detection",
    category: "NLP · Streamlit",
    featured: true,
    overview:
      "A Streamlit app merging two separate research notebooks into one bilingual fake-news detector — one trained on the English WELFake dataset, the other on an Arabic fake-news dataset.",
    implementation:
      "Both notebooks benchmarked Logistic Regression, XGBoost, Random Forest, LSTM/BiLSTM/CNN variants, and transformers (DistilBERT, AraBERT, AraBERTv2). The deployed app runs TF-IDF + Logistic Regression for both languages — the strongest lightweight baseline, retrainable from inside the app in under a minute with no GPU required.",
    result:
      "A live, retrainable bilingual classifier rather than a static notebook result — architecture built so a heavier transformer checkpoint can be swapped in later.",
    technologies: ["Streamlit", "TF-IDF", "scikit-learn", "NLP", "Arabic NLP"],
    githubUrl: "https://github.com/TensorSquad/fake-news-classifier",
    team: true,
  },
  {
    slug: "bemo-conversational-assistant",
    image: "/images/projects/bemo-conversational-assistant.jpg",
    title: "Bemo — Multimodal Conversational AI Assistant",
    category: "Generative AI · Multimodal",
    featured: true,
    team: true,
    overview:
      "A desktop conversational AI assistant built on Google Gemini 2.5 Flash with a Tkinter GUI, built with a 4-person team — combining voice, vision, and tool use in one multilingual interface.",
    implementation:
      "A two-stage tool router (keyword pre-filter, then Gemini classification) dispatches each message to web search, a SymPy calculator, live weather, or datetime lookup before generating a response. Adds webcam and image analysis via Gemini Vision, offline text-to-speech, Google speech-to-text, and document summarization for PDF/Word/PowerPoint/Excel files — all in Arabic, English, French, or Franco-Arabic.",
    result:
      "A working tool-augmented LLM agent — not just a chat wrapper — with automatic retry/back-off handling for API rate limits and 15-turn conversation memory.",
    technologies: ["Google Gemini 2.5 Flash", "Python", "Tkinter", "Speech Recognition"],
    githubUrl: "https://github.com/MohamedMahmoud1-alt/Bemo-chatbot",
  },
  {
    slug: "smart-home-diagnostics",
    image: "/images/projects/smart-home-diagnostics.jpg",
    title: "Smart Home Diagnostics — Expert System",
    category: "Expert Systems · Fuzzy Logic",
    featured: true,
    overview:
      "A rule-based expert system for diagnosing smart home device problems, rebuilt from a Python/Jupyter prototype into a tested TypeScript/Next.js web app with two independently-computed confidence models shown side by side.",
    implementation:
      "Fuzzy-logic sensor preprocessing feeds an 18-rule knowledge base (15 root causes) that computes both a MYCIN certainty-factor score and a naive-Bayes log-odds posterior for every finding — deliberately shown side by side rather than picking one, since they can disagree in informative ways.",
    result:
      "63 automated tests (unit + integration) plus a real-browser Playwright E2E suite; the knowledge base is plain JSON, so rules can be edited without touching code.",
    technologies: ["TypeScript", "Next.js", "Fuzzy Logic", "Vitest", "Zod"],
    githubUrl: "https://github.com/MohamedMahmoud1-alt/smart-home-kbs",
    liveUrl: "https://smart-home-kbs.vercel.app",
  },
  {
    slug: "structural-crack-detection",
    image: "/images/projects/structural-crack-detection.jpg",
    title: "Building Crack Classification",
    category: "Computer Vision · Model Comparison",
    featured: false,
    overview:
      "A binary image classifier that detects cracked vs. non-cracked building surfaces, comparing four different neural network architectures head-to-head instead of committing to one.",
    implementation:
      "Trained and benchmarked an FFNN, a CNN, a hybrid CNN-LSTM, and transfer learning with EfficientNetB0 — each with class-weight balancing, dropout/L2 regularization, and data augmentation (rotation, zoom, brightness, flips) to handle a limited, imbalanced dataset.",
    result:
      "Compared across confusion matrices, precision/recall/F1, and accuracy/loss curves rather than a single headline number.",
    technologies: ["TensorFlow", "Keras", "CNN", "EfficientNetB0"],
    githubUrl: "https://github.com/TensorSquad/-building-crack-classification",
    team: true,
  },
  {
    slug: "dsp-audio-equalizer",
    image: "/images/projects/dsp-audio-equalizer.jpg",
    video: "/videos/dsp-equalizer.mp4",
    title: "10-Band DSP Audio Equalizer",
    category: "Signal Processing · Streamlit",
    featured: false,
    overview:
      "An interactive Streamlit audio equalizer with FFT spectrum visualization, built around an RBJ Parametric EQ with FIR and IIR filters included for direct comparison.",
    implementation:
      "RBJ Parametric EQ runs as the default engine for its low latency and smooth response to live sliders; IIR Butterworth (SOS) is kept as a real-time alternative, and FIR Kaiser is included for its linear phase despite higher latency — with smart presets (Bass Boost, Vocal Clarity, Warm Sound) and before/after FFT plots.",
    result:
      "Documented FIR vs. IIR vs. RBJ trade-offs (COMPARISON.md) rather than picking one method silently — WAV/MP3 upload and export both supported.",
    technologies: ["Python", "Streamlit", "DSP", "FFT"],
    githubUrl: "https://github.com/TensorSquad/dsp-audio-equalizer",
    team: true,
  },
  {
    slug: "customer-label-evaluation-deepx",
    image: "/images/projects/customer-label-evaluation-deepx.jpg",
    title: "Customer Label Evaluation — DeepX Hackathon",
    category: "NLP · Multilingual",
    featured: false,
    overview:
      "Built at the DeepX 2026 Hackathon: an NLP pipeline for multilingual customer-feedback label evaluation, including Franco-Arabic (code-switched) text.",
    implementation:
      "Implemented intent classification and entity extraction for code-switched text, handling the ambiguity that comes with customer feedback written across multiple languages at once.",
    technologies: ["NLP", "Multilingual", "Franco-Arabic"],
    team: true,
  },
  {
    slug: "salary-prediction",
    image: "/images/projects/salary-prediction.jpg",
    title: "Salary Prediction",
    category: "Classical ML · Regression",
    featured: false,
    overview:
      "A regression pipeline that estimates employee salaries from factors like experience, education, and job title.",
    implementation:
      "Compared Linear and Polynomial Regression after data cleaning and exploratory analysis, evaluating fit with R² score and Mean Squared Error rather than accuracy.",
    technologies: ["Python", "Scikit-learn", "Regression"],
    githubUrl: "https://github.com/MohamedMahmoud1-alt/Salary-Prediction-",
  },
  {
    slug: "customer-churn-prediction",
    image: "/images/projects/customer-churn-prediction.jpg",
    title: "Customer Churn Prediction",
    category: "Classical ML",
    featured: false,
    overview:
      "A multi-algorithm classification pipeline for customer-churn prediction, built to compare model families rather than commit to a single approach upfront.",
    implementation:
      "Applied cross-validation and standard evaluation metrics (accuracy, precision, recall, F1-score) to compare models and select the most reliable approach.",
    technologies: ["Python", "Scikit-learn", "ML Optimization"],
    githubUrl: "https://github.com/MohamedMahmoud1-alt/Customer-Churn-Prediction-",
  },
  {
    slug: "suez-canal-authority-bank",
    image: "/images/projects/suez-canal-authority-bank.jpg",
    title: "Suez Canal Authority Bank",
    category: "Software Engineering · Full-Stack",
    featured: false,
    overview:
      "A full account/transaction banking system: a SQL Server database with encrypted PII and stored-procedure-only money movement, plus a Next.js web app for customers and tellers.",
    implementation:
      "National IDs are stored encrypted (ENCRYPTBYKEY) with a peppered hash for lookups; every balance change goes through stored procedures (usp_TransferFunds, usp_DepositFunds, usp_WithdrawFunds) that enforce ownership checks, overdraft rules, and deadlock-safe locking — no role can update a balance directly. The Next.js app authenticates with bcrypt + JWT session cookies and logs every failed login attempt.",
    result:
      "Deployed and live on Vercel with a separate contained database user (WebAppServiceUser) that can only call the three money-movement procedures — not read or write anything else directly.",
    technologies: ["SQL Server", "T-SQL", "Next.js", "JWT", "Encryption"],
    githubUrl: "https://github.com/MohamedMahmoud1-alt/bank-system",
    liveUrl: "https://bank-system-tan.vercel.app",
  },
];
