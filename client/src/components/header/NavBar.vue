<template>
    <v-tabs>
      <v-tab v-for='route in routes' :key="route.name" :to="route.path">
        {{ route.name }}
      </v-tab>
    </v-tabs>
</template>

<script>
import Router from "../../router/index";

export default {
    name:"NavBar",
    data: function(){
    return  {
      routes: Router.options.routes
    }
  }
}
</script>