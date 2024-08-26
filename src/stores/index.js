// jhj 삭제예정
//import { createStore } from "vuex";
//import { blogModule } from "@/store/blog/blogModule";

// const store = createStore({
//   namespaced : true,
//   modules : {
//     //blogModule,
//   },
// });


//// 임시주석
// import { useAuthStore } from './auth/useAuth.js'
// import { useDrawerOpenStore } from './page/useDrawerOpen.js'
// import { useTemporaryStorage } from './page/useTemporaryStorage.js'

const useStore = () => ({
  auth: '',//useAuthStore(),
  drawerOpen: '',//useDrawerOpenStore(),
  storage: '',//useTemporaryStorage(),
});

export default useStore;