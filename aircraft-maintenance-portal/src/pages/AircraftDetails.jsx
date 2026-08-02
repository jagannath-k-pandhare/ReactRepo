import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function AircraftDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [aircraft, setAircraft] = useState(null);

  useEffect(() => {
    async function loadAircraft() {
      try {
        const response = await fetch("/aircraft.json");

        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();

        const selectedAircraft = data.find(
          (item) => item.id === Number(id)
        );

        setAircraft(selectedAircraft);
      } catch (error) {
        console.error(error);
      }
    }

    loadAircraft();
  }, [id]);

  if (!aircraft) {
    return <p className="p-6">Loading...</p>;
  }

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow p-6">
      <h1 className="text-2xl font-bold mb-6">Aircraft Details</h1>

      <div className="space-y-4">
        <p>
          <strong>Registration:</strong> {aircraft.aircraftReg}
        </p>

        <p>
          <strong>Model:</strong> {aircraft.model}
        </p>

        <p>
          <strong>Manufacturer:</strong> {aircraft.manufacturer}
        </p>
      </div>

      <button
        className="mt-8 bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
        onClick={() => navigate("/aircraftlist")}
      >
        Back
      </button>
    </div>
  );
}

export default AircraftDetails;