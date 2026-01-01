import FeaturesCard from "./common/FeaturesCard";

const AboutUS = () => {
  return (
    <section className="px-40 py-20">
      <h2 className="text-4xl font-bold text-center mb-10">AboutUs</h2>

      <div className="grid grid-cols-3 gap-6">
        <FeaturesCard
          title="Our Mission"
          description="To make travel planning simple and enjoyable."
        />
        <FeaturesCard
          title="Our Vision"
          description="Helping travelers explore the world smartly."
        />
        <FeaturesCard
          title="Why Wander-Wise?"
          description="All-in-one travel planning platform."
        />
      </div>
    </section>
  );
};

export default AboutUS;
