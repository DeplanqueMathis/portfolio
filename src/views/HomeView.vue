<template>
  <div class="home">
    <h1 id="name">
      MaTHis
    </h1>
    <h1 id="lastname">
      DEpLAnQue
    </h1>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  mounted() {
    this.goHome();
    this.$root.showMenu = false;
  },
  methods: {
    goHome() {
      this.$root.moveSphere({x: 1.75, y: 0, z: 0});
      this.$root.moveTorus({x: 0, y: -2, z: 9});
      this.$root.moveLight({x: 1.25, y: 0, z: 7});
      this.$root.moveProjects({x: 0, y: 4, z: 3});
    },
  },
}
</script>
