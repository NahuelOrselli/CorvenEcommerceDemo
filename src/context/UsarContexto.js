import Contexto from "./Contexto";
import { useReducer, useState, useEffect } from "react";
import Reducer from "./Reducer";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, set } from "firebase/database";

export default function UsarContexto(props) {
  ////// FIREBASE

  const firebaseConfig = {
    apiKey: "AIzaSyCyCCcqizCjI-vM76OHRniIx76XZSvgtpM",
    authDomain: "corven-demo.firebaseapp.com",
    databaseURL: "https://corven-demo-default-rtdb.firebaseio.com",
    projectId: "corven-demo",
    storageBucket: "corven-demo.appspot.com",
    messagingSenderId: "771485997297",
    appId: "1:771485997297:web:fe0a52c0d5e0c446893150",
    measurementId: "G-QPHLQX8V8C",
  };

  const appp = initializeApp(firebaseConfig);
  const db = getDatabase();
  const refe = ref(db, "corven-prod/");
  const refeCarr = ref(db, "corven-carrito/");
  const refeMarca = ref(db, "corven-marcas/");
  const refeLinea = ref(db, "corven-lineas/");
  const [autorize, setAutorize] = useState(0);
  const [userEmail, setUserEmail] = useState("");

  ////// FIREBASE

  const { children } = props;
  const estadoInicial = {
    productos: [],
    buscados: [],
    carrito: [],
    marcas: [],
    lineas: [],
    imgDetalle: 0,
  };

  const [state, dispatch] = useReducer(Reducer, estadoInicial);

  const listameCarrito = async () => {
    onValue(refeCarr, (snap) => {
      let carritoDB = [...snap.val()];
      dispatch({ type: "LISTAME_CARRITO", payload: carritoDB });
    });
  };

  const listameProd = async () => {
    onValue(refe, (snap) => {
      dispatch({ type: "LISTAME_PRODUCTOS", payload: snap.val() });
    });
  };

  const listameMarcas = async () => {
    onValue(refeMarca, (snap) => {
      dispatch({ type: "LISTAME_MARCAS", payload: snap.val() });
    });
  };

  const listameLineas = async () => {
    onValue(refeLinea, (snap) => {
      dispatch({ type: "LISTAME_LINEAS", payload: snap.val() });
    });
  };

  const busquedaCod = (data) => {
    dispatch({ type: "BUSQUEDA_COD", payload: data });
  };
  const busquedaDesc = (veh, lin) => {
    dispatch({ type: "BUSQUEDA_DESC", payload: { veh, lin } });
  };

  const agregarCarrito = (codigo, cantidad) => {
    dispatch({ type: "AGREGAR_CARRITO", payload: { codigo, cantidad } });
  };

  const sumarCarrito = (codigo, cantidad) => {
    dispatch({ type: "SUMAR_CARRITO", payload: { codigo, cantidad } });
  };

  const vaciarCarrito = () => {
    dispatch({ type: "VACIAR_CARRITO", payload: null });
  };

  const enviarCarrito = () => {
    dispatch({ type: "ENVIAR_CARRITO", payload: null });
  };

  const eliminarItem = (cod) => {
    dispatch({ type: "ELIMINAR_ITEM", payload: cod });
  };

  const login = (mail) => {
    setUserEmail(mail);
    setAutorize(1);
  };

  useEffect(() => {
    if (autorize !== 0) {
      if (state.carrito.length === 0) {
        set(refeCarr, {
          0: {
            cantidad: "Vacío",
            codigo: "Carrito",
          },
        });
      } else {
        set(refeCarr, state.carrito);
      }
    }
  }, [state.carrito]);

  return (
    <Contexto.Provider
      value={{
        lineas: state.lineas,
        marcas: state.marcas,
        productos: state.productos,
        carrito: state.carrito,
        buscados: state.buscados,
        imgDetalle: state.imgDetalle,
        listameLineas,
        listameMarcas,
        listameCarrito,
        listameProd,
        busquedaCod,
        busquedaDesc,
        agregarCarrito,
        sumarCarrito,
        vaciarCarrito,
        enviarCarrito,
        eliminarItem,
        autorize,
        userEmail,
        login,
      }}
    >
      {children}
    </Contexto.Provider>
  );
}
