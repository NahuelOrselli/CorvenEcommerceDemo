import React, { useState, useContext, useRef, useEffect } from "react";
import "../assets/css/Buscador.css";
import Contexto from "../context/Contexto";

export default function Buscador() {
  const { busquedaCod, busquedaDesc, marcas, lineas } = useContext(Contexto);
  const [busqueda, setBusqueda] = useState("");
  const [filtro, setFiltro] = useState("0");
  const [vehiculo, setVehiculo] = useState([0]);
  const [filterVehicle, setFilterVehicle] = useState("0");
  const [filterLinea, setFilterLinea] = useState("0");

  const inputCode = useRef(null);
  const inputMarca = useRef(null);


  const handleBuscarCodigo = () => {
    if (inputCode.current.value !== "") {
      console.log(busqueda);
      busquedaCod(busqueda);
      inputCode.current.value = "";
    } else alert("Ingrese un Código");
  };

  const handleBuscarDescripcion = () => {
    if (filtro !== "0" && filterVehicle !== "0" && filterLinea !== "0") {
      console.log(filterVehicle,filterLinea);
      busquedaDesc(filterVehicle,filterLinea);
      inputMarca.current.value = "0";
      setFiltro("0");
      setFilterLinea("0")
      setFilterVehicle("0")
    } else alert("Ingrese los filtros");
  };

  const enterCod = (e) => {
    if (e.keyCode === 13) {
      if (inputCode.current.value !== "") {
        busquedaCod(busqueda);
        inputCode.current.value = "";
      } else alert("Ingrese un Código");
    }
  };

  useEffect(() => {
    if (filtro !== "0") {
      let find = marcas.filter((item) => item.value === filtro);
      setVehiculo(find[0].Vehiculos);
    }
  }, [filtro]);

  return (
    <>
      <div className="Buscador">
        <div className="Buscador-codigo">
          <label htmlFor="codigo">Búsqueda por Código: </label>
          <input
            ref={inputCode}
            onKeyDown={(e) => enterCod(e)}
            placeholder="Ingrese Código"
            type="text"
            name="codigo"
            id="codigo"
            onChange={(event) => setBusqueda(event.target.value)}
          />
          <button className="Buscador-btn" onClick={() => handleBuscarCodigo()}>
            Buscar
          </button>
        </div>
        <div className="Buscador-descripcion">
          <label htmlFor="marcas">Búsqueda por Filtro: </label>
          <select
            ref={inputMarca}
            name="marcas"
            id="marcas"
            onChange={(event) => setFiltro(event.target.value)}
          >
            <option value="0" select>
              -Marcas-
            </option>
            {marcas.map((item, i) => (
              <>
                <option key={i} value={item.value}>
                  {item.name}
                </option>
              </>
            ))}
          </select>

          {filtro === "0" ? (
            <>
              <select
                name="vehiculos"
                id="vehiculos"
                disabled
                onChange={(event) => setFilterVehicle(event.target.value)}
              >
                <option value="0" select>
                  -Vehículos-
                </option>
              </select>
            </>
          ) : (
            <>
              <select
                name="vehiculos"
                id="vehiculos"
                onChange={(event) => setFilterVehicle(event.target.value)}
              >
                <option value="0" select>
                  -Vehículos-
                </option>
                {vehiculo.map((item) => (
                  <>
                    <option value={item.name}>{item.name}</option>
                  </>
                ))}
              </select>
            </>
          )}

          {filterVehicle === "0" || filtro === "0" ? (
            <>
              <select
                name="linea"
                id="linea"
                disabled
                onChange={(event) => setFilterLinea(event.target.value)}
              >
                <option value="0" select>
                  -Línea-
                </option>
              </select>
            </>
          ) : (
            <>
              <select
                name="linea"
                id="linea"
                onChange={(event) => setFilterLinea(event.target.value)}
              >
                <option value="0" select>
                  -Línea-
                </option>
                {lineas.map((item) => (
                  <>
                    <option value={item.name}>{item.name}</option>
                  </>
                ))}
              </select>
            </>
          )}
          <button
            className="Buscador-btn"
            onClick={() => handleBuscarDescripcion()}
          >
            Buscar
          </button>
        </div>
      </div>
    </>
  );
}
