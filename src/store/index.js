import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    productos: [
      {
        id: "P001",
        stock: 10,
      },
      {
        id: "P002",
        stock: 10,
      },
      {
        id: "P003",
        stock: 10,
      },
      {
        id: "P004",
        stock: 10,
      },
      {
        id: "P005",
        stock: 10,
      },
      {
        id: "P006",
        stock: 10,
      },
    ],
    ventas: [],
    carrito: [],
  },
  getters: {
    totalCarrito(state) {
      const carrito = state.carrito;
      if (carrito && carrito.length === 0) return 0;
      const total = carrito.map((el) => el.precio).reduce((uno, dos) => uno + dos).toLocaleString("de-DE");
      return total;
    }
  },
  mutations: {
    AgregarCarrito(state, payload) {
      const id = payload.id;
      const cant = payload.cant;
      const precio = payload.precio;
      const productos = state.productos;
      const carrito = state.carrito;
      if (!payload ) return;

      // Verificar que el producto existe en el estado.
      const existeEstado = productos.find((el) => el.id === id);
      if (!existeEstado ) {
        console.log("Producto No Encontrado");
        return;
      }

      // Verificar que el producto esté en Carrito.
      const existeCarrito = carrito.find((el) => el.id === id);

      // Si existe en carrito sumar cantidad y precio añadidos
      if (existeCarrito) {
        existeCarrito.cant += cant;
        existeCarrito.precio += precio;
      }

      // Si no existe, agregar al Carrito.
      else carrito.push(payload);
    },
    AgregarVenta(state) {
      const carrito = state.carrito;
      const totalCarrito = this.getters.totalCarrito;
      const now = new Date();

      // Reunir id's de los productos en un arreglo.
      const productos = carrito.map((mapped) => mapped.id);

      const venta = {
        fecha: now,
        productos,
        total: totalCarrito
      }
      // Agregar Venta a estado.
      state.ventas.push(venta)
    },
    ActualizarStock(state) {
      const carrito = state.carrito;
      carrito.forEach(el => {
        const id = el.id;
        const cant = el.cant;
        const finder = state.productos.find(el => el.id === id)
        finder.stock -= cant;
      })
    },
    EliminarProducto(state, payload) {
      const id = payload.id;
      const carrito = state.carrito;
      if (!payload || !carrito) return;

      // Quitar del carrito el Producto.
      const filtered = carrito.filter(fil => fil.id !== id);
      state.carrito = filtered;
    },
    EliminarCarrito(state) {
      state.carrito = [];
    }
  },
  actions: {
    agregar_carrito({ commit }, payload) {
      const data = payload;
      if (!data) return;
      this.commit("AgregarCarrito", data);
    },
    eliminar_producto({ commit }, payload) {
      const data = payload;
      if (!data) return;
      this.commit("EliminarProducto", data);
    },
    pagar_carrito({ commit }) { 
      this.commit("AgregarVenta");
      this.commit("ActualizarStock");
      this.commit("EliminarCarrito");
      alert("¡Gracias por su compra!");
    }
  },
  // modules: {},
});
