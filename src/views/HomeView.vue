<template>

  <div class="homepage">
    <p class="homepage-name">
      MaTHis<br>
      DEpLAnQue
    </p>
    <div class="homepage-illustration-container">
      <div class="homepage-illustration illustrations">
        <img src="/images/background.jpg">
      </div>
      <div class="homepage-circle-text">
        <svg viewBox="0 0 100 100" width="100" height="100">
          <defs>
            <path id="circle"
                  d="
                            M 50, 50
                            m -37, 0
                            a 37,37 0 1,1 74,0
                            a 37,37 0 1,1 -74,0"/>
          </defs>
          <text font-size="17">
            <textPath xlink:href="#circle">
              - full-stack - developer
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  </div>

  <div class="about">

    <div class="about-header">
      <div class="marquee">
        <div class="marquee-line">
          <span v-for="index in 10">MaTHis DEpLAnQue</span>
        </div>
        <div class="marquee-line">
          <span v-for="index in 10">MaTHis DEpLAnQue</span>
        </div>
      </div>
      <div class="marquee">
        <div class="marquee-line">
          <span v-for="index in 10">MaTHis DEpLAnQue</span>
        </div>
        <div class="marquee-line">
          <span v-for="index in 10">MaTHis DEpLAnQue</span>
        </div>
      </div>
      <div class="marquee">
        <div class="marquee-line">
          <span v-for="index in 10">MaTHis DEpLAnQue</span>
        </div>
        <div class="marquee-line">
          <span v-for="index in 10">MaTHis DEpLAnQue</span>
        </div>
      </div>
    </div>

    <div class="about-container">
      <p class="about-paragraph">
        Bonjour, je suis Mathis Deplanque, j'ai actuellement <span v-html="getAge()"></span> ans.<br>
        Je suis passioné par le développement, j'adore apprendre de nouveaux langages et me confronter à des difficultés.<br>
        J'ai beaucoup d'autres passions, comme les jeux vidéos, les mangas, la photo, le vélo et la pêche. <br>
        Mes qualités principales sont ma détermination, mon optimisme et ma facilité d'apprentissage.<br>
        Si vous voulez en savoir plus sur mon travail scrollez !<br>
      </p>
    </div>

    <div class="about-footer illustrations">
      <img src="/images/background.jpg">
    </div>

  </div>

  <div class="experiences">

    <div class="experiences-header">
      <h2>EXpeRieNCeS</h2>
      <div class="experiences-header-illustration illustrations">
        <img src="/images/background.jpg">
      </div>
    </div>

    <div class="experiences-container">
      <div class="experiences-line">

      </div>

      <div class="experiences-cards">
        <div class="experience" v-for="(experience, index) in experiences">
          <template v-if="index % 2 == 0">
            <div class="experience-icon">
              <span v-if="experience.icon" :class="experience.icon"></span>
              <img v-else-if="experience.img" :src="experience.img"/>
              <div class="experience-paragraph">
                <p>
                  {{ experience.paragraph }}
                </p>
              </div>
            </div>
            <div class="experience-text">
              {{ experience.title }}
            </div>
            <div class="experience-dot">

            </div>
            <div class="experience-date">
              <p>
                {{ experience.year }}
              </p>
            </div>
          </template>
          <template v-else>
            <div class="experience-date">
              <p>
                {{ experience.year }}
              </p>
            </div>
            <div class="experience-dot">

            </div>
            <div class="experience-text">
              {{ experience.title }}
            </div>
            <div class="experience-icon">
              <span v-if="experience.icon" :class="experience.icon"></span>
              <img v-else-if="experience.img" :src="experience.img"/>
              <div class="experience-paragraph">
                <p :style="[index == 3 ? 'font-size: 15px;' : '']">
                  {{ experience.paragraph }}
                </p>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>

  </div>

  <div class="projects">

    <div class="projects-header">
      <h2>PRoJectS</h2>
    </div>

    <div class="projects-list">
      <div class="project" v-for="(project, index) in projects">
        <template v-if="index % 2 == 0">
          <div class="project-illustration-background illustrations">
            <img src="/images/background.jpg" />
            <img :src="project.illustration" />
          </div>
          <div class="project-detail">
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-paragraph" v-html="project.paragraph">
            </p>
            <a class="project-link illustrations" :href="project.link" target="_blank">Visiter</a>
          </div>
        </template>
        <template v-else>
          <div class="project-detail">
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-paragraph" v-html="project.paragraph">
            </p>
            <a class="project-link illustrations" :href="project.link" target="_blank">Visiter</a>
          </div>
          <div class="project-illustration-background illustrations">
            <img src="/images/background.jpg" />
            <img :src="project.illustration" />
          </div>
        </template>
      </div>
    </div>
  </div>

  <footer class="footer">

    Propriété de Mathis Deplanque | <a href="https://github.com/DeplanqueMathis"><span class="fa-brands fa-github"></span></a> <a href="https://www.linkedin.com/in/mathis-deplanque-5abbb3193/"><span class="fa-brands fa-linkedin"></span></a>

  </footer>

</template>

<script scoped>

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
        projects: [
          {
            title: 'pOrtRAit',
            paragraph: "Portrait est un projet tutoré que nous avons réalisé pendant notre première année de DUT.<br>"+
                "Nous avons du créer un évenement et sa communication.<br>" +
                "Je me suis chargé de la réalisation du site Web.",
            illustration: '/projects/projetut.jpg',
            link: '/projettut/index.html'
          } ,
          {
            title: 'IKao',
            paragraph: "Ikao est un projet réalisé durant mes études ou ne devions reproduire un site à partir d'une maquette",
            illustration: '/projects/ikao.jpg',
            link: '/Ikao/index.html'
          } ,
          {
            title: 'CosMoPOlitAn',
            paragraph: "De la même manière qu'Ikao, Cosmopolitan est un projet front réalisé à partir d'une maquette.",
            illustration: '/projects/cosmo.jpg',
            link: '/cosmo/index.html'
          } ,
          {
            title: '19 COups',
            paragraph: "19 Coups est un court métrage réalisé durant la deuxième année de mon DUT.<br>"+
                "J'ai été ammené à réaliser un site pour le lancement et la promotion du court-métrage.",
            illustration: '/projects/19coups.jpg',
            link: '/19_coups/index.php'
          } ,
          {
            title: 'Art & Pêche',
            paragraph: "Durant mes années de Freelance j'ai réalisé un e-commerce de zéro 100% administrable.<br>" + 
                        "J'ai suivi les maquettes de Victor Wallart.",
            illustration: '/projects/Artetpeche.jpg',
            link: 'https://artetpeche.fr'
          } ,
          {
            title: 'MMI d\'or',
            paragraph: "Pour finaliser notre DUT nous devions créer un véritable évènement.<br>" +
                        "Notre équipe a décidé de réaliser un évènement récompensant les courts métrages des étudiants.<br>" +
                        "J'ai réalisé un site de présentation de l'évènement ainsi que des courts métrages.<br>" +
                        "J'ai participé aux choix de chartes graphique et à la maquette du site.<br>" +
                        "J'ai aussi créé un système de comptes permettant de voter pour vos courts métrages préférés durant la soirée de présentation.",
            illustration: '/projects/mmidor.jpg',
            link: '/MMI_OR/index.php'
          } ,
          {
            title: 'BlUE DiAmOndS',
            paragraph: "Avec l'équipe d'easy-developpement nous avons réalisé, à la demande d'un client, une Marketplace de NFT sur la blockchain Solana.<br>" +
                        "J'y ai participé en tant que développeur full-stack mais ai principalement été chargé de l'intégration CSS et de la connexion avec les wallets.",
            illustration: '/projects/bluediamonds.jpg',
            link: 'https://bluediamonds.app/'
          } ,
          {
            title: 'm.a.d',
            paragraph: "M.A.D est le site pour mes missions freelance.<br>" +
                        "Vous y retrouverez aussi des articles d'aide au développement et de résolutions de bugs.",
            illustration: '/projects/mad.png',
            link: 'https://freelance.mathisdeplanque.fr/'
          } ,
        ],
      }
    },
    methods : {

      getAge : function() {
        var today = new Date();
        var birthDate = new Date("2001/01/17");
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }
        return age;
      },
    }
  }

</script>
