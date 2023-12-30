import './globals.css'

export const metadata = {
  title: {
    default: "Sohrab Khan",
    template: "%s - Sohrab Khan",
  },
  description: "I am website developer, I create website with reactJs, nextjs and Framer moiton with degree in Physics.",
  metadataBase: new URL("https://sohrabkhan.vercel.app/"),
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
