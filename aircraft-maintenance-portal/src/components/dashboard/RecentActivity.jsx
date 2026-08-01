import React from "react";

function RecentActivity() {
  const activities = [
    "Aircraft VT-ABC added.",
    "Maintenance scheduled for VT-BCD.",
    "Profile updated.",
  ];

  //arrow function name loadActivities
  loadActivities = () => {
    try {
      const response = fetch("/activity.json");
      console.log(response);
      if (!response.ok) {
        throw new Error(`HTTP Error : ${response.status}`);
      }
      const data = response.json();
      
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div>
        {activities.map((item) => {
          return <p key={item}>{item}</p>;
        })}
      </div>
    </>
  );
}

export default RecentActivity;
