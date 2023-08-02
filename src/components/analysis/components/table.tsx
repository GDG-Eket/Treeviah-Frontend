import Link from "next/link";
import { useState } from "react";
import { PieChart } from "react-minimal-pie-chart";

const AnalysisTable: React.FC = () => {
  const [correctValue, setCorrectValue] = useState(4);
  const [incorrectValue, setIncorrectValue] = useState(6);

  const pieCartData = [
    { title: "Color 1", value: correctValue, color: "#018101" },
    { title: "Color 2", value: incorrectValue, color: "#B4B4B4" },
    { title: "Color 3", value: 1, color: "#fff" },
  ];
  const tHeader = [
    "Nikename",
    "Rank",
    "Correct",
    "Incorrect",
    "Unanswered",
    "Total",
  ];
  const tData = [
    ["Chicken feed", 1, 98, 2, 0, 9980],
    ["Blur", 2, 98, 2, 0, 9980],
    ["Choosen D", 3, 98, 2, 0, 9980],
    ["Dragdrop", 3, 98, 2, 0, 9980],
    ["JT", 3, 98, 2, 0, 9980],
  ];
  return (
    <div>
      <table className="w-full table-auto">
        <thead>
          <tr>
            {tHeader.map((item, index) => (
              <th
                key={index}
                className="px-4 py-2 text-left font-semibold text-gray-900"
              >
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tData.map((item, index) => (
            <tr key={index}>
              {item.map((item, index) => (
                <td key={index} className="px-4 py-4">
                  <Link
                    href="question"
                    className="flex items-center flex-nowrap"
                  >
                    {index === 3 ? (
                      <div className="w-[32px] h-[32px mr-4">
                        <PieChart
                          data={pieCartData}
                          lineWidth={20}
                          animate
                          labelStyle={{
                            fontSize: "5px",
                          }}
                        />
                      </div>
                    ) : (
                      ""
                    )}
                    {index === 2 ? (
                      <div className="w-[32px] h-[32px mr-4">
                        <PieChart
                          data={pieCartData}
                          lineWidth={20}
                          animate
                          labelStyle={{
                            fontSize: "5px",
                          }}
                        />
                      </div>
                    ) : (
                      ""
                    )}
                    {item} {index === 2 ? "% Correct" : ""}
                    {index === 3 ? "% Inorrect" : ""}
                  </Link>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AnalysisTable;
