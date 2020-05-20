import React from "react";
import { Map, TileLayer, Circle, Tooltip } from "react-leaflet";

import dados from "./dados";

const position = {
  porto_nacional: [-10.7003365, -48.4048126],
  luzimangues: [-10.2006325, -48.4555809],
};

export const PortoNacional = () => (
  <Map center={position.porto_nacional} zoom={13} id="porto-nacional">
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
    {Object.keys(dados.casos.porto_nacional).map((bairro, index) => (
      <Circle
        key={index}
        center={dados.casos.porto_nacional[bairro].posicao}
        fillColor="red"
        color="red"
        weight={1}
        radius={dados.casos.porto_nacional[bairro].quantidade * 100}
      >
        <Tooltip direction="right" offset={[12, -2]} opacity={1}>
          <span>{dados.casos.porto_nacional[bairro].quantidade} caso(s)</span>
        </Tooltip>
      </Circle>
    ))}
  </Map>
);

export const Luzimangues = () => (
  <Map center={position.luzimangues} zoom={13} id="luzimangues">
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
    {Object.keys(dados.casos.luzimangues).map((bairro, index) => (
      <Circle
        key={index}
        center={dados.casos.luzimangues[bairro].posicao}
        fillColor="red"
        color="red"
        weight={1}
        radius={dados.casos.luzimangues[bairro].quantidade * 100}
      >
        <Tooltip direction="right" offset={[12, -2]} opacity={1}>
          <span>{dados.casos.luzimangues[bairro].quantidade} casos</span>
        </Tooltip>
      </Circle>
    ))}
  </Map>
);
