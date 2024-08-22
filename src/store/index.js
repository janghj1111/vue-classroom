import { createStore } from "vuex";
//import { blogModule } from "@/store/blog/blogModule";

const store = createStore({
  namespaced : true,
  modules : {
    //blogModule,
  },
});

export default store;