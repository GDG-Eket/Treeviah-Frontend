import React from "react";
import Image from "next/image";
import "../../styles/dashboard.css";
import Link from "next/link";
import Award1 from "../../../public/Images/one.jpg";
import Award2 from "../../../public/Images/two.jpg";
import Award3 from "../../../public/Images/three.jpg";
import Award4 from "../../../public/Images/four.jpg";
import Award5 from "../../../public/Images/five.jpg";
import Award6 from "../../../public/Images/six.jpg";
import Award7 from "../../../public/Images/seven.jpg";
import Award8 from "../../../public/Images/eight.jpg";

interface AwardContext {
  id: number;
  title: string;
  url: any;
  alt: string;
}
const Awards: React.FC = () => {
  const AwardArray: AwardContext[] = [
    {
      id: 1,
      url: Award1,
      title: "Professional",
      alt: "awardImageOne.jpg",
    },
    {
      id: 2,
      url: Award2,
      title: "Professional",
      alt: "awardImageOne.jpg",
    },
    {
      id: 3,
      url: Award3,
      title: "Professional",
      alt: "awardImageOne.jpg",
    },
    {
      id: 4,
      url: Award4,
      title: "Professional",
      alt: "awardImageOne.jpg",
    },
    {
      id: 5,
      url: Award5,
      title: "Professional",
      alt: "awardImageOne.jpg",
    },
    {
      id: 6,
      url: Award6,
      title: "Professional",
      alt: "awardImageOne.jpg",
    },
    {
      id: 7,
      url: Award7,
      title: "Professional",
      alt: "awardImageOne.jpg",
    },
    {
      id: 8,
      url: Award8,
      title: "Professional",
      alt: "awardImageOne.jpg",
    },
  ];

  return (
    <div>
      <section className="w-[100%] h-[40vh]">
        <span className="w-[100%] flex justify-between align-middle p-2">
          <h2 className="font-semibold text-[32px]">My Awards</h2>
          <Link href="/award" className="text-primary">
            See All
          </Link>
        </span>
        <span className="p-[20px]">
          <label className="flex flex-row overflow-x-auto scrollbar-hide gap-[50px] p-2 scrollbar-hide">
            {AwardArray.map((awardlist) => (
              <span
                key={awardlist.id}
                className="px-2 py-4 border rounded-md border-purple-300"
              >
                <Image
                  src={awardlist.url}
                  alt={awardlist.alt}
                  width={300}
                  height={200}
                />
                <p className="capitalized pt-3">{awardlist.title}</p>
              </span>
            ))}
          </label>
        </span>
      </section>
    </div>
  );
};

export default Awards;
