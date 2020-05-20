import React from "react";

const start = new Date("2020-04-27");
const end = new Date("2020-05-19");
let datas = [];
const date = new Date(start);

while (date <= end) {
  datas.push(
    new Date(date).toLocaleDateString("pt-BR", {
      year: "2-digit",
      month: "2-digit",
      day: "2-digit",
    })
  );
  date.setDate(date.getDate() + 1);
}
datas = datas.reverse();

export default function Report() {
  const files = [];
  const owner = "herodrigues";
  const repo = "painel-covid-porto-nacional";
  const path = "/";

  fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`)
    .then((response) => response.json())
    .then((response) => {
      response.map((item) => files.push(item));
    });

  return (
    <table className="table-auto bg-white max-w-full w-10/12 m-12">
      <thead>
        <tr>
          <th className="px-4 py-2">Banner</th>
          <th className="px-4 py-2">Nome</th>
          <th className="px-4 py-2">Data</th>
          <th className="px-4 py-2">Download</th>
        </tr>
      </thead>
      <tbody>
        {files.map((file, index) => {
          const date = file.replace(/\//g, "_");
          const key = files.length - index;

          return (
            <tr key={key} className={key % 2 ? "bg-gray-100" : ""}>
              <td className="border px-4 py-2 flex">
                <img
                  alt="banner"
                  className="m-auto"
                  src="https://via.placeholder.com/150"
                />
              </td>
              <td className="border px-4 py-2">
                Boletim Epidemiológico COVID-19 Nº {key} de Porto Nacional - TO
              </td>
              <td className="border px-4 py-2">{file}</td>
              <td className="border px-4 py-2">
                <a
                  href={`/boletins/${key}_Boletim_Epidemiologico_Covid19_${date}.pdf`}
                  className="cursor-pointer bg-white hover:bg-gray-100 text-green-800 font-semibold py-2 px-4 rounded shadow inline-flex items-center"
                  download
                >
                  <svg
                    className="fill-current w-4 h-4 m-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                  </svg>
                </a>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
