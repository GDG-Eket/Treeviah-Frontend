import React from "react";
import ImageOne from "../../public/Images/vr.png";
import Trophy from "../../public/Images/achievement.png";
import {
  MdMovieEdit,
  MdPeople,
  MdQuestionAnswer,
  MdTimer,
  MdCircle,
  MdWatch,
} from "react-icons/md";
import "../styles/dashboard.css";
import Image from "next/image";
import Link from "next/link";

const Virtual: React.FC = () => {
  return (
    <div className="overflow-x-hidden overflow-y-auto h-screen pb-4">
      <div className="w-[100%] flex flex-row justify-between align-middle mt-4 px-[3%]">
        <div>
          <Link href="/" className="text-primary hover:text-purple-800 pl-2">
            Go Back
          </Link>
        </div>
      </div>
      <div className="profileGrid sm:p-4">
        <div className="p-2 w-[100%] border border-purple-200 rounded-md lg:mr-6 h-[100%] lg:h-auto">
          <div className="h-[300px] w-[100%]">
            <Image
              src={ImageOne}
              alt="ImageOne.png"
              width={300}
              height={200}
              className="w-[100%] h-[100%]"
            />
          </div>
          <div className="w-[100%] p-2">
            <div className="flex justify-between align-middle">
              <h1 className="font-bold text-[25px]">Virtual Reality</h1>
              <button className="p-2 border border-primary text-primary rounded-md flex justify-center align-middle hover:text-white hover:bg-primary">
                <MdMovieEdit size={25} className="" />
                Edit
              </button>
            </div>
            <div>
              <div className="flex flex-col justify-between align-middle mt-4">
                <span className="p-2 border-b border-b-gray-light w-[100%] flex justify-between align-middle">
                  <h3>Live</h3>
                </span>
                <span className="p-2 border-b border-b-gray-light w-[100%] flex justify-between align-middle">
                  <h3>May 11th, 2023</h3>
                </span>
                <span className="p-2 border-b border-b-gray-light w-[100%] flex justify-between align-middle">
                  <h3>Hosted by @uidan_trxix</h3>
                </span>
              </div>
            </div>
            <div className="p-2 flex justify-around align-middle bg-primary rounded-lg mt-6">
              <div className="w-[100px] h-[100px]">
                <Image
                  src={Trophy}
                  alt="Trophy.png"
                  width={300}
                  height={200}
                  className="w-[100%] h-{100%]"
                />
              </div>
              <div className="flex flex-col gap-4 justify-center align-middle">
                <button className="p-2 border border-primary text-primary bg-white hover:text-white hover:bg-primary hover:border-white rounded-md flex justify-center align-middle self-center w-[150px]">
                  view Podium
                </button>
                <button className="p-2 border border-white text-white bg-primary hover:text-primary hover:bg-white rounded-md flex justify-center align-middle self-center w-[150px]">
                  Share Podium
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100%] lg:ml-6">
          <div className="p-4 border border-purple-200 rounded-md">
            <div className="grid grid-cols-3 justify-center align-middle gap-10">
              <div className="flex flex-col justify-center align-middle">
                <div className="p-4 w-[60px] h-[60px] md:w-[60px] md:h-[60px] lg:w-[150px] lg:h-[150px] rounded-full border-[10px] border-l-white border-t-white border-b-green-800 border-r-green-800 flex justify-center align-middle self-center shadow-md">
                  <p className="text-center self-center text-[1.2em] md:text-[1.2em] lg:text-[2.2em]">
                    {" "}
                    66%
                  </p>
                </div>
                <div className="self-center text-center flex justify-center align-middle"><MdCircle size={10} className="text-green-800 self-center" />players</div>
              </div>
              <div className="flex flex-col justify-center align-middle">
                <div className="p-4 w-[60px] h-[60px] md:w-[60px] md:h-[60px] lg:w-[150px] lg:h-[150px] rounded-full border-[10px] border-l-white border-t-blue-800 border-b-blue-800 border-r-blue-800 flex justify-center align-middle self-center shadow-md">
                  <p className="text-center self-center text-[1.2em] md:text-[1.2em] lg:text-[2.2em]">
                    {" "}
                    90%
                  </p>
                </div>
                <div className="self-center text-center flex justify-center align-middle"><MdCircle size={10} className="text-blue-800 self-center" />speed</div>
              </div>
              <div className="flex flex-col justify-center align-middle">
                <div className="p-4 w-[60px] h-[60px] md:w-[60px] md:h-[60px] lg:w-[150px] lg:h-[150px] rounded-full border-[10px] border-l-white border-t-white border-b-white border-r-orange-500 flex justify-center align-middle self-center shadow-md">
                  <p className="text-center self-center text-[1.2em] md:text-[1.2em] lg:text-[2.2em]">
                    {" "}
                    30%
                  </p>
                </div>
                <div className="self-center text-center flex justify-center align-middle"><MdCircle size={10} className="text-orange-500 self-center" />Accuracy</div>
              </div>
            </div>
            <div className="shadow-md mt-[20px] p-2">
              <p>
                Practise makes perfect host more games to increase players
                aggregate and new players can join to multiply the fun.
              </p>
            </div>
            <div className="flex flex-col justify-between align-middle mt-4">
              <span className="p-2 border-b border-b-gray-light w-[100%] flex justify-between align-middle">
                <h3 className="flex justify-center align-middle">
                  <MdPeople size={20} className="text-primary" />
                  Player
                </h3>
                <p>6</p>
              </span>
              <span className="p-2 border-b border-b-gray-light w-[100%] flex justify-between align-middle">
                <h3 className="flex justify-center align-middle">
                  <MdQuestionAnswer size={20} className="text-primary" />
                  Question
                </h3>
                <p>10</p>
              </span>
              <span className="p-2 border-b border-b-gray-light w-[100%] flex justify-between align-middle">
                <h3 className="flex justify-center align-middle">
                  <MdTimer size={20} className="text-primary" />
                  Time
                </h3>
                <p>15mins</p>
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-start align-middle p-4 border border-purple-200 rounded-md w-[100%] my-8 mx-0">
            <span className="flex justify-between align-middle">
              <h1 className="font-bold text-[25px]">Challenges</h1>
              <Link href="" className="text-primary">
                See All(3)
              </Link>
            </span>
            <label className="mt-4 w-[100%]">
              <div className="w-[100%] flex flex-col md:flex-row justify-start align-middle border border-purple-200 shadow-md rounded-md">
                <div className="backgroundImage w-[100%] p-[40px] md:p-0 md:w-[30%] rounded-md"></div>
                <div className="md:w-[70%] p-3 flex flex-col justify-between align-middle">
                  <div>
                    <h3>Question 2</h3>
                    <p>
                      Which technology is commonly used in virtual reality
                      headsets?
                    </p>
                  </div>
                  <div className="flex gap-2 justify-start align-middle mt-4">
                    <span className="flex justify-center align-middle">
                      <MdCircle size={20} className="text-red" /> 0% Correct
                    </span>
                    <span className="flex justify-center align-middle">
                      <MdWatch size={20} className="text-primary" /> Average
                      10.7 sec
                    </span>
                  </div>
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Virtual;
