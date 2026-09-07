import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { USP } from "@/components/sections/USP";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Certifications } from "@/components/sections/Certifications";
import { Experience } from "@/components/sections/Experience";
import { Achievements } from "@/components/sections/Achievements";
import { GitHubPresence } from "@/components/sections/GitHubPresence";
import { Resume } from "@/components/sections/Resume";
import { Contact } from "@/components/sections/Contact";
import { site } from "@/data/site";
import { education } from "@/data/education";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.legalName,
    jobTitle: site.role,
    description: site.seoDescription,
    url: site.url,
    image: `${site.url}/images/avatar.jpg`,
    email: `mailto:${site.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ismailia",
      addressCountry: "EG",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: education.institution,
    },
    sameAs: ["https://github.com/MohamedMahmoud1-alt", "https://www.kaggle.com/mohamedmahmoud1775"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <USP />
        <Skills />
        <Projects />
        <Certifications />
        <Experience />
        <Achievements />
        <GitHubPresence />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
