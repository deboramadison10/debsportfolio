import type { Metadata, Viewport } from 'next'
import { Nunito, Corben } from 'next/font/google'
import './globals.css'
import { BackToTop } from '@/components/back-to-top'

const nunito = Nunito({ variable: '--font-nunito', subsets: ['latin'] })
const corben = Corben({
  variable: '--font-corben',
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: "Deb's Site",
  description:
    'Portfolio of Debora Madison, a Frontend Developer and UI/UX Designer who loves crafting beautiful, creative products.',
  icons: {
    icon: '/debsportfolio/miffy-tab.jpeg',
    apple: '/debsportfolio/miffy-tab.jpeg',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${nunito.variable} ${corben.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        <BackToTop />
      </body>
    </html>
  )
}