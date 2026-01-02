import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

const AboutUsCard = (props) => {
  const { icon, title, description, color, stats } = props;
  const [isHovered, setIsHovered] = useState(false);

  const IconComponent = icon;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100"
    >
      {/* Gradient Background Effect */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
      />

      {/* Decorative Circle */}
      <div
        className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${color} rounded-full opacity-10 group-hover:scale-150 transition-transform duration-700`}
      />

      <div className="relative p-8">
        {/* Icon Container */}
        <div className="mb-6">
          <div
            className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${color} shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3`}
          >
            <IconComponent className="w-8 h-8 text-white" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
          {description}
        </p>

        {/* Stats Badge */}
        {stats && (
          <div className="mb-6">
            <span
              className={`inline-block bg-gradient-to-r ${color} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md`}
            >
              {stats}
            </span>
          </div>
        )}

        {/* Learn More Button */}
        <div className="flex items-center text-blue-600 font-semibold group-hover:text-purple-600 transition-colors duration-300">
          <span className="mr-2">Learn More</span>
          <ArrowRight
            className={`w-5 h-5 transition-transform duration-300 ${
              isHovered ? "translate-x-2" : ""
            }`}
          />
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div
        className={`h-1.5 bg-gradient-to-r ${color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
      />

      {/* Corner Decoration */}
      <div className="absolute bottom-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div
          className={`absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl ${color} opacity-5 rounded-tl-full`}
        />
      </div>
    </div>
  );
};

export default AboutUsCard;
