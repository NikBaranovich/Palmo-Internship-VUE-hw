import {createRouter, createWebHistory} from "vue-router";
import {useAuthorizationStore} from "@/store/authorization.js";

import Home from "@/components/Home.vue";
import About from "@/components/About.vue";
import Contact from "@/components/Contact.vue";
import ProductDetails from "@/components/ProductDetails.vue";
import Products from "@/components/Products.vue";
import ProductsHome from "@/components/ProductsHome.vue";
import NotFound from "@/components/NotFound.vue";
import AccessDenied from "@/components/AccessDenied.vue";
import User from "@/components/User.vue";
import Admin from "@/components/Admin.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
  {
    path: "/products",
    name: "products",
    component: ProductsHome,
    children: [
      {
        path: "/products/",
        name: "products.index",
        component: Products,
        props: true,
      },
      {
        name: "products.singleProduct",
        path: "/products/:id",
        component: ProductDetails,
        props: (route) => ({
          id: route.params.id,
        }),
      },
    ],
  },
  {
    path: "/access-denied",
    name: "accessDenied",
    component: AccessDenied,
  },
  {
    path: "/admin",
    name: "admin",
    component: Admin,
    meta: {requiresAuth: true, role: "admin"},
  },
  {
    path: "/user",
    name: "user",
    component: User,
    meta: {requiresAuth: true, role: "user"},
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: NotFound,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});
/**
 * Lesson 6 Task 11: Use store to get user data in Roter files,
 * for example to redirect unauthorized users
 */
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const authorizationStore = useAuthorizationStore();
    
    if (to.meta.role != authorizationStore.userRole) {
      next("/access-denied");
      return;
    }
  }
  next();
});

export default router;
