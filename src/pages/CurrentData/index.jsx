import React, { useEffect, useState } from "react";
import "./currentdata.css";
import Header from "../../components/Header";
import { MainCard, DataCard } from "../../components/Cards/CurrentData";

export default function CurrentData() {
  const [cardData, setCardData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [debugData, setDebugData] = useState({});

  const mainData = {
    city: "Petrópolis",
    state: "RJ",
    image: "images/weather.png",
  };

  const dataCards = [
    {
      metabaseId: 41,
      image: "images/rain.png",
      title: "Chuva",
      unit: "mm",
    },
    {
      metabaseId: 42,
      image: "images/temp.png",
      title: "Temperatura",
      unit: "°C",
    },
    {
      metabaseId: 43,
      image: "images/pluviometria.png",
      title: "Pluviometria",
      unit: "%",
    },
    {
      metabaseId: 44,
      image: "images/windDirection.png",
      title: "Dirção do vento",
      unit: "%",
    },
    {
      metabaseId: 45,
      image: "images/uv.png",
      title: "Índice UV",
      unit: "UV",
    },
    {
      metabaseId: 46,
      image: "images/humidity.png",
      title: "Umidade",
      unit: "%",
    },
    {
      metabaseId: 47,
      image: "images/wind.png",
      title: "Velocidade do vento",
      unit: "m/s",
    }
  ];
  useEffect(() => {
    const fetchMetabaseData = async () => {
      try {
        // Login to get session token
        const loginResponse = await fetch(
          "http://18.118.210.135:3001/api/metabase/token",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: "lpereira@faeterj-petropolis.edu.br",
              password: "!c!jxjTQ4gkNT2A",
            }),
          }
        );

        if (!loginResponse.ok) {
          throw new Error("Erro ao fazer login");
        }

        const loginData = await loginResponse.json();
        const sessionToken = loginData.id;

        // Fetch data for all cards in a single request
        const cardIds = dataCards.map((card) => card.metabaseId); // Extrai os IDs dos cards
        const dataResponse = await fetch(
          "http://18.118.210.135:3001/api/cards/data",
          {
            method: "POST",
            headers: {
              "X-Metabase-Session": sessionToken,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ cardIds }), // Envia os IDs dos cards
          }
        );

        if (!dataResponse.ok) {
          throw new Error("Erro ao obter dados dos cards");
        }

        const newCardData = await dataResponse.json();
        setCardData(newCardData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchMetabaseData();
  }, []);

  const getCardDisplay = (card) => {
    if (loading) return "Carregando...";
    const value = cardData[card.metabaseId];
    return value !== undefined ? `${value}${card.unit}` : "Dados indisponíveis";
  };

  return (
    <>
      <Header />
      <div className="current-data-container">
        <MainCard
          city={mainData.city}
          state={mainData.state}
          image={mainData.image}
        />
        <div className="data-cards-container">
          {dataCards.map((card, index) => (
            <DataCard
              key={index}
              image={card.image}
              title={card.title}
              data={getCardDisplay(card)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
