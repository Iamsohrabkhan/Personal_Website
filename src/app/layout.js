import './globals.css'
export const metadata = {
  title: 'Sohrab Khan',
  description: 'I am website developer, I create website with reactJs, nextjs and Framer moiton.',
  keywords: ["personal website", "reactJS", "nextJS", "framer moiton","portfolio"]
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
