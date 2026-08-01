import React from "react";

function SummaryCard({ title, value }) {
  return (
    <div className="rounded-lg border bg-white p-5 shadow-sm">
      <p className="text-sm text-gray-500">{title}</p>
      <h2 className="mt-2 text-3xl text-black font-bold">{value}</h2>
    </div>
  );
}

export default SummaryCard;
