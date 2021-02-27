import Vue from "vue";
import Vuex from "vuex";

import { shallowMount } from "@vue/test-utils";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

Vue.use(Vuex)
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

const store = new Vuex.Store({ actions });

describe("Comprobar Action para Agregar Producto a Carrito", () => {
  test("Agregar a Carrito", () => {
  })
})