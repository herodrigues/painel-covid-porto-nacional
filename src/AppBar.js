import React from "react";

import { Link } from "react-router-dom";

function AppBar() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-white p-6 border border-gray-400 shadow">
      <div className="flex items-center flex-shrink-0 text-gray-800 mr-6">
        <span className="font-semibold text-2xl tracking-tight uppercase">
          <span className="text-black text-black">Coronavírus </span>
          <span className="text-extrabold">{"//"}</span>
          <span className="fold-normal text-teal-600"> Porto Nacional</span>
        </span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow"></div>
        <div className="inline-flex">
          <Link to="/">
            <button className="hover:text-gray-600 text-gray-800 font-bold py-2 px-4 rounded-l">
              Visão Geral
            </button>
          </Link>
          <Link to="/boletins">
            <button className="hover:text-gray-600 text-gray-800 font-bold py-2 px-4 rounded-r">
              Boletins Epidemiológicos
            </button>
          </Link>
          <Link to="/decretos">
            <button className="hover:text-gray-600 text-gray-800 font-bold py-2 px-4 rounded-r">
              Decretos
            </button>
          </Link>
          <a
            rel="noopener noreferrer"
            href="https://portonacional.prodataweb.inf.br/sig/app.html#/transparencia/transparencia-despesa-simplificado-corona/"
            target="_blank"
          >
            <button className="hover:text-gray-600 text-gray-800 font-bold py-2 px-4 rounded-r">
              Despesas
            </button>
          </a>
          <Link to="/sobre">
            <button className="hover:text-gray-600 text-gray-800 font-bold py-2 px-4 rounded-r">
              Sobre
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default AppBar;
