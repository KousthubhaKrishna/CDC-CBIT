<template>
  <v-app>
    <TitleBar />
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import TitleBar from "./components/header/TitleBar";

export default {
  name: "App",
  components: {
    TitleBar
  }
};
</script>
