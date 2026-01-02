import React from "react";
import AboutUsCard from "./common/AboutUsCard";
import { Target, Eye, Sparkles, Users, Globe, Award } from "lucide-react";

const AboutUS = () => {
  const coreValues = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To make travel planning simple and enjoyable for every explorer.",
      color: "from-blue-500 to-cyan-500",
      stats: "50K+ Happy Travelers",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "Helping travelers explore the world smartly and sustainably.",
      color: "from-purple-500 to-pink-500",
      stats: "100+ Destinations",
    },
    {
      icon: Sparkles,
      title: "Why Wander-Wise?",
      description:
        "All-in-one travel planning platform with personalized recommendations.",
      color: "from-orange-500 to-red-500",
      stats: "AI-Powered Planning",
    },
  ];

  const achievements = [
    {
      icon: Users,
      number: "50,000+",
      label: "Active Users",
    },
    {
      icon: Globe,
      number: "150+",
      label: "Countries Covered",
    },
    {
      icon: Award,
      number: "15+",
      label: "Industry Awards",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-white via-blue-50 to-purple-50 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2" />

      <div className="relative px-6 sm:px-12 lg:px-40">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
              About Wander-Wise
            </span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
            Your Journey Starts Here
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're passionate about transforming the way people discover and
            experience the world. With cutting-edge technology and a human
            touch, we make every journey unforgettable.
          </p>
        </div>

        {/* Core Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {coreValues.map((value, index) => (
            <AboutUsCard
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
              color={value.color}
              stats={value.stats}
            />
          ))}
        </div>

        {/* Story Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 mb-20 border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Founded in 2020, Wander-Wise was born from a simple idea: travel
                planning shouldn't be stressful. What started as a small team of
                travel enthusiasts has grown into a global platform serving
                thousands of adventurers worldwide.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                We combine advanced AI technology with local insights to create
                personalized travel experiences that match your style, budget,
                and dreams. Every feature we build is designed with one goal in
                mind: making your travel planning as exciting as the journey
                itself.
              </p>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Join Our Community
              </button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl transform rotate-3" />
              <img
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800"
                alt="Travel planning"
                className="relative rounded-2xl shadow-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Trusted by Travelers Worldwide
          </h3>
          <p className="text-gray-600 mb-10">
            Numbers that showcase our commitment to excellence
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-full p-4 mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {achievement.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 shadow-2xl">
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Start Your Adventure?
          </h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of travelers who have discovered smarter, more
            enjoyable ways to explore the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Get Started Free
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUS;
