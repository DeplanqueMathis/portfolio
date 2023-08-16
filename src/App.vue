<template>
  <div :class="{'header': true, 'active': showMenu}">
    <h1 class="logo-header">
      <router-link to="/">M</router-link>
    </h1>
    <nav class="nav-header">
      <router-link to="/">Acc&zwnj;cueil</router-link>
      <router-link to="/me">Mooi</router-link>
      <router-link to="/experiences">Experriences</router-link>
      <router-link to="/projets">Proojets</router-link>
    </nav>
    <div class="nav-menu" @click="showMenu = !showMenu">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
  <router-view v-slot="{ Component, route }">
    <transition name="fade" mode="out-in">
      <component :is="Component" :projectName="route.params.projectName ? route.params.projectName : ''"/>
    </transition>
  </router-view>

  <canvas class="webgl"></canvas>
</template>

<script>
import ThreeClass from '@/three/script';

export default {
  name: 'App',
  data() {
    return {
      sphere: null,
      showMenu: false,
    }
  },
  mounted() {
    this.sphere = new ThreeClass();
  },
  methods: {
    moveSphere(position) {
      this.sphere.sphereTime = 0;
      this.sphere.initialSpherePosition = this.sphere.sphereGroup.position;
      this.sphere.finalSpherePosition = position;
    },
    moveTorus(position) {
      this.sphere.torusTime = 0;
      this.sphere.initialTorusPosition = this.sphere.group.position;
      this.sphere.finalTorusPosition = position;
    },
    moveLight(position) {
      this.sphere.lightTime = 0;
      this.sphere.initialLightPosition = this.sphere.light.position;
      this.sphere.finalLightPosition = position;
    },
    moveProjects(position) {
      this.sphere.projectsTime = 0;
      this.sphere.initialProjectsPosition = this.sphere.projectGroup.position;
      this.sphere.finalProjectsPosition = position;
    },
    moveCamera(position) {
      this.sphere.cameraTime = 0;
      this.sphere.initialCameraPosition = this.sphere.camera.position;
      this.sphere.finalCameraPosition = position;
    }
  },
}
</script>