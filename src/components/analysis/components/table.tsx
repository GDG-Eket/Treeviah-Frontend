import Link from "next/link";
import { PieChart } from "react-minimal-pie-chart";

const data = [
  { title: "Color 1", value: 50, color: "#018101" },
  { title: "Color 2", value: 1, color: "#97A5EB" },
  { title: "Color 3", value: 2, color: "#FFCC91" },
];

const AnalysisTable: React.FC = () => {
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
    ["Choosen D", 3, 98, 2, 0, 9980],
    ["Choosen D", 3, 98, 2, 0, 9980],
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
                  <Link href="question">
                    <PieChart
                      data={data}
                      lineWidth={20}
                      animate
                      labelStyle={{
                        fontSize: "5px",
                      }}
                    />
                    {item}
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
