import React from "react";
// eslint-disable-next-line no-unused-vars
const FeaturesCard = ({ title, description, imgurl, icon: Icon }) => {
  return (
    <div className="border rounded p-4">
      <Icon className="border border-gray-400 rounded-md mb-4" />
      <img className="w-full h-48 object-cover" src={imgurl} alt={title} />
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeaturesCard;
