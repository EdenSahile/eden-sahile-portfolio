import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Eden Sahilé — Portfolio',
  description: 'Product Owner technique, UX Design et Full-Stack JS. Découvrez mes projets et mon parcours.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="dark">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
