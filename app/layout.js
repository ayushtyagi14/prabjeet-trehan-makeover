import { DM_Sans } from 'next/font/google';
import { Josefin_Sans } from 'next/font/google';
import './globals.css';
import Head from 'next/head';
import { useEffect } from 'react';
import localFont from 'next/font/local';

export const amsterdam = localFont({ src: '../public/amsterdamFour.ttf' });
export const stone = localFont({ src: '../public/stonecrusher.ttf' });

const dmSans = DM_Sans({ subsets: ['latin'] });
export const relieve = Josefin_Sans({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  useEffect(() => {
    // Initialize the Google Tag Manager
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-587P6VWZPW');
  }, []);

  return (
    <html lang="en">
      <Head>
        <title>Prabjeet Trehan Makeover</title>
        <meta name="description" content="Description" />
        
        {/* Google Tag Manager Script */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-587P6VWZPW"
        ></script>
      </Head>
      <body className={dmSans.className}>{children}</body>
    </html>
  );
}
