import React from "react";
import ImageOne from "../../../public/Images/one.jpg";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import Trophy from '../../../public/Images/trophy.png';
import Medal from '../../../public/Images/medal.png';

interface AwardInterface {
  toptext: string;
  url: StaticImageData;
  header: string;
  text: string;
}

interface TopAwards {
  url: StaticImageData;
  header: string;
  alt: string;
}

const AwarArray: AwardInterface[] = [
  {
    toptext: "45 / 50",
    url: Trophy,
    header: "Cold Killer",
    text: "Win 60 games",
  },
  {
    toptext: "45 / 50",
    url: Trophy,
    header: "Cold Killer",
    text: "Win 60 games",
  },
  {
    toptext: "45 / 50",
    url: Trophy,
    header: "Cold Killer",
    text: "Win 60 games",
  },
  {
    toptext: "45 / 50",
    url: Trophy,
    header: "Cold Killer",
    text: "Win 60 games",
  },
  {
    toptext: "45 / 50",
    url: Trophy,
    header: "Cold Killer",
    text: "Win 60 games",
  },
  {
    toptext: "45 / 50",
    url: Trophy,
    header: "Cold Killer",
    text: "Win 60 games",
  },
  {
    toptext: "45 / 50",
    url: Trophy,
    header: "Cold Killer",
    text: "Win 60 games",
  },
  {
    toptext: "45 / 50",
    url: Trophy,
    header: "Cold Killer",
    text: "Win 60 games",
  },
  {
    toptext: "45 / 50",
    url: Trophy,
    header: "Cold Killer",
    text: "Win 60 games",
  },
  {
    toptext: "45 / 50",
    url: Trophy,
    header: "Cold Killer",
    text: "Win 60 games",
  },
  {
    toptext: "45 / 50",
    url: Trophy,
    header: "Cold Killer",
    text: "Win 60 games",
  },
  {
    toptext: "45 / 50",
    url: Trophy,
    header: "Cold Killer",
    text: "Win 60 games",
  },
];

const TopArray: TopAwards[] = [
  {
    url: Medal,
    alt: "Image.jpg",
    header: "Top Player",
  },
  {
    url: Trophy,
    alt: "Image.jpg",
    header: "Top Player",
  },
  {
    url: Medal,
    alt: "Image.jpg",
    header: "Top Player",
  },
];

const AwardComponents: React.FC = () => {
  return (
    <div className="w-[100%] lg:w-[100%] p-4">
      <div className="w-[100%] flex flex-row justify-between align-middle px-[3%] py-[2%]">
        <span>
          <Link href="/" className="text-primary hover:text-purple-800 pl-2">
            Go Back
          </Link>
        </span>
        <span className="flex justify-center align-middle">
          <span className="border-2 rounded-full border-dashed flex justify-center align-middle self-center w-[40px] md:w-[30px] lg:w-[50px] h-[40px] md:h-[40px] lg:h-[50px]">
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
      <h1 className="font-semibold my-2 text-[32px] px-[3%]">Awards.</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 px-[3%]">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {TopArray.map((toparray, i) => (
            <div
              key={i}
              className="border border-gray-light rounded-md p-4 w-[100%] lg:w-[80%] h-[100%] text-center"
            >
              <div className="">
                <Image
                  src={toparray.url}
                  alt={toparray.alt}
                  width={700}
                  height={200}
                  className="w-[100%] h-[100%]"
                />
              </div>
              <div className="pt-4 font-semibold">
                <h3>{toparray.header}</h3>
              </div>
            </div>
          ))}
        </section>
      </div>
      <div className="mt-8">
        <h1 className="font-semibold my-2 text-[1.2em] px-[3%]">Pending Awards</h1>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 px-[3%]">
          {AwarArray.map((award, i) => (
            <div
              key={i}
              className="border border-gray-light rounded-md p-4 w-[100%] lg:w-[80%] h-[100%] text-center relative"
            >
              <div className="lg:p-6 border-2 border-primary rounded-full p-[15%]">
                <Image
                  src={award.url}
                  alt="image.jpg"
                  width={700}
                  height={100}
                  className="w-[100%] h-[100%]"
                />
              </div>
              <div className="pt-4">
                <h3 className=" font-semibold">{award.header}</h3>
                <p className="test-[15px]">{award.text}</p>
              </div>
              <div className="p-2 w-[60px] h-[60px] rounded-full bg-white shadow-sm flex justify-center align-middle absolute top-2 right-2">
                <p className="text-[12px] mt-[20%]">{award.toptext}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default AwardComponents;
