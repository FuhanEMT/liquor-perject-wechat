import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
  state: () => ({
    selected: 0
  }),
  actions: {
    increment(index: number) {
      this.selected = index
    }
  }
})