"use client";
import React, { useState } from "react";
import HostHeader from "@/components/organisms/header/hostHeader";
import gameTheme1 from "@/../public/Images/gameTheme1.svg";
import gameTheme2 from "@/../public/Images/gameTheme2.svg";
import gameTheme3 from "@/../public/Images/gameTheme3.svg";
import gameTheme4 from "@/../public/Images/gameTheme4.svg";
import gameTheme5 from "@/../public/Images/gameTheme5.svg";
import gameTheme6 from "@/../public/Images/gameTheme6.svg";
import Image from "next/image";

const arrow = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M21 12L3 12"
      stroke="#333333"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 17L3 12L8 7"
      stroke="#333333"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const squareArrow = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M19 9L12 16L5 9"
      stroke="#333333"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const plusIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
  >
    <path
      d="M8 16H24"
      stroke="#333333"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 24L16 8"
      stroke="#333333"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const themes = [
  gameTheme1,
  gameTheme2,
  gameTheme3,
  gameTheme4,
  gameTheme5,
  gameTheme6,
];
const ClassicMode: React.FC = () => {
  const [selectedTheme, setSelectedTheme] = useState<any>(themes[0]);
  const [question, setQuestion] = useState("What animal is this ?");

  return (
    <>
      <HostHeader />
      <div
        className="w-full"
        style={{
          backgroundImage: `url(${selectedTheme?.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-[85%] mx-auto px-8 py-10 grid grid-flow-row grid-cols-4 gap-3">
          <div className=" col-span-1 p-5 rounded-lg bg-white">
            <div className="flex justify-between items-center">
              <h3 className=" font-bold">Themes</h3> <button>{arrow}</button>
            </div>
            <p className=" text-primary-light my-5">Customize your own theme</p>
            <div className="mb-5 rounded-lg border border-dashed flex items-center justify-center w-full h-28 cursor-pointer">
              {plusIcon}
            </div>
            <div className="flex justify-between items-center mb-5">
              <h3 className=" font-bold">Free</h3>{" "}
              <button>{squareArrow}</button>
            </div>
            <div className="grid grid-flow-row grid-cols-2 gap-2 overflow-y-auto max-h-60 no-scrollbar">
              {themes.map((item, index) => (
                <Image
                  onClick={() => setSelectedTheme(item)}
                  key={index}
                  src={item}
                  alt=""
                  width={500}
                  height={500}
                  className={`${
                    item === selectedTheme ? "border-2 border-primary" : ""
                  } h-20 w-full object-cover rounded-lg cursor-pointer`}
                />
              ))}
            </div>
          </div>
          <div className=" col-span-3 rounded-lg">
            <div className="flex flex-col justify-between rounded-lg mb-6 bg-white p-6">
              <h2 className=" font-bold text-2xl">Question 1</h2>
              <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className="my-3 border rounded-lg p-4 h-48 focus:outline-none flex items-start justify-start"
              />
              <div>
                <p className="font-bold mb-2">Add Image</p>
                <div className="grid grid-flow-row grid-cols-6 gap-3">
                  <div className="cursor-pointer rounded-lg border border-dashed flex items-center justify-center w-full h-14 ">
                    {plusIcon}
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-flow-row grid-cols-2 gap-3">
              <div className="rounded-lg bg-[#F00] text-white px-4 py-2">
                <p className="text-base mb-2">Option 1</p>
                <input
                  type="text"
                  className=" border-b-2 border-white text-white bg-transparent focus:outline-none w-full"
                />
              </div>
              <div className="rounded-lg bg-[#FFA500] text-white px-4 py-2">
                <p className="text-base mb-2">Option 1</p>
                <input
                  type="text"
                  className=" border-b-2 border-white text-white bg-transparent focus:outline-none w-full"
                />
              </div>
              <div className="rounded-lg bg-[#0A5AA4] text-white px-4 py-2">
                <p className="text-base mb-2">Option 1</p>
                <input
                  type="text"
                  className=" border-b-2 border-white text-white bg-transparent focus:outline-none w-full"
                />
              </div>
              <div className="rounded-lg bg-[#018101] text-white px-4 py-2">
                <p className="text-base mb-2">Option 1</p>
                <input
                  type="text"
                  className=" border-b-2 border-white text-white bg-transparent focus:outline-none w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClassicMode;
