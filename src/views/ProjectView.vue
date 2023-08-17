<template>
    <div class="project-container" @click="pushProjects">
        <div class="project-detail">
            <h1 v-html="project.title"></h1>
            <p v-html="project.description"></p>
        </div>
    </div>
</template>

<script>
    export default{
        props: {
            projectName: String,
        },
        data() {
            return {
                initialProjectPosition: {},
                projects: {
                    'Cosmopolitan' : {
                        title: 'Cosmopolitan',
                        description: `Durant mes études j'ai du apprendre à reproduire des maquettes à l'identique en HTML/CSS.
C'est dans ce cadre qu'intervient Cosmopolitan, après remise d'une maquettes et des assets j'ai reproduit à l'identique la maquette.`,
                    },
                    'BlueDiamonds' : {
                        title: 'BlueDiamonds',
                        description: `Avec l'équipe d'easy-developpement nous avons réalisé, à la demande d'un client, une Marketplace de NFT sur la blockchain Solana.<br>
J'y ai participé en tant que développeur full-stack mais ai principalement été chargé de l'intégration CSS et de la connexion avec les wallets.`,
                    },
                    'M.A.D' : {
                        title: 'M.A.D',
                        description: `M.A.D est le site pour mes missions freelance.<br>
Vous y retrouverez aussi des articles d'aide au développement et de résolutions de bugs.`,
                    },
                    'Ikao' : {
                        title: 'Ikao',
                        description: `Durant mes études j'ai du apprendre à reproduire des maquettes à l'identique en HTML/CSS.
C'est dans ce cadre qu'intervient Ikao, après remise d'une maquettes et des assets j'ai reproduit à l'identique la maquette.`,
                    },
                }
            }
        },
        computed: {
            project() {
                return this.projects[this.projectName]
            }
        },
        mounted(){
            this.goProjects();
            this.$root.showMenu = false;
            this.$root.sphere.rotationProjects = false;
            let timeOut = this.$root.sphere.projectGroup.position.y === 0 ? 50 : 1500
            let zAxe = 3;
            if(this.$root.isVertical){
                zAxe = 10;
            }
            setTimeout(() => {
                let projectObject = this.$root.sphere.imagesMesh.find((projectObject) => projectObject.name === this.projectName);
                let ProjectPosition = this.$root.sphere.projectGetPosition(projectObject);
                ProjectPosition.z += zAxe;
                this.$root.moveCamera(ProjectPosition);
            }, timeOut)
        },
        methods: {
            goProjects() {
                this.$root.moveSphere({x: 0, y: 0, z: 3});
                this.$root.moveTorus({x: 0, y: -2, z: 9});
                this.$root.moveLight({x: 1.25, y: 0, z: 7});
                this.$root.moveProjects({x: 0, y: 0, z: 3});
            },
            pushProjects() {
                this.$router.push({
                    name: 'projets',
                })
            }
        },
        beforeUnmount() {
            this.$root.moveCamera({x: 0, y: 0, z: 15});
            this.$root.sphere.rotationProjects = true;
        }
    }
</script>