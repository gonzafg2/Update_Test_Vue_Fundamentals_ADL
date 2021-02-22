<template>
  <b-navbar toggleable="lg" type="dark" variant="info" fixed="top">
    <b-navbar-brand to="/">Pizzería My Store</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/" class="active mr-2">Inicio</b-nav-item>
        <b-nav-item to="/carrito" class="active">
          <i class="fas fa-shopping-cart"></i> 
          <strong> $ {{ totalCarrito }}</strong>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Navbar",
  computed: {
    ...mapGetters(["totalCarrito"]),
  },
};
</script>
