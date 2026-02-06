import React, { useEffect } from "react";
import Navbar from "../components/landingComponents/Navbar";
import Hero from "../components/landingComponents/Hero";
import Features from "../components/landingComponents/Features";
import Contact from "../components/landingComponents/Contact";
import Footer from "../components/landingComponents/Footer";
import Banner from "../components/landingComponents/Banner";
import FamousTrip from "../components/landingComponents/FamousTrip";
import Reviews from "../components/landingComponents/Reviews";
import About from "../components/landingComponents/About";
import useAuth from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const { token } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      navigate("/dashboard");
    }
  }, [token]);

  return (
    <>
      <Navbar />
      <Hero />
      <Banner />
      <FamousTrip />
      <About />
      <Reviews />
      <Features />
      <Contact />
      <Footer />
    </>
  );
};

export default LandingPage;
