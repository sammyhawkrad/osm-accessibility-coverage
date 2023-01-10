import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AccessiblePlaces from "../views/AccessiblePlaces.vue";
import InaccessiblePlaces from "../views/InaccessiblePlaces.vue";
import HowToContribute from "../views/HowToContribute.vue";
import AboutView from "../views/AboutView.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/accessible-places",
      name: "accessible-places",
      component: AccessiblePlaces,
    },
    {
      path: "/inaccessible-places",
      name: "inaccessible-places",
      component: InaccessiblePlaces,
    },
    {
      path: "/how-to-help",
      name: "how-to-help",
      component: HowToContribute,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
  ],
});

export default router;
