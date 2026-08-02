import React from "react";

function DataTable({ columns, data }) {
  return (
    <div>
      {/* Header */}
      <div
        id="thead-row"
        className="flex justify-between items-center mb-4 font-semibold border-b pb-2"
      >
        {columns.map((column) => (
          <div key={column.field}>{column.header}</div>
        ))}
      </div>

      {/* Data */}
      {data.map((item) => (
        <div
          key={item.id}
          id="tr"
          className="flex justify-between items-center mb-4"
        >
          {columns.map((column) => (
            <div id="td" key={column.field}>
              {item[column.field]}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default DataTable;
