<template>
  <v-content dark>
    <Header />
    <slot />
    <Footer />
  </v-content>
</template>

<script>
import Header from "./Header";
import Footer from "../common/Footer";

export default {
  components: {
    Header,
    Footer
  }
}
</script>