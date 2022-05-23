import React, { useContext } from "react";
import "../assets/css/ItemCarrito.css";
import Trash from "../assets/static/trash.png";
import Contexto from "../context/Contexto";

export default function ItemCarrito(props) {
  const { eliminarItem } = useContext(Contexto);
  const { codigo, cantidad } = props;
  const handleBorrar = (cod) => {
    eliminarItem(cod)
  };
  return (
    <>
      <tr>
        <th>{codigo}</th>
        <th>{cantidad}</th>
        <th>
          <img
            onClick={() => handleBorrar(codigo)}
            className="ItemCarrito-trash"
            src={Trash}
            alt=""
          />
        </th>
      </tr>
    </>
  );
}
