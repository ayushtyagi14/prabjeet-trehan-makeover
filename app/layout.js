import { DM_Sans } from 'next/font/google'
import './globals.css'

import localFont from 'next/font/local'

export const relieve = localFont({ src: '../public/Relieve.ttf' })

const dmSans = DM_Sans({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Prabjeet Trehan Makeover</title>
        <meta name='description' content='Description' />
      </head>
      <body className={dmSans.className}>{children}</body>
    </html>
  )
}