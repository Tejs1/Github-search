import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import UserProfileView from "../views/UserProfileView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "HomeView",
      component: HomeView,
    },
    {
      path: "/user/:username",
      name: "UserProfileView",
      props: true,
      component: UserProfileView,
    },
    {
      path: "/about",
      name: "AboutView",
      component: AboutView,
    },
  ],
});

export default router;
// // Save data to sessionStorage
// sessionStorage.setItem("key", "value");

// // Get saved data from sessionStorage
// let data = sessionStorage.getItem("key");

// // Remove saved data from sessionStorage
// sessionStorage.removeItem("key");

// // Remove all saved data from sessionStorage
// sessionStorage.clear();
