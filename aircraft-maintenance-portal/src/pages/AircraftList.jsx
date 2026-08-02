import { useState, useEffect } from "react";
import AircraftItem from "../components/AircraftItem";
import DataTable from "../components/common/DataTable";

function AircraftList() {
  const [searchAircraft, setSearchAircraft] = useState("");
  const [aircraft, setAircraft] = useState([]);
  const [searchManuf, setSearchManuf] = useState("");

  const columns = [
    { id: 1, header: "Registration", field: "aircraftReg" },
    { id: 3, header: "Manufacturer", field: "manufacturer" },
    { id: 2, header: "Model", field: "model" },
    { id: 4, header: "Action", field: "Action" },
  ];

  const handleSearch = (e) => {
    setSearchAircraft(e.target.value);
  };

  const handleManuf = (e) => {
    setSearchManuf(e.target.value);
  };

  useEffect(() => {
    async function loadAircraft() {
      try {
        const response = await fetch("/aircraft.json");
        if (!response.ok) {
          throw new Error(`HTTP Error : ${response.status}`);
        }
        const data = await response.json();

        setAircraft(data);
      } catch (error) {
        console.log(error);
      }
    }
    loadAircraft();
  }, []);

  const filteredAircraft = aircraft.filter((n) => {
    return (
      (searchAircraft === "" ||
        n.aircraftReg.toLowerCase().includes(searchAircraft.toLowerCase())) &&
      (searchManuf === "" ||
        n.manufacturer.toLowerCase().includes(searchManuf.toLowerCase()))
    );
  });

  return (
    <div>
      <div className="flex-1">
        <span>Search </span>
        <input
          className="border m-1 rounded px-3 py-2 w-80"
          type="text"
          value={searchAircraft}
          placeholder="Enter Aircraft"
          onChange={handleSearch}
        />
        <input
          className="border m-1 rounded px-3 py-2 w-80"
          type="text"
          value={searchManuf}
          placeholder="Enter Manufacturer"
          onChange={handleManuf}
        />
        <button className="bg-blue-600 text-white px-4 m-1 py-2 rounded hover:bg-blue-700">
          + Add Aircraft
        </button>
      </div>
      <DataTable columns={columns} data={filteredAircraft} />
    </div>
  );
}

export default AircraftList;
