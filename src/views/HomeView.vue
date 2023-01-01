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
        Hello, my name is Mathis Deplanque and I'm actually <span v-html="getAge()"></span>.<br>
        I am a French developper, coding is my passion, I love learning new languages and fighting with bugs.<br>
        I have a lot of other hobbies, such as video games, mangas, animes, photography, skateboarding, cycling and fishing.<br>
        My principals quality are my determination and my optimism. My biggest default is my shyness.<br>
        If you want to know my skills, keep scrolling !<br>
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
            <a class="project-link illustrations" :href="project.link" target="_blank">Go check</a>
          </div>
        </template>
        <template v-else>
          <div class="project-detail">
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-paragraph" v-html="project.paragraph">
            </p>
            <a class="project-link illustrations" :href="project.link" target="_blank">Go check</a>
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

    Property of Mathis Deplanque | <a href="https://github.com/DeplanqueMathis"><span class="fa-brands fa-github"></span></a> <a href="https://www.linkedin.com/in/mathis-deplanque-5abbb3193/"><span class="fa-brands fa-linkedin"></span></a>

  </footer>

</template>

<script scoped>

  export default {
    data() {
      return {
        experiences: [
          {
            title : 'baccalaureate',
            year: '2019',
            icon: 'fa-solid fa-graduation-cap',
            paragraph : 'In 2019 I got my scientific baccalaureate with mathematical specialty.',
          },
          {
            title : 'dut MMI',
            year: '2021',
            icon: 'fa-solid fa-user-graduate',
            paragraph : 'In 2021 I got my DUT MMI with development specialty.',
          },
          {
            title : 'EaSy-dEveLoPpeMeNt',
            year: '2021',
            icon: 'fa-solid fa-box-archive',
            paragraph : 'Since 2021 I work for Easy-développement as a back-end developer. I work on Eden, their ERP.',
          },
          {
            title : 'BlUe-DiAmONds',
            year: '2021 - 2022',
            img: '/images/solana.png',
            paragraph : 'Between 2021 and 2022, I\'ve worked on Blue-Diamonds, a NFTs Marketplace on the Solana blockchain. I\'ve worked as full-stack developer.',
          },
        ],
        projects: [
          {
            title: 'pOrtRAit',
            paragraph: 'Portrait is a false project we make during our first DUT year.<br>\n' +
                'We have to create an event and make all the communication around this.<br>\n' +
                'I develop the website for this event.',
            illustration: '/projects/projetut.jpg',
            link: '/projettut/index.html'
          } ,
          {
            title: 'IKao',
            paragraph: 'Ikao is a front project where we have to recreate a website from a mock-up.',
            illustration: '/projects/ikao.jpg',
            link: '/Ikao/index.html'
          } ,
          {
            title: 'CosMoPOlitAn',
            paragraph: 'Cosmopolitan is a front project where we have to recreate a website from a mock-up.',
            illustration: '/projects/cosmo.jpg',
            link: '/cosmo/index.html'
          } ,
          {
            title: '19 COups',
            paragraph: '19 Coups is a short movie we made in the second year of the DUT.<br>' +
                        'I make a website to promote the movie',
            illustration: '/projects/19coups.jpg',
            link: '/19_coups/index.php'
          } ,
          {
            title: 'Art & Pêche',
            paragraph: 'I create a 100% manageable shopping site for a client from scratch.',
            illustration: '/projects/Artetpeche.jpg',
            link: 'https://artetpeche.fr'
          } ,
          {
            title: 'MMI d\'or',
            paragraph: 'To finish our DUT we have to create a project.<br>' +
                        'Our team has decided to create an event to reward short-movie we made during the year</br>' +
                        'I create the site where you can vote for the best movie if you are a student.',
            illustration: '/projects/mmidor.jpg',
            link: '/MMI_OR/index.php'
          } ,
          {
            title: 'BlUE DiAmOndS',
            paragraph: 'With the easy-developpement team we work on Blue Diamonds, a NFTs Marketplace on Solana blockchain.<br>' +
                        'I work as front-end developer. I also touch on the connection between wallet and app.',
            illustration: '/projects/bluediamonds.jpg',
            link: 'https://bluediamonds.app/'
          } ,
          {
            title: 'm.a.d',
            paragraph: 'M.A.D is the website for my freelance missions.<br>' +
                        'You can also found some articles where I speak about my discover and my feedback on my work.',
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
