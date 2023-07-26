import React from "react";
import Image from "next/image";
import Frame34 from "../../../public/Images/Frame34.png";

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
    <div className="max-w-full w-[full]">
     <div className="">
        {FrameArray.map((frame) => (
          <span
            key={frame.id}
            className="relative w-[100%] max-w-full flex flex-row gap-[5px] border border-slate-300 mt-[15px]"
          >
            <span className="p-2 flex justify-center w-[90px] h-[90px]">
              <Image
                src={frame.url}
                alt={frame.alt}
                width={300}
                height={200}
                className="w-[100%] h-[100%]"
              />
            </span>
            <div className="">
              <span className="absolute right-[20px] text-[13px]">20sec</span>
              <h3 className="capitalized pt-3 font-bold text-[18px]">
                {frame.title}
              </h3>
              <p className="text-[15px] font-slate-300">{frame.review}</p>
              <span className="text-[13px] text-zinc-500">{frame.ans}</span>
            </div>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Frame;
