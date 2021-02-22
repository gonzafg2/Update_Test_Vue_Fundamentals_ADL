import Vue from "vue";
import VueRouter from "vue-router";

import Main from "../views/Main.vue";
import Home from "../views/Home.vue";
import Cart from "../views/Cart.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Main,
    children: [
      {
        path: "/",
        name: "Home",
        component: Home,
      },
      {
        path: "/producto/:id",
        name: "Producto",
        component: () =>
          import(/* webpackChunkName: "producto" */ "../views/Producto.vue"),
      },
    ],
  },
  {
    path: "/carrito",
    component: Cart,
    children: [
      {
        path: "",
        name: "Carrito",
        component: () =>
          import(/* webpackChunkName: "carrito" */ "../views/Carrito.vue"),
      },
    ],
  },
  {
    path: "",
    name: "Error404",
    component: () =>
      import(/* webpackChunkName: "error404" */ "../views/Error404.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
