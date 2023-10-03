import React from "react";
import Image, { StaticImageData } from "next/image";
import "../../styles/dashboard.css";
import ImgOne from "../../../public/Images/one.jpg";
import ImgTwo from "../../../public/Images/two.jpg";
import ImgThree from "../../../public/Images/three.jpg";
import ImgFour from "../../../public/Images/four.jpg";
import { Md1KPlus } from "react-icons/md";
import Link from "next/link";

interface FriendsList {
  title: string;
  url: StaticImageData;
  alt: string;
}
const Friends: React.FC = () => {
  const FriendsArray: FriendsList[] = [
    {
      url: ImgOne,
      title: "Professional",
      alt: "awardImageOne.jpg",
    },
    {
      url: ImgTwo,
      title: "Professional",
      alt: "awardImageOne.jpg",
    },
    {
      url: ImgThree,
      title: "Professional",
      alt: "awardImageOne.jpg",
    },
    {
      url: ImgFour,
      title: "Professional",
      alt: "awardImageOne.jpg",
    },
  ];

  return (
    <div>
      <section className="w-auto mt-[5%] h-[40vh]">
        <span className="flex justify-between align-middle p-2">
          <h2 className="font-semibold text-[32px]">My Friends</h2>
          <Link className="text-primary" href="/friends">
            See All(3)
          </Link>
        </span>
        <span className="p-[20px]">
          <label className="flex flex-row overflow-x-auto scrollbar-hide gap-[50px] p-2 scrollbar-hide">
            {FriendsArray.map((friends, i) => (
              <span
                key={i}
                className="px-2 py-4 border rounded-md border-purple-300"
              >
                <span className="p-2 borders rounded-full flex justify-center align-middle self-center w-[90px] h-[90px]">
                  <Image
                    src={friends.url}
                    alt={friends.alt}
                    width={300}
                    height={200}
                    className="w-[100%] h-[100%] rounded-full"
                  />
                </span>
                <p className="capitalized pt-3">{friends.title}</p>
              </span>
            ))}
            <Link href='/friends' className="px-2 py-4 border rounded-md border-purple-300 cursor-pointer">
              <span className="p-2 borders rounded-full flex justify-center align-middle self-center w-[90px] h-[90px]">
                <Md1KPlus className="w-[100%] h-[100%] rounded-full text-gray" />
              </span>
              <p className="capitalized pt-3">Add friends</p>
            </Link>
          </label>
        </span>
      </section>
    </div>
  );
};

export default Friends;
