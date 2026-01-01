import React from "react";
import FeaturesCard from "./common/FeaturesCard";
import { History, Map, NotebookIcon, Wallet } from "lucide-react";

const FeaturesData = [
  {
    title: "Personalized Itineraries",
    description:
      "Create custom travel plans based on your interests and preferences.",
    imgurl:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: Map,
  },
  {
    title: "Real-time Updates",
    description:
      "Get live notifications about flight changes, weather updates, and local events.",
    imgurl:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: History,
  },
  {
    title: "Budget Tracking",
    description: "Monitor your travel expenses and stay within your budget.",
    imgurl:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: Wallet,
  },
  {
    title: "Local Recommendations",
    description:
      "Discover hidden gems and popular spots recommended by locals.",
    imgurl:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        {FeaturesData.map((feature, index) => {
          return (
            <FeaturesCard
              key={index}
              title={feature.title}
              description={feature.description}
              imgurl={feature.imgurl}
              icon={feature.icon}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Features;
