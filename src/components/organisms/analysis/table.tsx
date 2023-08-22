import Link from "next/link";
import { useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

interface tableProps {
  tHeader: string[];
  tData: any[];
}

const AnalysisTable: React.FC<tableProps> = ({ tHeader, tData }) => {
  const [correctValue, setCorrectValue] = useState(4);
  const [incorrectValue, setIncorrectValue] = useState(6);

  const pieCartCorrectData = [
    { title: "Color 1", value: correctValue, color: "#018101" },
    { title: "Color 2", value: incorrectValue, color: "#B4B4B4" },
    { title: "Color 3", value: 1, color: "#fff" },
  ];

  const pieCartIncorrectData = [
    { title: "Color 1", value: correctValue, color: "#FF0000" },
    { title: "Color 2", value: incorrectValue, color: "#B4B4B4" },
    { title: "Color 3", value: 1, color: "#fff" },
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
              {item.map((item: any, index: any) => (
                <td key={index} className="px-4 py-4">
                  <Link
                    href="question"
                    className="flex items-center flex-nowrap"
                  >
                    {index === 3 ? (
                      <div className="w-[32px] h-[32px] mr-4">
                        <PieChart
                          data={pieCartIncorrectData}
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
                      typeof item === "boolean" ? (
                        item === true ? (
                          <div className="w-[32px] border-2 flex justify-center items-center border-[#007BFF] rounded-full h-[32px] mr-4">
                            <FontAwesomeIcon
                              className="text-[#007BFF]"
                              icon={faCheck}
                            />
                          </div>
                        ) : (
                          <div className="w-[32px] border-2 flex justify-center items-center border-[#FF0000] rounded-full h-[32px] mr-4">
                            <FontAwesomeIcon
                              className="text-[#FF0000]"
                              icon={faXmark}
                            />
                          </div>
                        )
                      ) : (
                        <div className="w-[32px] h-[32px] mr-4">
                          <PieChart
                            data={pieCartCorrectData}
                            lineWidth={20}
                            animate
                            labelStyle={{
                              fontSize: "5px",
                            }}
                          />
                        </div>
                      )
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
