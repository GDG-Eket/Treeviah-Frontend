import React from "react";
import { useTable } from "react-table";
import { Column } from "react-table";
import '../styles/dashboard.css'

interface TableData {
  [key: string]: any;
}

interface ResponsiveTableProps {
  columns: Column<TableData>[];
  data: TableData[];
}

const ResponsiveTable: React.FC<ResponsiveTableProps> = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <div className="table-responsive">
      <table
        {...getTableProps()}
        className="table-auto min-w-[100%] divide-y divide-gray-light"
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} className="bg-gray-50">
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  className="px-4 py-2 text-left font-semibold text-primary"
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className={row.index % 2 === 0 ? "bg-gray-100" : ""}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} className="px-4 py-2">
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ResponsiveTable;
