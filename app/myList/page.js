"use client";
import Hero from "@/components/Hero";
import Topbar from "@/components/Topbar";
import TvseriesCard from "@/components/TvseriesCard";
import { continueWatching, myList, tvSeries, upcoming } from "@/constants";
import React, { useState } from "react";

const page = () => {
  const [selectedDisplay, setSelectedDisplay] = useState("all");

  const handleChange = (e) => {
    setSelectedDisplay(e.target.value);
  };
  return (
    <div className="">
      <Hero myList />

      <div className="mb-10">
        {" "}
        <TvseriesCard title="" cardList={upcoming} />
      </div>
    </div>
  );
};

export default page;
