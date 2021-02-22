<template>
  <b-nav align="center" class="bg-info py-5 footer">
    <b-nav-item to="/">Inicio</b-nav-item>
    <b-nav-item to="/carrito">Carrito</b-nav-item>
  </b-nav>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss">
.footer {
  .nav-link {
    color: white;
  }
}
</style>
