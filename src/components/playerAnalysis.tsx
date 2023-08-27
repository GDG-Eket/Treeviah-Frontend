import React from "react";
import Link from "next/link";
import Image from "next/image";
import "../styles/dashboard.css";
import Photo from '../../public/Images/green.png'

interface playerInterface {
  question: string;
  type: string;
  image: string;
  imageTwo: string;
  correct: string;
  time: number;
  total: number;
}

interface playerHeadInterface {
  question: string;
  type: string;
  answerd: string;
  correct: string;
  time: string;
  total: string;
}

const PlayerAnalysis: React.FC = () => {
  const head: playerHeadInterface[] = [
    {
      question: "Question",
      type: "Type",
      answerd: "Answered",
      correct: "Correct/Incorrect",
      time: "Time",
      total: "Total",
    },
  ];

  const data: playerInterface[] = [
    {
      question: "Blur",
      type: "True/False",
      image: "/../public/Images/ninty.png",
      imageTwo: "/../public/Images/tick.png",
      correct: "2% Incorrect",
      time: 0,
      total: 9980,
    },
    {
      question: "Chicken feed",
      type: "Multiple",
      image: "/../public/Images/red.png",
      imageTwo: "/../public/Images/tick.png",
      correct: "2% Incorrect",
      time: 0,
      total: 9980,
    },
    {
      question: "Blur",
      type: "True/False",
      image: "/../public/Images/ninty.png",
      imageTwo: "/../public/Images/ex.png",
      correct: "2% Incorrect",
      time: 0,
      total: 9980,
    },
    {
      question: "Chicken feed",
      type: "Multiple",
      image: "/../public/Images/red.png",
      imageTwo: "/../public/Images/tick.png",
      correct: "2% Incorrect",
      time: 0,
      total: 9980,
    },
    {
      question: "Blur",
      type: "True/False",
      image: "/../public/Images/red.png",
      imageTwo: "/../public/Images/ex.png",
      correct: "2% Incorrect",
      time: 0,
      total: 9980,
    },
    {
      question: "Chicken feed",
      type: "Multiple",
      image: "/../public/Images/ninty.png",
      imageTwo: "/../public/Images/ex.png",
      correct: "2% Incorrect",
      time: 0,
      total: 9980,
    },
    {
      question: "Blur",
      type: "True/False",
      image: "/../public/Images/red.png",
      imageTwo: "/../public/Images/ex.png",
      correct: "2% Incorrect",
      time: 0,
      total: 9980,
    },
  ];

  return (
    <div className="pt-5 w-[100%] pb-[20%] overflow-y-auto h-[100vh]">
      <span className="w-[100%] flex flex-row justify-between align-middle mt-4 px-[3%]">
        <span>
          <Link href="/home" className="text-primary hover:text-purple-800 pl-2">
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
          <div className="overflow-x-auto">
            <table className="w-[100%] table-auto">
              <thead>
                <tr className="border-b border-gray-light">
                  {head.map((data, index) => (
                    <th
                      className="text-left font-semibold text-primary px-[2%]"
                      key={index}
                    >
                      <ul className="grid grid-cols-6 justify-around items-center w-[100%] gap-10 py-4">
                        <li className="self-center items-center">
                          {data.question}
                        </li>
                        <li className="self-center items-center">
                          {data.type}
                        </li>
                        <li className="self-center items-center">
                          {data.answerd}
                        </li>
                        <li className="self-center items-center">
                          {data.correct}
                        </li>
                        <li className="self-center items-center">
                          {data.time}
                        </li>
                        <li className="self-center items-center">
                          {data.total}
                        </li>
                      </ul>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {data.map((list, index) => (
                    <td key={index} className="w-[100%] flex flex-col px-[2%]">
                      <ul className="grid grid-cols-6 justify-around items-center w-[100%] gap-10 py-4">
                        <li className="self-start items-start">
                          {list.question}
                        </li>
                        <li className="self-start items-start">{list.type}</li>
                        <li className="self-start items-start">
                          <Image
                            src={list.imageTwo}
                            alt="imagelist.png"
                            width={700}
                            height={300}
                            className="w-6"
                          />
                        </li>
                        <li className="self-start items-start flex justify-start">
                          <div className="pr-2">
                            <Image
                              src={list.image}
                              alt="image.png"
                              width={700}
                              height={300}
                              className="w-6"
                            />
                          </div>
                          <div>{list.correct}</div>
                        </li>
                        <li className="self-start items-start">{list.time}</li>
                        <li className="self-start items-start">{list.total}</li>
                      </ul>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerAnalysis;
