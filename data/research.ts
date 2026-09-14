export const research = {
  title:
    "A Hybrid Metaheuristic Model for High-Fidelity Solar Power Forecasting: Integrating ELM with Improved Harris Hawks Optimization",
  status: "Under Review" as const,
  period: "2026",
  summary:
    "A co-authored research paper proposing a hybrid model that combines an Extreme Learning Machine (ELM) with an Improved Harris Hawks Optimization algorithm to forecast solar power output with high accuracy. The model was evaluated against CatBoost, XGBoost, and Transformer baselines on real data from two separate solar PV installations.",
  metrics: [
    { label: "R²", value: "0.993" },
    { label: "RMSE", value: "≈0.017" },
    { label: "MAPE", value: "≈3.75%" },
  ],
  benchmarkedAgainst: ["CatBoost", "XGBoost", "Transformer"],
  note: "Not yet published — no preprint or credential link is available at this time.",
};
