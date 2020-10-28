<template>
  <div>
    <v-row>
      <v-col>
        <v-navigation-drawer permanent>
          <v-list>
            <v-list-item>
              <v-list-item-avatar>
                <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
              </v-list-item-avatar>
            </v-list-item>

            <v-list-item link>
              <v-list-item-content>
                <v-list-item-title class="title">
                  John Leider
                </v-list-item-title>
                <v-list-item-subtitle>john@vuetifyjs.com</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action>
                <v-icon>mdi-menu-down</v-icon>
              </v-list-item-action>
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
      </v-col>
      <v-col>
        <router-view></router-view>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data: () => ({
    selectedItem: 0,
    items: [
      { text: "Register", icon: "mdi-clipboard-text", route: "register" },
      { text: "Placements", icon: "mdi-school", route: "placements" },
      { text: "Placement History", icon: "mdi-chart-line", route: "history" },
      { text: "Experiences", icon: "mdi-star", route: "exp" },
      { text: "Profile", icon: "mdi-account-box", route: "profile" },
    ]
  }),
  methods:{
    logout(){
      axios.delete("/api/logout")
      .then(res => {
        if(res.status == 200){
          this.$router.push({ name: "Home" });
        }
      })
      .catch(err => {
        if (err.response.data.message)
          console.log(err.response.data.message);
      });
    }
  }
};
</script>
