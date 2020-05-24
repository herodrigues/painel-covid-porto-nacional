import React from "react";
import { Link } from "react-router-dom";

import dados from "./dados";

export const CasosRecuperados = () => (
  <div className="flex items-center h-56 text-left mr-4 p-8 flex-col w-1/4 border border-gray-100 shadow bg-white bg-green-500 rounded-lg">
    <div className="flex-1 w-full text-2xl">
      <div className="font-bold text-gray-200">Casos recuperados</div>
      <div className="font-extrabold font-mono text-white">
        {dados.geral.recuperados}
      </div>
    </div>
    <div className="flex-1 w-full">
      <div className="font-bold text-gray-200">Em acompanhamento</div>
      <div className="font-extrabold font-mono text-white">
        {dados.geral.acompanhamento}
      </div>
    </div>
  </div>
);

export const CasosConfirmados = () => (
  <div className="h-56 flex flex-col mr-4 p-4 flex-col w-1/4 border border-gray-100 shadow bg-white rounded-lg">
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
  <div className="h-56 flex flex-col mr-4 p-4 flex-col w-1/4 border border-gray-100 shadow bg-white rounded-lg">
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
  <div className="flex flex-col w-1/4 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 h-56 w-1/3 border border-gray-100 shadow rounded bg-teal-600 text-white text-left py-2 px-6 rounded-lg">
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
