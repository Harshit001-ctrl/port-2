import type { Metadata } from 'next'
import { Quicksand } from 'next/font/google'
import './globals.css'
import emailjs from '@emailjs/browser'

const quicksand = Quicksand({ subsets: ['latin'] })

emailjs.init("yYbdABY9A_DW7QLyj")

export const metadata: Metadata = {
  title: 'Harshit Rao - Full Stack Developer',
  description: 'Portfolio website of Harshit Rao, a Full Stack Developer specializing in React, Laravel, and modern web technologies.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={quicksand.className}>{children}</body>
    </html>
  )
}

