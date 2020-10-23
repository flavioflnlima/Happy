import React from "react";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { Map, TileLayer } from "react-leaflet";

import 'leaflet/dist/leaflet.css'

import mapMarkImg from "../images/map-marker.svg";

import "../styles/pages/OrphanagesMap.css";

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkImg} alt="Happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita : </p>
        </header>
        <footer>
          <strong>Paraíso do Tocantins</strong>
          <span>Tocantins</span>
        </footer>
      </aside>

      <Map center={[-10.1709529, -48.8906854]} zoom={15} style={{ width: "100%", height: "100%" }}>
        {/* <TileLayer url="https://a.title.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
      </Map>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;
