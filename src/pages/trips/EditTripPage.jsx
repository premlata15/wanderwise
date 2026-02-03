import React, { useState } from "react";
import {
  Card,
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
} from "@/components/ui/card";
import TripForm from "@/components/trips/TripForm";
import { useParams, useNavigate } from "react-router-dom";
import useApi from "@/hooks/useApi";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import api from "@/api/axios";
import { toast } from "sonner";

const EditTripPage = () => {
  const { id } = useParams();

  const { loading, data, error } = useApi(`/trips/${id}`);

  if (loading) return <div>loading</div>;

  const formattedData = {
    ...data,
    startDate: data?.startDate.split("T")[0],
    endDate: data?.endDate.split("T")[0],
  };

  console.log(data);

  return (
    <section>
      <Card className="w-2/5 mx-auto my-8">
        <CardHeader>
          <CardTitle>Edit This Trip</CardTitle>
          <CardDescription>Update information of your trip.</CardDescription>
        </CardHeader>
        <CardContent>
          <TripForm tripInfo={formattedData} />
        </CardContent>
      </Card>
    </section>
  );
};

export default EditTripPage;
