import * as THREE from "/build/three.module.js"
import camera from './camera.js'
import light from './light.js'
import { sphere, cube } from './geometries.js'
import { addSolidGeometry, addLineGeometry, axesHelper } from './util.js'



const canvas = document.querySelector('#mainCanvas') // grabs the canvas from index.html 

const renderer = new THREE.WebGLRenderer({canvas}) // renders stuff onto the canvas 

const scene = new THREE.Scene(); // anything you want to draw has to be added onto the scene 
scene.background = new THREE.Color(0X000000)

scene.add(light);

/* ------------------------------------------- ADDING OBJECTS -------------------------------------------*/ 


const objects = []; 
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

const solarSystem = new THREE.Object3D; 
addObject(0, 0, solarSystem) 
// creates a empty object and adds it to the scene. This is the only object in the scene, everything is a child to it. The sun and each planets 'system ' is a child node on the scene. Add objects also adds it to the objects, which i imagine it rotates
// the entire object  

const sunMaterial = new THREE.MeshPhongMaterial({emissive: 0xFFFF00}); // emissive makes MeshPhongMaterial show up even when no light is hitting it. 
const sunMesh = new THREE.Mesh(sphere, sunMaterial); 
sunMesh.scale.set(5, 5, 5); 
solarSystem.add(sunMesh) // adds the sun as a child to the solar system, the sun is at the center of the solar system 
objects.push(sunMesh) // pushes the sunMesh into objects to have it rotate the sun


const earthSystem = new THREE.Object3D; // used to create a 'orbit system' around earth for it's moon 
earthSystem.position.x = 10; 
solarSystem.add(earthSystem);
objects.push(earthSystem); // pushes the earthSystem into the objects so it rotates, this is what rotates the moons 

const earthMaterial = new THREE.MeshPhongMaterial({color: 0x2233FF, emissive: 0x112244})
const earthMesh = new THREE.Mesh(sphere, earthMaterial); 
    // addObject(5, 0, earthMesh) // adding earthMesh as another object to the scene. Both sunMesh and earthMesh would be children of 'scene'
    // sunMesh.add(earthMesh) 
    // earthMesh.position.x = 10; // 
        // instead of adding earthMesh as another object to the scene, you now added it as a child to the sunMesh object. The earthMesh is now 'relative' to the sunMesh. If you position the earthMesh it relative to the position of the sunMesh
        // It is also affected by it's scaling. This isn't good when you want objects to be of different size. 
        // To make it so that the earth orbits around the sun and it maintains it's scaling you can add both the sun and the earth to a empty 3D object. Say solarsystem 
    // solarSystem.add(earthMesh); 
        // if you want the sun or the earth to rotate on it's own, and not just orbit something, you need to also add them to objects 
earthSystem.add(earthMesh); // essentially placing earth above the earthSystem object, which is just an empty object. But it's importance is it allows you to create individual orbits 
objects.push(earthMesh) // you are not adding it onto the scene, just to objects array which handles the rotation 

const moonSystem = new THREE.Object3D; 
moonSystem.position.x = 3; 
earthSystem.add(moonSystem);
// objects.push(moonSystem) // dont need to push this if there's nothing orbiting the moon 

const moonMaterial = new THREE.MeshPhongMaterial({color: 0x888888, emissive: 0x222222});
const moonMesh = new THREE.Mesh(sphere, moonMaterial);
moonMesh.scale.set(.5, .5, .5); 
// moonMesh.position.x = 3; 
moonSystem.add(moonMesh)
objects.push(moonMesh);


// const earthSystem = new THREE.Object3D; 
// addObject(10, 0, earthSystem)

// earthSystem.add(earthMesh)

// const moonSystem = new THREE.Object3D(); 
// moonSystem.position.x = 2; 
// earthSystem.add(moonSystem); 

// const moonMaterial = new THREE.MeshPhongMaterial({color: 0x888888, emissive: 0x222222 });
// const moonMesh = new THREE.Mesh(sphere, moonMaterial); 
// moonMesh.scale.set(.5, .5, .5);
// moonSystem.add(moonMesh); 

/* ------------------------------------------- SCENE GRAPH DEMO -----------------------------------------*/


/* ------------------------------------------- AXESHELPER -----------------------------------------*/

objects.forEach( (node) => {
    axesHelper(node)
})

/* ------------------------------------------- AXESHELPER -----------------------------------------*/



/* ------------------------------------------- TEST CENTER OF ROTATION -----------------------------------*/

    // used to center rotation of certain objects 

const testCube = new THREE.BoxBufferGeometry(3, 3, 3)
const testMaterial = new THREE.MeshPhongMaterial({
    side: THREE.DoubleSide, 
})

const hue = Math.random(); // hue range is 0 to 1, red at 0, green at .33, blue at .66,  
const saturation = 1; // range from 0 to 1, with 0 having no color and 1 being most saturated with color
const luminance = .5; // ranges from 0 to 1 with 0 being black and 1 being white and .5 being the maximum amount of color 
testMaterial.color.setHSL(hue, saturation, luminance)

const testMesh = new THREE.Mesh(testCube, testMaterial);
testCube.computeBoundingBox(); 
testCube.boundingBox.getCenter(testMesh.position).multiplyScalar(-1); 

const testParent = new THREE.Object3D(); 
testParent.add(testMesh)

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
  
//    planets.forEach((planet, idx) => { 
//        const speed = 1 + idx * .1; 
//        const rot = time * speed; 
//        planet.rotation.x = rot * .1; 
//        planet.rotation.y = rot * .1; 
//     //    scene.rotation.z = rot * .1; 
//    })

   objects.forEach((object, idx) => { 
    // const speed = 1 + idx * .1; 
    // const rot = time * speed; 
    // object.rotation.x = rot * .1; 
    object.rotation.y = time; 
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