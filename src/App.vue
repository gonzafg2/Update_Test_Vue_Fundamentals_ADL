<template>
  <div id="app">
    <Navbar />

    <b-jumbotron class="bg-light text-center text-white mt-5 mb-0">
      <template #header>
        Pizzería My Store
      </template>

      <hr class="my-4 border-white" />

      <template #lead>
        ¡Tenemos las mejores pizzas que podrás encontrar!
      </template>
      <div class="bg-img"></div>
    </b-jumbotron>

    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
.jumbotron {
  position: relative;
  z-index: 1;
  .bg-img {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image: url("assets/bg-hero_c.jpg");
    background-origin: border-box;
    background-position: top;
    filter: brightness(0.5);
    position: absolute;
    z-index: -1;
  }
  h1 {
    font-weight: 500;
    text-shadow: 1px 1px 1px white;
    z-index: 2;
  }
  .lead {
    font-size: 1.5rem;
    font-weight: 400;
    text-shadow: 1px 1px 1px white;
    margin-top: 2rem;
    z-index: 2;
  }
}
</style>