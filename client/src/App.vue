<template>
  <v-app>
    <TitleBar/>
    <v-main>
      <NavBar/>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import TitleBar from "./components/header/TitleBar";
import NavBar from "./components/header/NavBar";

export default {
  name: "App",
  components: {
    TitleBar,
    NavBar
  },
};
</script>
