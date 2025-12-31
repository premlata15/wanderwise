import React from "react";
import CustomButton from "./common/CustomButton";
const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-200 to-white text-center p-4">
      <div>
        <h1>Plan your trip with wanderwise</h1>
        <p>
          Your adventure starts here. Discover new destinations and make
          unforgettable memories.
        </p>
        <CustomButton text="Get Started" />
      </div>
    </section>
  );
};

export default Hero;
