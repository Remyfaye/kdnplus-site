import { tvSeries } from "@/constants";
import Image from "next/image";
import React from "react";

const Hero = ({ tvseries, setIsInfo, item, myList }) => {
  const bgImg1 = tvSeries[0]?.image;
  const bgImg2 = tvSeries[10]?.image;
  return (
    <div className="mb-10 -mx-5 lg:-mx-[60px] gradient bg-red-300">
      {myList ? (
        <>
          <div className="  info-gradient lg:px-[60px] flex px-5 justify-start items-center h-[300px]">
            <h1 className="font-bold text-2xl">My List</h1>
          </div>
        </>
      ) : (
        <Image
          className="w-full  -mt-[15rem] absolute h-[730px]  object-cover object-top  bg-gradient-to-b opacity-[0.8]"
          width={1000}
          height={1000}
          alt="img"
          src={tvseries ? bgImg2 : bgImg1}
        />
      )}

      {myList ? (
        <></>
      ) : (
        <div className=" pt-[15rem] px-5 lg:px-10 relative gradient h-[510px] ">
          {/* logo image */}
          <Image
            className={
              tvseries
                ? "h-[90px] font-bold object-cover w-[330px] -ml-[3rem] "
                : " h-[100px] object-cover -mb-5 -ml-4 font-bold w-[300px] "
            }
            width={1000}
            height={1000}
            alt="img"
            src={tvseries ? "/assets/gh.png" : "/assets/rof.png"}
          />
          <p className="lg:w-[60%] my-5 text-md">{item?.description}</p>
          <div className="flex items-center gap-5 mb-10">
            <button className="bg-primary w-[173px] rounded-[24px] p-3 ">
              Watch Now
            </button>
            <p className="rounded-full border-white border-[1px] px-3 py-1 text-lg">
              +
            </p>
            <Image
              className={`w-[30px]  cursor-pointer h-[30px] `}
              width={200}
              height={200}
              alt="img"
              src="/assets/info.png"
              onClick={() => setIsInfo(true)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
