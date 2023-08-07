import React from "react";

interface TableProps {
  headers: string[];
  data: string[][];
}

const RealityTable: React.FC<TableProps> = ({ headers, data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-[100%] table-auto h-[200px]">
        <thead>
          <tr className="border-b border-gray-light">
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-4 py-2 text-left font-semibold text-primary"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className={rowIndex % 2 === 0 ? "bg-gray-100" : ""}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="px-4 py-4">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RealityTable;
