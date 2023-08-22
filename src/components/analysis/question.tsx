import Image from "next/image";
import React from "react";

interface TableInterface {
  question: string;
  type: string;
  image: string;
  correct: string;
}

interface TableHeadInterface {
  question: string;
  type: string;
  correct: string;
}

const Tryout: React.FC = () => {
  const tablehead: TableHeadInterface[] = [
    {
      question: "Question",
      type: "Type",
      correct: "Correct/Incorrect",
    },
  ];

  const tabledata: TableInterface[] = [
    {
      question:
        "Which technology is commonly used in virtual reality headsets?",
      type: "Multiple Choice",
      image: "/../public/Images/green.png",
      correct: "100% Correct",
    },
    {
      question:
        "Which technology is commonly used in virtual reality headsets?",
      type: "Multiple Choice",
      image: "/../public/Images/green.png",
      correct: "100% Correct",
    },
    {
      question:
        "Which technology is commonly used in virtual reality headsets?",
      type: "Multiple Choice",
      image: "/../public/Images/green.png",
      correct: "100% Correct",
    },
    {
      question:
        "Which technology is commonly used in virtual reality headsets?",
      type: "Multiple Choice",
      image: "/../public/Images/green.png",
      correct: "100% Correct",
    },
    {
      question:
        "Which technology is commonly used in virtual reality headsets?",
      type: "Multiple Choice",
      image: "/../public/Images/green.png",
      correct: "100% Correct",
    },
    {
      question:
        "Which technology is commonly used in virtual reality headsets?",
      type: "Multiple Choice",
      image: "/../public/Images/green.png",
      correct: "100% Correct",
    },
    {
      question:
        "Which technology is commonly used in virtual reality headsets?",
      type: "Multiple Choice",
      image: "/../public/Images/green.png",
      correct: "100% Correct",
    },
    {
      question:
        "Which technology is commonly used in virtual reality headsets?",
      type: "Multiple Choice",
      image: "/../public/Images/green.png",
      correct: "100% Correct",
    },
    {
      question:
        "Which technology is commonly used in virtual reality headsets?",
      type: "Multiple Choice",
      image: "/../public/Images/red.png",
      correct: "100% Correct",
    },
    {
      question:
        "Which technology is commonly used in virtual reality headsets?",
      type: "Multiple Choice",
      image: "/../public/Images/red.png",
      correct: "100% Correct",
    },
  ];

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="w-[100%] table-auto">
          <thead>
            <tr className="border-b border-gray-light">
              {tablehead.map((data, index) => (
                <th
                  className="text-left font-semibold text-primary px-[2%]"
                  key={index}
                >
                  <ul className="flex justify-around items-center w-[100%] gap-10 py-4">
                    <li className="self-center items-center w-[300px] sm:w-[30%]">
                      {data.question}
                    </li>
                    <li className="self-center items-center w-[200px] sm:w-auto">{data.type}</li>
                    <li className="self-center items-center">{data.correct}</li>
                  </ul>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {tabledata.map((data, index) => (
                <td key={index} className="w-[100%] flex flex-col px-[2%]">
                  <ul className="flex justify-around items-center w-[100%] gap-10 py-4">
                    <li className="self-start items-start w-[300px] sm:w-[30%]">
                      {data.question}
                    </li>
                    <li className="self-start items-start w-[200px] sm:w-auto">{data.type}</li>
                    <li className="self-start items-start flex justify-center">
                      <span className="pr-2">
                        <Image
                          src={data.image}
                          alt="image.png"
                          width={700}
                          height={300}
                          className="w-6"
                        />
                      </span>
                      <span>{data.correct}</span>
                    </li>
                  </ul>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tryout;
