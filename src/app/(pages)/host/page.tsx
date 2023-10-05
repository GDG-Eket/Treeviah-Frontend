import React from "react";
import User from "@/../public/Images/User.svg";
import Users from "@/../public/Images/Users.svg";
import GameMode from "@/../public/Images/gameMode.png";
import Image from "next/image";
import Link from "next/link";

const Host: React.FC = () => {
  const gameMode = [
    {
      href: "/host/classic-mode",
      icon: User,
      title: "Classic Mode",
      subtitle:
        "In Classic Mode, players can dive into thrilling gaming adventures without the need for teams or companions.",
    },
    {
      href: "/host/classic-mode",
      icon: Users,
      title: "Team Mode",
      subtitle:
        "In Team Mode, the excitement of multiplayer gaming reaches new heights as players join forces to conquer challenges together.",
    },
  ];
  return (
    <div className="bg-[#800080] p-16 h-screen relative">
      <div className="absolute bottom-0 flex justify-center items-center z-0">
        <Image
          src={GameMode}
          width={500}
          height={500}
          className="h-[80vh] w-52"
          alt=""
        />
      </div>

      <h3 className=" text-4xl mb-2 text-white font-semibold">
        Select Game mode
      </h3>
      <p className=" text-base font-normal text-white">
        Choose Your Game Mode: Unleash the Thrills in Your Preferred Challenge!
      </p>
      <div className="my-28 mx-auto w-3/4 flex justify-between items-center ">
        {gameMode.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="rounded-lg border-2 border-white w-[40%] z-40 cursor-pointer"
          >
            <div className="flex justify-center bg-[#952A95] w-full py-12 rounded-t-lg">
              <div className="flex items-center justify-center h-24 w-24 rounded-full bg-white p-4">
                <Image
                  src={item.icon}
                  width={500}
                  height={500}
                  className="w-full h-full"
                  alt=""
                />
              </div>
            </div>
            <div className="p-3 backdrop-blur-sm rounded-b-lg">
              <h3 className=" text-white font-semibold mb-2 text-xl">
                {item.title}
              </h3>
              <p className=" text-sm text-white">{item.subtitle}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Host;
