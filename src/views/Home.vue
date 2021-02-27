<template>
  <div class="home">
    <b-container fluid class="px-5">
      <b-row class="p-5" v-if="pizzas && pizzas.length > 0">
        <ProductoCard
          v-for="pizza in pizzas"
          :name="pizza.name"
          :img="pizza.img"
          :ings="pizza.ing"
          :id="pizza.id"
          :precio="pizza.price"
          :key="pizza.name"
        />
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";

import ProductoCard from "@/components/ProductoCard.vue";

export default {
  name: "Home",
  data() {
    return {
      pizzas: [],
    };
  },
  components: {
    ProductoCard,
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
  },
};
</script>

<style lang="scss">
.home {
  min-height: calc(100vh - 56px);
  background-color: #f8f8f8;
}
</style>
