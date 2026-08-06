export async function getAircraft() {
  const response = await fetch("/aircraft.json");
  if (!response.ok) {
    throw new Error(`HTTP Error : ${response.status}`);
  }
  const data = await response.json();

  return data;
}

export async function getAircraftById(id) {
  const aircraft = await getAircraft();
  //in read app "GET /api/aircraft/5"
  return aircraft.find((item) => item.id === Number(id));
}
