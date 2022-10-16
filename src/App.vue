<template>
  <div class="header">
    <div class="header-logo">
      M.A.D
    </div>
    <span class="header-menu" @click="afficher_menu = true">
      Menu
    </span>
  </div>
  <Menu>

  </Menu>
  <router-view />
</template>

<script>
import Menu from "@/components/Menu.vue";

export default {
  name: "App",
  components: {
    Menu,
  },
  data: function (){

    return{

      afficher_menu: false,

    };

  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
