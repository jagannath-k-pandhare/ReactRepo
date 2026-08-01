import { useState, useEffect } from "react";
import AircraftItem from "../components/AircraftItem";

function AircraftList() {
  const [aircraft, setAircraft] = useState([]);

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

  return (
    <div>
      <h2>
        Aircraft List{" "}
        {aircraft.length ? "and Count is : " + aircraft.length : ""}
      </h2>
      {aircraft.map((n) => {
        return (
          <AircraftItem
            key={n.id}
            aircraftReg={n.aircraftReg}
            manufacturer={n.manufacturer}
            aircraft={n}
            acReg={n.aircraftReg}
          />
        );
      })}
    </div>
  );
}

export default AircraftList;
