import { createRouter, createWebHistory } from 'vue-router';
import SAMPLE from "@/router/modules/sampleRouter.js"

const routes = [
  {
      path: "/",
      name: "Home",
      component: () => import("@/views/sample/Home.vue"),
  },
  {
      path: "/login",
      name: "Login",
      component: () => import("@/views/sample/Login.vue"),
  },
  ...SAMPLE,
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL), // vue cli - process.env.BASE_URL
    // createWebHistory는 url에 #을 지움. 괄호 안은 url의 기본주소
    routes,
    scrollBehavior() {
      return { top: 0 };
    },
  }); 

  
//to : 이동할 url, from : 현재 url , next : to로 넘어가기 위해 실행되어야 할 함수
router.beforeEach((to,from, next) => {
    console.log("네비게이션 가드");
    console.log(to); // to와 from은 routes배열원소임.
    const isAuth = false; // 인증안된상태 // !!sessionStorage.getItem('authToken')
    if (to.matched.some((item) => item.meta.authRequired) && !isAuth) {
      //alert("authRequired 테스트");
      next('/login'); // 로그인이 안되있을 경우 보내기
    } else {
      console.log("인증 성공");
      next();
    }
  });
  
export default router;