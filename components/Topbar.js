"use client";
import { profiles, topNav } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

const Topbar = ({ currentRoute }) => {
  const router = useRouter();
  const selectedRef = useRef();
  const [active, setActive] = useState("Home");
  const [isToggle, setIsToggle] = useState(false);
  const [isAccountClicked, setIsAccountClicked] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectedRef.current && !selectedRef.current.contains(event.target)) {
        setIsAccountClicked(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    console.log(currentRoute);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const user = profiles[0];
  const id = user?.id;
  return (
    <>
      <div className=" fixed mb-20 lg:bg-gradient-to-b from-[#73737380] to-transparent shadow-xl lg:-mx-[60px] lg:px-[60px] lg:shadow-sm lg:pt-[15px] py-1  w-full  z-50">
        <div className="flex items-center justify-between ">
          {/* logo */}
          <Link href="/">
            <Image
              className="w-[100px]  lg:h-[20px] mt-3 mb-5 object-cover  "
              width={100}
              height={100}
              alt="img"
              src="/assets/logo.png"
            />
          </Link>

          <Image
            onClick={() => setIsToggle(!isToggle)}
            className="w-[6px] cursor-pointer h-[20px] mr-10 lg:hidden"
            src="/assets/menu.png"
            width={30}
            height={30}
          />

          {/* nav */}
          <div className="lg:flex hidden gap-5 text-[14px]">
            {topNav.map((item) => (
              <>
                <Link
                  onClick={() => setActive(item.label)}
                  className={
                    active === item.label
                      ? "border-b-primary border-b-[3px]"
                      : ""
                  }
                  href={item.route}
                >
                  {item.label}
                </Link>
              </>
            ))}
          </div>

          {/* profile */}
          <div className="lg:flex items-center gap-5 hidden">
            {/* search */}
            <div>
              {/* <input placeholder="search" className="bg-transparent px-5" /> */}
              <Image
                className="  "
                width={20}
                height={20}
                alt="img"
                src="/assets/search.png"
              />
            </div>

            {/* profile image*/}
            <div className="flex gap-5 items-center">
              <Image
                className=" "
                width={18}
                height={18}
                alt="img"
                src="/assets/not.png"
              />
              <Image
                className=" w-[30px] h-[30px] cursor-pointer rounded-full object-center  "
                width={100}
                height={100}
                alt="img"
                src={user?.image}
                onClick={() => setIsAccountClicked(!isAccountClicked)}
              />
            </div>
          </div>
        </div>

        {isToggle && (
          <div className="bg-gray-900 w-[90%] lg:hidden p-3 z-50">
            <div className="lg:hidden text-lg flex flex-col">
              {topNav.map((item) => (
                <>
                  <Link
                    onClick={() => setActive(item.label)}
                    className={
                      active === item.label
                        ? "border-b-primary w-[60%] my-3 border-b-[3px]"
                        : ""
                    }
                    href={item.route}
                  >
                    {item.label}
                  </Link>
                </>
              ))}
            </div>

            {/* profile */}
            <div className="lg:flex items-center gap-5 hidden">
              {/* search */}
              <div>
                {/* <input placeholder="search" className="bg-transparent px-5" /> */}
                <Image
                  className=" w-[20px] h-[20px]  rounded-full object-center  "
                  width={100}
                  height={100}
                  alt="img"
                  src="/assets/search.png"
                />
              </div>

              {/* profile */}
              <div className="flex gap-3 items-center">
                <Image
                  className=" w-[20px] h-[20px]  rounded-full object-center  "
                  width={100}
                  height={100}
                  alt="img"
                  src="/assets/not.png"
                />
                <Image
                  className=" w-[30px] h-[30px]  rounded-full object-center  "
                  width={100}
                  height={100}
                  alt="img"
                  src="/assets/01.jpg"
                />
              </div>
            </div>
          </div>
        )}

        {isAccountClicked && (
          <div
            ref={selectedRef}
            className="bg-[#2e2e2e] rounded-[13px] p-3 fixed right-10 w-[230px]"
          >
            <div className="border-b-[1px] border-white/50 -m-3 p-3">
              {profiles?.map((item) => (
                <div className="flex items-center my-2 justify-between">
                  <p>{item.firstName}</p>
                  <Image
                    onClick={() => setIsToggle(!isToggle)}
                    className="cursor-pointer object-cover border-[1px] border-white/30 rounded-full h-[30px] w-[30px]"
                    src={item.image}
                    width={80}
                    height={80}
                  />
                </div>
              ))}
            </div>

            {/* account options */}
            <div className="mt-5 mb-3">
              <div className="flex justify-between items-center border-b-[1px] border-white/50 rounded-b-lg py-2">
                <Link href={`/account/${id}`}>Account</Link>
                <Image
                  onClick={() => router.push(`/account/${id}`)}
                  className="cursor-pointer "
                  src="/icons/user.png"
                  width={30}
                  height={30}
                />
              </div>
              <div className="flex justify-between items-center border-b-[1px] border-white/50 rounded-b-lg py-2">
                <p>Contact</p>
                <Image
                  onClick={() => setIsToggle(!isToggle)}
                  className="cursor-pointer "
                  src="/icons/contact.png"
                  width={30}
                  height={30}
                />
              </div>
              <div className="flex justify-between items-center border-b-[1px] border-white/50 rounded-b-lg py-2">
                <p>Sign Out</p>
                <Image
                  onClick={() => setIsToggle(!isToggle)}
                  className="cursor-pointer "
                  src="/icons/logout.png"
                  width={30}
                  height={30}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Topbar;
