import React from "react";
import Navbar from "../components/landingComponents/Navbar";
import Hero from "../components/landingComponents/Hero";
import Features from "../components/landingComponents/Features";
import Contact from "../components/landingComponents/Contact";
import FamousTrips from "../components/landingComponents/FamousTrip";
import AboutUS from "../components/landingComponents/AboutUs";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div id="famous-trip">
        <FamousTrips />
      </div>
      <div id="about">
        <AboutUS />
      </div>
    </>
  );
};

export default LandingPage;
