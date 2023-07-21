import React from "react";
import { MdMoreVert, MdAccountCircle, MdNotifications } from "react-icons/md";
import ImageOne from '../../public/Images/one.jpg';
import "../styles/dashboard.css";
import Image from "next/image";
import LabImg from "../../public/Images/five.jpg";
import Link from "next/link";

interface LibraryInterface {
  quizName: string;
  quizAmt: number;
  user: string;
  time: number;
  playes: number;
}

const LibraryGrid: React.FC = () => {
  const LibraryArray: LibraryInterface[] = [
    {
      quizName: "History of Monnassa",
      quizAmt: 10,
      user: "Snr Developer",
      time: 3,
      playes: 5,
    },
    {
      quizName: "History of Monnassa",
      quizAmt: 10,
      user: "Snr Developer",
      time: 3,
      playes: 5,
    },
    {
      quizName: "History of Monnassa",
      quizAmt: 10,
      user: "Snr Developer",
      time: 3,
      playes: 5,
    },
    {
      quizName: "History of Monnassa",
      quizAmt: 10,
      user: "Snr Developer",
      time: 3,
      playes: 5,
    },
    {
      quizName: "History of Monnassa",
      quizAmt: 10,
      user: "Snr Developer",
      time: 3,
      playes: 5,
    },
  ];

  return (
    <div>
      <div className="flex flex-col w-100 p-[10px] md:px-[40px] md:py-[20px] justify-start align-middle">
        <div className="w-[100%] flex flex-row justify-between align-middle">
          <span>
            <Link href="/" className="text-primary hover:text-purple-800 pl-2">Go Back</Link>
          </span>
          <span className="flex justify-center align-middle">
            <i className="text-[30px] text-primary text-center self-center hidden md:block">
              <MdNotifications />
            </i>
            <span className="border-2 rounded-full border-dashed flex justify-center align-middle self-center w-[40px] md:w-[30px] lg:w-[40px] h-[40px] md:h-[40px] lg:h-[40px]">
              <Image
                src={ImageOne}
                alt="one.jpg"
                width={700}
                height={200}
                className="w-[100%] h-[100%] rounded-full"
              />
            </span>
          </span>
        </div>
        <div className="">
          <h1 className="font-semibold text-[1.2em] ml-2">
            My Treeviah Library
          </h1>
        </div>
        <div className="flex w-100 p-2">
          <label className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 w-[100%] rounded-md gap-10">
            {LibraryArray.map((list, i) => (
              <div className="border border-gray rounded-md flex flex-col lg:flex-row w-[100%] lg:h-[100px] h-auto" key={i}>
                <div className="w-[100%] lg:w-[20%]">
                  <div className="w-[100%] h-[100%]">
                    <Image
                      src={LabImg}
                      alt="Library.png"
                      width={700}
                      height={200}
                      className="w-[100%] h-[100%] rounded-tl-md rounded-bl-md"
                    />
                  </div>
                </div>
                <div className="w-[100%] lg:w-[80%] p-2 flex flex-col justify-between lg:ml-10">
                  <div className="flex flex-row justify-between w-[100%]">
                    <span>
                      <h2 className="font-semibold text-[14px] xl:text-[1.2em]">
                        {list.quizName}
                      </h2>
                    </span>
                    <span className="flex justify-center align-middle">
                      <p className="text-[12px] flex justify-end text-end self-ends text-primarylight">
                        Edited {list.time}hr ago
                      </p>
                      <small className="text-[25px]">
                        <MdMoreVert />
                      </small>
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="flex lg:justify-center justify-center lg:flex-row flex-col">
                      <h3 className="text-end flex self-start lg:self-end text-[17px]">
                        {list.quizAmt} Questions
                      </h3>
                      <p className="text-center flex justify-center align-middle self-start lg:self-end lg:px-2 text-[17px]">
                        <i className="self-center text-primary"><MdAccountCircle /></i>
                        {list.user}
                      </p>
                    </span>
                    <span className="flex justify-center lg:flex-row flex-col">
                      <p className="flex justify-end text-end self-ends lg:self-center px-2">
                        {list.playes} Players
                      </p>
                      <span
                        className={`lg:flex justify-start align-center gap-[20px] flex-row`}
                      >
                        <button className="px-2 py-2 rounded join-team lg:w-[100px] text-[13px]">
                          Edit
                        </button>
                        <button className="px-2 py-2 rounded host-team lg:w-[100px] text-[13px] ml-2">
                          Start
                        </button>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </label>
        </div>
      </div>
    </div>
  );
};

export default LibraryGrid;
