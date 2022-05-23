import React, { useContext } from "react";
import "../assets/css/Tabla.css";
import Contexto from "../context/Contexto";
import Item from "../components/Item";

export default function Tabla() {
  const { buscados } = useContext(Contexto);
  return (
    <div className="Table-Wrapper">
      <div className="Table-Scroll">
        <table className="Table" border="0">
          <thead>
            <tr>
              <th>Código</th>
              <th>Línea</th>
              <th>Descripción</th>
              <th>Precio Venta</th>
              <th>Agregar al Carrito</th>
            </tr>
          </thead>
          <tbody className="Tabla-body">
            {buscados.map((item, i) => (
              <>
                <Item {...item} key={i}></Item>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
