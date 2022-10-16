<template>
  <transition name="menu">
    <div class="menu" v-if="$root.afficher_menu" @click="$root.afficher_menu = false">

    </div>
  </transition>
</template>

<script>
export default {
  name: "Menu"
}
</script>

<style scoped>

</style>
