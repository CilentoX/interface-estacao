import React from "react";

import "./dashboard.css";
import Header from "../../components/Header";

export default function Dashboard() {
  const baseUrl = "http://18.118.210.135:3000/public/question/";
  const iframes = {
    chuva: `${baseUrl}e0607540-b1e1-4ac8-b9c4-0d7464888f32`,
    temperatura: `${baseUrl}872803fc-784a-46ff-8fe8-a6b8b139231a`,
    umidade: `${baseUrl}0b7de7b4-e7d3-4a81-8a47-539f36af0664`,
    direcaoVento: `${baseUrl}aae4bff5-30b0-4e98-8d85-d4b35ce13ec2`,
    pluviometria: `${baseUrl}aa20a52c-fbc6-415f-a393-8833a3ea6360`,
    radiacaoUv: `${baseUrl}741b4f8b-953a-4a2f-b911-a5007f120450`,
  };

  return (
    <>
      <Header />
      <div className="dashboard-container">
        <iframe
          src={iframes.chuva}
          width="800"
          height="600"
          allowtransparency="true"
        ></iframe>
        <iframe
          src={iframes.temperatura}
          width="800"
          height="600"
          allowtransparency="true"
        ></iframe>
        <iframe
          src={iframes.umidade}
          width="800"
          height="600"
          allowtransparency="true"
        ></iframe>
        <iframe
          src={iframes.direcaoVento}
          width="800"
          height="600"
          allowtransparency="true"
        ></iframe>
        <iframe
          src={iframes.pluviometria}
          width="800"
          height="600"
          allowtransparency="true"
        ></iframe>
        <iframe
          src={iframes.radiacaoUv}
          width="800"
          height="600"
          allowtransparency="true"
        ></iframe>
      </div>
    </>
  );
}
