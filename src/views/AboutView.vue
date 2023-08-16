<template>
  <div class="about-container">
    <div class="about">
      <h1>Mooi aka votre fuutur dev !</h1>
      <p>
        Bonjour, je suis Mathis Deplanque, j'ai actuellement <span v-html="getDate('2001/01/17')"></span> ans. 
        Je suis passioné par le développement, j'adore apprendre de nouveaux langages et me confronter à des difficultés. 
        Je suis développeur professionnel depuis un peu plus de <span v-html="getDate('2021/05/01')"></span> ans.<br/>
        J'ai beaucoup d'autres passions, comme les jeux vidéos, les mangas, la photo, le vélo et la pêche.<br/>
        Mes qualités principales sont ma détermination, mon optimisme et ma facilité d'apprentissage.<br/>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    this.goAbout();
  },
  methods: {
    getDate(date) {
      var today = new Date();
      var birthDate = new Date(date);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    },
    goAbout() {
      this.$root.moveSphere({x: 0, y: -1.5, z: 5});
      this.$root.moveTorus({x: 0, y: -2, z: 9});
      this.$root.moveLight({x: 0, y: 0, z: 12});
      this.$root.moveProjects({x: 0, y: 4, z: 3});
    },
  }
}
</script>