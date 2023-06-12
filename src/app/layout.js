import NavBar from '@/components/NavBar/NavBar'
import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pokedex',
  description: `Information about pokemons`,
  author: "4CHAMi20",
  keywords: "pokemon, pokedex, pokemon information, pokemon list",
}

const origin = process.env.NEXT_PUBLIC_ORIGIN;

export default function RootLayout({ children }) {
  return (

    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="author" content={metadata.author} />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />

        <meta property="og:title" content="Pokedex" />
        <meta property="og:description" content="Information about different pokemons" />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>
      <body className={inter.className}>
        <NavBar className="mb-4" />
        {children}
      </body>
    </html>
  )
}
