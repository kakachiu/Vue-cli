import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/",
    name: "Frontend",
    component: () => import("../views/Frontend.vue"),
    children: [
      {
        path: "about",
        name: "About",
        component: () => import("../views/About.vue")
      },
      {
        path: "painter",
        name: "Painter",
        component: () => import("../views/Painter.vue")
      },
      {
        path: "products",
        name: "Products",
        component: () => import("../views/Products.vue")
      },
      {
        path: "product/:id",
        name: "Product",
        component: () => import("../views/Product.vue")
      },
      {
        path: "carts_step1",
        name: "Carts_step1",
        component: () => import("../views/Carts_step1.vue")
      },
      {
        path: "carts_step2",
        name: "Carts_step2",
        component: () => import("../views/Carts_step2.vue")
      },
      {
        path: "order/:id",
        name: "order",
        component: () => import("../views/Order.vue")
      }
    ]
  },
  {
    path: "/successorder",
    name: "successorder",
    component: () => import("../views/Successorder.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue")
  },
  {
    path: "/admin",
    name: "Dashboard",
    component: () => import("../views/dashboard/Dashboard.vue"),
    children: [
      {
        path: "products",
        name: "backEndProducts",
        component: () => import("../views/dashboard/Products.vue")
      },
      {
        path: "picture",
        name: "backEndProduct",
        component: () => import("../views/dashboard/Picture.vue")
      },
      {
        path: "order",
        name: "backEndOrder",
        component: () => import("../views/dashboard/Order.vue")
      }
    ]
  },
  {
    path: "*",
    redirect: "/"
  }
];

const router = new VueRouter({
  routes
});

export default router;
