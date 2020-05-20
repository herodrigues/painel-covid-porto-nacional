import React from "react";
import { Bar, Line } from "react-chartjs-2";

import dados from "./dados";

export const ConfirmadosEvolucao = () => {
  const data = {
    labels: dados.graficos.datas,
    datasets: [
      {
        label: "Casos confirmados",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "#319795",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#319795",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "#319795",
        pointHoverBorderWidth: 2,
        pointRadius: 3,
        pointHitRadius: 10,
        data: dados.graficos.confirmados,
      },
    ],
  };

  const options = {
    scales: {
      xAxes: [
        {
          ticks: {
            autoSkip: false,
            maxRotation: 45,
            minRotation: 45,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            min: 0,
            suggestedMax:
              dados.graficos.confirmados[
                dados.graficos.confirmados.length - 1
              ] + 1,
          },
        },
      ],
    },
  };

  return <Line data={data} options={options} />;
};

export const ConfirmadosObitos = () => {
  const data = {
    labels: dados.graficos.datas,
    datasets: [
      {
        label: "Confirmados",
        backgroundColor: "#319795",
        data: dados.graficos.confirmados,
      },
      {
        label: "Óbitos",
        backgroundColor: "#f56565",
        data: dados.graficos.obitos,
      },
    ],
  };

  const options = {
    barValueSpacing: 20,
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            suggestedMax:
              dados.graficos.confirmados[
                dados.graficos.confirmados.length - 1
              ] + 1,
          },
        },
      ],
    },
  };

  return <Bar data={data} options={options} />;
};
