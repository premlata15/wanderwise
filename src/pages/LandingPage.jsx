import React from "react";
import Navbar from "../components/landingComponents/Navbar";
import Hero from "../components/landingComponents/Hero";
import Features from "../components/landingComponents/Features";
import Contact from "../components/landingComponents/Contact";
import FamousTrips from "../components/landingComponents/FamousTrip";
import AboutUS from "../components/landingComponents/AboutUs";
import Footer from "../components/landingComponents/Footer";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <div id="features">
        <Features />
        <div id="about">
          <AboutUS />
        </div>
      </div>
      <div id="famous-trip">
        <FamousTrips />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
