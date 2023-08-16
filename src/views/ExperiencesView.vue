<template>
    <div class="experience-container">
      <div class="button" @click="rotateCircle(-1)">
        <span>&#62;</span>
      </div>
      <div class="button" @click="rotateCircle(1)">
        <span>&#60;</span>
      </div>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        experiences: [
          {
            title : 'Baccalauréat',
            year: '2019',
            icon: 'fa-solid fa-graduation-cap',
            paragraph : "En 2019 j'ai obtenu mon baccalauréat scientifique spécialité Mathématique.",
          },
          {
            title : 'dut MMI',
            year: '2021',
            icon: 'fa-solid fa-user-graduate',
            paragraph : "En 2021 j'ai obtenu mon DUT MMI (Métier du multimédia et de l'internet) avec une spécialisation en Web.",
          },
          {
            title : 'AtEJa',
            year: '2021',
            icon: 'fa-solid fa-box-archive',
            paragraph : "Depuis 2021 je travail pour Ateja (anciennement easy-developpement) dans le développement d'un ERP nommé Eden",
          },
          {
            title : 'BlUe-DiAmONds',
            year: '2021 - 2022',
            img: '/images/solana.png',
            paragraph : "Durant 6 mois, entre 2021 et 2022, l'équipe d'Easy-developpement a développé un Marketplace NFT sur la blockchain Solana pour un de ses clients.",
          },
        ],
      }
    },
    mounted() {
      this.goExperience();
    },
    methods: {
      rotateCircle(sens) {
        this.$root.sphere.rotateCircle(sens);
      },
      goExperience() {
        this.$root.moveSphere({x: 0, y: -0.25, z: 9});
        this.$root.moveTorus({x: 0, y: -0.25, z: 9});
        this.$root.moveLight({x: 0.25, y: 0, z: 15});
        this.$root.moveProjects({x: 0, y: 4, z: 3});
      },
    }
  }
  </script>