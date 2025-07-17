import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
export const metadata = {
  title: {
    default: "Sohrab Khan",
    template: "%s - Sohrab Khan | Frontend Developer",
  },
  description:
    "Sohrab Khan is website developer, Sohrab Khan create website with reactJs, nextjs and motion.dev formally framer motion, Webflow, tailwind css and gsap.",
  metadataBase: new URL("https://sohrabkhan.vercel.app/"),
  twitter: {
    card: "summary_large_image",
  },
  keywords: [
    "Sohrab Khan",
    "Frontend Developer",
    "ReactJS Developer",
    "Next.js",
    "GSAP",
    "Framer Motion",
    "Motion.dev",
    "Webflow developer",
    "Tailwind CSS",
    "Website Developer Pakistan",
  ],
  archives: ["https://sohrabkhan.vercel.app/", "https://goodrgoods.com/"],
  authors: [
    {
      name: "Sohrab Khan",
      url: "https://sohrabkhan.vercel.app/",
    },
  ],
  creator: "Sohrab Khan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
