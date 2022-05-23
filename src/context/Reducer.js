const LISTAME_CARRITO = "LISTAME_CARRITO";
const LISTAME_PRODUCTOS = "LISTAME_PRODUCTOS";
const LISTAME_MARCAS = "LISTAME_MARCAS";
const LISTAME_LINEAS = "LISTAME_LINEAS";
const BUSQUEDA_COD = "BUSQUEDA_COD";
const BUSQUEDA_DESC = "BUSQUEDA_DESC";
const AGREGAR_CARRITO = "AGREGAR_CARRITO";
const SUMAR_CARRITO = "SUMAR_CARRITO";
const VACIAR_CARRITO = "VACIAR_CARRITO";
const ENVIAR_CARRITO = "ENVIAR_CARRITO";
const ELIMINAR_ITEM = "ELIMINAR_ITEM";

export default function Reducer(state, action) {
  const { payload, type } = action;
  switch (type) {
    case LISTAME_LINEAS:
      return { ...state, lineas: payload };
    case LISTAME_MARCAS:
      return { ...state, marcas: payload };
    case LISTAME_CARRITO:
      return { ...state, carrito: payload };

    case LISTAME_PRODUCTOS:
      return { ...state, productos: payload };

    case BUSQUEDA_COD:
      let datoCod = String(payload);
      return {
        ...state,
        buscados: state.productos.filter((item) =>
          item.Codigo.includes(datoCod)
        ),
      };

    case BUSQUEDA_DESC:
      let filter = { ...payload };
      let filterLinea = state.productos.filter((item) =>
        item.Linea.includes(filter.lin)
      );
      let vehMin = filter.veh.toLowerCase();
      let filterVeh = filterLinea.filter((item) =>
        item.Descripcion.toLowerCase().includes(vehMin)
      );
      return {
        ...state,
        buscados: filterVeh,
      };

    case AGREGAR_CARRITO:
      let obj = { ...payload };
      let vacio = state.carrito.filter((item) => item.cantidad === "Vacío");
      if (vacio.length !== 0) {
        return {
          ...state,
          carrito: [obj],
        };
      } else {
        return {
          ...state,
          carrito: [...state.carrito, obj],
        };
      }

    case SUMAR_CARRITO:
      let repe = { ...payload };
      let art = state.carrito.findIndex((ind) => {
        return ind.codigo === repe.codigo;
      });
      state.carrito[art].cantidad =
        parseInt(repe.cantidad) + parseInt(state.carrito[art].cantidad);
      state.carrito[art].cantidad = state.carrito[art].cantidad.toString();
      return {
        ...state,
        carrito: [...state.carrito],
      };

    case VACIAR_CARRITO:
      return {
        ...state,
        carrito: [],
      };

    case ELIMINAR_ITEM:
      return {
        ...state,
        carrito: state.carrito.filter((item) => item.codigo !== payload),
      };

    case ENVIAR_CARRITO:
      return {
        ...state,
        carrito: [],
      };

    default:
      return false;
  }
}
