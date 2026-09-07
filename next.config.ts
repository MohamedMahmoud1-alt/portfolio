import type { NextConfig } from "next";

// Static export keeps this project deployable on both Vercel and GitHub
// Pages with zero server-side requirements. All data fetching in this app
// (the GitHub stats card) happens client-side, so no server runtime is
// needed. If you later add real server features (an API route for the
// contact form, etc.), remove `output: "export"` and deploy to Vercel.
const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Uncomment and set to your repo name if deploying to GitHub Pages at
  // https://<user>.github.io/<repo>/ instead of a custom domain or Vercel:
  // basePath: "/your-repo-name",
};

export default nextConfig;
