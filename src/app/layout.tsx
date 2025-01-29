import Header from "@/components/header";
import "../../public/fonts/all/stylesheet.css";
import "./globals.css";
import "./style.css";
import Footer from "@/components/footer/footer";
import VerticleIcon from "@/components/verticle-icon/verticle-icon";

import ScrollToTopButton from '@/components/ScrollToTopButton'
import DisableImageRightClick from '@/components/DisableImageRightClick'

import localFont from 'next/font/local'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer } from "react-toastify";
import Script from "next/script";
import React, { lazy, Suspense } from "react";

export const metadata = {
  title: "Adamallys LLC",
  description: "Established in 1972, Adamallys LLC is a leading ship chandler in the UAE and the broader Middle East, specializing in comprehensive technical ship supplies and provisions",
  icons: {
    icon: "/favicon.ico",
  },
};

const calibri = localFont({
  src: [
    {
      path: '../../public/fonts/all/Calibri-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/all/Calibri-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/all/Calibri.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-SDYRJY2639"></Script>
        <Script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SDYRJY2639');
          `}
        </Script>
      </head>
      <body className={`antialiased ${calibri.className}`}>
         
        <ToastContainer
          position="top-right"
          autoClose={5000}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <Header/>
        {children}
        <Footer />
        <VerticleIcon />
        <ScrollToTopButton />
        <DisableImageRightClick />
       
      </body>
    </html>
  );
}
