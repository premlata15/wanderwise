import React from "react";
import CustomButton from "./common/CustomButton";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center px-20 py-4">
      {/* left navbar */}
      <div>
        <h2 className="text-4xl font-bold">Wander-wise</h2>
      </div>
      {/* right navbar */}
      <div className="flex items-center gap-10">
        <nav className="flex items-center gap-6 [&>a]:text-lg [&>a]:font-medium [&>a]:hover:text-blue-600">
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#famous-trip">Famous Trip</a>
          <a href="#contact">Contact</a>
        </nav>
        <CustomButton text="Sign in" />
      </div>
    </header>
  );
};

export default Navbar;
