import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
import { Loading } from "quasar";
import useStore from "@/stores";

import SAMPLE from "@/router/modules/sampleRouter.js"; // jhj 삭제예정

const routes2 = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/sample/Home.vue"),
  },
  // {
  //     path: "/login",
  //     name: "Login",
  //     component: () => import("@/views/sample/Login.vue"),
  // },
  ...SAMPLE,
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  // scrollBehavior() { return { top: 0 };}, // 스크롤 위치
});

router.beforeEach((to, from, next) => {
  console.log(to); // routes
  Loading.show();
  beforeCheck(to, from, next);
});

router.beforeResolve((to) => {
  // 로그인 화면 진입시에는 로그아웃 API 호출 X
  console.log(to.path);
  console.log(store.auth.user);
  // if(to.path !== '/login') {
  //   const store = useStore();
  //   if(!store.auth.user){
  //     store.auth.logout();
  //   }
  // }
});

router.afterEach((to, from) => {
  Loading.hide();
});

// 네비게이션 가드 로직
const beforeCheck = (to, from, next) => {
  const store = useStore();

  if (!store.auth.user && to.name !== "") {
    // 로그인 x
    next({ name: "Login" });
    return;
  } else {
    // 로그인 o
    // 메뉴 권한 체크
    if (!to.meta.authCheck || store.auth.isAuthMenuCheck(to.meta.id)) {
      next(); // 페이지이동 허용
    } else {
      console.log("권한없음");
      return;
    }
  }

  // jhj v1
  // const isAuth = false; // 인증안된상태 // !!sessionStorage.getItem('authToken')
  // if (to.matched.some((item) => item.meta.authRequired) && !isAuth) {
  //   //alert("authRequired 테스트");
  //   next("/login"); // 로그인이 안되있을 경우 보내기
  // } else {
  //   console.log("인증 성공");
  //   next();
  // }
};

export default router;
