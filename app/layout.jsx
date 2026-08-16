import { Inter, Space_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
})

export const metadata = {
  title: 'Eden Sahilé — AI Product Builder',
  description: "Product Owner spécialisée dans les produits augmentés par l'IA. Découvrez mes projets et mon parcours.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${inter.variable} ${spaceMono.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=block"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans bg-paper text-ink antialiased">
        {children}
      </body>
    </html>
  )
}
