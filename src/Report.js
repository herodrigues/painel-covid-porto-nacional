import React from "react";

export default function Report() {
  const [files, setFiles] = React.useState([]);

  const owner = "herodrigues";
  const repo = "painel-covid-porto-nacional";
  const path = "/boletins";

  React.useEffect(() => {
    const fetchFiles = async () => {
      const result = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/contents/${path}`
      )
        .then((response) => response.json())
        .then((response) => response);

      setFiles(result);
    };

    fetchFiles();
  }, []);

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
          let date = file.name.slice(-12).replace(/_/g, "/");
          date = date.split(".")[0];
          date = date.toLocaleString("pt-BR");
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
              <td className="border px-4 py-2">{file.name}</td>
              <td className="border px-4 py-2">{date}</td>
              <td className="border px-4 py-2">
                <a
                  href={`/boletins/${file.download_url}`}
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
