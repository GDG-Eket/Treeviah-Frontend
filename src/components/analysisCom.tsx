import React, { useState, useEffect } from "react";
import Link from "next/link";
import Table from "./table";

const data = [
  ["Virtual Reality", "10", "12/03/2023", "12"],
  ["World Oceans day", "11", "12/03/2023", "11"],
  ["Man and Dog", "12", "12/03/2023", "15"],
  ["Food for toughts", "9", "12/03/2023", "20"],
];

const headers = ["Name", "Players", "Date", "Question"];

const AnalysisComponent: React.FC = () => {
  return (
    <div>
      <section className="p-4 w-[100%]">
        <div className="w-[100%] flex flex-col md:flex-row justify-between align-middle px-[5%]">
          <span className="mb-[10%] md:mb-0">
            <h1 className="text-[32px] text-primary font-semibold self-centers">
              Analysis
            </h1>
            <p className="text-[14px] self-centers">
              Uncover Insights: Dive Deep into Performance Analysis and Elevate
              Your Game
            </p>
          </span>
          <span className="flex justify-center align-middle">
            <ul className="flex">
              <li className="flex justify-center align-middle gap-5 md:gap-10 flex-row border-b border-b-gray-light">
                <Link
                  href=""
                  className="self-end text-end border-b-4 border-b-transparent hover:border-b-primary active:border-b-primary"
                >
                  All
                </Link>
                <Link
                  href=""
                  className="self-end text-end border-b-4 border-b-transparent hover:border-b-primary active:border-b-primary"
                >
                  Drafts
                </Link>
                <Link
                  href=""
                  className="self-end text-end border-b-4 border-b-transparent hover:border-b-primary active:border-b-primary"
                >
                  Hosted
                </Link>
                <Link
                  href=""
                  className="self-end text-end border-b-4 border-b-transparent hover:border-b-primary active:border-b-primary"
                >
                  Joined
                </Link>
              </li>
            </ul>
          </span>
        </div>
        <div>
          <div className="mx-[5%] p-4 rounded-md shadow-md mt-[5%]">
            <Table headers={headers} data={data} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AnalysisComponent;
