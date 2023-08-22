import React from "react";
import Image from "next/image";
import Frame4 from "../../public/Images/Frame4.png";
import LibraryPage3 from "../components/librabryPage3";
import { BsPencil } from "react-icons/bs";
import Ellipse9 from "@/../public/Images/Ellipse9.png";

interface EllipseList {
  id: number;
  email: string;
  position: string;
  url: any;
  alt: string;
}
const Ellipse: React.FC = () => {
  const EllipseArray: EllipseList[] = [
    {
      id: 1,
      url: Ellipse9,
      email: "@belated_bomb",
      position: "1st position",
      alt: "awardImageOne.jpg",
    },
    {
      id: 2,
      url: "/../public/Images/Ellipse8.png",
      email: "@johnny_jones",
      position: "2nd position",
      alt: "awardImageOne.jpg",
    },
    {
      id: 3,
      url: "/../public/Images/Ellipse10.png",
      email: "@johnny_jones",
      position: "2nd position",
      alt: "awardImageOne.jpg",
    },
    {
      id: 4,
      url: "/../public/Images/Ellipse11.png",
      email: "@belated_bomb",
      position: "1st position",
      alt: "awardImageOne.jpg",
    },
    {
      id: 5,
      url: "/../public/Images/Ellipse12.png",
      email: "@belated_bomb",
      position: "1st position",
      alt: "awardImageOne.jpg",
    },
    {
      id: 6,
      url: "/../public/Images/Ellipse12.png",
      email: "@belated_bomb",
      position: "1st position",
      alt: "awardImageOne.jpg",
    },
  ];

  const column1 = EllipseArray.slice(0, 3);
  const column2 = EllipseArray.slice(3, 6);
  return (
    <div className="flex flex-col h-screen w-[100%] md:px-[20px] md:py-[10px] justify-start align-middle overflow-y-auto md:pb-[10%]">
      <a href="" className="text-primary text-[14px] font-semi-bold ml-[10px]">
        Go back
      </a>
      <div className="flex flex-col lg:flex-row max-w-[100%] w-full justify-start gap-8 lg:gap-8">
        <div className="flex flex-col border border-slate-300 max-w-[100%] lg:max-w-[32%] w-full h-fit p-[10px] mt-3">
          <span className="">
            <Image
              src={Frame4}
              alt=""
              width={300}
              height={200}
              className="max-w-[100%] w-full h-[220px]"
            />
          </span>
          <div className="flex mt-[10px] justify-between">
            <h2 className="font-bold text-[20px] text-black">
              Virtual Reality
            </h2>
            <button className="my-[5px] border border-none bg-purple-300 text-primary px-[5px] py-[5px] rounded-[5px] text-[11px]">
              Result Analysis
            </button>
          </div>
          <div>
            <div className="flex justify-between">
              <span className="py-[10px] text-primary text-[14px] font-bold">
                Quiz played
              </span>
              <button className=" flex my-[7px] border border-primarylight bg-white px-[15px] pt-[7px] gap-[3px] rounded-[5px] text-[11px]">
                <BsPencil /> Edit
              </button>
            </div>
            <span className="text-[12px] font-light text-slate-400">
              6 players - 1 Host
            </span>
            <div className="flex gap-4">
              <div className="flex flex-col">
                {column1.map((Ellipse) => (
                  <span
                    key={Ellipse.id}
                    className="flex mt-[8px] md:mt-[15px] gap-[5px] md:gap-[10px]"
                  >
                    <span className="">
                      <Image
                        src={Ellipse.url}
                        alt={Ellipse.alt}
                        width={300}
                        height={200}
                        className="w-[30px] h-[25px] rounded-full"
                      />
                    </span>
                    <div className="text-[12px]">
                      <p className="mb-[5px]">{Ellipse.email}</p>
                      <span className="">{Ellipse.position}</span>
                    </div>
                  </span>
                ))}
              </div>
              <div className="flex flex-col">
                {column2.map((Ellipse) => (
                  <span
                    key={Ellipse.id}
                    className="flex mt-[8px] md:mt-[15px] gap-[5px] md:gap-[10px]"
                  >
                    <span className="">
                      <Image
                        src={Ellipse.url}
                        alt={Ellipse.alt}
                        width={300}
                        height={200}
                        className="w-[30px] h-[25px] rounded-full"
                      />
                    </span>
                    <div className="text-[12px]">
                      <p className="mb-[5px]">{Ellipse.email}</p>
                      <span className="">{Ellipse.position}</span>
                    </div>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-full lg:max-w-[68%] w-[100%]">
          <div className="w-[100%] flex justify-between  items-center px-10">
            <h3 className="">Question</h3>
            <span className="text-primary">see all (10)</span>
          </div>
          <LibraryPage3 />
        </div>
      </div>
    </div>
  );
};

export default Ellipse;
