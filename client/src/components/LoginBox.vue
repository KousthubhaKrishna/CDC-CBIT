<template>
  <v-row class="fill-height" align="center" justify="center">
    <v-card width="950" :loading="loading">
      <v-row>
        <v-col>
          <v-img class="pa-10" contain src="@/assets/back.png" width="500">
            <p class="primary--text">CBIT Placements</p>
            <h2 class="green--text darken-4">
              Go to place for placements for students
            </h2>
          </v-img>
        </v-col>
        <v-col class="pa-10" align="left">
          <h1 class="primary--text">Login</h1>
          <v-alert v-show="error.length > 0" dense outlined text type="error">
            {{ error }}
          </v-alert>
          <form class="mb-10" ref="form">
            <v-text-field
              ref="user_email"
              label="Email"
              v-model="loginProps.user_email"
              :rules="[rules.required, rules.email]"
            ></v-text-field>
            <v-text-field
              ref="password"
              v-model="loginProps.password"
              :rules="[rules.required, rules.min]"
              counter
              minLength="8"
              :append-icon="passShow ? 'mdi-eye' : 'mdi-eye-off'"
              :type="passShow ? 'text' : 'password'"
              label="Password"
              @click:append="passShow = !passShow"
            ></v-text-field>
            <v-btn light color="primary" large @click="validateFields">
              Login
            </v-btn>
          </form>
          <p class="caption">
            *Please contact your class or branch placement co-ordinater for
            login credentials.
          </p>
        </v-col>
      </v-row>
    </v-card>
  </v-row>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      passShow: false,
      loginProps: {
        user_email: "",
        password: ""
      },
      error: "",
      rules: {
        required: value => !!value || "Required.",
        min: v => v.length >= 8 || "Min 8 characters",
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        }
      },
      loading: false,
    };
  },
  created: function() {
    this.error = "";
  },
  methods: {
    validateFields() {
      let isFormValid =
        this.$refs["user_email"].validate(true) &&
        this.$refs["password"].validate(true);
      if (isFormValid) {
        this.loading = true;
        axios
          .post("/api/login/", this.loginProps)
          .then(res => {
            this.loading = false;
            this.$router.push({ name: "Dashboard" });
          })
          .catch(err => {
            this.loading = false;
            this.error = err.response.data.message;
          });
      }
    }
  }
};
</script>
