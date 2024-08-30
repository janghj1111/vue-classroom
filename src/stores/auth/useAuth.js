import { defineStore } from 'pinia';

export const useAuthStore = defineStore('useAuth', {
  state: () => ({
    count: 0,
  }),
  actions: {
    increment() {
      this.count++;
    },
  },
  getters: {
    doubleCount: (state) => state.count * 2,
  },
});