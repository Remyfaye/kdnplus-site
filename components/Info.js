import { seasons } from "@/constants";
import Image from "next/image";
import React, { useRef, useState } from "react";

const Info = ({ item, setIsInfo }) => {
  const scrollRef = useRef(null);

  const fetchedSeasons = seasons.filter(
    (season) => season.tvseriesid === item?.id
  );
  const [active, setActive] = useState(fetchedSeasons[0]?.name);
  const [currentEpisodes, setCurrentEpisodes] = useState(
    fetchedSeasons[0]?.episodes
  );
  console.log(fetchedSeasons);
  const [isScrollingLeft, setIsScrollingLeft] = useState(false);

  const scrollRight = () => {
    setIsScrollingLeft(true);

    scrollRef.current.scrollBy({
      left: 300,
      behaviour: "smooth",
    });
  };

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -200,
      behaviour: "smooth",
    });
  };
  return (
    <div className="mx-auto flex flex-col justify-center items-center shadow-xl">
      <p
        onClick={() => setIsInfo(false)}
        className="cursor-pointer right-[5%] lg:right-[21%] mb-5 px-2 text-center font-bold rounded-full shadow-xl bg-white text-black absolute top-[5%] z-50"
      >
        x
      </p>

      <div className="top-[8%] lg:w-[700px] w-[390px] h-[500px] overflow-x-hidden overflow-y-scroll info-scrollbar border-[0.1px] border-white/40 rounded-xl    bg-[#2e2e2e] absolute  z-50">
        {/* bg -image */}
        <Image
          className="w-full -mt-20  rounded-t-xl  lg:h-[400px]  h-[300px] object-top object-cover   "
          width={1000}
          height={1000}
          alt="img"
          src={item.image}
        />
        <p className="w-full lg:h-[440px] rounded-t-xl -mt-[7rem] info-gradient  absolute top-0 h-[340px] object-top object-cover   "></p>

        <div className="m-5 capitalize">
          {/* buttons */}
          <div className="flex items-center gap-5 mb-5">
            <button className="bg-primary rounded-[20px] p-3 ">
              Watch Now
            </button>
            <p className="rounded-full border-white border-[1px] px-3 py-1 text-lg">
              +
            </p>
          </div>
          {/* description */}
          <h1 className="mb-3 font-bold">{item.name}</h1>
          <p>{item.description}</p>

          {/* duration */}
          <div className="mt-3">
            <small>{item.date}</small>
            <small className="text-white/50 ml-2">{item.duration}</small>
            <small className="text-white/50 ml-5">{item.genre}</small>
          </div>

          {/* seasons */}
          <div className="mt-5">
            <div className="flex justify-between">
              <h1>Seasons</h1>
              {/* carousel scroll */}
              <div className="flex items-center">
                <Image
                  className="cursor-pointer"
                  onClick={scrollLeft}
                  src={
                    isScrollingLeft ? "/assets/left2.png" : "/assets/left.png"
                  }
                  width={30}
                  height={30}
                  alt="left-arrow"
                />
                <p>|</p>
                <Image
                  className="cursor-pointer"
                  onClick={scrollRight}
                  src="/assets/right.png"
                  width={30}
                  height={30}
                  alt="right-arrow"
                />
              </div>
            </div>

            {/* seasons nav */}
            <div
              ref={scrollRef}
              className="flex  w-[350px] lg:w-[650px] my-3 gap-3  invisible-scrollbar overflow-scroll"
            >
              {fetchedSeasons.map((tvSeason, index) => (
                <div>
                  <p
                    onClick={() => (
                      setActive(tvSeason.name),
                      setCurrentEpisodes(tvSeason.episodes)
                    )}
                    className={
                      active === tvSeason.name
                        ? "bg-white text-nowrap cursor-pointer  max-w-[200px] py-1 rounded-lg text-black px-1"
                        : "cursor-pointer py-1 text-nowrap  "
                    }
                  >
                    {tvSeason?.name} ({tvSeason.episodes.length} episodes)
                  </p>
                </div>
              ))}
            </div>

            <h1>Episodes</h1>
            <div className=" ">
              {currentEpisodes.map((episode) => (
                <div className="flex gap-2 my-4">
                  <p>{episode.name}.</p>
                  <div className=" w-[90%]">
                    <p className="text-[14px]">{episode.description}</p>
                    <small className=" text-white/50">{episode.duration}</small>
                  </div>
                  <Image
                    className="w-[90px]  h-[40px] lg:w-[100px]  lg:h-[50px]  object-cover  "
                    width={100}
                    height={100}
                    alt="img"
                    src="/assets/episode.png"
                  />
                </div>
              ))}
            </div>
          </div>

          <p className="my-3 ">Director : {item.director}</p>
          <p className="my-3 ">casts : {item.casts}</p>

          <div className="flex gap-3 items-center mt-2">
            <Image
              className="object-cover w-[150px] "
              width={80}
              height={60}
              alt="img"
              src="/assets/ratings.png"
            />
            <small>{item?.rating}</small>
            <small className="text-white/50 -ml-2">({item?.Views})</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
