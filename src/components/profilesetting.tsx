import React from "react";
import { Md1KPlus, MdNotifications } from "react-icons/md";
import ImageOne from "../../public/Images/one.jpg";
import User from "../../public/Images/user.png";
import "../styles/dashboard.css";
import Image from "next/image";
import Link from "next/link";

interface FriendsList {
  id: number;
  title: string;
  url: string;
  alt: string;
}

const ProfileSetting: React.FC = () => {
  const FriendsArray: FriendsList[] = [
    {
      id: 1,
      url: "/../public/Images/one.jpg",
      title: "Professional",
      alt: "awardImageOne.jpg",
    },
    {
      id: 2,
      url: "/../public/Images/two.jpg",
      title: "Professional",
      alt: "awardImageOne.jpg",
    },
    {
      id: 3,
      url: "/../public/Images/three.jpg",
      title: "Professional",
      alt: "awardImageOne.jpg",
    },
    {
      id: 4,
      url: "/../public/Images/four.jpg",
      title: "Professional",
      alt: "awardImageOne.jpg",
    },
  ];

  return (
    <div>
      <div className="w-[100%] flex flex-row justify-between align-middle">
        <span>
          <Link href="/" className="text-primary hover:text-purple-800 pl-2">
            Go Back
          </Link>
        </span>
        <span className="flex justify-center align-middle">
          <i className="text-[30px] text-primary text-center self-center hidden md:block">
            <MdNotifications />
          </i>
          <span className="border-2 rounded-full border-dashed flex justify-center align-middle self-center w-[40px] md:w-[30px] lg:w-[40px] h-[40px] md:h-[40px] lg:h-[40px]">
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
      <div className="flex flex-col lg:flex-row w-[100%] h-[100%] gap-4 mt-4">
        <div className="flex justify-center align-middle p-6 lg:w-[40%] border border-gray-light rounded-md">
          <div className="w-[100%] h-[100%] p-2 flex justify-top align-middle flex-col">
            <div className="w-[60%] h-[30%] self-center">
              <Image
                src={User}
                alt="user.png"
                width={700}
                height={200}
                className="w-[100%] h-[100%]"
              />
            </div>
            <h1 className="text-primary font-semibold text-[1.2em] text-center mt-4">SNR DEVELOPER</h1>
            <Link
              className="mt-4 px-4 py-2 bg-primary text-white rounded hover:text-purple-300 w-[60%] text-center self-center"
              href="/"
            >
              Search
            </Link>
          </div>
        </div>
        <div className="lg:w-[60%] w-[100%] grid grid-rows-3 gap-4">
          <div className="w-[95%] md:w-[100%] flex flex-col justify-start align-middle p-4 border border-gray-light rounded-md h-[100%]">
            <h1 className="text-[20px] font-semibold">Bio</h1>
            <p>
              🎓 Lifelong Learner | 🧠 Curious Mind | 🌍 Global Citizen Hey
              there! I'm Samantha, and I'm thrilled to embark on this
              knowledge-packed journey with all of you. As a self-professed quiz
              enthusiast, I live for those "aha!" moments when facts and trivia
              come together to paint a clearer picture of the world.
            </p>
          </div>
          <div className="flex flex-col justify-start align-middle p-4 border border-gray-light rounded-md w-[95%] md:w-[100%] h-[100%]">
            <h1 className="text-[20px] font-semibold">Personnal Information</h1>
            <div className="flex flex-col justify-between align-middle mt-4">
              <span className="p-2 border-b border-b-gray-light w-[100%] flex justify-between align-middle">
                <h3>Name</h3>
                <p>Daniel Nssien</p>
              </span>
              <span className="p-2 border-b border-b-gray-light w-[100%] flex justify-between align-middle">
                <h3>Email address</h3>
                <p>chisomchkwe@gmail.com</p>
              </span>
              <span className="p-2 border-b border-b-gray-light w-[100%] flex justify-between align-middle">
                <h3>Phone number</h3>
                <p>09061150616</p>
              </span>
              <span className="p-2 border-b border-b-gray-light w-[100%] flex justify-between align-middle">
                <h3>Date Joined</h3>
                <p>12/04/2023</p>
              </span>
            </div>
          </div>
          <div>
            <section className="w-[100%] lg:w-[100%] mt-[5%] h-[40vh]">
              <span className="w-[100%] flex justify-between align-middle p-2">
                <h2 className="font-semibold">My Friends</h2>
                <button className="text-primary">See All(3)</button>
              </span>
              <span className="p-[20px]">
                <label className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 overflow-x-auto scrollbar-hide gap-[50px] p-2 scrollbar-hide">
                  {FriendsArray.map((friends) => (
                    <span
                      key={friends.id}
                      className="px-2 py-4 rounded-md"
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
                  <span className="px-2 py-4 rounded-md">
                    <span className="p-2 borders rounded-full flex justify-center align-middle self-center w-[90px] h-[90px]">
                      <Md1KPlus className="w-[100%] h-[100%] rounded-full text-gray" />
                    </span>
                    <p className="capitalized pt-3">Add friends</p>
                  </span>
                </label>
              </span>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSetting;
