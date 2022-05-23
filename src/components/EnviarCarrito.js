import React, { useContext, useEffect, useState } from "react";
import "../assets/css/EnviarCarrito.css";
import Contexto from "../context/Contexto";
import emailjs from "@emailjs/browser";

export default function EnviarCarrito() {
  const { carrito, enviarCarrito, userEmail } = useContext(Contexto);
  const [msj, setMjs] = useState("");
  const [send, setSend] = useState(false);
  let templateEnviar = "";
  const templateParams = {
    message: msj,
    mail: userEmail,
  };

  const handleEnviar2 = () => {
    if (carrito.length !== 0 && carrito[0].cantidad !== "Vacío") {
      setMjs(templateEnviar);
      setSend(true);
    }
  };

  const forEnviar = () => {
    templateEnviar = "";
    for (var i = 0; i < carrito.length; i++) {
      let template = `■.Código: ${carrito[i].codigo}. Cantidad: ${carrito[i].cantidad}. <br/> `;
      console.log(template);
      templateEnviar = templateEnviar + template;
      console.log(templateEnviar);
    }
  };

  const handleEnviar = (e) => {
    setSend(false);
    emailjs
      .send(
        "service_cu22knn",
        "template_hjf0bgq",
        templateParams,
        "KveMvq7ja7B4ekQB8"
      )
      .then(
        (response) => {
          enviarCarrito();
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  };

  useEffect(() => {
    forEnviar();
  }, [carrito]);

  useEffect(() => {
    if (send === true) {
      handleEnviar();
      console.log(templateParams);
    }
  }, [msj !== "" && send === true]);

  return (
    <>
      <div className="EnviarCarrito">
        <button onClick={() => handleEnviar2()} className="Enviar-btn">
          Enviar Carrito
        </button>
      </div>
    </>
  );
}
