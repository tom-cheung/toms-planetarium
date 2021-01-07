import * as THREE from "/build/three.module.js"
import { OrbitControls } from '/jsm/controls/OrbitControls.js';
import camera from './camera.js'
import {pointLight, ambientLight} from './light.js'
import { sphere, cube } from './geometries.js'
import { sizer } from './util.js'

import { earthSystem, earthSystemObjects } from './planetary_systems/earth.js'
import { mercurySystem, mercurySystemObjects } from './planetary_systems/mercury.js'
import { venusSystem, venusSystemObjects } from './planetary_systems/venus.js'


const canvas = document.querySelector('#mainCanvas') // grabs the canvas from index.html 

const renderer = new THREE.WebGLRenderer({canvas}) // renders stuff onto the canvas 

const orbitcontrol = new OrbitControls( camera, renderer.domElement )
// orbitcontrol.maxDistance = 900; 

const scene = new THREE.Scene(); // anything you want to draw has to be added onto the scene 
// scene.background = new THREE.Color(0XFFFFFF)
// const loader = new THREE.TextureLoader(); 
// loader.load('../images/starfield.jpg', (texture) => {
//     scene.background = texture
// })

scene.add(pointLight, ambientLight);

/* ------------------------------------------- ADDING OBJECTS -------------------------------------------*/ 


let objects = []; 
const spread = 5; 

function addObject(x, y, obj) {
    obj.position.x = x * spread; 
    obj.position.y = y * spread; 

    scene.add(obj);
    objects.push(obj)
}


// addSolidGeometry(0, 0, sphere, addObject)

// addSolidGeometry(5, 5, cube, addObject)

/* ------------------------------------------- ADDING OBJECTS -------------------------------------------*/



/* ------------------------------------------- SCENE GRAPH DEMO -----------------------------------------*/

// const loader = new THREE.TextureLoader(); 

// loader.load('../images/starfield.jpg', (texture) => {
//     const starMaterial = new THREE.MeshPhongMaterial({
//         map: texture, 
//         side: THREE.DoubleSide, 
//         shininess: 0, 
//     })
//     const starGeometry = new THREE.SphereGeometry(5000, 30, 30); 
//     const starField = new THREE.Mesh(starGeometry, starMaterial);
//     scene.add(starField);
// })

// const radius = 5000; 
// const widthSegments = 50; 
// const heightSegments = 50; 
// const geometry = new THREE.SphereBufferGeometry(radius, widthSegments, heightSegments); 
// const material = new THREE.PointsMaterial({
//     color: 'red', 
//     size: 0.1,
// })

// const geometry = new THREE.SphereGeometry(1000, 100, 100);
// geometry.vertices.forEach(v => {
// 	v.endPos = v.clone();
//   v.set(
//   	THREE.Math.randFloat(-50, 50),
//     THREE.Math.randFloat(-50, 50),
//     THREE.Math.randFloat(-50, 50)
//   );
//   v.startPos = v.clone();
// });

// const points = new THREE.Points(geometry, material); 
// scene.add(points)

const solarSystem = new THREE.Object3D; 
scene.add(solarSystem)
objects.push(solarSystem)
// creates a empty object and adds it to the scene. This is the only object in the scene, everything is a child to it. The sun and each planets 'system ' is a child node on the scene. Add objects also adds it to the objects, which i imagine it rotates
// the entire object  
// solarSystem.add(starField)

const sunMaterial = new THREE.MeshPhongMaterial({
    emissive: 0xfcba03,
    shininess: 25, 
}); // emissive makes MeshPhongMaterial show up even when no light is hitting it. 
const sunGeometry = new THREE.SphereGeometry(100, 32, 32); 
// sunGeometry.scale(30, 30, 30)
const sunMesh = new THREE.Mesh(sunGeometry, sunMaterial); 
solarSystem.add(sunMesh) // adds the sun as a child to the solar system, the sun is at the center of the solar system 
objects.push(sunMesh) // pushes the sunMesh into objects to have it rotate the sun


mercurySystem.position.x = sizer(sunMesh) * 4;
solarSystem.add(mercurySystem);
objects = objects.concat(mercurySystemObjects);

venusSystem.position.x = sizer(sunMesh) * 8; 
solarSystem.add(venusSystem);
objects = objects.concat(venusSystemObjects);

earthSystem.position.x = sizer(sunMesh) * 12;
solarSystem.add(earthSystem);
objects = objects.concat(earthSystemObjects);



/* ------------------------------------------- SCENE GRAPH DEMO -----------------------------------------*/


/* ------------------------------------------- AXESHELPER -----------------------------------------*/

// objects.forEach( (node) => {
//     axesHelper(node)
// })

/* ------------------------------------------- AXESHELPER -----------------------------------------*/



/* ------------------------------------------- TEST CENTER OF ROTATION -----------------------------------*/

    // used to center rotation of certain objects 

// const testCube = new THREE.BoxBufferGeometry(3, 3, 3)
// const testMaterial = new THREE.MeshPhongMaterial({
//     side: THREE.DoubleSide, 
// })

// const hue = Math.random(); // hue range is 0 to 1, red at 0, green at .33, blue at .66,  
// const saturation = 1; // range from 0 to 1, with 0 having no color and 1 being most saturated with color
// const luminance = .5; // ranges from 0 to 1 with 0 being black and 1 being white and .5 being the maximum amount of color 
// testMaterial.color.setHSL(hue, saturation, luminance)

// const testMesh = new THREE.Mesh(testCube, testMaterial);
// testCube.computeBoundingBox(); 
// testCube.boundingBox.getCenter(testMesh.position).multiplyScalar(-1); 

// const testParent = new THREE.Object3D(); 
// testParent.add(testMesh)

// addObject(3, 3, testParent); 

/* ------------------------------------------- TEST CENTER OF ROTATION -----------------------------------*/



/* ------------------------------------------- RESIZING -------------------------------------------------*/ 
function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false); 
      // false otherwise it overwrites the CSS properties, 
      // if not set to false, the size of the canvas defaults to something smaller
    }
    return needResize;
  } 
  // checks to see that the renderer's canvas (renderer.domElement) is the size that it is being displayed
  // if not it sets the size to the display size 
  // the size of the canvas being drawn on, versus the size of the display it is displayed on  

/* ------------------------------------------- RESIZING -------------------------------------------------*/ 

function render(time) {

    time *= 0.001; 
 
    if(resizeRendererToDisplaySize(renderer)) {
        const canvas = renderer.domElement; // renderer.domElement is the canvas you're rendering on 
        camera.aspect = canvas.clientWidth / canvas.clientHeight; 
        camera.updateProjectionMatrix();
    }

   objects.forEach((object, idx) => { 
    // const speed = 1 + idx * .1; 
    // const rot = time * speed; 
    // object.rotation.x = rot * .1; 
    object.rotation.y = time * .55; 
    // scene.rotation.z = rot * .1; 
   })

    renderer.render(scene, camera);

    requestAnimationFrame(render) // recursion! loops, requestAnimationFrame passes in the time 
}



requestAnimationFrame(render) // calls the above which loops 





// import * as THREE from '/build/three.module.js';
// import { OrbitControls } from '/jsm/controls/OrbitControls.js';
// import { FlyControls } from '/jsm/controls/FlyControls.js';
// import Stats from '/jsm/libs/stats.module.js';


// // scene 
// const scene = new THREE.Scene();
// // const sceneBackground = new THREE.TextureLoader().load("scenepic.jpg")
// // scene.background = sceneBackground;


// // camera 
// const camera = new THREE.PerspectiveCamera(
//     50, 
//     window.innerWidth / window.innerHeight, 
//     0.1, 
//     1000);

// camera.position.z = 100;

// // renderer 
// const renderer = new THREE.WebGLRenderer({
//     // antialias: true
// });
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// // control 
// const controls = new OrbitControls(camera, renderer.domElement);
// // const controls = new FlyControls(camera, renderer.domElement);

// // sun 
// const texture = new THREE.TextureLoader().load("InouyeFirstLightHighResSun.jpg");
// texture.wrapS = THREE.RepeatWrapping;
// texture.wrapT = THREE.RepeatWrapping;
// texture.repeat.set( 4, 4 );

// //  creating the sphere 
// const geometry = new THREE.SphereGeometry(1, 32, 32);
// const material = new THREE.MeshBasicMaterial({
//     map: texture,
//     wireframe: true
// });
// const sphere1 = new THREE.Mesh(geometry, material);
// sphere1.position.set( 5, 5, 5 )

// const sphere2 = new THREE.Mesh(geometry, material);
// sphere2.position.set( 0, 0, 0 )

// // adding the spheres to the scene 
// scene.add(sphere1, sphere2);

// window.addEventListener('resize', () => {
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     render();
// }, false);

// // window.addEventListener('DOMContentLoaded', () => {
// //     console.log('hi')
// //     camera.aspect = window.innerWidth / window.innerHeight;
// //     camera.updateProjectionMatrix();
// //     renderer.setSize(window.innerWidth, window.innerHeight);
// //     render(); 
// // })

// const stats = Stats();
// document.body.appendChild(stats.dom);

// var animate = function () {
//     requestAnimationFrame(animate);
//     sphere1.rotation.x += 0.01;
//     sphere1.rotation.y += 0.01;
//     sphere2.rotation.x += 0.01;
//     sphere2.rotation.y += 0.01;
//     controls.update();
//     render();
//     stats.update();
// };

// function render() {
//     renderer.render(scene, camera);
// }

// animate();