<template>
  <v-app>
    <TitleBar />
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import TitleBar from "./components/TitleBar";
// import NavBar from "./components/NavBar";

export default {
  name: "App",

  components: {
    TitleBar
    // NavBar
  },

  data: () => ({
    //
  })
};
</script>
