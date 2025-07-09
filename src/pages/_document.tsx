import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Site Profissional - Soluções digitais inovadoras" />
        <meta name="keywords" content="desenvolvimento web, design, tecnologia, inovação" />
        <meta name="author" content="Site Profissional" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Site Profissional" />
        <meta property="og:description" content="Soluções digitais inovadoras" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}