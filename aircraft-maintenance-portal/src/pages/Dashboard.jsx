import React from "react";
import SummaryCard from "../components/dashboard/SummaryCard";
import RecentActivity from "../components/dashboard/RecentActivity";

function Dashboard() {
  return (
    <>
      <h1 className="mb-6 text-2xl font-bold">Dashboard</h1>

      <div className="grid grid-cols-4 gap-4">
        <SummaryCard title="Aircraft" value={245} />
        <SummaryCard title="Active Flights" value={18} />
        <SummaryCard title="Due Maintenance" value={12} />
        <SummaryCard title="Grounded" value={3} />
      </div>
      <div className="mt-6">
        <RecentActivity />
      </div>
    </>
  );
}

export default Dashboard;
