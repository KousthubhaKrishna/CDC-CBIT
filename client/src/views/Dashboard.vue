<template>
  <div>
    <v-navigation-drawer :mini-variant.sync="mini" permanent>
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <v-img
              src="https://randomuser.me/api/portraits/women/85.jpg"
            ></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="title">
              Kousthubha Krishna CH
            </v-list-item-title>
            <v-list-item-subtitle>kousthubha@cbit.org.in</v-list-item-subtitle>
          </v-list-item-content>

          <v-btn icon @click.stop="mini = !mini">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list nav dense>
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="'/dashboard/' + item.route"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <!-- Logout Button -->
          <v-list-item @click="logout">
            <v-list-item-icon>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <router-view></router-view>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    selectedItem: 0,
    mini: true,
    items: [
      { text: "Register", icon: "mdi-clipboard-text", route: "register" },
      { text: "Placements", icon: "mdi-school", route: "placements" },
      { text: "Placement History", icon: "mdi-chart-line", route: "history" },
      { text: "Experiences", icon: "mdi-star", route: "exp" },
      { text: "Profile", icon: "mdi-account-box", route: "profile" }
    ]
  }),
  methods: {
    logout() {
      axios
        .delete("/api/logout")
        .then(res => {
          if (res.status == 200) {
            this.$router.push({ name: "Home" });
          }
        })
        .catch(err => {
          if (err.response.data.message) console.log(err.response.data.message);
        });
    }
  }
};
</script>
