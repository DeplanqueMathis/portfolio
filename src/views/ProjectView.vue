<template>
    <div class="project-container" @click="pushProjects">

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
            }
        },
        mounted(){
            this.goProjects();
            this.$root.sphere.rotationProjects = false;
            let timeOut = this.$root.sphere.projectGroup.position.y === 0 ? 50 : 1500
            setTimeout(() => {
                let projectObject = this.$root.sphere.imagesMesh.find((projectObject) => projectObject.name === this.projectName);
                let ProjectPosition = this.$root.sphere.projectGetPosition(projectObject);
                ProjectPosition.z += 3;
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