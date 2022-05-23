import React, { useContext, useEffect } from "react";
import "../assets/css/Home.css";
import Contexto from "../context/Contexto";
import Buscador from "../components/Buscador";
import Tabla from "../components/Tabla";
import Carrito from "../components/Carrito";
import EnviarCarrito from "../components/EnviarCarrito";
import VaciarCarrito from "../components/VaciarCarrito";
import { Navigate } from "react-router-dom";

export default function Home() {
  const {
    listameCarrito,
    listameProd,
    listameMarcas,
    listameLineas,
    autorize,
  } = useContext(Contexto);

  useEffect(() => {
    listameProd();
    listameCarrito();
    listameMarcas();
    listameLineas();
  }, []);
  return (
    <>
      {autorize === 1 ? (
        <>
          <div className="Home-buscador">
            <Buscador></Buscador>
          </div>
          <div className="Home-info">
            <Tabla></Tabla>
            <Carrito></Carrito>
          </div>
          <EnviarCarrito></EnviarCarrito>
          <VaciarCarrito></VaciarCarrito>
          {/* <div className="detalleProductos">
        <p>Detalle del Prod</p>
        <img className="detalleProductos-img" src={imgDetalle} alt="" />
      </div> */}
        </>
      ) : (
        <Navigate to="/signin" replace />
      )}
    </>
  );
}
