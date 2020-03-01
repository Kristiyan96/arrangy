<template>
  <v-content dark>
    <Header />
    <SidebarLeft />
    <SidebarRight />
    <slot />
  </v-content>
</template>

<script>
import Header from "./Header";
import SidebarLeft from "../common/SidebarLeft";
import SidebarRight from "../common/SidebarRight";

export default {
  components: {
    Header,
    SidebarLeft,
    SidebarRight
  },
  data: () => ({ })
};
</script>