export type Social = {
  label: string;
  url: string;
  handle: string;
  icon: "github" | "linkedin" | "kaggle" | "mail" | "phone";
};

// NOTE: The source CV and the source portfolio PDF listed two different
// LinkedIn vanity URLs. Confirmed with Mohamed directly — the CV's version
// below is correct.
export const socials: Social[] = [
  {
    label: "GitHub",
    url: "https://github.com/MohamedMahmoud1-alt",
    handle: "MohamedMahmoud1-alt",
    icon: "github",
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/mohamed-mahmoud-mohamed-salem/",
    handle: "mohamed-mahmoud-mohamed-salem",
    icon: "linkedin",
  },
  {
    label: "Kaggle",
    url: "https://www.kaggle.com/mohamedmahmoud1775",
    handle: "mohamedmahmoud1775",
    icon: "kaggle",
  },
];

export const contact = {
  email: "mohamedmahmoud121519@gmail.com",
  phone: "+20 127 406 6941",
  location: "Ismailia, Egypt",
};
