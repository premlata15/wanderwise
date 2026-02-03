import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Plane,
  Backpack,
  MapPin,
  Moon,
  Sun,
  Plus,
  LogOut,
  User,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

/* ================= DASHBOARD ================= */

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [loggedIn, setLoggedIn] = useState(true);
  const [itinerary, setItinerary] = useState([]);
  const [tripInput, setTripInput] = useState("");

  const addTrip = () => {
    if (!tripInput) return;
    setItinerary([...itinerary, tripInput]);
    setTripInput("");
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-background text-foreground transition-all">
        {/* NAVBAR */}
        <nav className="flex items-center justify-between px-6 py-4 border-b">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Plane className="text-orange-500" /> WanderWise
          </h1>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? <Sun /> : <Moon />}
            </Button>

            {loggedIn && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setLoggedIn(false)}
              >
                <LogOut className="mr-2 h-4 w-4" /> Logout
              </Button>
            )}
          </div>
        </nav>

        {/* HERO */}
        <section
          className="relative h-[70vh] flex items-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1500530855697-b586d89ba3ee)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 px-8 max-w-3xl text-white">
            <h2 className="text-5xl font-bold mb-4">
              Travel Smarter with WanderWise
            </h2>
            <p className="text-lg mb-6 text-gray-200">
              Plan trips, manage itineraries, pack smart & explore confidently.
            </p>
            <Link to="/trips">
              <Button className="bg-orange-500 hover:bg-orange-600 rounded-full px-8 py-6 text-lg">
                Start Planning
              </Button>
            </Link>
          </div>
        </section>

        {/* MAIN GRID */}
        <section className="px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* ITINERARY BUILDER */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin /> Itinerary Builder
              </CardTitle>
              <CardDescription>
                Add destinations & activities for your trip
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-3 mb-4">
                <Input
                  placeholder="Add destination or activity"
                  value={tripInput}
                  onChange={(e) => setTripInput(e.target.value)}
                />
                <Button onClick={addTrip}>
                  <Plus />
                </Button>
              </div>

              <ul className="space-y-2">
                {itinerary.map((item, index) => (
                  <li
                    key={index}
                    className="p-3 rounded-md bg-muted flex items-center gap-2"
                  >
                    <MapPin className="h-4 w-4 text-orange-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* BAGGAGE */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Backpack /> Baggage Planner
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>✔ Passport & Visa</p>
              <p>✔ Clothes (weather-based)</p>
              <p>✔ Chargers & adapters</p>
              <p>✔ Travel insurance</p>
            </CardContent>
          </Card>
        </section>

        {/* MAP */}
        <section className="px-6 pb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin /> Destination Map
              </CardTitle>
              <CardDescription>
                Visualize your travel destinations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <iframe
                title="map"
                src="https://www.google.com/maps?q=paris&output=embed"
                className="w-full h-[400px] rounded-md border"
                loading="lazy"
              />
            </CardContent>
          </Card>
        </section>

        {/* AUTH MOCK */}
        {!loggedIn && (
          <section className="px-6 pb-20">
            <Card className="max-w-md mx-auto">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User /> Login
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Email" />
                <Input placeholder="Password" type="password" />
                <Button className="w-full" onClick={() => setLoggedIn(true)}>
                  Login
                </Button>
              </CardContent>
            </Card>
          </section>
        )}

        {/* FOOTER */}
        <footer className="text-center py-8 text-sm text-muted-foreground">
          © 2026 WanderWise • Explore the world 🌍
        </footer>
      </div>
    </div>
  );
};

export default Dashboard;
