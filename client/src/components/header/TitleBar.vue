<template>
  <v-app-bar absolute app elevate-on-scroll>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-img
      alt="CBIT Logo"
      class="shrink mx-4"
      contain
      src="@/assets/cbit_logo.png"
      height="40"
      width="40"
    />

    <v-toolbar-title>CDC - CBIT</v-toolbar-title>

    <v-spacer></v-spacer>

    <div>
      <v-tabs>
        <v-tab v-for="route in routes" :key="route.name" :to="route.path">
          {{ route.name }}
        </v-tab>
      </v-tabs>
    </div>
  </v-app-bar>
</template>

<script>
import Router from "../../router/index";

export default {
  name: "TitleBar",
  data: function() {
    return {
      routes: Router.options.routes
    };
  }
};
</script>
