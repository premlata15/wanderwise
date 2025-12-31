import React from "react";

function FeatureTripCard({ title, description, imageUrl }) {
  return (
    <div className="rounded overflow-hidden shadow-lg">
      <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default FeatureTripCard;
