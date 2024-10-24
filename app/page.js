"use client";
import Hero from "@/components/Hero";
import Info from "@/components/Info";
import ListsCard from "@/components/ListsCard";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import {
  continueWatching,
  myList,
  seasons,
  tvSeries,
  upcoming,
} from "@/constants";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [isInfo, setIsInfo] = useState(true);
  const item = tvSeries[0];

  // useEffect(() => {
  //   // setTvSeasons(fetchedSeasons[0]);
  //   console.log(fetchedSeasons);
  // }, []);

  return (
    <div className=" ">
      <div className={isInfo && "opacity-[0.09]"}>
        <Hero setIsInfo={setIsInfo} item={item} />

        <ListsCard
          continueWatching
          text="Continue Watching"
          list={continueWatching}
        />
        <ListsCard upcoming text="Upcoming " list={upcoming} />
        <ListsCard tvseries text="Tv Series " list={tvSeries} />
        <ListsCard upcoming text="My List " list={myList} />
        <ListsCard upcoming text="Historical Fiction " list={tvSeries} />
      </div>

      {isInfo && <Info item={item} setIsInfo={setIsInfo} />}
    </div>
  );
}
