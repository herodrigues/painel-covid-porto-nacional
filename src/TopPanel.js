import React from "react";

const TopPanel = ({ title, download }) => {
  const date = new Date().toLocaleString("pt-BR");

  return (
    <div className="flex mb-4 py-6 px-16">
      <div className="flex flex-col w-1/2">
        <span className="font-mono text-green-800 font-extrabold">
          COVID-19
        </span>
        <span className="font-bold text-2xl font-sans">{title}</span>
        <span className="text-gray-700 text-sm">Atualizado em: {date}</span>
      </div>
      <div className="w-1/2 flex flex-row-reverse py-4">
        {download && (
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
        )}
      </div>
    </div>
  );
};

export default TopPanel;
