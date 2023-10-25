<template>
  <div class="navigation">
    <router-link 
      :to="{name: 'home'}" 
      class="nav-link"
    > 
      Home 
    </router-link>
    <router-link 
      :to="{name: 'productsMain'}" 
      class="nav-link"
    >
      Products
    </router-link>
    <router-link 
      :to="{name: 'about'}" 
      class="nav-link"
    > 
      About 
    </router-link>
    <router-link 
      :to="{name: 'contact'}" 
      class="nav-link"
    >
      Contacts
    </router-link>

    <router-link 
      :to="{name: 'admin'}" 
      class="nav-link"
    > 
      Admin
    </router-link>
    <router-link 
      :to="{name: 'user'}" 
      class="nav-link"
    > 
      User 
    </router-link>

    <button v-if="!userRole" @click="login('user')">
      User Login
    </button>
    <button v-else @click="logout">
      User Logout
    </button>

    <button v-if="!userRole" @click="login('admin')">
      Admin Login
    </button>
    <button v-else @click="logout">
      Admin Logout
    </button>
  </div>
</template>
<script>
import {useAuthorizationStore} from "@/store/authorization.js";
import {mapActions, mapState} from "pinia";
export default {
  computed: {
    ...mapState(useAuthorizationStore, ["userRole"]),
  },
  methods: {
    ...mapActions(useAuthorizationStore, ["login", "logout"]),
  },
};
</script>
