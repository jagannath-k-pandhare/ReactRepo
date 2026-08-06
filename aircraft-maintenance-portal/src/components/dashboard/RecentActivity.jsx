import React, { useEffect, useState } from "react";

function RecentActivity() {
  const [activity, setActivity] = useState([]);

  useEffect(() => {
    //arrow function name loadActivities
    async function loadActivities() {
      try {
        const response = await fetch("/activity.json");
        if (!response.ok) {
          throw new Error(`HTTP Error : ${response.status}`);
        }
        const data = await response.json();

        setActivity(data);
      } catch (error) {
        console.log(error);
      }
    }
    loadActivities();
  }, []);

  return (
    <>
      <div>
        {activity.map((item) => {
          return <p key={item.id}>{item.activity}</p>;
        })}
      </div>
    </>
  );
}

export default RecentActivity;
