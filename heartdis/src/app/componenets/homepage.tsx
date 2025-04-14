"use client"
import { useEffect } from 'react';
import SmoothScroll from './smoothscroll';
import Head from 'next/head';
import Navbar from './Navbar';
import HeroSection from './herosection';
import ContentSection from './contentsection';
import StatisticsSection from './statisics';
import SliderSection from './sliderconection';
import Footer from './footersection';
import CardInfoSection from './cardinfosection';
import CTASection from './calltoaction';
import Contact from './contactus';
import About from './aboutus';
import Register from './register';
import Login from './login';


const HomePage = () => {
  // Add scroll animation for sections
  useEffect(() => {
    // This will be handled by individual components using IntersectionObserver
  }, []);
  
  return (
    <SmoothScroll>
      <Head>
        <title>HeartHealth - AI-Powered Heart Health Prediction</title>
        <meta name="description" content="Predict and monitor your heart health with our advanced AI-powered tools and get personalized recommendations." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navbar />
      
      <main>
         <HeroSection />
        <ContentSection />
        <StatisticsSection />
        <SliderSection />
        <CardInfoSection/>
        <CTASection/> 
        {/* <Contact/>
        {/* <About/> */}  
        {/* <Register/> */}
        {/* <Login/> */}

      </main>
      
      {/* <Footer /> */}
    </SmoothScroll>
  );
};

export default HomePage;