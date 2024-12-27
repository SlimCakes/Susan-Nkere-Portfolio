import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

// Define routes
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/components/HeroComponent.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/components/AboutComponent.vue"),
  },
{
  path: "/footer",
  name: "Footer",
  component: () => import("@/components/FooterComponent.vue"),
},
{
  path: "/portfolio",
  name: "Portfolio",
  component: () => import("@/components/PortfolioComponent.vue"),
},
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
