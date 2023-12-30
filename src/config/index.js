import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../pages/loginView.vue";
import Dashboard from "../pages/dashboard.vue";
import Warehouse from "../pages/warehouseView.vue";
import Cashier from "../pages/cashierView.vue";
import Status from "../pages/statusView.vue";
import StatusByWeek from "../pages/statusByWeekView.vue";
import StatusByMonth from "../pages/statusByMonthView.vue";
import StatusByYear from "../pages/statusByYearView.vue";
import AddNewItem from "../pages/addNewItem.vue";
import AddNewListItem from "../pages/addNewListItem.vue";
import AddNewOrder from "../pages/addNewOrder.vue";
import EditItem from "../pages/editItem.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Dashboard,
    },
    {
      path: "/cashier",
      component: Cashier,
    },
    {
      path: "/warehouse",
      children: [
        {
          path: "",
          component: Warehouse,
        },
        {
          path: ":id",
          component: EditItem,
        },
        {
          path: "newitem",
          component: AddNewItem,
        },
        {
          path: "newlist",
          component: AddNewListItem,
        },
        {
          path: "newOrder",
          component: AddNewOrder,
        },
      ],
    },
    {
      path: "/status",
      children: [
        {
          path: "",
          component: Status,
        },
        {
          path: "week",
          component: StatusByWeek,
        },
        {
          path: "month",
          component: StatusByMonth,
        },
        {
          path: "year",
          component: StatusByYear,
        },
      ],
    },
    {
      path: "/login",
      component: LoginView,
    },
    {
      path: "/:pathMatch(.*)*",
      component: () => import("../pages/NotFoundView.vue"),
    },
  ],
});
// router.beforeEach((to, from, next) => {
//   const publicPages = ["/login"];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = sessionStorage.getItem("token");
//   // trying to access a restricted page + not logged in
//   // redirect to login page
//   if (authRequired && !loggedIn) {
//     next("/login");
//   } else {
//     next();
//   }
// });
export default router;
