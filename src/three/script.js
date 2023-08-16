import * as THREE from 'three'
import { Line2 } from 'three/addons/lines/Line2.js';
import { LineMaterial } from 'three/addons/lines/LineMaterial.js';
import { LineGeometry } from 'three/addons/lines/LineGeometry.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';

export default class ThreeClass {

    constructor() {
        // Canvas
        this.canvas = document.querySelector('canvas.webgl');

        // Scene
        this.scene = new THREE.Scene();

        //Raycaster for interaction with cursor
        this.raycaster = new THREE.Raycaster();

        //Cursor
        this.pointer = new THREE.Vector2();
        
        //Inspected project name
        this.ProjectTitle = '';

        // Lights
        this.light = new THREE.SpotLight(0xffffff, 10, 9, 1, 1, 0)
        this.light.position.set(1.25, 0, 7)
        this.scene.add(this.light);
        
        // Objects
        this.geometry = new THREE.SphereGeometry( 1, 15, 15 );
        this.sphereGeometry = new THREE.SphereGeometry( 0.99, 15, 15 );

        // Materials
        this.sphereMaterial = new THREE.MeshBasicMaterial();
        this.sphereMaterial.color = new THREE.Color(0xff0000);
        this.sphereMaterial.wireframe = true;
        // Materials
        this.sphereMaterial2 = new THREE.MeshBasicMaterial();
        this.sphereMaterial2.color = new THREE.Color(0x000000);
        // Mesh
        this.sphere = new THREE.Mesh(this.geometry,this.sphereMaterial);
        this.sphere2 = new THREE.Mesh(this.sphereGeometry,this.sphereMaterial2);
        this.sphereGroup = new THREE.Group();
        this.sphereGroup.add(this.sphere);
        this.sphereGroup.add(this.sphere2);
        this.sphereGroup.position.x = 1.75;
        this.sphereGroup.position.z = 0;
        this.scene.add(this.sphereGroup);

        this.torusGeometry = new THREE.CylinderGeometry( 1.25, 1.25, 0.1, 100, 1, true );
        this.torusMaterial = new THREE.MeshStandardMaterial( { color: 0xFFFFFF } ); 
        this.torus = new THREE.Mesh( this.torusGeometry, this.torusMaterial );
        this.torus.position.x = 0;
        this.torus.position.z = 0;

        this.points = [];
        this.points2 = [];
        this.points3 = [];
        this.points4 = [];
        this.colors = [];
        this.points.push( 0, 0.1, 1.25 );
        this.points.push( 0, -0.1, 1.25 );
        this.points2.push( 1.25, 0.1, 0 );
        this.points2.push( 1.25, -0.1, 0 );
        this.points3.push( -1.25, 0.1, 0 );
        this.points3.push( -1.25, -0.1, 0 );
        this.points4.push( 0, 0.1, -1.25 );
        this.points4.push( 0, -0.1, -1.25 );
        this.colors.push( 255, 1, 1 );
        this.colors.push( 255, 1, 1 );
        this.lineGeometry = new LineGeometry();
        this.lineGeometry.setPositions( this.points );
        this.lineGeometry.setColors( this.colors );
        this.lineGeometry2 = new LineGeometry();
        this.lineGeometry2.setPositions( this.points2 );
        this.lineGeometry2.setColors( this.colors );
        this.lineGeometry3 = new LineGeometry();
        this.lineGeometry3.setPositions( this.points3 );
        this.lineGeometry3.setColors( this.colors );
        this.lineGeometry4 = new LineGeometry();
        this.lineGeometry4.setPositions( this.points4 );
        this.lineGeometry4.setColors( this.colors );

        this.matLine = new LineMaterial( {

            color: 0x979797,
            linewidth: 5, // in world units with size attenuation, pixels otherwise
            vertexColors: true,

            //resolution:  // to be set by renderer, eventually
            dashed: false,
            alphaToCoverage: true,

        } );

        this.line = new Line2( this.lineGeometry, this.matLine );
        this.line.computeLineDistances();
        this.line.scale.set( 1, 1, 1 );
        this.line2 = new Line2( this.lineGeometry2, this.matLine );
        this.line2.computeLineDistances();
        this.line2.scale.set( 1, 1, 1 );
        this.line3 = new Line2( this.lineGeometry3, this.matLine );
        this.line3.computeLineDistances();
        this.line3.scale.set( 1, 1, 1 );
        this.line4 = new Line2( this.lineGeometry4, this.matLine );
        this.line4.computeLineDistances();
        this.line4.scale.set( 1, 1, 1 );

        this.group = new THREE.Group();
        this.group.add( this.torus );
        this.group.add( this.line );
        this.group.add( this.line2 );
        this.group.add( this.line3 );
        this.group.add( this.line4 );
        this.group.position.x = 0;
        this.group.position.y = -2;
        this.group.position.z = 9;
        /**
         * Sizes
         */
        this.sizes = {
            width: window.innerWidth,
            height: window.innerHeight
        }
        window.addEventListener('resize', () =>
        {
            // Update sizes
            this.sizes.width = window.innerWidth
            this.sizes.height = window.innerHeight
        
            // Update camera
            this.camera.aspect = this.sizes.width / this.sizes.height
            this.camera.updateProjectionMatrix()
        
            // Update renderer
            this.renderer.setSize(this.sizes.width, this.sizes.height)
            this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        })
        
        /**
         * Camera
         */
        // Base camera
        this.camera = new THREE.PerspectiveCamera(15, this.sizes.width / this.sizes.height, 0.1, 100)
        this.camera.position.x = 0
        this.camera.position.y = 0
        this.camera.position.z = 15
        this.scene.add(this.camera)
        
        /**
         * Text
         */
        this.textLoader = new FontLoader();
        this.textLoader.load("/StretchPro.json", ( font ) => {
            const Experiences = [
                {
                    title: {
                        text: 'Baccalauréat',
                        position: [-0.33, 0.43, 1.25],
                    },
                    text: {
                        text: `En 2019 j'ai obtenu un Baccalauréat Scientifique
avec spécialisation Matématique. J'ai aussi pris l'option
ICN qui m'a appris les bases du dev Web (HTML/CSS/JS).`,
                        position: [-0.65, 0.27, 1.25],
                    },
                    date: {
                        text: '2019',
                        position: [-0.08, 0.36, 1.25],
                    }
                },
                {
                    title: {
                        text: 'DUT MMI',
                        position: [-0.23, 0.46, 1.25],
                    },
                    text: {
                        text: `En 2021 j'ai obtenu un DUT MMI.
Durant ce DUT j'ai approfondi mes compétences en développement,
j'y ai aussi appris le PHP, la gestion d'un réseau.
J'y ai aussi affiné mes appétences de design UX/UI.`,
                        position: [-0.8, 0.33, 1.25],
                    },
                    date: {
                        text: '2019 - 2021',
                        position: [-0.15, 0.4, 1.25],
                    }
                },
                {
                    title: {
                        text: 'Ateja',
                        position: [-0.14, 0.55, 1.25],
                    },
                    text: {
                        text: `Entre 2021 et 2023 j'ai évolué chez Ateja, éditeur d'ERP.
Développé avec Laravel à 100% initialement, j'ai eu pour mission principale
durant ces 2 ans de passer le front en VueJS. Mes autres missions étaient
le développement de nouvelles fonctionnalités en back ainsi que
leur intégration front mais aussi la correction de bug.
J'y ai aussi développé mes compétences de gestion de base de donnée.`,
                        position: [-0.86, 0.40, 1.25],
                    },
                    date: {
                        text: '2021 - 2023',
                        position: [-0.16, 0.48, 1.25],
                    }
                },
                {
                    title: {
                        text: 'Ankama',
                        position: [-0.19, 0.5, 1.25],
                    },
                    text: {
                        text: `Depuis Mai 2023 j'ai rejoins l'équipe du launcher Ankama
en tant que développeur Full-stack. Mes missions sont
le développement de nouvelles fonctionnalités et
la correction de bug. Le front été développé en VueJS
avec Electron et ensuite Quasar afin de l'exporter sur plusieurs médias.
J'ai aussi pris la charge du maintien de l'API développé en Symfony.`,
                        position: [-0.8, 0.36, 1.25],
                    },
                    date: {
                        text: '2023 - Aujourd\'hui',
                        position: [-0.24, 0.43, 1.25],
                    }
                }
            ];

            this.textGroup = [];

            this.textMaterial = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });

            for(const [index, Experience] of Experiences.entries()){
                let TextGeo = new TextGeometry( Experience.title.text, {
                    font: font,
                    size: 0.05,
                    height: 0.05,
                    curveSegments: 12,
                    bevelEnabled: false,
                });
                let ExplainGeo = new TextGeometry( Experience.text.text, {
                    font: font,
                    size: 0.022,
                    height: 0.02,
                    curveSegments: 12,
                    bevelEnabled: false,
                });
                let dateGeo = new TextGeometry( Experience.date.text, {
                    font: font,
                    size: 0.025,
                    height: 0.05,
                    curveSegments: 12,
                    bevelEnabled: false,
                });
                let text = new THREE.Mesh(TextGeo, this.textMaterial);
                let textExplain = new THREE.Mesh(ExplainGeo, this.textMaterial);
                let textDate = new THREE.Mesh(dateGeo, this.textMaterial);

                text.position.set(...Experience.title.position);
                textExplain.position.set(...Experience.text.position);
                textDate.position.set(...Experience.date.position);
                this.textGroup[index] = new THREE.Group();
                this.textGroup[index].add( text );
                this.textGroup[index].add( textExplain );
                this.textGroup[index].add( textDate );
                this.textGroup[index].rotation.y = index * 1.57;
                this.group.add(this.textGroup[index]);
            }

            this.scene.add( this.group );
        } );

        this.projectGroup = new THREE.Group();
        // Create a texture loader so we can load our image file
        this.imageLoader = new THREE.TextureLoader();
        this.imagesMesh = [];

        this.imageLoader.load('/images/projets/cosmo.jpg', (image) => {
            // Load an image file into a custom material
            this.imageMaterial = new THREE.MeshBasicMaterial({
                map: image
            });

            this.imageGeometry = new THREE.PlaneGeometry(1.2, 1*.75);
            this.imageMesh = new THREE.Mesh(this.imageGeometry, this.imageMaterial);
            this.imageMesh.position.set(1.6,1.25,0)
            this.imageMesh.rotation.x = 1;
            this.imageMesh.name = 'Cosmopolitan';
            this.imagesMesh.push(this.imageMesh);
            this.projectGroup.add(this.imageMesh);
        })
        // Create a texture loader so we can load our image file
        this.imageLoader2 = new THREE.TextureLoader();

        this.imageLoader2.load('/images/projets/mad.png', (image) => {
            // Load an image file into a custom material
            this.imageMaterial2 = new THREE.MeshBasicMaterial({
                map: image
            });

            this.imageGeometry2 = new THREE.PlaneGeometry(1.2, 1*.75);
            this.imageMesh2 = new THREE.Mesh(this.imageGeometry2, this.imageMaterial2);
            this.imageMesh2.position.set(1.6,-1.25,0)
            this.imageMesh2.rotation.x = 1;
            this.imageMesh2.name = 'M.A.D';
            this.imagesMesh.push(this.imageMesh2);
            this.projectGroup.add(this.imageMesh2);
        })
        // Create a texture loader so we can load our image file
        this.imageLoader3 = new THREE.TextureLoader();

        this.imageLoader3.load('/images/projets/bluediamonds.jpg', (image) => {
            // Load an image file into a custom material
            this.imageMaterial3 = new THREE.MeshBasicMaterial({
                map: image
            });

            this.imageGeometry3 = new THREE.PlaneGeometry(1.2, 1*.75);
            this.imageMesh3 = new THREE.Mesh(this.imageGeometry3, this.imageMaterial3);
            this.imageMesh3.position.set(-1.6,-1.25,0)
            this.imageMesh3.rotation.x = 1;
            this.imageMesh3.name = 'BlueDiamonds';
            this.imagesMesh.push(this.imageMesh3);
            this.projectGroup.add(this.imageMesh3);
        })
        // Create a texture loader so we can load our image file
        this.imageLoader4 = new THREE.TextureLoader();

        this.imageLoader4.load('/images/projets/ikao.jpg', (image) => {
            // Load an image file into a custom material
            this.imageMaterial4 = new THREE.MeshBasicMaterial({
                map: image
            });

            this.imageGeometry4 = new THREE.PlaneGeometry(1.2, 1*.75);
            this.imageMesh4 = new THREE.Mesh(this.imageGeometry4, this.imageMaterial4);
            this.imageMesh4.position.set(-1.6,1.25,0)
            this.imageMesh4.rotation.x = 1;
            this.imageMesh4.name = 'Ikao';
            this.imagesMesh.push(this.imageMesh4);
            this.projectGroup.add(this.imageMesh4);
        })

        this.projectGroup.position.set(0, 4, 3)
        this.projectGroup.rotation.x = -1
        this.scene.add(this.projectGroup)
        /**
         * Renderer
         */
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas
        })
        this.renderer.setSize(this.sizes.width, this.sizes.height)
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        
        /**
         * Animate
         */
        
        this.clock = new THREE.Clock()
        var dt = 0.005;
        this.sphereTime = 0;
        this.torusTime = 0;
        this.lightTime = 0;
        this.projectsTime = 0;
        this.cameraTime = 0;
        this.rotationProjects = true;

        this.tick = () =>
        {
        
            this.elapsedTime = this.clock.getElapsedTime()
        
            if(this.initialSpherePosition && this.finalSpherePosition && this.initialSpherePosition !== this.finalSpherePosition){
                var newX = this.lerp(this.initialSpherePosition.x, this.finalSpherePosition.x, this.ease(this.sphereTime));
                var newY = this.lerp(this.initialSpherePosition.y, this.finalSpherePosition.y, this.ease(this.sphereTime));
                var newZ = this.lerp(this.initialSpherePosition.z, this.finalSpherePosition.z, this.ease(this.sphereTime));
                this.sphereGroup.position.set(newX, newY, newZ);  // set new position
                this.sphereTime += dt;
            }
            if(this.initialTorusPosition && this.finalTorusPosition && this.initialTorusPosition !== this.finalTorusPosition){
                var newTorusX = this.lerp(this.initialTorusPosition.x, this.finalTorusPosition.x, this.ease(this.torusTime));
                var newTorusY = this.lerp(this.initialTorusPosition.y, this.finalTorusPosition.y, this.ease(this.torusTime));
                var newTorusZ = this.lerp(this.initialTorusPosition.z, this.finalTorusPosition.z, this.ease(this.torusTime));
                this.group.position.set(newTorusX, newTorusY, newTorusZ);  // set new position
                this.torusTime += dt;
            }
            if(this.initialLightPosition && this.finalLightPosition && this.initialLightPosition !== this.finalLightPosition){
                var newLightX = this.lerp(this.initialLightPosition.x, this.finalLightPosition.x, this.ease(this.lightTime));
                var newLightY = this.lerp(this.initialLightPosition.y, this.finalLightPosition.y, this.ease(this.lightTime));
                var newLightZ = this.lerp(this.initialLightPosition.z, this.finalLightPosition.z, this.ease(this.lightTime));
                this.light.position.set(newLightX, newLightY, newLightZ);  // set new position
                this.lightTime += dt;
            }
            if(this.initialProjectsPosition && this.finalProjectsPosition && this.initialProjectsPosition !== this.finalProjectsPosition){
                var newProjectsX = this.lerp(this.initialProjectsPosition.x, this.finalProjectsPosition.x, this.ease(this.projectsTime));
                var newProjectsY = this.lerp(this.initialProjectsPosition.y, this.finalProjectsPosition.y, this.ease(this.projectsTime));
                var newProjectsZ = this.lerp(this.initialProjectsPosition.z, this.finalProjectsPosition.z, this.ease(this.projectsTime));
                this.projectGroup.position.set(newProjectsX, newProjectsY, newProjectsZ);  // set new position
                this.projectsTime += dt;
            }
            if(this.initialCameraPosition && this.finalCameraPosition && this.initialCameraPosition !== this.finalCameraPosition){
                var newCameraX = this.lerp(this.initialCameraPosition.x, this.finalCameraPosition.x, this.ease(this.cameraTime));
                var newCameraY = this.lerp(this.initialCameraPosition.y, this.finalCameraPosition.y, this.ease(this.cameraTime));
                var newCameraZ = this.lerp(this.initialCameraPosition.z, this.finalCameraPosition.z, this.ease(this.cameraTime));
                this.camera.position.set(newCameraX, newCameraY, newCameraZ);  // set new position
                this.cameraTime += dt;
            }
            // Update objects
            this.sphereGroup.rotation.y = .5 * this.elapsedTime
            if(this.imageMesh && this.imageMesh2 && this.imageMesh3 && this.imageMesh4){
                this.imageMesh.lookAt(this.camera.position);
                this.imageMesh2.lookAt(this.camera.position);
                this.imageMesh3.lookAt(this.camera.position);
                this.imageMesh4.lookAt(this.camera.position);
                if(this.rotationProjects){
                    this.projectGroup.rotation.z = .5 * this.elapsedTime
                }
            }
            this.matLine.resolution.set( window.innerWidth, window.innerHeight ); // resolution of the viewport
        
            this.raycaster.setFromCamera( this.pointer, this.camera );

            // calculate objects intersecting the picking ray
            this.intersects = this.raycaster.intersectObjects( this.scene.children, true );

            let hoverProject = false;
            for ( let i = 0; i < this.intersects.length; i ++ ) {

                if(this.imagesMesh.map((image) =>{
                    return image.uuid
                }).includes(this.intersects[ i ].object.uuid)){
                    hoverProject = true
                    this.showProjectName(this.intersects[ i ].object);
                }

            }
            if(!hoverProject && this.ProjectTitle !== ''){
                this.ProjectTitle = '';
                document.getElementById('app').classList.remove("pointer")
            }
            // Update Orbital Controls
            // controls.update()
        
            // Render
            this.renderer.render(this.scene, this.camera)
        
            // Call tick again on the next frame
            window.requestAnimationFrame(this.tick.bind(this))
        }
        
        this.tick()
        window.addEventListener( 'mousemove', this.onPointerMove.bind(this) );
    }

    // linear interpolation function
    lerp(a, b, t) {return a + (b - a) * t}

    // example easing function (quadInOut, see link above)
    ease(t) { return t<0.5 ? 2*t*t : -1+(4-2*t)*t}

    rotateCircle(sens) {
        let goalRotation = this.group.rotation.y + 1.56 * sens;
        let transition = setInterval(() => {
            this.group.rotation.y += 0.01 * sens;
            if((this.group.rotation.y <= goalRotation && sens < 0) || (this.group.rotation.y >= goalRotation && sens > 0)){
                clearInterval(transition);
            }
        }, 5);
    }

    onPointerMove( event ) {

        // calculate pointer position in normalized device coordinates
        // (-1 to +1) for both components

        if(this.pointer){
            this.pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
            this.pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
        }

    }

    showProjectName(projectObject) {
        let image = this.imagesMesh.find((imageTemp) => imageTemp.uuid === projectObject.uuid);
        this.ProjectTitle = image.name;
        document.getElementById('app').classList.add("pointer")
    }

    projectGetPosition(projectObject){
        var target = new THREE.Vector3(); // create once an reuse it
        projectObject.getWorldPosition( target );
        return target;
    }

}