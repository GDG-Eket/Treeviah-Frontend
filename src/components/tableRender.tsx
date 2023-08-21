import React, { useState, useEffect } from "react";
import Link from "next/link";
import Table from "./virtual/realityTable";
import Tryout from "./analysis/question";
const GreenImage = require("../../public/Images/green.png");
const RedImage = require("../../public/Images/red.png");

const data = [
  [
    "Which technology is commonly used in virtual reality headsets?",
    "Multiple Choice",
    "/../public/Images/green.png",
    "100% Correct",
  ],
  [
    "Which technology is commonly used in virtual reality headsets?",
    "Multiple Choice",
    "/../public/Images/green.png",
    "100% Correct",
  ],
  [
    "Which technology is commonly used in virtual reality headsets?",
    "Multiple Choice",
    "/../public/Images/green.png",
    "100% Correct",
  ],
  [
    "Which technology is commonly used in virtual reality headsets?",
    "Multiple Choice",
    "/../public/Images/green.png",
    "100% Correct",
  ],
  [
    "Which technology is commonly used in virtual reality headsets?",
    "Multiple Choice",
    "/../public/Images/green.png",
    "100% Correct",
  ],
  [
    "Which technology is commonly used in virtual reality headsets?",
    "Multiple Choice",
    "/../public/Images/green.png",
    "100% Correct",
  ],
  [
    "Which technology is commonly used in virtual reality headsets?",
    "Multiple Choice",
    "/../public/Images/green.png",
    "100% Correct",
  ],
  [
    "Which technology is commonly used in virtual reality headsets?",
    "Multiple Choice",
    "/../public/Images/green.png",
    "100% Correct",
  ],
  [
    "Which technology is commonly used in virtual reality headsets?",
    "Multiple Choice",
    "/../public/Images/green.png",
    "100% Correct",
  ],
  [
    "Which technology is commonly used in virtual reality headsets?",
    "Multiple Choice",
    "/../public/Images/green.png",
    "100% Correct",
  ],
  [
    "Which technology is commonly used in virtual reality headsets?",
    "Multiple Choice",
    "/../public/Images/red.png",
    "100% Correct",
  ],
  [
    "Which technology is commonly used in virtual reality headsets?",
    "Multiple Choice",
    "/../public/Images/red.png",
    "100% Correct",
  ],
];

const headers = ["Question", "Type", "Correct/Incorrect"];

const TableRender: React.FC = () => {
  return (
    <>
      <section className="w-[100%] pt-5 pb-[20%] overflow-x-hidden overflow-y-auto h-[100vh]">
        <div className="w-[100%] flex flex-row justify-between align-middle mt-4 px-[3%]">
          <div>
            <Link href="/" className="text-primary hover:text-purple-800 pl-2">
              Go Back
            </Link>
          </div>
        </div>
        <div className="menuGrid md:px-[5%]">
          <div className="mb-[10%] md:mb-0">
            <h1 className="text-[32px] text-primary font-semibold self-centers">
              Virtual Reality
            </h1>
          </div>
          <div className="flex justify-center align-middle">
            <ul className="flex">
              <li className="flex justify-center align-middle gap-5 md:gap-10 flex-row border-b border-b-gray-light">
                <Link
                  href=""
                  className="self-end text-end border-b-4 border-b-transparent hover:border-b-primary active:border-b-primary"
                >
                  Summary
                </Link>
                <Link
                  href=""
                  className="self-end text-end border-b-4 border-b-transparent hover:border-b-primary active:border-b-primary"
                >
                  Questions
                </Link>
                <Link
                  href=""
                  className="self-end text-end border-b-4 border-b-transparent hover:border-b-primary active:border-b-primary"
                >
                  Players
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="md:mx-[5%] p-4 rounded-md shadow-md mt-[5%] flex flex-col">
            <div className="float-left flex justify-start w-[100%] border-b-gray-light">
                <ul className="flex">
                  <li className="flex justify-center align-middle gap-5 md:gap-10 flex-row border-b border-b-gray-light">
                    <Link
                      href="/players"
                      className="self-end text-end border-b-4 border-b-transparent hover:border-b-primary"
                    >
                      All(5)
                    </Link>
                    <Link
                      href="undone"
                      className="self-end text-end border-b-4 border-b-transparent hover:border-b-purple-300 border-b-primary"
                    >
                      Didn't Finish
                    </Link>
                  </li>
                </ul>
            </div>
            <Tryout />
          </div>
        </div>
      </section>
    </>
  );
};

export default TableRender;
