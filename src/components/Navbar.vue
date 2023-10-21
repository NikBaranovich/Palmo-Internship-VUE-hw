<template>
  <div class="navigation">
    <router-link 
      :to="{name: 'home'}" 
      class="nav-link"
    >
      Home
    </router-link>
    <router-link 
      :to="{name: 'products'}" 
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
      :to="{name: 'form'}" 
      class="nav-link"
    >
      Form
    </router-link>

    <button v-if="!isAuthorized" @click="login('user')">
      User Login
    </button>
    <button v-else @click="logout">User Logout</button>

    <button v-if="!isAuthorized" @click="login('admin')">
      Admin Login
    </button>
    <button v-else @click="logout">Admin Logout</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      token: localStorage.getItem("token"),
    };
  },
  computed: {
    isAuthorized() {
      return this.token !== null;
    },
  },
  methods: {
    login(role) {
      this.token = this.generateToken(12);
      localStorage.setItem(
        "token",
        JSON.stringify({token: this.token, role: role})
      );
    },
    logout() {
      this.token = null;
      localStorage.removeItem("token");
      this.$router.push("/");
    },
    generateToken(length) {
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let token = "";

      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(
          Math.random() * characters.length
        );
        token += characters.charAt(randomIndex);
      }

      return token;
    },
  },
};
</script>
