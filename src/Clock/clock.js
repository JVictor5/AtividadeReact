import React, { useState, useEffect } from "react";
import "./clock.scss";

function formatTimeValue(value) {
  return value < 10 ? `0${value}` : value;
}

function formatDate(date) {
  const day = formatTimeValue(date.getDate());
  const monthNames = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();
  return `${day} de ${month} de ${year}`;
}

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  function tick() {
    setTime(new Date());
  }

  return (
    <>
      <h1>Primeira atividade</h1>
      <div className="clock-container">
        <div className="clock">
          <div className="clock-box">
            <h2>{formatTimeValue(time.getHours())}</h2>
            <p>Horas</p>
          </div>
          <h2 className="ponto">:</h2>
          <div className="clock-box">
            <h2>{formatTimeValue(time.getMinutes())}</h2>
            <p>Minutos</p>
          </div>
          <h2 className="ponto">:</h2>
          <div className="clock-box">
            <h2>{formatTimeValue(time.getSeconds())}</h2>
            <p>Segundos</p>
          </div>
        </div>
        <div className="date">
          <p>{formatDate(time)}</p>
        </div>
      </div>
    </>
  );
}

export default Clock;
