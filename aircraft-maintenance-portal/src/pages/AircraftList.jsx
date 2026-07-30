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
      <h1>
        Aircraft List{" "}
        {aircraft.length ? "and Count is : " + aircraft.length : ""}
      </h1>
      <ol>
        {aircraft.map((n) => {
          return <AircraftItem aircraftReg={n.aircraftReg} />;
        })}
      </ol>
    </div>
  );
}
export default AircraftList;
