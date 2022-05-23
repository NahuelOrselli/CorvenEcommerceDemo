import React,{useContext} from "react";
import '../assets/css/VaciarCarrito.css'
import Contexto from "../context/Contexto";

export default function VaciarCarrito() {
    const {vaciarCarrito} = useContext(Contexto)
    const handleVaciar = ()=>{
        vaciarCarrito();
    }
  return (
    <>
      <div className="VaciarCarrito">
        <button onClick={()=>handleVaciar()} className="Vaciar-btn">Vaciar Carrito</button>
      </div>
    </>
  );
}
