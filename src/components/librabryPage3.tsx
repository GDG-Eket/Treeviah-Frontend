import React from "react";
import Image from "next/image";
import Frame34 from "../../public/Images/Frame34.png";

interface FrameList {
  id: number;
  title: string;
  review: string;
  ans: string;
  url: string;
  alt: string;
}

const Frame: React.FC = () => {
  const FrameArray: FrameList[] = [
    {
      id: 1,
      url: "/../public/Images/Frame34.png",
      title: "Question2",
      review: "Which technology is commonly used in virtual reality headsets",
      ans: "Ans: virtual reality headsets often use the combination of ...",
      alt: "awardImageOne.jpg",
    },
    {
      id: 2,
      url: "/../public/Images/Frame34.png",
      title: "Question2",
      review: "Which technology is commonly used in virtual reality headsets",
      ans: "Ans: virtual reality headsets often use the combination of ...",
      alt: "awardImageOne.jpg",
    },
    {
      id: 3,
      url: "/../public/Images/Frame34.png",
      title: "Question2",
      review: "Which technology is commonly used in virtual reality headsets",
      ans: "Ans: virtual reality headsets often use the combination of ...",
      alt: "awardImageOne.jpg",
    },
    {
      id: 4,
      url: "/../public/Images/Frame34.png",
      title: "Question2",
      review: "Which technology is commonly used in virtual reality headsets",
      ans: "Ans: virtual reality headsets often use the combination of ...",
      alt: "awardImageOne.jpg",
    },
    {
      id: 4,
      url: "/../public/Images/Frame34.png",
      title: "Question2",
      review: "Which technology is commonly used in virtual reality headsets",
      ans: "Ans: virtual reality headsets often use the combination of ...",
      alt: "awardImageOne.jpg",
    },
  ];

  return (
 
      <div className="flex flex-col h-screen w-[100%] md:w-auto justify-start align-middle pb-[15%] md:pb-[21%] overflow-y-auto ">
    
        {FrameArray.map((frame) => (
          <span
            key={frame.id}
            className="relative w-[100%] max-w-full h-[120px] flex flex-row gap-[5px] border border-slate-300 mt-[9px] mb-[10px] px-[5px] md:mb-[10px] pt-[4px] md:px-[5px]"
          >
            <span className="py-[3px] flex justify-center w-[100px] h-[110px] md:w-[80px] md:h-[85px]">
              <Image
                src={frame.url}
                alt={frame.alt}
                width={330}
                height={180}
                className=" "
              />
            </span>
            <div className="p-[4px] md:p-[0px]">
              <span className="absolute right-[20px] text-[13px]">20sec</span>
              <h3 className="capitalized font-bold text-[18px]">
                {frame.title}
              </h3>
              <p className="text-[13px] font-slate-300">{frame.review}</p>
              <span className="text-[13px] text-zinc-500">{frame.ans}</span>
            </div>
          </span>
        ))}
      </div>

   
  );
};

export default Frame;
