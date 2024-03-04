"use client";

import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Review from "@/components/Review";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <AboutMe />
      <Services />
      <Review />
      <Contact />
      <Footer />
    </div>
  );
}
