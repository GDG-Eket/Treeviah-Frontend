import React from "react";
import Image from "next/image";
import Frame4 from "../../../public/Images/Frame4.png";
import LibraryPage3 from "../components/librabryPage3";

interface EllipseList {
  id: number;
  email: string;
  position: string;
  url: string;
  alt: string;
}
const Ellipse: React.FC = () => {
  const EllipseArray: EllipseList[] = [
    {
      id: 1,
      url: "/../public/Images/Ellipse9.png",
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
      <div className="flex flex-col gap-8 pt-[40px] ml-40 w-full">
          <a href="" className="text-primary text-[14px] font-semi-bold ml-[40px]">
        Go back
      </a> 
        <div className="flex max-w-full w-full gap-10 ml-10">
          <div className="flex flex-col max-w-[25%] w-[30%] border border-slate-300 p-2 mb-[40px]">
          <span className="">
            <Image
              src={Frame4}
              alt="one.jpg"
              width={300}
              height={200}
              className="w-[320px] h-[300px] object-cover rounded-[5px] "
            />
          </span>
          <div className="flex mt-[10px] justify-between">
            <h2 className="font-bold text-2xl text-black">Virtual Reality</h2>
            <button className="bg-purple-300 text-primary-light border border-primary rounded-[5px] p-[6px]">Result Analysis</button>
          </div>
          <div className="flex justify-between">
            <span className="py-[10px] text-primary text-[14px] font-bold">Quiz played</span>
            <button className="my-[5px] border border-primary-light bg-white px-[12px] py-[3px] rounded-[10px] text-12px">Edit</button>
          </div>
          <span className="my-[8px] text-[10px]">6 players-1 Host</span>

          <div className="flex">
          <div className="flex flex-col">
          {column1.map((Ellipse) => (
          <span key={Ellipse.id} className="flex mt-[8px]">
            <span className="">
              <Image
                src={Ellipse.url}
                alt={Ellipse.alt}
                width={300}
                height={200}
                className="w-[30px] h-[30px] rounded-full"
              />
            </span>
            <div>
              <p className="ml-[5px] text-[14px]">{Ellipse.email}</p>
              <span className="ml-[5px] text-[14px]">{Ellipse.position}</span>
            </div>
          </span>
        ))}
      </div>
      <div className="flex flex-col ml-[20px] mr-[7px]">
        {column2.map((Ellipse) => (
          <span key={Ellipse.id} className="flex mt-[8px]">
            <span className="">
              <Image
                src={Ellipse.url}
                alt={Ellipse.alt}
                width={300}
                height={200}
                className="w-[30px] h-[30px] rounded-full"
              />
            </span>
            <div>
              <p className="ml-[5px] text-[14px]">{Ellipse.email}</p>
              <span className="ml-[5px] text-[14px]">{Ellipse.position}</span>
            </div>
          </span>
        ))}
     </div>
     </div>
     </div>

        <div className="max-w-[40%] w-[40%] h-full flex flex-col">
          <div className="flex justify-between items-center">
            <h3>Question</h3>
            <span>see all (10)</span>
          </div>
          <LibraryPage3 />
        </div>
      </div>
    </div>
  );
};

export default Ellipse;
