import React from "react";

import {
  ConfirmadosEvolucao as GraficoConfirmadosEvolucao,
  ConfirmadosObitos as GraficoConfirmadosObitos,
} from "./Chart";

import {
  CasosConfirmados,
  CasosRecuperados,
  ObitosConfirmados,
  SaibaMais,
} from "./Panel";
import {
  Luzimangues as MapaLuzimangues,
  PortoNacional as MapaPortoNacional,
} from "./Maps";

import TopPanel from "./TopPanel";

export default function Home() {
  return (
    <div>
      <TopPanel title="Painel Coronavírus" />
      <div className="flex p-4 mx-12 text-center">
        <CasosRecuperados />
        <CasosConfirmados />
        <ObitosConfirmados />
        <SaibaMais />
      </div>
      <div className="flex mx-12 my-4 w-1/2 sm:w-full">
        <div className="flex-1 mx-2 rounded-lg bg-white sm:w-full">
          <div className="px-2 py-2 font-bold">Porto Nacional</div>
          <div className="flex-1 p-2 vw-50">
            <MapaPortoNacional />
          </div>
        </div>
        <div className="flex-1 mx-12 rounded-lg bg-white w-1/2 sm:w-full">
          <div className="px-2 py-2 font-bold">Luzimangues</div>
          <div className="flex-1 p-2 vw-50 sm:w-full">
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
