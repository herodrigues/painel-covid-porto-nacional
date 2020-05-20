import React from "react";
import { Link } from "react-router-dom";

import dados from "./dados";

export const CasosConfirmados = () => (
  <div className="h-56 flex flex-col mr-4 p-4 flex-col w-1/3 border border-gray-100 shadow bg-white">
    <div className="flex mb-4">
      <div className="font-bold text-teal-800 uppercase">Casos confirmados</div>
    </div>
    <div className="flex">
      <div className="flex flex-col w-1/2">
        <div className="font-extrabold font-mono text-4xl text-teal-900">
          {dados.geral.notificados}
        </div>
        <div className="font-bold text-gray-700">notificados</div>
      </div>
      <div className="w-1/2">
        <div className="font-extrabold font-mono text-4xl text-teal-900">
          {dados.geral.confirmados}
        </div>
        <div className="font-bold text-gray-700">confirmados</div>
      </div>
    </div>
    <div className="flex">
      <div className="w-1/2">
        <div className="font-extrabold font-mono text-4xl text-teal-900">
          {dados.geral.descartados}
        </div>
        <div className="font-bold text-gray-700">descartados</div>
      </div>
      <div className="w-1/2">
        <div className="font-extrabold font-mono text-4xl text-teal-900">
          {dados.geral.recuperados}
        </div>
        <div className="font-bold text-gray-700">recuperados</div>
      </div>
    </div>
  </div>
);

export const ObitosConfirmados = () => (
  <div className="h-56 flex flex-col mr-4 p-4 flex-col w-1/3 border border-gray-100 shadow bg-white">
    <div className="flex mb-4">
      <div className="font-bold text-purple-800 uppercase">
        Óbitos confirmados
      </div>
    </div>
    <div className="h-full flex flex-wrap content-center">
      <div className="w-1/2">
        <div className="font-extrabold font-mono text-4xl text-teal-900">
          {dados.geral.obitos}
        </div>
        <div className="font-bold text-gray-700">óbitos</div>
      </div>
      <div className="w-1/2">
        <div className="font-extrabold font-mono text-4xl text-teal-900">
          {(dados.geral.obitos / dados.geral.confirmados) * 100}%
        </div>
        <div className="font-bold text-gray-700">letalidade</div>
      </div>
    </div>
  </div>
);

export const SaibaMais = () => (
  <div className="h-56 w-1/3 border border-gray-100 shadow rounded bg-teal-600 text-white text-left p-6">
    <div className="py-2 font-bold">Sobre o painel</div>
    <div className="py-2">
      Diariamente, a Secretaria Municipal da Saúde, por meio da Secretaria de
      Vigilância em Saúde divulga dados consolidados sobre o COVID-19. Saiba
      mais sobre o painel.
    </div>
    <Link to="/sobre">
      <button className="my-2 bg-transparent hover:bg-teal-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded">
        Saiba mais
      </button>
    </Link>
  </div>
);
