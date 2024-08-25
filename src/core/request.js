import axios from "axios";
import router from "@/router";
import store from "@/stores";

const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API, // TODO 타임아웃 시간 재 확인
  timeout: 200000,
});

request.interceptors.request.use(
  (config) => {
    const myToken =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJKV1QgVE9LRU4iLCJhdWQiOiJLQkhDLUNsaWVudCIsIm1lbWJlckluZm8iOnsibWJyRW1hZCI6ImEyNjgyMjgyNEBnbWFpbC5jb20iLCJtYnJObSI6Iuq5gOyiheuvvCIsIm1ickpuVHlwZUNkIjoiMTA1MDAxIiwibWJyR3JkQ2QiOiIxMDcwMDEiLCJtYnJTbiI6MTAwMDAwMTE4MCwibWJyTmNrbm0iOiLquYDsooXrr7wiLCJtYnJKbk10aFR5cENkIjoiMTA2MDAyIiwibWJsVXVpZCI6IjZGQTM1NTc0LTBDNzQtNDIxRC04NjkxLTY2QTJCRDdCQTE0OCJ9LCJpc3MiOiJLQkhDLU9BdXRoIiwiZXhwIjoxNzA4NTc1OTE0LCJhdXRoVHlwZSI6IlVTRVIiLCJ0b2tlblR5cGUiOiJBQ0NFU1MiLCJpYXQiOjE3MDg0ODk1MTR9.XxsnFYwt1-hdBcZQR2wDQWj4qctL0TIOwFtdPkDnlKfVSLUxi8Y0qKUzd9anOGza";
    config.headers["Content-Type"] = "application/json";

    const routerPath = router.currentRoute.value.path;
    console.log(routerPath, config.url);
    if (
      !excptTokenPage.some((item) => routerPath === item) &&
      !excptTokenApi.some((item) => config.url === item)
    ) {
      config.headers.Authorization = `Bearer ${myToken}`;
    }

    // switch (config.url) {
    //     case '/common/api/v1/file/upload':
    //     case '/huray/users/challenges/todos/photo/complete':
    //         config.headers['Content-Type'] = 'multipart/form-data';
    //         break;
    //     default:
    //         break;
    // }
    // console.log('[API Request]', config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  async (response) => {
    if (store.getters["platform/auth/getIsError"]) {
      return;
    }
    switch (response.data.code) {
      case "ERROR_CODE_AI001" /*유효하지 않는 인증방식입니다., 900*/:
      case "ERROR_CODE_AI002" /*유효하지 않은 토큰입니다., 901*/: {
        return await store.dispatch(
          "platform/auth/goLogin",
          `${response.data.message}<br />다시 로그인 해주세요.`
        );
      }
      case "ERROR_CODE_AI003" /*만료된 토큰입니다., 902*/: {
        store.commit("platform/auth/setIsError", true);
        //TODO auth/user/splashTokenCheck /** User 토근 검증(Oauth 인증) -> refreshToken 태워서 재발급 */
        const refreshToken = getUserInfo("refreshToken");
        if (refreshToken) {
          // 리프레스 토큰이 있으면 재발급
          await store.dispatch("platform/auth/getRefreshToken", refreshToken);
          const errorAPI = response.config;
          return request(errorAPI);
        } else {
          // 없으면 로그인 페이지로,.
          return await store.dispatch(
            "platform/auth/goLogin",
            `${response.data.message}<br />다시 로그인 해주세요.`
          );
        }
      }
      case "UNKNOWN_CODE" /*Unknown Error., 999*/:
        // await store.dispatch('platform/auth/goErrorPage', response.data.message);
        return response;
      default:
        store.commit("platform/auth/setIsError", false);
        return response;
    }
    // if (response.data.code === '902') {
    //     console.log(response.data.message);
    // } else {
    // const res = { data: { data: {} } };
    // return res;
    // return response;
    // }
  },
  async (error) => {
    console.log("[API Request ERROR]", error);
    // ~ axios에서 서버 요청을 취소한 경우에 실행.
    // await store.dispatch('platform/auth/goErrorPage', error);
    return Promise.reject(error);
  }
);

export default request;
