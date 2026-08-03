import { useState, useEffect } from "react";
import DataTable from "../components/common/DataTable";
import { useNavigate } from "react-router-dom";
import ConfirmDialog from "../components/common/ConfirmDialog";
import { getAircraft } from "../services/aircraftService";

function AircraftList() {
  const [searchAircraft, setSearchAircraft] = useState("");
  const [aircraft, setAircraft] = useState([]);
  const [searchManuf, setSearchManuf] = useState("");
  const navigate = useNavigate();
  const [showDialog, setShowDialog] = useState(false);
  const [selectedAircraft, setSelectedAircraft] = useState(null);

  function handleView(item) {
    navigate(`/aircraftdetails/${item.id}`);
  }

  function handleDelete(item) {
    setSelectedAircraft(item);
    setShowDialog(true);
  }
  function confirmDelete() {
    const updatedAircraftList = aircraft.filter(
      (item) => item.id !== selectedAircraft.id,
    );
    setAircraft(updatedAircraftList);
    setSelectedAircraft(null);
    setShowDialog(false);
  }
  const columns = [
    { id: 1, header: "Registration", field: "aircraftReg" },
    { id: 2, header: "Model", field: "model" },
    { id: 3, header: "Manufacturer", field: "manufacturer" },
    {
      id: 4,
      header: "Action",
      render: (item) => (
        <>
          <button
            className="text-blue-600 hover:underline p-2"
            onClick={() => handleView(item)}
          >
            View
          </button>
          <button
            className="text-green-600 hover:underline p-2"
            onClick={() => navigate(`/aircraft/edit/${item.id}`)}
          >
            Edit
          </button>
          <button
            className="text-red-600 hover:underline p-2"
            onClick={() => handleDelete(item)}
          >
            Delete
          </button>
        </>
      ),
    },
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
        // const response = await fetch("/aircraft.json");
        // if (!response.ok) {
        //   throw new Error(`HTTP Error : ${response.status}`);
        // }
        // const data = await response.json();
        const data = await getAircraft();
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
        <button
          className="bg-blue-600 text-white px-4 m-1 py-2 rounded hover:bg-blue-700"
          onClick={() => navigate("/aircraft/add")}
        >
          + Add Aircraft
        </button>
      </div>
      <DataTable columns={columns} data={filteredAircraft} />
      {showDialog && (
        <ConfirmDialog
          title="Delete Aircraft"
          message={`Are you sure you want to delete ${selectedAircraft.aircraftReg}?`}
          onConfirm={() => {
            return <>{confirmDelete()}</>;
          }}
          onCancel={() => setShowDialog(false)}
        />
      )}
    </div>
  );
}

export default AircraftList;
