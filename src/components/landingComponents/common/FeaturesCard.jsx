import React from "react";

const FeaturesCard = ({ title, description, icon: Icon, children }) => {
  return (
    <div className="border rounded-xl p-6 hover:shadow-lg transition duration-300 bg-white">
      {Icon && (
        <div className="w-12 h-12 flex items-center justify-center rounded-lg border border-gray-300 mb-4">
          <Icon size={24} className="text-indigo-600" />
        </div>
      )}

      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>

      {children}
    </div>
  );
};

export default FeaturesCard;
