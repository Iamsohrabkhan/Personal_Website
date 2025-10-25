import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
export const metadata = {
  title: {
    default: "Sohrab Khan",
    template: "%s - Sohrab Khan | Frontend Developer",
  },
  description:
    "Sohrab Khan is a front-end developer specializing in building websites with ReactJS, Next.js, GSAP, Three.js, Webflow, Tailwind CSS, and Motion.dev.",
  metadataBase: new URL("https://sohrabkhan.dev/"),
  twitter: {
    card: "summary_large_image",
  },
  keywords: [
    "Sohrab Khan",
    "Frontend Developer",
    "ReactJS Developer",
    "Next.js",
    "GSAP",
    "Motion.dev",
    "Webflow developer",
    "Framer",
    "motion",
    "Wordpress developer",
    "Tailwind CSS",
    "Website Developer Pakistan",
    "Three js",
  ],
  archives: ["https://sohrabkhan.dev/", "https://goodrgoods.com/"],
  authors: [
    {
      name: "Sohrab Khan",
      url: "https://sohrabkhan.dev/",
    },
  ],
  creator: "Sohrab Khan",
  verification: {
    google: "Pm7fb37F0roYBLXNwH89D4xG_cuwuP8bRGRTxKe7ol8",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
