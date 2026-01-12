import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import React from "react";

const TripsPage = () => {
  return (
    <section className="py-6 px-20">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold mr-4">Your Trips</h1>
        <Button>
          <Plus />
          Add Trip
        </Button>
      </div>
    </section>
  );
};

export default TripsPage;
