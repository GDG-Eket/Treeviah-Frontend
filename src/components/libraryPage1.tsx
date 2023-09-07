import React from "react";
import Image from "next/image";
import Plate1 from "../../public/Images/plate1.png";
import LibraryPage1Tri from "./libraryPage1Tri";
import { IoMdNotificationsOutline } from "react-icons/io";
import Link from "next/link";


interface CardList {
  id: number;
  url: string;
  title: string;
  text: string;
  alt: string;
}
interface SmallList {
  id: number;
  url: string;
  join: string;
  alt: string;
}

const Card: React.FC = () => {
  const CardArray: CardList[] = [
    {
      id: 1,
      url: "/../public/Images/card1.png",
      title: "World Ocean Day",
      text: "6 Questions",
      alt: "awardImageOne.jpg",
    },
    {
      id: 1,
      url: "/../public/Images/card2.png",
      title: "Felions",
      text: "10 Questions",
      alt: "awardImageOne.jpg",
    },
    {
      id: 1,
      url: "/../public/Images/card3.png",
      title: "Pizza day",
      text: "10 Questions",
      alt: "awardImageOne.jpg",
    },
    {
      id: 1,
      url: "/../public/Images/card4.png",
      title: "Afforestation",
      text: "10 Questions",
      alt: "awardImageOne.jpg",
    },
    {
      id: 1,
      url: "/../public/Images/card5.png",
      title: "Virtual Reality (VR)",
      text: "10 Questions",
      alt: "awardImageOne.jpg",
    },
    {
      id: 1,
      url: "/../public/Images/card1.png",
      title: "World Ocean Day",
      text: "6 Questions",
      alt: "awardImageOne.jpg",
    },
    {
      id: 1,
      url: "/../public/Images/card2.png",
      title: "Felions",
      text: "10 Questions",
      alt: "awardImageOne.jpg",
    },
    {
      id: 1,
      url: "/../public/Images/card3.png",
      title: "Pizza day",
      text: "10 Questions",
      alt: "awardImageOne.jpg",
    },
    {
      id: 1,
      url: "/../public/Images/card4.png",
      title: "Afforestation",
      text: "10 Questions",
      alt: "awardImageOne.jpg",
    },
    {
      id: 1,
      url: "/../public/Images/card5.png",
      title: "Virtual Reality (VR)",
      text: "10 Questions",
      alt: "awardImageOne.jpg",
    },
  ];

  const smallArray: SmallList[] = [
    {
      id: 1,
      url: "/../public/Images/sm1.png",
      join: "10+ joined",
      alt: "awardImageOne.jpg",
    },
    {
      id: 1,
      url: "/../public/Images/sm2.png",
      join: "10+ joined",
      alt: "awardImageOne.jpg",
    },
    {
      id: 1,
      url: "/../public/Images/sm3.png",
      join: "10+ joined",
      alt: "awardImageOne.jpg",
    },
    {
      id: 1,
      url: "/../public/Images/sm4.png",
      join: "10+ joined",
      alt: "awardImageOne.jpg",
    },
    {
      id: 1,
      url: "/../public/Images/sm5.png",
      join: "10+ joined",
      alt: "awardImageOne.jpg",
    },
  ];

  return (
    <section className="w-[100%] mt-2 h-screen overflow-y-auto md:py-[20px] md:px-16 px-4">
      <div className="flex justify-between">
        <h2 className="text-[24px] font-bold">Library</h2>
        <span className="flex">
          <span className="text-[25px] mr-[20px] text-primary">
            <IoMdNotificationsOutline />
          </span>
          <Image
            src={Plate1}
            alt="one.jpg"
            width={300}
            height={200}
            className="w-[30px] h-[30px] object-cover rounded-full "
          />
        </span>
      </div>
      <span className="text-[14px] py-[5px]">
        Library "Welcome to your Quiz Library!, your library is a treasure trove
        of quizzes created by you.
      </span>

      <h2 className="mt-3 font-bold text-[20px] text-primary-light">
        Most Played
      </h2>
    
      <span className="gap-6 md:gap-[10px] mt-[20px] flex overflow-x-auto items-center justify-start">
        {CardArray.map((Card) => (
          <span
            key={Card.id}
            className="flex-shrink-0 w-[60%] md:w-[20%] border border-slate-300 rounded-[5px] p-[10px]"
          >
        
            <Image
              src={Card.url}
              alt={Card.alt}
              width={400}
              height={300}
              className="w-[100%] h-[100%]"
            />
           
            <label className="text-[16px]">{Card.title}</label>
            <p className=" pt-[5px] text-[12px]">{Card.text}</p>

            <div className="mt-[5px] flex">
              {smallArray.map(
                (small) =>
                  small.id === Card.id && (
                    <div key={small.id} className="w-[12px] h-[12px]">
                      <Image
                        src={small.url}
                        alt={small.alt}
                        width={300}
                        height={200}
                        className="w-[100%] h-[100%] object-cover"
                      />
                    </div>
                  )
              )}
              <div className="ml-[4px] text-[10px]">
                {smallArray.find((small) => small.id === Card.id)?.join}
              </div>
            </div>
          </span>
          
        ))}
      </span>
     

      <div className="max-w-[97%] w-full flex flex-col mt-6">
        <div className="flex justify-between mt-5 text-primarylight">
          <h3 className="my-2 font-bold text-[20px] text-primary-light">
            My Trivials
          </h3>
          <div className="font-bold text-[13px] text-primary-light ">
            See all (16)
          </div>
        </div>
        <div className="flex flex-col gap-5 md:gap-2 mb-3">
          <LibraryPage1Tri />
          <LibraryPage1Tri />
        </div>
      </div>
    </section>
  );
};

export default Card;
