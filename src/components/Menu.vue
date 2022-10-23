<template>
  <div class="menu" :class="{'active' : $root.afficher_menu}" @click="$root.afficher_menu = false">
    <div class="menu-container">
      <div class="menu-container-separator"></div>
      <div class="menu-container-separator"></div>
      <div class="menu-nav">
        <a href="/" :class="{'active' : true}">Accueil</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu"
}
</script>

<style scoped>

</style>
