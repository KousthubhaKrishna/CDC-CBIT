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
    </v-app-bar>
</template>

<script>
export default {
  name: "TitleBar",
};
</script>
