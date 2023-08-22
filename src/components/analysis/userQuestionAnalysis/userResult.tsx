import Image from "next/image";
import React from "react";

interface TableInterface {
  nickname: string;
  rank: string;
  imagecorrect: string;
  imagewrong: string;
  correct: string;
  incorrect: string;
  unanswered: number;
  total: number;
}

interface TableHeadInterface {
  nickname: string;
  rank: string;
  correct: string;
  incorrect: string;
  unanswered: string;
  total: string;
}

const UserResult: React.FC = () => {
  const tablehead: TableHeadInterface[] = [
   { nickname: "Nickname",
    rank: "Rank",
    correct: "Correct",
    incorrect: "Incorrect",
    unanswered: "Unanswered",
    total: "Total",
  }
  ];

  const tabledata: TableInterface[] = [
    {
      nickname: "Chicken feed",
      rank: "1",
      imagecorrect: "/../public/Images/green.png",
      imagewrong: "/../public/Images/red.png",
      correct: "98% Correct",
      incorrect: "2% Incorrect",
      unanswered: 0,
      total: 9980,
    },
    {
      nickname: "Chicken feed",
      rank: "1",
      imagecorrect: "/../public/Images/green.png",
      imagewrong: "/../public/Images/red.png",
      correct: "98% Correct",
      incorrect: "2% Incorrect",
      unanswered: 0,
      total: 9980,
    },
    {
      nickname: "Chicken feed",
      rank: "1",
      imagecorrect: "/../public/Images/green.png",
      imagewrong: "/../public/Images/red.png",
      correct: "98% Correct",
      incorrect: "2% Incorrect",
      unanswered: 0,
      total: 9980,
    },
    {
      nickname: "Chicken feed",
      rank: "1",
      imagecorrect: "/../public/Images/green.png",
      imagewrong: "/../public/Images/red.png",
      correct: "98% Correct",
      incorrect: "2% Incorrect",
      unanswered: 0,
      total: 9980,
    },
    {
      nickname: "Chicken feed",
      rank: "1",
      imagecorrect: "/../public/Images/green.png",
      imagewrong: "/../public/Images/red.png",
      correct: "98% Correct",
      incorrect: "2% Incorrect",
      unanswered: 0,
      total: 9980,
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
                    <li className="self-center items-center">
                      {data.nickname}
                    </li>
                    <li className="self-center items-center">
                      {data.rank}
                    </li>
                    <li className="self-center items-center">{data.correct}</li>
                    <li className="self-center items-center">{data.incorrect}</li>
                    <li className="self-center items-center">{data.unanswered}</li>
                    <li className="self-center items-center">{data.total}</li>
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
                    <li className="self-start items-start">{data.nickname}</li>
                    <li className="self-start items-start">{data.rank}</li>
                    <li className="self-start items-start flex justify-center">
                      <div className="pr-2">
                        <Image
                          src={data.imagecorrect}
                          alt="image.png"
                          width={700}
                          height={300}
                          className="w-7 h-7"
                        />
                      </div>
                      <div>{data.correct}</div>
                    </li>
                    <li className="self-start items-start flex justify-center">
                      <div className="pr-2">
                        <Image
                          src={data.imagewrong}
                          alt="image.png"
                          width={700}
                          height={300}
                          className="w-7 h-7"
                        />
                      </div>
                      <div>{data.incorrect}</div>
                    </li>
                    <li className="self-start items-start">
                      {data.unanswered}
                    </li>
                    <li className="self-start items-start">{data.total}</li>
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

export default UserResult;
