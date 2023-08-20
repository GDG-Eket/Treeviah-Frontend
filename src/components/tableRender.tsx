import React, { useState, useEffect } from "react";
import Link from "next/link";
import Table from "./realityTable";
// import Red from '../../public/Images/red.png'
// import Green from '../../public/Images/green.png'

const data = [
  [
    "Which technology is commonly used in virtual reality headsets?",
    "Multiple Choice",
    "100% Correct",
  ],
  [
    "Which technology is commonly used in virtual reality headsets?",
    "Multiple Choice",
    "100% Correct",
  ],
  [
    "Which technology is commonly used in virtual reality headsets?",
    "Multiple Choice",
    "100% Correct",
  ],
  [
    "Which technology is commonly used in virtual reality headsets?",
    "Multiple Choice",
    "100% Correct",
  ],
  [
    "Which technology is commonly used in virtual reality headsets?",
    "Multiple Choice",
    "100% Correct",
  ],
  [
    "Which technology is commonly used in virtual reality headsets?",
    "Multiple Choice",
    "100% Correct",
  ],
  [
    "Which technology is commonly used in virtual reality headsets?",
    "Multiple Choice",
    "100% Correct",
  ],
  [
    "Which technology is commonly used in virtual reality headsets?",
    "Multiple Choice",
    "100% Correct",
  ],
  [
    "Which technology is commonly used in virtual reality headsets?",
    "Multiple Choice",
    "100% Correct",
  ],
  [
    "Which technology is commonly used in virtual reality headsets?",
    "Multiple Choice",
    "100% Correct",
  ],
];

const headers = ["Question", "Type", "Correct/Incorrect"];

const TableRender: React.FC = () => {
  return (
    <div>
      <section className="md:p-4 w-[100%]">
        <div className="w-[100%] flex flex-row justify-between align-middle md:px-[5%]">
          <span>
            <Link href="/" className="text-primary hover:text-purple-800 pl-2">
              Go Back
            </Link>
          </span>
        </div>
        <div className="w-[100%] flex flex-col md:flex-row justify-between align-middle md:px-[5%]">
          <span className="mb-[10%] md:mb-0">
            <h1 className="text-[32px] text-primary font-semibold self-centers">
              Virtual Reality
            </h1>
          </span>
          <span className="flex justify-center align-middle">
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
          </span>
        </div>
        <div>
          <div className="md:mx-[5%] p-4 rounded-md shadow-md mt-[5%]">
            <Table headers={headers} data={data} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default TableRender;
