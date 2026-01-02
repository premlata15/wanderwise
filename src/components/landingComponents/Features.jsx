import React from "react";
import FeaturesCard from "./common/FeaturesCard";
import { History, Map, NotebookIcon, Wallet } from "lucide-react";

const FeaturesData = [
  {
    title: "Personalized Itineraries",
    description:
      "Create custom travel plans based on your interests and preferences.",
    icon: Map,
  },
  {
    title: "Real-time Updates",
    description:
      "Get live notifications about flight changes, weather updates, and local events.",
    icon: History,
  },
  {
    title: "Budget Tracking",
    description: "Monitor your travel expenses and stay within your budget.",
    icon: Wallet,
  },
  {
    title: "Local Recommendations",
    description:
      "Discover hidden gems and popular spots recommended by locals.",
    icon: NotebookIcon,
  },
];
function Features() {
  return (
    <section className="py-20 px-40">
      <div>
        <h2 className="text-4xl font-bold text-center mb-4">Features</h2>
        <p className="text-center text-gray-600">
          Discover the amazing features that make WanderWise your perfect travel
          companion.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-4 gap-6">
        {FeaturesData.map((feature) => {
          return (
            <FeaturesCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Features;
