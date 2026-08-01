import React from "react";
import { useLocation } from "react-router-dom";

function Header() {
  let pageTitle = "Dashboard";
  const location = useLocation();

  const pageTitles = {
    "/dashboard": "Dashboard",
    "/aircraft": "Aircraft",
    "/aircraftlist": "Aircraft List",
    "/favourite": "Favourite",
    "/profile": "Profile",
  };

  pageTitle = pageTitles[location.pathname] || "Dashboard";

  return (
    <header>
      <div className="flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl">✈</span>

          <div>
            <h1 className="text-xl font-semibold">
              Aircraft Maintenance Portal
            </h1>

            <p>{pageTitle}</p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-xl">🔔</span>
          <div className="text-right">
            <p className="font-medium">Jagannath</p>
            <p className="text-sm text-gray-500">Administrator</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center font-semibold">
            J
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
