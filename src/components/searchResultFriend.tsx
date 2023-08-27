import React, { useState } from "react";
import "../styles/dashboard.css";
import ImageOne from "../../public/Images/one.jpg";
import Link from "next/link";
import Image from "next/image";

interface FriendsLists {
  title: string;
  url: string;
  alt: string;
}
const FriendsSearchComponent: React.FC = () => {

  const FriendsArray: FriendsLists[] = [
    {
      url: "/../public/Images/one.jpg",
      title: "Professional",
      alt: "awardImageOne.jpg",
    },
    {
      url: "/../public/Images/two.jpg",
      title: "Professional",
      alt: "awardImageOne.jpg",
    },
    {
      url: "/../public/Images/three.jpg",
      title: "Professional",
      alt: "awardImageOne.jpg",
    },
    {
      url: "/../public/Images/four.jpg",
      title: "Professional",
      alt: "awardImageOne.jpg",
    },
    {
      url: "/../public/Images/one.jpg",
      title: "Professional",
      alt: "awardImageOne.jpg",
    },
    {
      url: "/../public/Images/two.jpg",
      title: "Professional",
      alt: "awardImageOne.jpg",
    },
    {
      url: "/../public/Images/three.jpg",
      title: "Professional",
      alt: "awardImageOne.jpg",
    },
    {
      url: "/../public/Images/four.jpg",
      title: "Professional",
      alt: "awardImageOne.jpg",
    },
    {
      url: "/../public/Images/one.jpg",
      title: "Professional",
      alt: "awardImageOne.jpg",
    },
    {
      url: "/../public/Images/two.jpg",
      title: "Professional",
      alt: "awardImageOne.jpg",
    },
    {
      url: "/../public/Images/three.jpg",
      title: "Professional",
      alt: "awardImageOne.jpg",
    },
    {
      url: "/../public/Images/four.jpg",
      title: "Professional",
      alt: "awardImageOne.jpg",
    },
    {
      url: "/../public/Images/one.jpg",
      title: "Professional",
      alt: "awardImageOne.jpg",
    },
    {
      url: "/../public/Images/two.jpg",
      title: "Professional",
      alt: "awardImageOne.jpg",
    },
    {
      url: "/../public/Images/three.jpg",
      title: "Professional",
      alt: "awardImageOne.jpg",
    },
    {
      url: "/../public/Images/four.jpg",
      title: "Professional",
      alt: "awardImageOne.jpg",
    },
    {
      url: "/../public/Images/one.jpg",
      title: "Professional",
      alt: "awardImageOne.jpg",
    },
    {
      url: "/../public/Images/two.jpg",
      title: "Professional",
      alt: "awardImageOne.jpg",
    },
    {
      url: "/../public/Images/three.jpg",
      title: "Professional",
      alt: "awardImageOne.jpg",
    },
    {
      url: "/../public/Images/four.jpg",
      title: "Professional",
      alt: "awardImageOne.jpg",
    },
    {
      url: "/../public/Images/one.jpg",
      title: "Professional",
      alt: "awardImageOne.jpg",
    },
    {
      url: "/../public/Images/two.jpg",
      title: "Professional",
      alt: "awardImageOne.jpg",
    },
    {
      url: "/../public/Images/three.jpg",
      title: "Professional",
      alt: "awardImageOne.jpg",
    },
    {
      url: "/../public/Images/four.jpg",
      title: "Professional",
      alt: "awardImageOne.jpg",
    },
    {
      url: "/../public/Images/one.jpg",
      title: "Professional",
      alt: "awardImageOne.jpg",
    },
    {
      url: "/../public/Images/two.jpg",
      title: "Professional",
      alt: "awardImageOne.jpg",
    },
    {
      url: "/../public/Images/three.jpg",
      title: "Professional",
      alt: "awardImageOne.jpg",
    },
    {
      url: "/../public/Images/four.jpg",
      title: "Professional",
      alt: "awardImageOne.jpg",
    },
  ];

  return (
    <div>
      <section className="w-auto p-4">
        <div className="flex flex-row justify-between align-middle">
          <span>
            <Link href="/friends" className="text-primary hover:text-purple-800 pl-2">
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
        <h1 className="font-semibold my-2 text-[32px]">Friends</h1>
        <span className="p-[20px]">
          <label className="respongrid">
            {FriendsArray.map((friends, i) => (
              <div key={i} className="px-2 py-4 flex flex-col justify-center align-middle text-center self-center">
                <div className="p-2 borders rounded-full flex justify-center align-middle self-center text-center w-[80px] h-[80px] lg:w-[90px] lg:h-[90px]">
                  <Image
                    src={friends.url}
                    alt={friends.alt}
                    width={300}
                    height={200}
                    className="w-[100%] h-[100%] rounded-full"
                  />
                </div>
                <p className="capitalized pt-3">{friends.title}</p>
              </div>
            ))}
          </label>
        </span>
      </section>
    </div>
  );
};

export default FriendsSearchComponent;
