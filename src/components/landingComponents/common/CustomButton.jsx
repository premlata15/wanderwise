import React from "react";

function CustomButton({ text }) {
  return (
    <button className="bg-blue-600 text-white px-6 py-2 text-lg rounded hover:bg-blue-400">
      {text}
    </button>
  );
}

export default CustomButton;
