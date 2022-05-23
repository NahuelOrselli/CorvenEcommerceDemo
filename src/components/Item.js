import React, { useState, useContext, useRef } from "react";
import Contexto from "../context/Contexto";
import Carrito from "../assets/static/agregar-carrito.png";
import "../assets/css/Item.css";

export default function Item(props) {
  // const { verDetalle } = useContext(Contexto);
  const { Codigo, Linea, Descripcion, Precio2 } = props;
  const { sumarCarrito, agregarCarrito, carrito } = useContext(Contexto);
  const descAmort = 14.25;
  const descDisc = 14.61;
  const descRotExt = 5.15;
  const descGral = 5.15;

  const inputCant = useRef(null);
  const [cantidad, setCantidad] = useState(0);
  const handleAgregar = (codigo) => {
    if (cantidad !== 0) {
      if (carrito.filter((item) => item.codigo === codigo).length !== 0) {
        let hayPro = carrito.filter((item) => item.codigo === codigo);
        if (hayPro[0].codigo === codigo) {
          inputCant.current.value = 0;
          setCantidad(0);
          sumarCarrito(codigo, cantidad);
        }
      } else {
        agregarCarrito(codigo, cantidad);
        inputCant.current.value = 0;
        setCantidad(0);
      }
    }
  };
  return (
    <>
      {/* <tr onClick={() => verDetalle(img)}></tr> */}
      <tr>
        <th>{Codigo}</th>
        <th>{Linea}</th>
        <th>{Descripcion}</th>
        <th>
          $
          {Linea === "Amortiguadores" || Linea === "Amort. Super Pickup"
            ? Math.round(Precio2 - (Precio2 * descAmort) / 100)
            : Linea === "Discos de Freno"
            ? Math.round(Precio2 - (Precio2 * descDisc) / 100)
            : Linea === "Extremos" || Linea === "Rotulas"
            ? Math.round(Precio2 - (Precio2 * descRotExt) / 100)
            : Math.round(Precio2 - (Precio2 * descGral) / 100)}
        </th>
        <th>
          <div className="Item-Agregar">
            <input
              ref={inputCant}
              className="Item-Input"
              type="number"
              placeholder="0"
              min="0"
              maxLength="2"
              autoComplete="off"
              onChange={(event) => setCantidad(event.target.value)}
            />
            <button
              onClick={() => handleAgregar(Codigo)}
              className="Item-Btn-Carrito"
            >
              <img className="Item-Btn-Img" src={Carrito} alt="" />
            </button>
          </div>
        </th>
      </tr>
    </>
  );
}
