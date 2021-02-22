<template>
  <div class="home">
    <b-container>
      <b-row class="py-5" v-if="pizzas">
        <ProductoCard 
          v-for="pizza in pizzas"
          :name="pizza.name"
          :img="pizza.img"
          :ings="pizza.ing"
          :id="pizza.id"
          :precio="pizza.price"
          :key="pizza.name" />
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
      const url = "https://us-central1-apis-varias-mias.cloudfunctions.net/pizzeria";
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

