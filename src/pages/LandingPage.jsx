import React from "react";
import Hero from "../components/landingComponents/Hero";
import About from "../components/landingComponents/About";
import Banner from "../components/landingComponents/Banner";
import Navbar from "../components/landingComponents/Navbar";
import Contact from "../components/landingComponents/Contact";
import Features from "../components/landingComponents/Features";
import Footer from "../components/landingComponents/Footer";
import Reviews from "../components/landingComponents/Reviews";
import FamousTrip from "../components/landingComponents/FamousTrip";

function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Banner />
      <FamousTrip />
      <Features />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
}

export default LandingPage;
