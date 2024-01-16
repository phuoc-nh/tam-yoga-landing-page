import type { Metadata } from 'next'
import { Inter, Gabriela } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/nav'
import Footer from '@/components/footer'

const inter = Gabriela({ 
  subsets: ['latin'], 
  weight: ['400']
 })

export const metadata: Metadata = {
  title: 'Tâm yoga',
  description: 'Tâm yoga Phước Đông Gò Dầu Tây Ninh',
  icons: {
    icon: "/static/tam-logo.png",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <body className={inter.className}>
        <NavBar></NavBar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  )
}
