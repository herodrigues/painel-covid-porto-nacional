import React from "react";
import "./App.css";

import AppBar from "./AppBar";

import {
  ConfirmadosEvolucao as GraficoConfirmadosEvolucao,
  ConfirmadosObitos as GraficoConfirmadosObitos,
} from "./Chart";

import { CasosConfirmados, ObitosConfirmados, SaibaMais } from "./Panel";
import {
  Luzimangues as MapaLuzimangues,
  PortoNacional as MapaPortoNacional,
} from "./Maps";

function App() {
  return (
    <div className="h-screen">
      <AppBar />
      <div className="flex mb-4 py-8 px-16">
        <div className="flex flex-col w-1/2">
          <span className="font-mono text-green-800 font-extrabold">
            COVID19
          </span>
          <span className="font-bold text-2xl font-sans">
            Painel Coronavírus
          </span>
          <span className="text-gray-700 text-sm">
            Atualizado em: 19/05/2020 19:20
          </span>
        </div>
        <div className="w-1/2 flex flex-row-reverse py-4">
          <button className="bg-white hover:bg-gray-100 text-green-800 font-semibold py-2 px-4 rounded shadow inline-flex items-center">
            <svg
              className="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
            Baixe o Boletim Diário
          </button>
        </div>
      </div>
      <div className="flex p-4 mx-12 text-center">
        <CasosConfirmados />
        <ObitosConfirmados />
        <SaibaMais />
      </div>
      <div className="flex mx-12 my-4">
        <div className="flex-1 mx-2 rounded-lg bg-white">
          <div className="px-2 py-2 font-bold">Porto Nacional</div>
          <div className="flex-1 p-2 vw-50">
            <MapaPortoNacional />
          </div>
        </div>
        <div className="flex-1 mx-12 rounded-lg bg-white">
          <div className="px-2 py-2 font-bold">Luzimangues</div>
          <div className="flex-1 p-2 vw-50">
            <MapaLuzimangues />
          </div>
        </div>
      </div>
      <div className="flex mx-12 my-4">
        <div className="flex-1 w-1/2 mx-2 rounded-lg bg-white">
          <div className="px-2 py-2 font-bold">Casos confirmados</div>
          <GraficoConfirmadosEvolucao />
        </div>
        <div className="flex-1 w-1/2 mx-2 rounded-lg bg-white">
          <div className="px-2 py-2 font-bold">Casos confirmados e óbitos</div>
          <GraficoConfirmadosObitos />
        </div>
      </div>
    </div>
  );
}

export default App;
