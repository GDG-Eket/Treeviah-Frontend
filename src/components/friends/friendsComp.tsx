import React, { useState } from "react";
import "../../styles/dashboard.css";
import ImageOne from "../../../public/Images/one.jpg";
import ImageTwo from "../../../public/Images/two.jpg";
import ImageThree from "../../../public/Images/three.jpg";
import ImageFour from "../../../public/Images/four.jpg";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { Md1KPlus } from "react-icons/md";
import PopupModal from "../modal";
import Friend1 from "@/../public/Images/one.jpg";

interface FriendsLists {
  title: string;
  url: any;
  alt: string;
}
const FriendsComponent: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const FriendsArray: FriendsLists[] = [
    {
      url: Friend1,
      title: "Professional",
      alt: "awardImageOne.jpg",
    },
    {
      url: ImageTwo,
      title: "Professional",
      alt: "awardImageOne.jpg",
    },
    {
      url: ImageThree,
      title: "Professional",
      alt: "awardImageOne.jpg",
    },
    {
      url: ImageFour,
      title: "Professional",
      alt: "awardImageOne.jpg",
    },
    {
      url: ImageOne,
      title: "Professional",
      alt: "awardImageOne.jpg",
    },
    {
      url: ImageTwo,
      title: "Professional",
      alt: "awardImageOne.jpg",
    },
    {
      url: ImageThree,
      title: "Professional",
      alt: "awardImageOne.jpg",
    },
    {
      url: ImageFour,
      title: "Professional",
      alt: "awardImageOne.jpg",
    },
    {
      url: ImageOne,
      title: "Professional",
      alt: "awardImageOne.jpg",
    },
    {
      url: ImageTwo,
      title: "Professional",
      alt: "awardImageOne.jpg",
    },
    {
      url: ImageThree,
      title: "Professional",
      alt: "awardImageOne.jpg",
    },
    {
      url: ImageFour,
      title: "Professional",
      alt: "awardImageOne.jpg",
    },
    {
      url: ImageOne,
      title: "Professional",
      alt: "awardImageOne.jpg",
    },
    {
      url: ImageTwo,
      title: "Professional",
      alt: "awardImageOne.jpg",
    },
    {
      url: ImageThree,
      title: "Professional",
      alt: "awardImageOne.jpg",
    },
    {
      url: ImageFour,
      title: "Professional",
      alt: "awardImageOne.jpg",
    },
    {
      url: ImageOne,
      title: "Professional",
      alt: "awardImageOne.jpg",
    },
    {
      url: ImageTwo,
      title: "Professional",
      alt: "awardImageOne.jpg",
    },
    {
      url: ImageThree,
      title: "Professional",
      alt: "awardImageOne.jpg",
    },
    {
      url: ImageFour,
      title: "Professional",
      alt: "awardImageOne.jpg",
    },
    {
      url: ImageOne,
      title: "Professional",
      alt: "awardImageOne.jpg",
    },
    {
      url: ImageTwo,
      title: "Professional",
      alt: "awardImageOne.jpg",
    },
    {
      url: ImageThree,
      title: "Professional",
      alt: "awardImageOne.jpg",
    },
    {
      url: ImageFour,
      title: "Professional",
      alt: "awardImageOne.jpg",
    },
    {
      url: ImageOne,
      title: "Professional",
      alt: "awardImageOne.jpg",
    },
    {
      url: ImageTwo,
      title: "Professional",
      alt: "awardImageOne.jpg",
    },
    {
      url: ImageThree,
      title: "Professional",
      alt: "awardImageOne.jpg",
    },
    {
      url: ImageFour,
      title: "Professional",
      alt: "awardImageOne.jpg",
    },
  ];

  return (
    <div>
      <section className="w-full lg:w-full p-4">
        <div className="w-full flex flex-row justify-between items-center px-10 py-2">
          <span>
            <Link href="/" className="text-primary hover:text-purple-800 pl-2">
              Go Back
            </Link>
          </span>
          <span className="flex justify-center items-center">
            <span className="border-2 rounded-full border-dashed flex justify-center items-center self-center w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14">
              <Image
                src={ImageOne}
                alt="one.jpg"
                width={700}
                height={200}
                className="w-full h-full rounded-full"
              />
            </span>
          </span>
        </div>
        <h1 className="font-semibold my-2 text-3xl px-10">Friends</h1>
        <div className="p-5">
          <label className="respongrid">
            {FriendsArray.map((friends, i) => (
              <div
                key={i}
                className="px-2 py-4 flex flex-col justify-center items-center"
              >
                <div className="p-2 border-2 border-dashed rounded-full flex justify-center items-center w-20 h-20 lg:w-24 lg:h-24">
                  <Image
                    src={friends.url}
                    alt={friends.alt}
                    width={300}
                    height={200}
                    className="w-full h-full rounded-full"
                  />
                </div>
                <p className="capitalize pt-3">{friends.title}</p>
              </div>
            ))}
            <Link href='' className="px-2 py-4" onClick={openModal}>
              <div className="p-2 border rounded-full flex justify-center items-center w-20 h-20 lg:w-24 lg:h-24">
                <Md1KPlus className="w-full h-full rounded-full text-gray-500" />
              </div>
              <div
                className="capitalize pt-3 hover:cursor-pointer"
              >
                Add friends
              </div>
              <PopupModal isOpen={isModalOpen} onClose={closeModal} />
            </Link>
          </label>
        </div>
      </section>
    </div>
  );
};

export default FriendsComponent;
