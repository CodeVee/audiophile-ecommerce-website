
import { defineStore } from 'pinia';
import { useScreen } from 'vue-screen'

export const useAppStore = defineStore('app', {
  getters: {
    isMobileScreen() {
      const screen = useScreen()
      return screen.width < 500
    },
    isTabletScreen() {
      const screen = useScreen()
      return screen.width < 1020
    }
  }
});