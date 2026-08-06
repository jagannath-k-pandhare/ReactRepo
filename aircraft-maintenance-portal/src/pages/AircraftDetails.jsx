import { useParams, useNavigate } from "react-router-dom";
import useAircraft from "../hooks/useAircraft";

function AircraftDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { aircraft, loading, error } = useAircraft(id);

  if (loading) return <p>loading...</p>;
  if (error) return <p>{error.message}</p>;

  if (!aircraft) {
    return <p>Aircraft not found.</p>;
  }

  return (
    <div className="max-w-3xl mx-auto text-blue-600 rounded-lg shadow p-6">
      <h1 className="text-2xl font-bold mb-6">Aircraft Details</h1>

      <p>
        <strong>Registration:</strong> {aircraft.aircraftReg}
      </p>

      <p>
        <strong>Model:</strong> {aircraft.model}
      </p>

      <p>
        <strong>Manufacturer:</strong> {aircraft.manufacturer}
      </p>

      <button
        className="mt-8 bg-gray-600 text-white px-4 py-2 rounded hover:bg-yellow-700"
        onClick={() => navigate("/aircraftlist")}
      >
        Back
      </button>
    </div>
  );
}

export default AircraftDetails;
