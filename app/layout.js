"use client";

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

        <meta name="description" content="Discover transformative beauty with Prabjeet Trehan Makeover, your premier destination for professional makeup services. Specializing in natural makeup, stunning bridal hairstyles, and trending looks like smokey eyes and Hollywood waves, we cater to clients in Hicksville, Edison, and surrounding areas. Embrace your beauty with personalized artistry, where every brushstroke enhances your confidence and reveals your unique story." />

        <meta name="keywords" content="hair style, natural makeup, smokey eye look, makeup artist near hicksville, makeup artist near edison, makeup artist near me, hollywood waves, bollywood waves hair style, waves pattern, beach wave, crimping hair style, low bun, bridal bun, bridal braid, messy braid, messy jhura, front hair style variations, nude makeup look, hooded eyes makeup look, foundation, concealer, liquid concealer, self setting concealer, hydrating concealer, glowy makeup, sheen coverage makeup look, matt makeup look, matt lipstick" />

        {/* Google Tag Manager Script */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-587P6VWZPW"
        ></script>

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Prabjeet Trehan Makeover",
              "url": "https://www.prabjeettrehanmakeover.com/",
              "logo": "https://res.cloudinary.com/df2jdmyci/image/upload/v1709588400/public/logo_m7dq5k.png",
              "sameAs": [
                "https://www.instagram.com/prabjeettrehanmakeover",
                "https://www.youtube.com/channel/UCD4_q_-k660JCT-31-GXlEQ",
                "https://www.facebook.com/Prabjeettrehanmakeover/",
                "https://www.amazon.com/shop/prabjeettrehanmakeover?ref_=cm_sw_r_cp_ud_aipsfshop_MTJ9W1AA5NMPHR6AEBJA"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-516-412-5545",
                "contactType": "customer service",
                "areaServed": "US",
                "availableLanguage": "English"
              }
            })
          }}
        />
      </Head>
      <body className={dmSans.className}>{children}</body>
    </html>
  );
}
