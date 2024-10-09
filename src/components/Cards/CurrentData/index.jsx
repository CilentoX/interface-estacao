import React, { useEffect, useState } from "react";
import "./currentDataCard.css"; // Crie um arquivo CSS para estilizar o card principal

function MainCard({ city, state, image }) {
  return (
    <div className="main-card">
      <img src={image} alt="city" />
      <h2>{city}</h2>
      <h3>{state}</h3>
    </div>
  );
}

function DataCard({ image, title, data }) {
  return (
    <div className="data-card">
      <img src={image} alt={title} />
      <h4>{title}</h4>
      <p>{data}</p>
    </div>
  );
}

export { MainCard, DataCard };
