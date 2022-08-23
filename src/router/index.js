import Vue from "vue";
import VueRouter from "vue-router";
import login from "../views/login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: login,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("user")) next({ path: "/Home" });
      else next();
    },
  },
  {
    path: "/Home",
    name: "Home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/Register.vue"),
  },
  {
    path: "/registerByEmail",
    name: "registerByEmail",
    component: () => import("../views/RegisterByEmail.vue"),
  },
  {
    path: "/edit-profile",
    name: "edit-profile",
    component: () => import("../views/EditProfile.vue"),
  },
  {
    path: "/client-profile",
    name: "client-profile",
    component: () => import("../views/profile/ProfileClient.vue"),
  },
  {
    path: "/add-order",
    name: "add-order",
    component: () => import("../views/orders/AddOrder.vue"),
  },
  {
    path: "/my-orders",
    name: "my-orders",
    component: () => import("../views/orders/MyOrders.vue"),
  },
  {
    path: "/orders",
    name: "orders",
    component: () => import("../views/orders/Orders.vue"),
  },
  {
    path: "/order-details/:id",
    name: "orderDetails",
    component: () => import("../views/orders/OrderDetails.vue"),
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("type") === "user") {
        router.push("/");
      } else {
        next();
      }
    },
  },
  {
    path: "/order-underway/:id",
    name: "order-underway",
    component: () => import("../views/orders/OrderUnderway.vue"),
  },
  {
    path: "/order-open/:id",
    name: "order-open",
    component: () => import("../views/orders/OrderOpen.vue"),
  },
  {
    path: "/order-view/:id",
    name: "order-view",
    component: () => import("../views/orders/OrderOpen.vue"),
  },
  {
    path: "/order-close/:id",
    name: "order-close",
    component: () => import("../views/orders/OrderClose.vue"),
  },
  {
    path: "/order-complete/:id",
    name: "order-complete",
    component: () => import("../views/orders/OrderComplete.vue"),
  },
  {
    path: "/lawyer/:id",
    name: "order-lawyer",
    component: () => import("../views/office/profile/Profile-Office.vue"),
  },
  {
    path: "/officeHome",
    name: "office-home",
    component: () => import("../views/office/OfficeHome.vue"),
  },
  {
    path: "/edit-office-profile",
    name: "editOfficeProfile",
    component: () => import("../views/office/profile/Edit-Profile.vue"),
  },
  {
    path: "/edit-lawyer-profile",
    name: "editLawyerProfile",
    component: () => import("../views/lawyer/profile/Edit-Profile.vue"),
  },
  {
    path: "/lawyerHome",
    name: "lawyer-home",
    component: () => import("../views/lawyer/LawyerHome.vue"),
  },
  {
    path: "/lawyerPortfolio",
    name: "lawyer-portfolio",
    component: () => import("../views/lawyer/gallary/portfolio.vue"),
  },
  {
    path: "/addPortfolio",
    name: "add-portfolio",
    component: () => import("../views/lawyer/gallary/addPortfolio.vue"),
  },
  {
    path: "/editPortfolio/:id",
    name: "edit-portfolio",
    component: () => import("../views/lawyer/gallary/addPortfolio.vue"),
  },
  {
    path: "/editPort/:id",
    name: "edit-port",
    component: () => import("../views/lawyer/gallary/TheEditPortfolio.vue"),
  },


  {
    path: "/lawyerOffers",
    name: "lawyer-offers",
    component: () => import("../views/lawyer/offers/offers.vue"),
  },
  {
    path: "/office-profile",
    name: "office-profile",
    component: () => import("../views/office/profile/Profile-Office.vue"),
  },
  {
    path: "/search-lawyers",
    name: "search-lawyers",
    component: () => import("../views/client/search-lawyers.vue"),
  },
  {
    path: "/favorites",
    name: "favorites",
    component: () => import("../views/client/favorites.vue"),
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
