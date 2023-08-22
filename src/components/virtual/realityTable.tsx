import React from "react";
import Image from "next/image";
interface TableProps {
  headers: string[];
  data: string[][];
}

const RealityTable: React.FC<TableProps> = ({ headers, data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-[100%] table-auto h-[200px] overflow-x-auto">
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
            <tr
              key={rowIndex}
              className={rowIndex % 2 === 0 ? "bg-gray-100" : ""}
            >
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="px-4 py-4">
                  {cellIndex === 2 ? (
                   <div className="flex items-center">
                   {
                   typeof cell === "string" &&
                   (cell.includes("green.png") || cell.includes("red.png")) ? (
                    //  <div className="flex">
                    //    {cell.includes("green.png") && (
                    //      <Image
                    //        src={cell}
                    //        alt={`Green Image for row ${rowIndex}`}
                    //        width={700} // Adjust width as needed
                    //        height={300} // Adjust height as needed
                    //        className="mr-2 w-5"
                    //      />
                    //    )}
                    //    {cell.includes("red.png") && (
                    //      <Image
                    //        src={cell}
                    //        alt={`Red Image for row ${rowIndex}`}
                    //        width={700}
                    //        height={300} 
                    //        className="mr-2 w-5"
                    //      />
                    //    )}
                    //  </div>
                          <Image
                           src={cell}
                           alt={`Image for row ${rowIndex}`}
                           width={700} // Adjust width as needed
                           height={300} // Adjust height as needed
                           className="mr-2 w-5"
                         />   

                   ) : null}
                   <div className="">
                   {/* {row[cellIndex + 1]} */}
                   </div>
                 </div>                 
                  )
                   : (
                    cell
                  )
                  }
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
