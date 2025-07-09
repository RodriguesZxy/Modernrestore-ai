import React from 'react';
import Head from 'next/head';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import Hero from '@/components/Sections/Hero';
import About from '@/components/Sections/About';
import Services from '@/components/Sections/Services';
import Portfolio from '@/components/Sections/Portfolio';
import Testimonials from '@/components/Sections/Testimonials';
import Contact from '@/components/Sections/Contact';

export default function Home() {
  return (
    <>
      <Head>
        <title>SitePro - Soluções Digitais Inovadoras</title>
        <meta name="description" content="Transformamos ideias em soluções digitais. Desenvolvimento web, design UI/UX, e-commerce e muito mais." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-white">
        <Header />
        
        <main>
          <Hero />
          <About />
          <Services />
          <Portfolio />
          <Testimonials />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
}