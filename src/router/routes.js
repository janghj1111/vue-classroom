import adminRoutes from "./adminRoutes";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login/Login.vue"),
    meta: {
      name: "Login",
      layout: "DefaultLayout",
      authRequired: false,
    },
  },
  {
    path: "/notfound",
    component: () => import("@/views/error/PageNotFound.vue"),
    meta: {
      name: "Page Not Found",
      layout: "ErrorLayout",
      authRequired: false,
    },
  },
  { path: "/:catchAll(.*)", redirect: "/notfound" }, // 404페이지
  { path: "/", redirect: "/admin" }, // admin 페이지
];

//routes.push(adminRoutes);
//routes.push(sampleRoutes)

export default routes;
