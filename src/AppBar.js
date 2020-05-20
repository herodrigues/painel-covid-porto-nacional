import React from "react";

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
          <button className="hover:text-gray-600 text-gray-800 font-bold py-2 px-4 rounded-l">
            Visão Geral
          </button>
          <button className="hover:text-gray-600 text-gray-800 font-bold py-2 px-4 rounded-r">
            Boletins Epidemiológicos
          </button>
          <button className="hover:text-gray-600 text-gray-800 font-bold py-2 px-4 rounded-r">
            Decretos Covid-19
          </button>
          <button className="hover:text-gray-600 text-gray-800 font-bold py-2 px-4 rounded-r">
            Despesas Covid-19
          </button>
        </div>
      </div>
    </nav>
  );
}

export default AppBar;
