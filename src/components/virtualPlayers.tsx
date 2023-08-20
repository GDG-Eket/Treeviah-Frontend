import React, { useState, useEffect } from "react";
import Link from "next/link";
import Table from "./table";

const data = [
  ["Chicken feed", "1", "98% Correct", "2% Incorrect", "0", "9980"],
  ["Blur", "1", "98% Correct", "2% Incorrect", "0", "9980"],
  ["Man and Dog", "2", "98% Correct", "2% Incorrect", "0", "9980"],
  ["Food for toughts", "9", "98% Correct", "2% Incorrect", "0", "9980"],
];

const headers = [
  "Nickname",
  "Ranks",
  "Correct",
  "Incorrect",
  "Unanswered",
  "Total",
];

const VirtulPlayers: React.FC = () => {
  return (
    <div>
      <section className="p-4 w-[100%]">
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
              Analysis
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
          <div className="mx-[5%] p-4 rounded-md shadow-md mt-[5%] flex flex-col">
            <div className="float-left flex justify-start w-[100%] border-b-gray-light">
              <div className="flex justify-center align-middle">
                <ul className="flex">
                  <li className="flex justify-center align-middle gap-5 md:gap-10 flex-row border-b border-b-gray-light">
                    <Link
                      href="/players"
                      className="self-end text-end border-b-4 border-b-transparent hover:border-b-purple-300 border-b-primary"
                    >
                      All(5)
                    </Link>
                    <Link
                      href="undone"
                      className="self-end text-end border-b-4 border-b-transparent hover:border-b-primary active:border-b-primary"
                    >
                      Didn't Finish
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <Table headers={headers} data={data} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default VirtulPlayers;
