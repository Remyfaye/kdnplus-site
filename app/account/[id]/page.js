"use client";
import { accountNav, profiles } from "@/constants";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const router = useRouter();
  const [active, setActive] = useState("profile");
  const [user, setUser] = useState(null);
  const [clickedEdit, setClickedEdit] = useState(null);

  const params = useParams();

  const { id } = params;

  useEffect(() => {
    const fetchedUser = profiles.filter((item) => item.id === id);
    setUser(fetchedUser[0]);
    console.log(user);
  }, []);

  // console.log(user);

  return (
    <div
      className={`${
        clickedEdit !== null && " bg-black inset-0"
      } check-grid -mt-32 pt-[3rem] px-5  -mx-5 lg:-mx-[60px] pb-10`}
    >
      <Image
        className="cursor-pointer lg:-mt-1 lg:mx-20 "
        width={20}
        height={20}
        alt="img"
        src="/icons/arrow-left.png"
        onClick={() => router.back()}
      />

      {clickedEdit === null && (
        <div className=" max-w-xl mx-auto mb-10 ">
          {/* top */}
          <div className="flex flex-col justify-center gap-3 items-center">
            <h1>Account </h1>
            <small className="text-white/50 -mt-2">
              Manage your details and personal preferences here
            </small>

            {/* nav */}
            <div className="border-[1px] mt-3 w-[320px]  py-1 items-center justify-center border-white/50 flex gap-3 rounded-[15px] ">
              {accountNav.map((item, index) => (
                <div
                  onClick={() => setActive(item.label)}
                  className={
                    active === item.label
                      ? "bg-white font-500 px-3 py-1 cursor-pointer capitalize rounded-[8px] text-black "
                      : "capitalize cursor-pointer"
                  }
                >
                  {item.label}
                </div>
              ))}
            </div>
          </div>

          {/* first row */}
          <div className="border-[1px] bg-[#121212] border-white/50 rounded-[14px] mt-5 flex justify-between items-center p-3">
            <div className="flex gap-3 items-center">
              <Image
                className={
                  !user?.image
                    ? "bg-gray-300 w-[50px] h-[50px] rounded-full"
                    : "bg-white/30 w-[50px] h-[50px] cursor-pointer rounded-full object-center  "
                }
                width={100}
                height={100}
                alt="img"
                src={user?.image}
                // onClick={() => setIsAccountClicked(!isAccountClicked)}
              />
              <p>{user?.firstName}</p>
              <span className="-ml-1">{user?.lastName}</span>
            </div>

            <div className="flex items-center">
              <small className="text-green-500">Your profile</small>
              <div className="cursor-pointer gap-2 flex items-center rounded-xl px-3 py-1 border-[1px] border-white/50 ml-3">
                <small onClick={() => setClickedEdit("profile")}>Edit</small>
                <Image
                  className="cursor-pointer   "
                  width={15}
                  height={15}
                  alt="img"
                  src="/icons/edit.png"
                  onClick={() => setClickedEdit("profile")}
                />
              </div>
            </div>
          </div>

          {/* personal information */}
          <div className="border-[1px] bg-[#121212] shadow-xl border-[#6B6B6B] rounded-[14px] mt-5  p-3">
            {/* top */}
            <div className="flex justify-between items-center">
              <h1>Personal Information</h1>

              <div className="cursor-pointer gap-2 flex items-center rounded-xl px-3 py-1 border-[1px] border-white/50 ml-3">
                <small onClick={() => setClickedEdit("personal information")}>
                  Edit
                </small>
                <Image
                  className="cursor-pointer   "
                  width={15}
                  height={15}
                  alt="img"
                  src="/icons/edit.png"
                  onClick={() => setClickedEdit("personal information")}
                />
              </div>
            </div>

            {/* body */}
            <div className="flex gap-10 lg:gap-32 mt-5">
              <div>
                <div>
                  <p className="font-bold text-white/70">First Name</p>
                  <p className="text-white/50 ml-4 animate-pulse">
                    {user ? user?.firstName : "jonny"}
                  </p>
                </div>

                <div className="mt-3 ">
                  <p className="font-bold text-white/70">Email Address</p>
                  <small className="text-white/50 ml-4 break-words w-48">
                    {user?.email}
                  </small>
                </div>
              </div>

              <div>
                <div>
                  <p className="font-bold text-white/70">Last Name</p>
                  <small className="text-white/50 ml-4">{user?.lastName}</small>
                </div>

                <div className="mt-3">
                  <p className="font-bold text-white/70">Phone </p>
                  <small className="text-white/50 ml-4">{user?.phone}</small>
                </div>
              </div>
            </div>
          </div>

          {/* Address  */}
          <div className="border-[1px] bg-[#121212] border-white/50 rounded-[14px] mt-5  p-3">
            {/* top */}
            <div className="flex justify-between items-center">
              <h1>Address</h1>

              <div className="cursor-pointer gap-2 flex items-center rounded-xl px-3 py-1 border-[1px] border-white/50 ml-3">
                <small onClick={() => setClickedEdit("address")}>Edit</small>
                <Image
                  className="cursor-pointer   "
                  width={15}
                  height={15}
                  alt="img"
                  src="/icons/edit.png"
                  onClick={() => setClickedEdit("address")}
                />
              </div>
            </div>

            {/* body */}
            <div className="flex gap-10">
              <div>
                <div>
                  <p className="font-bold text-white/70">Country</p>
                  <small className="text-white/50 ml-4">{user?.name}</small>
                </div>

                <div className="mt-3">
                  <p className="font-bold text-white/70">Postal code</p>
                  <small className="text-white/50 ml-4">
                    {user?.postalCode}
                  </small>
                </div>
              </div>

              <div>
                <div>
                  <p className="font-bold text-white/70">City/State</p>
                  <small className="text-white/50 ml-4">{user?.city}</small>
                </div>
              </div>
            </div>
          </div>

          {/* manage profiles*/}
          <div className="border-[1px] bg-[#121212] border-white/50 rounded-[14px] mt-5  p-3">
            {/* top */}
            <div className="flex justify-between items-center">
              <h1>Manage profiles</h1>

              {/* arrow */}
              <Image
                className="cursor-pointer   "
                width={15}
                height={15}
                alt="img"
                src="/icons/arrow-right.png"
                onClick={() => setClickedEdit("manage profiles")}
              />
            </div>

            {/* body */}
            <div className="flex mt-2">
              {profiles?.map((item) => (
                <Image
                  onClick={() => setIsToggle(!isToggle)}
                  className="cursor-pointer object-cover border-[1px] border-white/30 rounded-full h-[30px] w-[30px]"
                  src={item.image}
                  width={80}
                  height={80}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {clickedEdit === "profile" && (
        <>
          <p
            onClick={() => setClickedEdit(null)}
            className="cursor-pointer right-[5%] lg:right-[21%] mb-5 px-2 text-center font-bold rounded-full shadow-xl bg-white text-black absolute top-[5%] z-50"
          >
            x
          </p>

          <div
            className={`p-3 flex flex-col transition-transform  ${
              clickedEdit !== null ? "   scale-100" : "scale-0"
            } ease-in-out duration-500 opacity-100 items-center capitalize max-w-xl mx-auto mb-10 border-[1px] border-white/70 bg-[#2e2e2e] rounded-[13px]`}
          >
            <div className="flex flex-col items-center ">
              <h1 className="font-bold text-lg">edit your profile</h1>
              <p className="text-[13px] text-white/50 text-center my-3">
                Personalize your identity by customizing yourf name and avatar
                to make your profile uniquely yours.{" "}
              </p>
            </div>

            <div className="gap-8 my-5 w-[100%] mx-auto items-center flex justify-center">
              <div className="flex flex-col gap-2 items-center ">
                <Image
                  onClick={() => setIsToggle(!isToggle)}
                  className="cursor-pointer object-cover border-[1px] border-white/30 rounded-full h-[80px] w-[80px]"
                  src="/icons/2.png"
                  width={50}
                  height={50}
                />
                <small className="bg-white px-2 py-1 text-black rounded-lg">
                  Change Avatar
                </small>
              </div>
              <input
                className="w-[65%]  bg-transparent border-[1px] px-5 py-2 rounded-[5px] border-white/50"
                placeholder="Steven Akomisa|"
              />
            </div>

            <div className="mt-3 ">
              <div className="flex gap-3">
                <Image
                  onClick={() => setIsToggle(!isToggle)}
                  className="cursor-pointer object-cover  "
                  src="/icons/checkbox.png"
                  width={20}
                  height={20}
                />
                <small>Autoplay next episode in a series on all devices.</small>
              </div>

              <div className="flex gap-3 my-2">
                <Image
                  onClick={() => setIsToggle(!isToggle)}
                  className="cursor-pointer object-cover  "
                  src="/icons/checkbox.png"
                  width={20}
                  height={20}
                />
                <small>Autoplay previews while browsing on all devices..</small>
              </div>
            </div>

            {/* buttons */}
            <div className=" w-[80%] mt-5">
              <p className="bg-primary py-1 text-center w-full text-white rounded-full">
                Save
              </p>
              <p className="rounded-full py-1 text-center my-3 border-[1px] border-white/50">
                Cancel
              </p>
            </div>
          </div>
        </>
      )}

      {clickedEdit === "personal information" && (
        <>
          <p
            onClick={() => setClickedEdit(null)}
            className="cursor-pointer right-[5%] lg:right-[21%] mb-5 px-2 text-center font-bold rounded-full shadow-xl bg-white text-black absolute top-[5%] z-50"
          >
            x
          </p>

          <div className="p-3 capitalize max-w-xl mx-auto mb-10 border-[1px] border-white/20 bg-[#2e2e2e] rounded-[13px]  ">
            <div className="flex flex-col items-center ">
              <h1 className="font-bold text-lg">
                edit your personal information
              </h1>
              <p className="text-[13px] text-white/50 text-center my-1">
                Make changes to your personal information.
              </p>
            </div>

            {/* form input */}
            <div className="mt-5 px-3">
              {/* first name */}
              <div className="flex flex-col gap-3">
                <label className="text-white/50 text-[12px]">First Name</label>
                <input
                  className=" mb-5 -mt-2 bg-transparent border-[1px] px-2 py-1 rounded-[5px] border-white/20"
                  placeholder="Stevenforreal|"
                />
              </div>

              {/* last name */}
              <div className="flex flex-col gap-3">
                <label className="text-white/50 text-sm text-[12px]">
                  Last Name
                </label>
                <input
                  className=" mb-5 -mt-2 bg-transparent border-[1px] px-2 py-1 rounded-[5px] border-white/20"
                  placeholder="Akomisa"
                />
              </div>

              {/* email */}
              <div className="flex flex-col gap-3">
                <label className="text-white/50 text-sm text-[12px]">
                  Email
                </label>
                <input
                  className=" placeholder-white/20 mb-5 -mt-2 bg-transparent border-[1px] px-2 py-1 rounded-[5px] border-white/20"
                  placeholder="akomisasteven05@gmail.com"
                />
              </div>

              {/* email */}
              <div className="flex flex-col gap-3">
                <label className="text-white/50 text-sm text-[12px]">
                  Phone number
                </label>
                <input
                  className=" placeholder-white/20 mb-5 -mt-2 bg-transparent border-[1px] px-2 py-1 rounded-[5px] border-white/20"
                  placeholder="+234 702 3453 945 "
                />
              </div>
            </div>

            {/* buttons */}
            <div className="w-[80%] mx-auto mt-3">
              <p className="bg-primary py-1 text-center w-full text-white rounded-full">
                Save
              </p>
              <p className="rounded-full py-1 text-center my-3 border-[1px] border-white/50">
                Cancel
              </p>
            </div>
          </div>
        </>
      )}

      {clickedEdit === "address" && (
        <>
          <p
            onClick={() => setClickedEdit(null)}
            className="cursor-pointer right-[5%] lg:right-[21%] mb-5 px-2 text-center font-bold rounded-full shadow-xl bg-white text-black absolute top-[5%] z-50"
          >
            x
          </p>

          <div className="p-3 capitalize max-w-xl mx-auto mb-10 border-[1px] border-white/20 bg-[#2e2e2e] rounded-[13px]  ">
            <div className="flex flex-col items-center ">
              <h1 className="font-bold text-lg">edit your adress</h1>
              <p className="text-[13px] text-white/50 text-center my-1">
                Make changes to your address
              </p>
            </div>

            {/* form input */}
            <div className="mt-5 px-3">
              {/* Country */}
              <div className="flex flex-col gap-3">
                <label className="text-white/50 text-[12px]">Country</label>
                <input
                  className=" mb-5 -mt-2 bg-transparent border-[1px] px-2 py-1 rounded-[5px] border-white/20"
                  placeholder="select country"
                />
              </div>

              {/* City/State*/}
              <div className="flex flex-col gap-3">
                <label className="text-white/50 text-sm text-[12px]">
                  City/State
                </label>
                <input
                  className=" mb-5 -mt-2 bg-transparent border-[1px] px-2 py-1 rounded-[5px] border-white/20"
                  placeholder="select country"
                />
              </div>

              {/* Postal */}
              <div className="flex flex-col gap-3">
                <label className="text-white/50 text-sm text-[12px]">
                  Postal
                </label>
                <input
                  className=" placeholder-white/20 mb-5 -mt-2 bg-transparent border-[1px] px-2 py-1 rounded-[5px] border-white/20"
                  placeholder="••••••"
                />
              </div>
            </div>

            {/* buttons */}
            <div className="w-[80%] mx-auto mt-3">
              <p className="bg-primary py-1 text-center w-full text-white rounded-full">
                Save
              </p>
              <p className="rounded-full py-1 text-center my-3 border-[1px] border-white/50">
                Cancel
              </p>
            </div>
          </div>
        </>
      )}

      {clickedEdit === "manage profiles" && (
        <>
          <p
            onClick={() => setClickedEdit(null)}
            className="cursor-pointer right-[5%] lg:right-[21%] mb-5 px-2 text-center font-bold rounded-full shadow-xl bg-white text-black absolute top-[5%] z-50"
          >
            x
          </p>
          <div className=" max-w-xl mx-auto mb-10 ">
            {/* top */}
            <div className="flex flex-col justify-center gap-3 items-center">
              <h1>Manage Profiles </h1>
              <small className="text-white/50 -mt-2">
                Update profile details and preferences
              </small>
            </div>

            {/* profiles row */}
            {profiles.map((item) => (
              <div className="border-[1px] bg-[#121212] border-white/50 rounded-[14px] mt-5  p-3">
                <div className="flex gap-3 items-center">
                  <Image
                    className={
                      !item?.image
                        ? "bg-gray-300 w-[30px] h-[30px] rounded-full"
                        : "bg-white/30 w-[30px] h-[30px] cursor-pointer rounded-full object-center  "
                    }
                    width={100}
                    height={100}
                    alt="img"
                    src={item?.image}
                    // onClick={() => setIsAccountClicked(!isAccountClicked)}
                  />
                  <p className="text-[15px]">{item?.firstName}</p>
                  <span className="-ml-1 text-[15px]">{item?.lastName}</span>
                </div>

                <div className="flex items-center mt-4">
                  <small
                    className="bg-white text-black cursor-pointer gap-2 flex items-center rounded-xl px-3 py-1 border-[1px] border-white/50 ml-3"
                    onClick={() => setClickedEdit("profile")}
                  >
                    Manage
                  </small>

                  <small
                    className="cursor-pointer gap-2 flex items-center rounded-xl px-3 py-1 border-[1px] border-white/50 ml-3"
                    onClick={() => setClickedEdit("add profile")}
                  >
                    Select
                  </small>

                  <small
                    className="cursor-pointer gap-2 flex items-center rounded-xl px-3 py-1 border-[1px] border-white/50 ml-3"
                    onClick={() => setClickedEdit("delete profile")}
                  >
                    Delete Profile
                  </small>
                </div>
              </div>
            ))}

            <div className="flex justify-end items-end mt-5">
              <small
                onClick={() => setClickedEdit("add profile")}
                className="flex gap-1 items-center cursor-pointer rounded-full bg-primary px-4 py-2 text-white fles"
              >
                <Image
                  onClick={() => setIsToggle(!isToggle)}
                  className=" "
                  src="/icons/user.png"
                  width={14}
                  height={14}
                />
                <small>Add Profile</small>
              </small>
            </div>
          </div>
        </>
      )}

      {clickedEdit === "add profile" && (
        <>
          <p
            onClick={() => setClickedEdit(null)}
            className="cursor-pointer right-[5%] lg:right-[21%] mb-5 px-2 text-center font-bold rounded-full shadow-xl bg-white text-black absolute top-[5%] z-50"
          >
            x
          </p>

          <div className="p-3 flex flex-col  items-center capitalize max-w-xl mx-auto mb-10 border-[1px] border-white/70 bg-[#2e2e2e] rounded-[13px]  ">
            <div className="flex flex-col items-center ">
              <h1 className="font-bold text-lg">Add a profile</h1>
              <p className="text-[13px] text-white/50 text-center my-3">
                Add a profile to personalize someone’s experience.
              </p>
            </div>

            <div className="gap-8 my-5 w-[100%] mx-auto items-center flex justify-center">
              <div className="flex flex-col gap-2 items-center ">
                <Image
                  onClick={() => setIsToggle(!isToggle)}
                  className="bg-gray-200  border-[1px]  rounded-full h-[65px] w-[65px]"
                  src="/icons/user.png"
                  width={50}
                  height={50}
                />
                <small className="bg-white px-2 py-1 text-black rounded-lg">
                  Choose Avatar
                </small>
              </div>
              <input
                className="w-[65%]  bg-transparent border-[1px] px-5 py-2 rounded-[5px] border-white/50"
                placeholder="Proceed"
              />
            </div>

            <div className="mt-3 ">
              <div className="flex gap-3">
                <Image
                  onClick={() => setIsToggle(!isToggle)}
                  className="cursor-pointer object-cover  "
                  src="/icons/checkbox.png"
                  width={20}
                  height={20}
                />
                <small>Show only movies suitable for viewers under 18</small>
              </div>
            </div>

            {/* buttons */}
            <div className=" w-[80%] mt-5">
              <p className="bg-primary  py-[5px] text-center w-full text-white rounded-full">
                Proceed
              </p>
              <p className="rounded-full py-[5px] text-center my-3 border-[1px] border-white/50">
                Cancel
              </p>
            </div>
          </div>
        </>
      )}

      {clickedEdit === "delete profile" && (
        <div className="mt-8 mb-[15rem]">
          <p
            onClick={() => setClickedEdit(null)}
            className="cursor-pointer right-[5%] lg:right-[21%] mb-5 px-2 text-center font-bold rounded-full shadow-xl bg-white text-black absolute top-[5%] z-50"
          >
            x
          </p>

          <div className="p-3 capitalize max-w-xl mx-auto mb-10 border-[1px] border-white/70 bg-[#2e2e2e] rounded-[13px]  ">
            <div className="flex gap-2">
              <Image
                onClick={() => setIsToggle(!isToggle)}
                className="cursor-pointer object-cover bg-red-200 rounded-full w-[30px] h-[30px]"
                src="/icons/checkbox.png"
                width={80}
                height={80}
              />
              <div className="">
                <h1 className="font-bold text-lg">Delete confirmation</h1>
                <p className="text-[13px] text-white/50 my-3">
                  Confirm deletion? This action is irreversible. Proceed or
                  click cancel to keep your profile.
                </p>
              </div>
            </div>

            {/* buttons */}
            <div className="flex items-center gap-3 justify-end w-full mt-2">
              <p className="rounded-full px-3 py-[5px] text-center my-3 border-[1px] border-white/50">
                Cancel
              </p>
              <p className="bg-primary px-3 py-[5px] text-center  text-white rounded-full">
                Delete profile
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
