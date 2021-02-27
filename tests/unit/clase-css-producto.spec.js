import Vue from "vue";
import Vuex from "vuex";
import { shallowMount } from "@vue/test-utils";
import Nav from "@/components/Navbar.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
// import Store from "@/store";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(Vuex);

const getters = {
  totalCarrito: () => 0,
};
const store = new Vuex.Store({ getters });

describe("Clase CSS en Nav", () => {
  test("Clase CSS: fas fa-shopping-cart", () => {
    const wrapper = shallowMount(Nav, {
      store,
    });
    expect(wrapper.get(".fas.fa-shopping-cart"));
  });
});
