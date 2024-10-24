"use client";
import { myList } from "@/constants";
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";

const ListsCard = ({ text, list, continueWatching, tvseries, upcoming }) => {
  const scrollRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isHover, setIsHover] = useState(false);
  const [isScrollingLeft, setIsScrollingLeft] = useState(false);
  const [myNewList, setMyNewList] = useState(myList);
  const selectedRef = useRef(null); // Ref for the selected div

  const handleAddToMyList = (item) => {
    setMyNewList((prevlist) => [...prevlist, item]);
    console.log(myNewList);
  };

  const handleHover = () => {
    alert("hover");
  };

  const scrollRight = () => {
    setIsScrollingLeft(true);

    scrollRef.current.scrollBy({
      left: 200,
      behaviour: "smooth",
    });
  };

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -200,
      behaviour: "smooth",
    });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectedRef.current && !selectedRef.current.contains(event.target)) {
        setSelectedIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="my-[3rem] ">
      <div className="flex justify-between">
        <h1 className="font-bold text-lg">{text}</h1>

        {/* carousel scroll */}
        <div className="flex items-center">
          <Image
            className="cursor-pointer"
            onClick={scrollLeft}
            src={isScrollingLeft ? "/assets/left2.png" : "/assets/left.png"}
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
          <span className="text-primary ml-2 text[14px]">View All</span>
        </div>
      </div>

      <div
        ref={scrollRef}
        className={`flex gap-6 ${
          upcoming && "h-[250px] -mb-[3.5rem]"
        } invisible-scrollbar overflow-y-visible overflow-x-scroll relative`}
      >
        {list.map((item, index) => (
          <div
            className="relative"
            key={index}
            onClick={(e) => e.stopPropagation()} // Prevent clicks inside the item from hiding the div
            onMouseEnter={() => setIsHover(index)}
            onMouseLeave={() => setIsHover(null)}
          >
            {/* main image */}
            <Image
              className={` relative ${
                upcoming &&
                `max-w-[175px] hover:scale-125 h-[134px] object-center`
              }  ${
                continueWatching &&
                "max-w-[300px] hover:scale-110 h-[180px] object-center"
              }  ${tvseries && "max-w-[300px] hover:scale-110 h-[350px]"} 
              bg-red-300 rounded-[13px] transition-all duration-200 ease-in-out  transform  hover:opacity-[0.3] opacity-100 cursor-pointer  object-center object-cover mt-5 `}
              width={1000}
              height={1000}
              alt="img"
              src={item.image}
            />
            {/* {isHover === index && (
                <>
                  <div className="flex justify-center items-center ">
                    <Image
                      className="absolute bg-white/50 rounded-full bottom-[52%] z-50  cursor-pointer shadow-xl"
                      width={50}
                      height={50}
                      alt="img"
                      src="/assets/play.png"
                    />
                  </div>
                </>
              )} */}
            {/* menu icon */}
            <Image
              className={`relative cursor-pointer shadow-xl ${
                upcoming && "bottom-[53%] left-[80%] "
              }  p-1 rounded-full text-center w-[30px] ${
                (continueWatching && "bottom-[63%] left-[90%] ") ||
                (tvseries && "bottom-[83%] left-[87%]")
              }`}
              onClick={() =>
                setSelectedIndex(selectedIndex === index ? null : index)
              }
              width={100}
              height={100}
              alt="img"
              src="/assets/menu3.png"
            />
            {selectedIndex === index && (
              <div
                ref={selectedRef}
                className={`bg-gray-800 mb-10 absolute z-50 left-[35%] ${
                  tvseries && "-mt-[20rem]"
                } ${upcoming && "-mt-[11rem]"} ${
                  continueWatching && "-mt-[15rem] "
                } border-[1px] border-white/80 p-4 rounded-xl shadow-xl  w-[220px]`}
              >
                <div className="justify-between border-b-[1px] flex items-center border-b-gray-400 rounded-b-lg p-2">
                  <p className="font-bold">Play</p>
                  <Image
                    className={`w-[30px]  cursor-pointer  ${
                      upcoming && "  object-center"
                    } ${tvseries && ""} 
               h-[30px]  rounded-2xl`}
                    width={200}
                    height={200}
                    alt="img"
                    src="/assets/play.png"
                  />
                </div>

                <div className="my-3 justify-between border-b-[1px] flex items-center border-b-gray-400 rounded-b-lg p-2">
                  <p className="font-bold">Add</p>
                  <Image
                    onClick={() => handleAddToMyList(item)}
                    className={`w-[30px] cursor-pointer shadow-lg ${
                      upcoming && "  object-center"
                    } ${tvseries && ""} 
               h-[30px]  rounded-2xl`}
                    width={200}
                    height={200}
                    alt="img"
                    src="/assets/add.png"
                  />
                </div>

                <div className="justify-between border-b-[1px] flex items-center border-b-gray-400 rounded-b-lg p-2">
                  <p className="font-bold">Information</p>
                  <Image
                    className={`w-[30px]  cursor-pointer  ${
                      upcoming && "  object-center"
                    } ${tvseries && ""} 
               h-[30px]  rounded-2xl`}
                    width={200}
                    height={200}
                    alt="img"
                    src="/assets/info.png"
                  />
                </div>

                <div className="p-2">
                  <small>{item?.date}</small>
                  <small className="ml-2 text-white/60">{item?.duration}</small>

                  <p className="capitalize text-sm text-white/50">
                    {item?.genre}
                  </p>

                  <div className="flex gap-3">
                    <Image
                      className="object-cover w-[350px] "
                      width={130}
                      height={60}
                      alt="img"
                      src="/assets/ratings.png"
                    />
                    <small>{item?.rating}</small>
                    <small className="text-white/50 -ml-2">
                      ({item?.Views})
                    </small>
                  </div>
                </div>
              </div>
            )}
            {continueWatching && (
              <>
                <p className="font-bold text-lg capitalize mt-2">{item.name}</p>
                <p className="text-gray-500">{item.genre}</p>

                <Image
                  className="absolute top-[63%]  px-3"
                  alt="img"
                  width={400}
                  height={500}
                  src="/assets/pb.png"
                />
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListsCard;
