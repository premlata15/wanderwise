import React from "react";

//eslint-disable-next-line
const FeaturesCard = ({ title, description, icon: Icon }) => {
  return (
    <div className="border border-gray-200 shadow-sm rounded-md p-4 flex flex-col items-center">
      <Icon className="text-purple-500 mb-4" />
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-center m-2">{description}</p>
    </div>
  );
};

export default FeaturesCard;
