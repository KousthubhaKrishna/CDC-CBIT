import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard.vue";
import Register from "../components/dashboard/Register";
import Profile from "../components/dashboard/Profile";
import VueCookies from "vue-cookies";

Vue.use(VueRouter);
Vue.use(VueCookies);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    beforeEnter: (to, from, next) => {
      let access_token = window.$cookies.get("jwt");
      if (access_token == null) {
        next();
      } else {
        // user has access token, user can open the page
        next({ name: "Dashboard" });
      }
    }
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    beforeEnter: (to, from, next) => {
      let access_token = window.$cookies.get("jwt");
      if (access_token != null) {
        next();
      } else {
        next({ name: "Login" });
      }
    },
    components: {
      default: Dashboard
    },
    children: [
      { path: "", redirect: "/dashboard/register" },
      { path: "/dashboard/register", component: Register },
      { path: "/dashboard/profile", component: Profile }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
