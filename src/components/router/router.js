// Lesson 5 Task 1: Set up base routes for multiple components in your app.
import { createRouter, createWebHistory } from "vue-router";

import Home from "@/components/Home.vue";
import About from "@/components/About.vue";
import Contact from "@/components/Contact.vue";
import ProductDetails from "@/components/ProductDetails.vue";
import Products from "@/components/Products.vue";
import ProductsHome from "@/components/ProductsHome.vue";
import AccessDenied from "@/components/AccessDenied.vue";
import NotFound from "@/components/NotFound.vue";
import Admin from "@/components/Admin.vue";
import UserForm from "@/components/UserForm.vue";

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
    meta: { requiresAuth: true },
  },
  {
    path: "/products",
    name: "products",
    component: ProductsHome,
    meta: { message: "Message from products main component" },
    //Lesson 5 Task 3: Configure nested routes and display the child component in the parent component.
    children: [
      {
        path: "/products/",
        name: "productsMain",
        component: Products,
        props: true,
      },
      // Lesson 5 Task 2: Create a route that uses the dynamic parameter and display it in the component.
      {
        name: "productItem",
        path: "/products/:id",
        component: ProductDetails,
        // Lesson 5 Task 7: Configure the route so that path parameters are passed as props to the component.
        props: (route) => ({
          id: route.params.id,
        }),
      },
    ],
  },
  { 
    path: "/form", 
    name: "form", 
    component: UserForm, 
    meta: { requiresAuth: true } 
  },
  { 
    path: "/access-denied", 
    name: "accessDenied", 
    component: AccessDenied 
  },
  { 
    path: "/admin", 
    name: "admin", 
    component: Admin, 
    meta: { requiresAdminAuth: true } 
  },
  // Lesson 5 Task 8: Implement a "404 Not Found" route and the page that displayed when the user navigates to a non-existent route.
  { 
    path: "/:pathMatch(.*)*", 
    name: "notFound", 
    component: NotFound 
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

// Lesson 5 Task 5: Add navigation guards to protect routes from unauthorized users.
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const token = JSON.parse(localStorage.getItem("token"));
    if (!token || token.role !== "user") {
      next("/access-denied");
      return;
    }
  }
  //   The project must have several pages that will be:
  //   - A page that is available to everyone
  //   - The page is available only to the administrator
  //   - The page is available only to authorized users
  // Use Vue Router hooks (beforeEach, afterEach) to verify user authentication and role before proceeding to the appropriate route.
  // If a user tries to access a page to which they are not authorized, they should be redirected to a 404 Not Found Page.

  if (to.matched.some((record) => record.meta.requiresAdminAuth)) {
    const token = JSON.parse(localStorage.getItem("token"));

    if (!token || token.role !== "admin") {
      next("/access-denied");
      return;
    }
  }
  next();
});

export default router;
