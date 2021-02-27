<template>
  <b-col cols="3" class="my-4">
    <b-card
      :title="name"
      :img-src="img"
      :img-alt="name"
      img-top
      class="mb-3 mx-4 shadow"
    >
      <hr />

      <b-card-body>
        <b-card-sub-title class="mb-2">Ingredientes</b-card-sub-title>

        <b-list-group flush>
          <b-list-group-item
            v-for="ing in ings"
            :key="ing.name"
            class="text-capitalize"
          >
            <i class="fas fa-pizza-slice mr-2"></i>
            {{ ing.name }}
          </b-list-group-item>
        </b-list-group>
      </b-card-body>

      <hr />

      <b-card-body>
        <b-card-text text-tag="h3" class="text-info text-center">
          $ {{ precioFormateado }}
        </b-card-text>
      </b-card-body>

      <hr />

      <b-row>
        <b-col cols="6" class="text-center">
          <b-button :to="`/producto/${id}`" variant="success"
            >Ver más Detalles</b-button
          >
        </b-col>
        <b-col cols="6" class="text-center">
          <b-button @click="agregar_carrito({ id, cant: 1, precio, name })" variant="primary"
            >Agregar a Carrito (+1)</b-button
          >
        </b-col>
      </b-row>
    </b-card>
  </b-col>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "ProductoCard",
  props: {
    name: {
      type: String,
    },
    img: {
      type: String,
    },
    ings: {
      type: Array,
    },
    id: {
      type: String,
    },
    precio: {
      type: Number,
    },
  },
  computed: {
    precioFormateado() {
      const precio = this.precio;
      if(!precio) return "Cargando...";
      return this.precio.toLocaleString("de-DE");
    },
  },
  methods: {
    ...mapActions(["agregar_carrito"]),
  },
};
</script>

<style lang="scss">
.card-title {
  text-transform: capitalize;
}
</style>
