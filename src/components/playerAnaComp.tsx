import React from "react";
import ImageOne from "../../public/Images/vr.png";
import Pie from "../../public/Images/pie.png";
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

const PlayerAnalysisComp: React.FC = () => {
  return (
    <div className="md:px-[5%] pb-[5%] w-100% overflow-x-hidden overflow-y-auto h-screen">
      <div className="w-[100%] flex flex-row justify-between align-middle py-4">
        <span>
          <Link href="/" className="text-primary hover:text-purple-800 pl-2">
            Go Back
          </Link>
        </span>
      </div>
      <div className="playerAnaGrid p-4">
        <div className="p-4 border border-purple-200 rounded-md">
          <div className="h-[300px] w-[100%]">
            <Image
              src={ImageOne}
              alt="ImageOne.png"
              width={300}
              height={200}
              className="w-[100%] h-[100%]"
            />
          </div>
          <div className="p-2">
            <span className="flex justify-between align-middle mb-4 md:flex-col lg:flex-row">
              <h1 className="font-bold text-[25px]">Question Two</h1>
              <button className="p-2 border border-primary text-primary rounded-md flex justify-center align-middle hover:text-white hover:bg-primary">
                <MdMovieEdit size={25} className="" />
                Edit
              </button>
            </span>
            <p>
              Which technology is commonly used in virtual reality headsets?
            </p>
            <span>
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
            </span>
          </div>
        </div>
        <div className="w-[100%]">
          <div className="p-2 border border-purple-200 rounded-md">
            <div className="h-[300px] w-[100%] md:px-[15%]">
              <Image
                src={Pie}
                alt="ImageOne.png"
                width={300}
                height={200}
                className="w-[100%] h-[100%]"
              />
            </div>
            <div>
                <ul className="grid grid-cols-4 gap-5 justify-center align-middle px-[10%] mt-5">
                    <li className="style-none">Home</li>
                    <li className="style-none">Home</li>
                    <li className="style-none">Home</li>
                    <li className="style-none">Home</li>
                </ul>
            </div>
            <div className="p-2">
              <div>
                <div className="flex flex-col justify-between align-middle mt-4 mb-6">
                  <span className="p-2 border-b border-b-gray-light w-[100%] flex justify-between align-middle text-[15px] font-semibold">
                    <h3>Live</h3>
                    <h3>Live Web</h3>
                  </span>
                  <span className="p-2 border-b border-b-gray-light w-[100%] flex justify-between align-middle text-[15px] font-semibold">
                    <h3>May 11th, 2023</h3>
                    <h3>May 2023</h3>
                  </span>
                  <span className="p-2 border-b border-b-gray-light w-[100%] flex justify-between align-middle text-[15px] font-semibold">
                    <h3>Hosted by @uidan_trxix</h3>
                    <h3>@uidan_trxix</h3>
                  </span>
                  <span className="p-2 border-b border-b-gray-light w-[100%] flex justify-between align-middle text-[15px] font-semibold">
                    <h3>Hosted by @uidan</h3>
                    <h3>trxix</h3>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerAnalysisComp;
