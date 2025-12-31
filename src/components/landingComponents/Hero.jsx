import React from "react";
import CustomButton from "./common/CustomButton";

const Hero = () => {
  return (
    <section className="h-150 flex items-center justify-center px-40 relative overflow-hidden">
      <div className="flex flex-col items-center gap-10 text-white">
        <h1 className="text-5xl font-bold">Plan your trip with wanderwise</h1>
        <p>
          Your adventure starts here. Discover new destinations and make
          unforgettable memories.
        </p>
        <CustomButton text="Get Started" />
      </div>
      {/* Placeholder for hero image */}
      <div className="absolute -z-10 left-0 top-0 w-full h-full overflow-hidden">
        <img
          className="w-full"
          src="https://images.unsplash.com/photo-1500754088824-ce0582cfe45f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGxhcHRvcCUyMHdhbGxwYXBlcnxlbnwwfHwwfHx8MA%3D%3D"
          alt="Hero Background"
        ></img>
      </div>
      <div className="absolute -z-5 left-0 top-0 w-full h-full bg-black opacity-40"></div>
    </section>
  );
};

export default Hero;
