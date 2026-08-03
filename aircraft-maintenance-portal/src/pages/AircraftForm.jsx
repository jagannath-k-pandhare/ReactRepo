import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function AircraftForm() {
  const { id } = useParams();
  const isEditMode = Boolean(id);
  const [aircraftReg, setAircraftReg] = useState("");
  const [model, setModel] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  function validateForm() {
    const validationErrors = {};

    if (aircraftReg.trim() === "") {
      validationErrors.aircraftReg = "Registration is required";
    }
    if (model.trim() === "") {
      validationErrors.model = "Model is required";
    }
    if (manufacturer.trim() === "") {
      validationErrors.manufacturer = "Manufacturer is required";
    }
    setErrors(validationErrors);

    return Object.keys(validationErrors).length === 0;
  }
  function handleAircraftRegChange(e) {
    setAircraftReg(e.target.value);
    if (errors.aircraftReg) {
      const newErrors = { ...errors };
      delete newErrors.aircraftReg;
      setErrors(newErrors);
    }
  }
  function handleModel(e) {
    setModel(e.target.value);
    if (errors.model) {
      const newErrors = { ...errors };
      delete newErrors.model;
      setErrors(newErrors);
    }
  }
  function handleManufacturer(e) {
    setManufacturer(e.target.value);
    if (errors.manufacturer) {
      const newErrors = { ...errors };
      delete newErrors.manufacturer;
      setErrors(newErrors);
    }
  }
  useEffect(() => {
    if (!isEditMode) return;
    async function loadAircraft() {
      try {
        const response = await fetch("/aircraft.json");
        if (!response.ok) {
          throw new Error(`HTTP Error ${response.status}`);
        }
        const data1 = await response.json();

        const data = data1.find((item) => item.id === Number(id));
        if (!data) return;

        setAircraftReg(data.aircraftReg);
        setModel(data.model);
        setManufacturer(data.manufacturer);
      } catch (error) {
        console.error(error);
      }
    }
    loadAircraft();
  }, [id, isEditMode]);

  function handleSave(e) {
    if (!validateForm()) return;
    console.log("Saved");
  }

  function handleCancel(e) {
    navigate("/aircraftlist");
  }

  return (
    <div>
      <div className="flex">
        <h1 className="flex rounded bg-blue-600 text-black text-xl w-50 justify-center font-bold">
          {isEditMode ? "Edit Aircraft" : "Add Aircraft"}
        </h1>
      </div>
      <div className="space-y-4">
        <p>
          <input
            className={`p-2 bg-white mt-2 border-2 rounded text-black ${errors.aircraftReg ? " border-red-500" : " border-gray-300"}`}
            type="text"
            value={aircraftReg}
            onChange={handleAircraftRegChange}
            placeholder="Aircraft Registration"
          />
        </p>
        {errors.aircraftReg && (
          <p className="text-red-500 text-sm">{errors.aircraftReg}</p>
        )}
        <p>
          <input
            className={`p-2 bg-white mt-2 border-2 rounded text-black ${errors.model ? " border-red-500" : " border-gray-300"}`}
            type="text"
            value={model}
            onChange={handleModel}
            placeholder="Model"
          />
        </p>

        {errors.model && <p className="text-red-500 text-sm">{errors.model}</p>}
        <p>
          <input
            className={`p-2 bg-white mt-2 border-2 text-black rounded ${errors.manufacturer ? " border-red-500" : " border-gray-300"}`}
            type="text"
            value={manufacturer}
            onChange={handleManufacturer}
            placeholder="Manufacturer"
          />
        </p>

        {errors.manufacturer && (
          <p className="text-red-500 text-sm">{errors.manufacturer}</p>
        )}
        <p>
          <button
            className="p-2 bg-blue-600 text-white m-2 rounded"
            onClick={handleSave}
          >
            {isEditMode ? "Update" : "Save"}
          </button>

          <button
            className="p-2 bg-gray-500 m-2 text-black rounded"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </p>
      </div>
    </div>
  );
}

export default AircraftForm;
