import { defineStore } from 'pinia';

export const useSampleStore = defineStore('sample', {
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