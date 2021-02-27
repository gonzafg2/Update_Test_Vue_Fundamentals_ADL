import Vue from "vue";
import { mount } from "@vue/test-utils";
import ProductoCard from "@/components/ProductoCard.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

describe("Nombre de Producto en Card", () => {
  test("Nombre de Pizza", () => {
    const nombre = "Pizza Napolitana";
    const wrapper = mount(ProductoCard, {
      propsData: {
        name: nombre
      }
    });
    const clase = wrapper.get(".card-title");
    expect(clase.text()).toContain(nombre);
  })
})