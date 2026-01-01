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
      <Hero />
      <Features />
      <Contact />
      <FamousTrips />
      <AboutUS />
    </>
  );
};

export default LandingPage;
