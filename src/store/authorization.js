import {defineStore} from "pinia";

export const useAuthorizationStore = defineStore("authorization", {
  state: () => ({
    userRoleState: null,
  }),
  getters: {
    userRole: (state) => state.userRoleState,
  },
  actions: {
    login(role) {
      this.userRoleState = role;
    },
    logout() {
        this.userRoleState = null;
      },
  },
});
