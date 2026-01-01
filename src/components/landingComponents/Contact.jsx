import React, { useState } from "react";
import CustomButton from "./common/CustomButton";

const Contact = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log("Email submitted:", email);
    setEmail("");
  };
  return (
    <section className="py-24 px-4 bg-purple-500 text-white">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-3">Contact Us</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Have questions or need help planning your journey? We’re here to help
          you every step of the way.
        </p>
      </div>
      <div className="flex items-center gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-grow p-3 rounded-l-md border border-gray-300 focus:outline-none"
        />
        <CustomButton text="Submit" onClick={handleSubmit} />
      </div>
    </section>
  );
};

export default Contact;
