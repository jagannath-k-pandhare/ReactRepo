import React from "react";

function AircraftItem({ aircraft: { aircraftReg,
  manufacturer,
  model
 }}) {
  return (
    <div>
      <ol>
      <li>{ aircraftReg}</li>
      <li>{ manufacturer}</li>
      <li>{ model}</li>
</ol>
    </div>
)}

export default AircraftItem;
