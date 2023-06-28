import React, { useState } from "react";

const Reloj = () => {
  const dateNow = new Date().toLocaleTimeString(undefined, { hour12: false });

  const [time, setTime] = useState(dateNow);

  const handleInterval = (event) => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const horaFormateada = `${hours}:${minutes}:${seconds}`;
    setTime(horaFormateada);
  };

  setInterval(handleInterval, 5000);

  return (
    <div>
      <h1>{time}</h1>
    </div>
  );
};

export default Reloj;
