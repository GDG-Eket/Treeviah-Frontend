import * as React from "react";
import VirtualRealityImg from "../../../../../public/Images/vr.png";
import Image from "next/image";
import { PieChart } from "react-minimal-pie-chart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const QuestionAnalysis: React.FC = () => {
  const pieChartData = [
    { title: "Color 1", value: 10, color: "#018101" },
    { title: "Color 2", value: 7, color: "#0A5AA4" },
    { title: "Color 3", value: 10, color: "#FF0000" },
    { title: "Color 4", value: 5, color: "#FFA500" },
  ];

  return (
    <div className="flex justify-between">
      <div className="rounded-lg p-2 border border-[#D2D2D2] w-[390px]">
        <Image
          width={500}
          height={500}
          src={VirtualRealityImg}
          alt="Virtual Reality"
          className="w-full h-[250px]"
        />

        <div className="p-2 mb-3">
          <div className="flex justify-between items-center my-2">
            <h3 className="font-bold text-[#1D1D1D] text-2xl leading-7 mb-1">
              Question 2
            </h3>
            <button className="p-1 border rounded-lg border-[#800080] text-[#800080] hover:bg-[#800080] hover:text-white flex items-center">
              <FontAwesomeIcon icon={faPen} className="mr-2" />
              Edit
            </button>
          </div>
          <p className="font-medium text-lg leading-7 mb-1">
            Which technology is commonly used in virtual reality headsets?
          </p>
          <p className="border-b border-[#D2D2D2] w-[85%] text-[14px] mb-1 px-2 py-1">
            Live
          </p>
          <p className="border-b border-[#D2D2D2] w-[85%] text-[14px] mb-1 px-2 py-1">
            May 11th, 2023
          </p>
          <p className="border-b border-[#D2D2D2] w-[85%] text-[14px] mb-1 px-2 py-1">
            Hosted by @uidan_trxix
          </p>
        </div>
      </div>
      <div className="rounded-lg p-2 border border-[#D2D2D2] w-[390px]">
        <div className="p-4 mx-auto w-[70%] h-[200px]">
          <PieChart
            data={pieChartData}
            lineWidth={20}
            animate
            labelStyle={{
              fontSize: "5px",
            }}
          />
        </div>

        <div className="w-[90%] mx-auto flex justify-between items-center">
          <p className="font-medium text-[14px] flex items-center mr-3">
            <span className="w-4 h-4 flex rounded-full mr-2 bg-[#0A5AA4]"></span>
            Radio
          </p>
          <p className="font-medium text-[14px] flex items-center mr-3">
            <span className="w-4 h-4 flex rounded-full mr-2 bg-[#018101]"></span>
            VR Headsets
          </p>
          <p className="font-medium text-[14px] flex items-center mr-3">
            <span className="w-4 h-4 flex rounded-full mr-2 bg-[#FF0000]"></span>
            TV
          </p>
          <p className="font-medium text-[14px] flex items-center mr-3">
            <span className="w-4 h-4 flex rounded-full mr-2 bg-[#FFA500]"></span>
            Orange
          </p>
        </div>

        <div className="p-2 ">
          <div className="flex justify-between items-center border-b border-[#D2D2D2] text-[14px] mb-2 py-2">
            <h3 className="font-medium text-[#1D1D1D] text-lg">
              Correct answer
            </h3>
            <h3 className="font-medium text-[#1D1D1D] text-lg">0%</h3>
          </div>
          <div className="flex justify-between items-center border-b border-[#D2D2D2] text-[14px] mb-2 py-2">
            <h3 className="font-medium text-[#1D1D1D] text-lg">Avg.time</h3>
            <h3 className="font-medium text-[#1D1D1D] text-lg">10.5sec</h3>
          </div>
          <div className="flex justify-between items-center border-b border-[#D2D2D2] text-[14px] mb-2 py-2">
            <h3 className="font-medium text-[#1D1D1D] text-lg">
              Players answered
            </h3>
            <h3 className="font-medium text-[#1D1D1D] text-lg">1 of 5</h3>
          </div>
          <div className="flex justify-between items-center border-b border-[#D2D2D2] text-[14px] mb-2 py-2">
            <h3 className="font-medium text-[#1D1D1D] text-lg">
              Correct answer
            </h3>
            <h3 className="font-medium text-[#1D1D1D] text-lg flex items-center">
              <span className="w-4 h-4 flex rounded-full mr-2 bg-[#018101]"></span>
              VR Headsets
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionAnalysis;
