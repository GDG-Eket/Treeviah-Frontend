import { useState } from "react";
import AnalysisTable from "./table";

const Game: React.FC = () => {
  const tabs = ["Summary", "Questions", "Players"];
  const list = ["All", "Didn’t finish"];
  const [activeTab, setActiveTab] = useState(0);
  const [activeList, setActiveList] = useState(0);
  return (
    <div>
      <button className="font-medium text-[#D5AAD5]">Go Back</button>

      <div className="flex items-center justify-between mb-6">
        <h3 className="text-[32px] text-[#1D1D1D] font-bold">
          Virtual Reality
        </h3>

        <div className="flex justify-between">
          {tabs.map((item, index) => (
            <button
              className={`border-b  ${
                activeTab === index
                  ? " border-[#800080] border-b-4 text-[#800080] font-bold"
                  : "border-[#D2D2D2] "
              } py-2 px-4`}
              onClick={() => {
                setActiveTab(index);
              }}
              key={index}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-md p-4 overflow-x-auto no-scrollbar bg-white drop-shadow-lg w-full">
        <div className="flex mb-5">
          {list.map((item, index) => (
            <button
              className={`border-b  ${
                activeList === index
                  ? " border-[#800080] border-b-4 text-[#800080] font-bold"
                  : "border-[#D2D2D2] "
              } py-2 px-4`}
              onClick={() => {
                setActiveList(index);
              }}
              key={index}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="w-full overflow-x-auto h-[50vh]">
          <AnalysisTable />
        </div>
      </div>
    </div>
  );
};

export default Game;
