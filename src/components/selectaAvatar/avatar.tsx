import React from "react";
import Image, { StaticImageData } from "next/image";
import "../../styles/dashboard.css";
import ImgOne from "../../../public/Images/Serious girl with lock.png";
import ImgTwo from "../../../public/Images/Guy playing with a gamepad.png";
import ImgThree from "../../../public/Images/Cool guy guitarist.png";
import ImgFour from "../../../public/Images/Guy with smartphone.png";
import { Md1KPlus } from "react-icons/md";
import Link from "next/link";

interface AvatarList {
  url: StaticImageData;
  alt: string;
}
const SelectAvatar: React.FC = () => {
  const AvatarArray: AvatarList[] = [
    {
      url: ImgOne,
      alt: "awardImageOne.jpg",
    },
    {
      url: ImgTwo,
      alt: "awardImageOne.jpg",
    },
    {
      url: ImgThree,
      alt: "awardImageOne.jpg",
    },
    {
      url: ImgFour,
      alt: "awardImageOne.jpg",
    },
  ];

  return (
    <div>
      <section className="">
        <div className="p-[20px]">
          <div className="flex flex-row justify-start items-start overflow-x-auto gap-[20px] p-2 w-[200px] md:w-auto">
            {AvatarArray.map((avatars, i) => (
              <span key={i} className="px-2">
                <span className="p-2 borders rounded-full flex justify-center align-middle self-center w-[60px] h-[60px]">
                  <Image
                    src={avatars.url}
                    alt={avatars.alt}
                    width={300}
                    height={200}
                    className="w-[100%] h-[100%] rounded-full"
                  />
                </span>
              </span>
            ))}
            <Link href="/avatars" className="px-2 cursor-pointer">
              <span className="p-4 borders rounded-full flex justify-center items-center self-center w-[60px] h-[60px]">
              <p className="capitalized pt-3 text-gray1">Upload</p>
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SelectAvatar;
