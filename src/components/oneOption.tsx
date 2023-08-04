import React from "react";
import Link from "next/link";
import Table from "./realityTable";
import ResponsiveTable from "./typetable";
import "../styles/dashboard.css";

const data = [
  {
    col1: "Chicken feed",
    col2: "Multiple",
    col3: "98% Correct",
    col4: "2% Incorrect",
    col5: "0",
    col6: "9980",
  },
  {
    col1: "Blur",
    col2: "True/False",
    col3: "98% Correct",
    col4: "2% Incorrect",
    col5: "0",
    col6: "9980",
  },
  {
    col1: "Chicken feed",
    col2: "Multiple",
    col3: "98% Correct",
    col4: "2% Incorrect",
    col5: "0",
    col6: "9980",
  },
  {
    col1: "Blur",
    col2: "True/False",
    col3: "98% Correct",
    col4: "2% Incorrect",
    col5: "0",
    col6: "9980",
  },
  {
    col1: "Chicken feed",
    col2: "Multiple",
    col3: "98% Correct",
    col4: "2% Incorrect",
    col5: "0",
    col6: "9980",
  },
  {
    col1: "Blur",
    col2: "True/False",
    col3: "98% Correct",
    col4: "2% Incorrect",
    col5: "0",
    col6: "9980",
  },
  {
    col1: "Chicken feed",
    col2: "Multiple",
    col3: "98% Correct",
    col4: "2% Incorrect",
    col5: "0",
    col6: "9980",
  },
  {
    col1: "Blur",
    col2: "True/False",
    col3: "98% Correct",
    col4: "2% Incorrect",
    col5: "0",
    col6: "9980",
  },
  
  // Add other data rows here
];

const columns = [
  { Header: "Question", accessor: "col1" },
  { Header: "Type", accessor: "col2" },
  { Header: "Answered", accessor: "col3" },
  { Header: "Correct/Incorrect", accessor: "col4" },
  { Header: "Time", accessor: "col5" },
  { Header: "Total", accessor: "col6" },
];

const OneOptionComp: React.FC = () => {
  return (
    <div className="overflow-y-auto overflow-x-hidden h-[100vh] mb-10">
      <span className="w-[100%] flex flex-row justify-between align-middle mt-4 px-[3%]">
        <span>
          <Link href="/" className="text-primary hover:text-purple-800 pl-2">
            Go Back
          </Link>
        </span>
      </span>
      <div className="menuGrid md:px-[5%]">
        <div className="mb-[10%] md:mb-0">
          <h1 className="lg:text-[32px] text-[30px] text-primary font-semibold self-centers">
            Chicken Feed
          </h1>
        </div>
        <div className="flex justify-center align-middle">
          <ul className="flex">
            <li className="flex justify-center align-middle gap-5 md:gap- flex-row border-b border-b-gray-light">
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
        <div className="md:mx-[5%] p-4 rounded-md shadow-md mt-[5%] tableresponsive">
          <ResponsiveTable columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
};

export default OneOptionComp;
