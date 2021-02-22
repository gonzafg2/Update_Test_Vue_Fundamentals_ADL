<template>
  <div>
    <Navbar />
    <b-container>
      <router-view />
    </b-container>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "CartLayout",
  components: {
    Navbar,
  },
};
</script>
