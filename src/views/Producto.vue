<template>
  <div>
    <b-container class="pt-5">
      <b-card no-body class="overflow-hidden" v-if="pizza">
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img
              :src="pizza.img"
              :alt="pizza.name"
              class="rounded-0"
            ></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body
              class="text-capitalize"
              :title="`Pizza de ${pizza.name}`"
            >
              <b-card-text>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
                esse aliquam rerum nobis! Consectetur corporis dolorem labore
                laudantium adipisci quam expedita maxime, ab qui, enim
                repudiandae minus magni facilis porro!
              </b-card-text>
              <h6>Ingredientes</h6>
              <ul v-if="pizza && pizza.ing">
                <li v-for="(item, i) in pizza.ing" :key="i">
                  {{ item.name }}
                </li>
              </ul>
              <h4>Precio: $ {{ pizza.price.toLocaleString("de-DE") }}</h4>
              <b-button
                @click="agregar_carrito({ id: pizza.id, cant: 1, precio: pizza.price, name: pizza.name })"
                variant="primary"
                >Agregar a Carrito (+1)</b-button
              >
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";

export default {
  name: "Producto",
  data() {
    return {
      pizzas: [],
    };
  },
  computed: {
    id() {
      const id = this.$route.params.id;
      if (!id) return false;
      return id;
    },
    pizza() {
      const id = this.id;
      if (!id) return false;

      const finder = this.pizzas.find((fn) => fn.id === id);
      if (!finder) return false;
      return finder;
    },
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      const url =
        "https://us-central1-apis-varias-mias.cloudfunctions.net/pizzeria";
      try {
        const db = await axios.get(url);
        const pizzas = db.data;
        this.pizzas = pizzas;
      } catch (error) {
        console.log(error);
      }
    },
    ...mapActions(["agregar_carrito"]),
  },
};
</script>
