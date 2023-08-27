import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import "../../styles/dashboard.css";

interface TableInterface {
  nickname: string;
  rank: string;
  imagecorrect: string;
  imagewrong: string;
  correct: string;
  incorrect: string;
  unanswered: number;
  total: number;
}

interface TableHeadInterface {
  nickname: string;
  rank: string;
  correct: string;
  incorrect: string;
  unanswered: string;
  total: string;
}

// const data = [
//   ["Chicken feed", "1", "98% Correct", "2% Incorrect", "0", "9980"],
//   ["Blur", "1", "98% Correct", "2% Incorrect", "0", "9980"],
//   ["Blur", "2", "98% Correct", "2% Incorrect", "0", "9980"],
//   ["Food for toughts", "9", "98% Correct", "2% Incorrect", "0", "9980"],
// ];

// const headers = [
//   "Nickname",
//   "Ranks",
//   "Correct",
//   "Incorrect",
//   "Unanswered",
//   "Total",
// ];

const VirtulPlayers: React.FC = () => {

  const tablehead: TableHeadInterface[] = [
    { nickname: "Nickname",
     rank: "Rank",
     correct: "Correct",
     incorrect: "Incorrect",
     unanswered: "Unanswered",
     total: "Total",
   }
  ]

   const tabledata: TableInterface[] = [
    
    {
      nickname: "Chicken feed",
      rank: "1",
      imagecorrect: "/../public/Images/green.png",
      imagewrong: "/../public/Images/two.png",
      correct: "98% Correct",
      incorrect: "2% Incorrect",
      unanswered: 0,
      total: 9980,
    },
    {
      nickname: "Blur",
      rank: "1",
      imagecorrect: "/../public/Images/green.png",
      imagewrong: "/../public/Images/two.png",
      correct: "98% Correct",
      incorrect: "2% Incorrect",
      unanswered: 0,
      total: 9980,
    },
    {
      nickname: "Man and Dogs",
      rank: "1",
      imagecorrect: "/../public/Images/green.png",
      imagewrong: "/../public/Images/two.png",
      correct: "98% Correct",
      incorrect: "2% Incorrect",
      unanswered: 0,
      total: 9980,
    },
    {
      nickname: "Food and Thoughts",
      rank: "1",
      imagecorrect: "/../public/Images/ninty.png",
      imagewrong: "/../public/Images/two.png",
      correct: "98% Correct",
      incorrect: "2% Incorrect",
      unanswered: 0,
      total: 9980,
    },
  ];
  return (
    <div>
      <section className="overflow-x-hidden overflow-y-auto h-[100vh] w-[100%] pt-5 pb-[10%]">
        <div className="w-[100%] flex flex-row justify-between align-middle md:px-[5%] py-4">
          <div>
            <Link href="/home" className="text-primary hover:text-purple-800 pl-2">
              Go Back
            </Link>
          </div>
        </div>
        <div className="menuGrid md:px-[5%]">
          <div className="mb-[10%] md:mb-0">
            <h1 className="text-[32px] text-primary font-semibold self-centers">
              Analysis
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
          <div className="mx-[3%] p-4 rounded-md shadow-md mt-[5%] flex flex-col">
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
            <div className="md:mx-[5%] p-4 rounded-md">
            <table className="w-[100%] table-auto">
          <thead>
            <tr className="border-b border-gray-light">
              {tablehead.map((data, index) => (
                <th
                  className="text-left font-semibold text-primary px-[2%]"
                  key={index}
                >
                  <ul className="grid grid-cols-6 justify-around items-center w-[100%] gap-10 py-4">
                    <li className="self-center items-center">
                      {data.nickname}
                    </li>
                    <li className="self-center items-center">
                      {data.rank}
                    </li>
                    <li className="self-center items-center">{data.correct}</li>
                    <li className="self-center items-center">{data.incorrect}</li>
                    <li className="self-center items-center">{data.unanswered}</li>
                    <li className="self-center items-center">{data.total}</li>
                  </ul>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {tabledata.map((data, index) => (
                <td key={index} className="w-[100%] flex flex-col px-[1%]">
                  <ul className="grid grid-cols-6 justify-around items-center w-[100%] gap-10 py-4">
                    <li className="self-start items-start">{data.nickname}</li>
                    <li className="self-start items-start">{data.rank}</li>
                    <li className="self-start items-start flex justify-center">
                      <div className="pr-2">
                        <Image
                          src={data.imagecorrect}
                          alt="image.png"
                          width={700}
                          height={300}
                          className="w-7 h-7"
                        />
                      </div>
                      <div>{data.correct}</div>
                    </li>
                    <li className="self-start items-start flex justify-center">
                      <div className="pr-2">
                        <Image
                          src={data.imagewrong}
                          alt="image.png"
                          width={700}
                          height={300}
                          className="w-7 h-7"
                        />
                      </div>
                      <div>{data.incorrect}</div>
                    </li>
                    <li className="self-start items-start">
                      {data.unanswered}
                    </li>
                    <li className="self-start items-start">{data.total}</li>
                  </ul>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VirtulPlayers;
