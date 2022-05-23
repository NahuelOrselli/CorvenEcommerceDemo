import React, { useContext } from "react";
import "../assets/css/Carrito.css";
import Trash from "../assets/static/trash.png";
import ItemCarrito from "./ItemCarrito";
import Contexto from "../context/Contexto";

export default function Carrito() {
  const { carrito } = useContext(Contexto);

  return (
    <>
      <div className="Carrito-Table-Wrapper">
        <div className="Carrito-Table-Scroll">
          <table className="Carrito-Table" border="0">
            <thead>
              <tr>
                <th colSpan="3" border="2">
                  Carrito
                </th>
              </tr>
              <tr>
                <th>Código</th>
                <th>Cantidad</th>
                <th>
                  <img className="Carrito-trash" src={Trash} alt="" />
                </th>
              </tr>
            </thead>
            <tbody className="Carrito-Tabla-body">
              {carrito.map((item, i) => (
                <>
                  <ItemCarrito {...item} key={i}></ItemCarrito>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
