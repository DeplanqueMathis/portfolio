<template>
  <div class="projects-container" @click="goProject">
    <transition name="fade" mode="out-in">
      <h1 class="project-title" v-html="projectTitle"></h1>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      projectTitle: '',
    }
  },
  mounted() {
    this.goProjects();
    this.$root.showMenu = false;
    this.$root.sphere.rotationProjects = true;
    setInterval(() => {
      this.projectTitle = this.$root.sphere.ProjectTitle;
    }, 10)
  },
  methods: {
    goProjects() {
      let zAxe = 3;
      if(this.$root.isVertical){
        zAxe = -2;
      }
      this.$root.moveSphere({x: 0, y: 0, z: zAxe});
      this.$root.moveTorus({x: 0, y: -2, z: 9});
      this.$root.moveLight({x: 1.25, y: 0, z: zAxe + 4});
      this.$root.moveProjects({x: 0, y: 0, z: zAxe});
    },
    goProject() {
      if(this.projectTitle == '' || !this.projectTitle)
        return;

      this.$router.push({
        name: 'projet',
        params: {
          projectName: this.projectTitle,
        }
      })
    },
  }
}
</script>