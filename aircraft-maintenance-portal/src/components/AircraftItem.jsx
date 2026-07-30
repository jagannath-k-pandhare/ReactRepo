import React from "react";

function AircraftItem(props, acReg) {
  return (
    <div>
      <h3>I am Component as AircraftItem</h3>
      <ol>
      <li>Aircraft Registration No : {props.aircraft.aircraftReg}</li>
      <li>Manufacturer : {props.aircraft.manufacturer}</li>
      <li>Model : {props.aircraft.model}</li>
      <li>Aircraft reg from destructuring : {acReg}</li>
    </ol>
    </div>
)}

export default AircraftItem;
