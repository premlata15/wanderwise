import FeaturesCard from "./common/FeaturesCard";

const trips = [
  {
    title: "Paris",
    description: "City of love and lights",
    imgurl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
  },
  {
    title: "Bali",
    description: "Tropical paradise",
    imgurl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    title: "New York",
    description: "The city that never sleeps",
    imgurl:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800",
  },
  {
    title: "Tokyo",
    description: "Blend of tradition and modernity",
    imgurl: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c",
  },
  {
    title: "Sydney",
    description: "Harbor city with iconic landmarks",
    imgurl: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
  },
];

const FamousTrips = () => {
  return (
    <section className="px-40 py-20">
      <h2 className="text-4xl font-bold text-center mb-10">Famous Trips</h2>

      <div className="grid grid-cols-4 gap-6">
        {trips.map((trip, index) => (
          <FeaturesCard
            key={index}
            title={trip.title}
            description={trip.description}
            imgurl={trip.imgurl}
          />
        ))}
      </div>
    </section>
  );
};

export default FamousTrips;
