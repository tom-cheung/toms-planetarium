// import * as THREE from "/build/three.module.js"
// import { OrbitControls } from '/jsm/controls/OrbitControls.js';
// import camera from './camera.js'
// import {pointLight, ambientLight} from './light.js'
// import { sizer, getSize } from './util.js'

// import { earthSystem, earthSystemObjects } from './planetary_systems/earth.js'
// import { mercurySystem, mercurySystemObjects } from './planetary_systems/mercury.js'
// import { venusSystem, venusSystemObjects } from './planetary_systems/venus.js'
// import { marsSystem, marsSystemObjects } from './planetary_systems/mars.js'
// import { jupiterSystem, jupiterSystemObjects } from './planetary_systems/jupiter.js'
// import { saturnSystem, saturnSystemObjects } from './planetary_systems/saturn.js'
// import { uranusSystem, uranusSystemObjects } from './planetary_systems/uranus.js'
// import { neptuneSystem, neptuneSystemObjects } from './planetary_systems/neptune.js'
// import { plutoSystem, plutoSystemObjects } from './planetary_systems/pluto.js'


// const canvas = document.querySelector('#mainCanvas') // grabs the canvas from index.html 
// const renderer = new THREE.WebGLRenderer({canvas}) // renders stuff onto the canvas 
// const orbitcontrol = new OrbitControls( camera, renderer.domElement )
// orbitcontrol.maxDistance = 500000; 

// const scene = new THREE.Scene(); // anything you want to draw has to be added onto the scene 

// scene.add(pointLight, ambientLight);

// /* ------------------------------------------- ADDING OBJECTS -------------------------------------------*/ 

// let objects = []; 
// const spread = 5; 

// function addObject(x, y, obj) {
//     obj.position.x = x * spread; 
//     obj.position.y = y * spread; 

//     scene.add(obj);
//     objects.push(obj)
// }

// // addSolidGeometry(0, 0, sphere, addObject)

// // addSolidGeometry(5, 5, cube, addObject)

// /* ------------------------------------------- ADDING OBJECTS -------------------------------------------*/



// /* ------------------------------------------- SCENE GRAPH DEMO -----------------------------------------*/

// const loader = new THREE.TextureLoader(); 

// loader.load('../images/starfield.jpg', (texture) => {
//     // texture.wrap = THREE.RepeatWrapping;

//     const starMaterial = new THREE.MeshBasicMaterial({
//         map: texture, 
//         side: THREE.DoubleSide, 
//         transparent: true, 
//         opacity: .4,
//     })
//     const starGeometry = new THREE.SphereGeometry(500000, 30, 30); 
//     const starField = new THREE.Mesh(starGeometry, starMaterial);
//     scene.add(starField);
// })

// // const radius = 5000; 
// // const widthSegments = 50; 
// // const heightSegments = 50; 
// // const geometry = new THREE.SphereBufferGeometry(radius, widthSegments, heightSegments); 
// // const material = new THREE.PointsMaterial({
// //     color: 'red', 
// //     size: 0.1,
// // })

// // const geometry = new THREE.SphereGeometry(1000, 100, 100);
// // geometry.vertices.forEach(v => {
// // 	v.endPos = v.clone();
// //   v.set(
// //   	THREE.Math.randFloat(-50, 50),
// //     THREE.Math.randFloat(-50, 50),
// //     THREE.Math.randFloat(-50, 50)
// //   );
// //   v.startPos = v.clone();
// // });

// // const points = new THREE.Points(geometry, material); 
// // scene.add(points)

// const solarSystem = new THREE.Object3D; 
// scene.add(solarSystem)
// objects.push(solarSystem)
// // creates a empty object and adds it to the scene. This is the only object in the scene, everything is a child to it. The sun and each planets 'system ' is a child node on the scene. Add objects also adds it to the objects, which i imagine it rotates
// // the entire object  
// // solarSystem.add(starField)

// const sunTexture = new THREE.TextureLoader().load("../images/sun.jpg"); 
// const sunAtmosTexture = new THREE.TextureLoader().load("../images/sunimg2.jpg")

// const sunMaterial = new THREE.MeshPhongMaterial({
//     map: sunTexture, 
//     emissive: 0xfcba03,
//     shininess: 25, 
// }); // emissive makes MeshPhongMaterial show up even when no light is hitting it. 
// const sunGeometry = new THREE.SphereGeometry(4326, 32, 32); 
// // sunGeometry.scale(30, 30, 30)
// const sunMesh = new THREE.Mesh(sunGeometry, sunMaterial); 
// solarSystem.add(sunMesh) // adds the sun as a child to the solar system, the sun is at the center of the solar system 
// objects.push(sunMesh) // pushes the sunMesh into objects to have it rotate the sun
// sunMesh.name = "sun";

// const sunAtmosGeometry = new THREE.SphereGeometry(4327, 32, 32); 
// const sunAtmosMaterial = new THREE.MeshPhongMaterial({
//     map: sunTexture,
//     transparent: true, 
//     opacity: 0.2, 
// })
// const sunAtmosMesh = new THREE.Mesh(sunAtmosGeometry, sunAtmosMaterial);
// sunAtmosMesh.name = "sun atmos"
// solarSystem.add(sunAtmosMesh);
// objects.push(sunAtmosMesh)

// const mercuryOrbitInnerRadius = sizer(sunMesh) * 100;
// const mercuryOrbitGeo = new THREE.RingBufferGeometry(5000, 5100, 180, 8, 100)
// const mercuryOrbitMaterial = new THREE.MeshPhongMaterial({
//     side: THREE.DoubleSide, 
//     shininess: 25,
//     emissive: 0xcc9900,
// })
// const mercuryOrbitMesh = new THREE.Mesh(mercuryOrbitGeo, mercuryOrbitMaterial)
// mercuryOrbitMesh.rotation.x = Math.PI / 2; 
// solarSystem.add(mercuryOrbitMesh)

// mercurySystem.position.x = sizer(sunMesh) * 5;
// solarSystem.add(mercurySystem);
// objects = objects.concat(mercurySystemObjects);

// venusSystem.position.x = sizer(sunMesh) * 10; 
// solarSystem.add(venusSystem);
// objects = objects.concat(venusSystemObjects);

// earthSystem.position.x = sizer(sunMesh) * 15;
// solarSystem.add(earthSystem);
// objects = objects.concat(earthSystemObjects);

// marsSystem.position.x = sizer(sunMesh) * 20; 
// solarSystem.add(marsSystem);
// objects = objects.concat(marsSystemObjects)

// jupiterSystem.position.x = sizer(sunMesh) * 25; 
// solarSystem.add(jupiterSystem);
// objects = objects.concat(jupiterSystemObjects)

// saturnSystem.position.x = sizer(sunMesh) * 30; 
// solarSystem.add(saturnSystem);
// objects = objects.concat(saturnSystemObjects)

// uranusSystem.position.x = sizer(sunMesh) * 35; 
// solarSystem.add(uranusSystem);
// objects = objects.concat(uranusSystemObjects)

// neptuneSystem.position.x = sizer(sunMesh) * 40; 
// solarSystem.add(neptuneSystem);
// objects = objects.concat(neptuneSystemObjects)

// plutoSystem.position.x = sizer(sunMesh) * 45;
// solarSystem.add(plutoSystem);
// objects = objects.concat(plutoSystemObjects);

// let getVec = (position) => {
//     let x = position.position.x
//     let y = position.position.y
//     let z = position.position.z
//     // let vec = new THREE.Vector3(x, y, z)
//     return [x, y, z]
// }


// /* ------------------------------------------- SCENE GRAPH DEMO -----------------------------------------*/


// /* ------------------------------------------- AXESHELPER -----------------------------------------*/

// // objects.forEach( (node) => {
// //     axesHelper(node)
// // })

// /* ------------------------------------------- AXESHELPER -----------------------------------------*/



// /* ------------------------------------------- TEST CENTER OF ROTATION -----------------------------------*/

//     // used to center rotation of certain objects 

// // const testCube = new THREE.BoxBufferGeometry(3, 3, 3)
// // const testMaterial = new THREE.MeshPhongMaterial({
// //     side: THREE.DoubleSide, 
// // })

// // const hue = Math.random(); // hue range is 0 to 1, red at 0, green at .33, blue at .66,  
// // const saturation = 1; // range from 0 to 1, with 0 having no color and 1 being most saturated with color
// // const luminance = .5; // ranges from 0 to 1 with 0 being black and 1 being white and .5 being the maximum amount of color 
// // testMaterial.color.setHSL(hue, saturation, luminance)

// // const testMesh = new THREE.Mesh(testCube, testMaterial);
// // testCube.computeBoundingBox(); 
// // testCube.boundingBox.getCenter(testMesh.position).multiplyScalar(-1); 

// // const testParent = new THREE.Object3D(); 
// // testParent.add(testMesh)

// // addObject(3, 3, testParent); 

// /* ------------------------------------------- TEST CENTER OF ROTATION -----------------------------------*/



// /* ------------------------------------------- RESIZING -------------------------------------------------*/ 
// function resizeRendererToDisplaySize(renderer) {
//     const canvas = renderer.domElement;
//     const width = canvas.clientWidth;
//     const height = canvas.clientHeight;
//     const needResize = canvas.width !== width || canvas.height !== height;
//     if (needResize) {
//       renderer.setSize(width, height, false); 
//       // false otherwise it overwrites the CSS properties, 
//       // if not set to false, the size of the canvas defaults to something smaller
//     }
//     return needResize;
//   } 
//   // checks to see that the renderer's canvas (renderer.domElement) is the size that it is being displayed
//   // if not it sets the size to the display size 
//   // the size of the canvas being drawn on, versus the size of the display it is displayed on  

// /* ------------------------------------------- RESIZING -------------------------------------------------*/ 

// function renderAll(time) {
//     time *= 0.001; 
 
//     if(resizeRendererToDisplaySize(renderer)) {
//         const canvas = renderer.domElement; // renderer.domElement is the canvas you're rendering on 
//         camera.aspect = canvas.clientWidth / canvas.clientHeight; 
//         camera.updateProjectionMatrix();
//     }

//     // solarSystem.rotation.y = time * .1
//     scene.getObjectByName("sun").rotation.x = time * .1
//     scene.getObjectByName("sun atmos").rotation.x = time * .3

//     scene.getObjectByName("mercurySystem").rotation.x = time * .1;
//     scene.getObjectByName("mercury").rotation.y = time * .1;

//     scene.getObjectByName("venus").rotation.y = time * .1;

//     scene.getObjectByName("earthSystem").rotation.y = time * .1; 
//     scene.getObjectByName("earth").rotation.y = time * .1;
//     scene.getObjectByName("earthAtmos").rotation.y = time * .05
    
//     scene.getObjectByName("marsSystem").rotation.y = time * .1; 

//     scene.getObjectByName("jupiterSystem").rotation.y = time * .1; 
//     scene.getObjectByName("jupiter").rotation.y = time * .1;

//     scene.getObjectByName("uranusSystem").rotation.y = time * .1; 
//     scene.getObjectByName("uranus").rotation.y = time * .1;

//     scene.getObjectByName("neptuneSystem").rotation.y = time * .1; 
//     scene.getObjectByName("neptune").rotation.y = time * .1;

//     scene.getObjectByName("plutoSystem").rotation.y = time * .1; 
//     scene.getObjectByName("pluto").rotation.y = time * .1;

//     scene.getObjectByName("saturnSystem").rotation.y = time * .1;
//     scene.getObjectByName("saturn").rotation.y = time * .1;


//     renderer.render(scene, camera);

//     requestAnimationFrame(renderAll) // recursion! loops, requestAnimationFrame passes in the time 
// }

//     camera.position.set(0, 100000, 0)
//     camera.up.set(0, 0, 1);
//     // camera.lookAt(new THREE.Vector3(...getVec(solarSystem)))
//     orbitcontrol.target = new THREE.Vector3(...getVec(solarSystem)) 

// requestAnimationFrame(renderAll)


// function viewTarget(time) {
//     time *= 0.001; 
 
//     if(resizeRendererToDisplaySize(renderer)) {
//         const canvas = renderer.domElement; // renderer.domElement is the canvas you're rendering on 
//         camera.aspect = canvas.clientWidth / canvas.clientHeight; 
//         camera.updateProjectionMatrix();
//     }

//     renderer.render(scene, camera);

//     requestAnimationFrame(viewTarget)
// }

// function testFnc(time) {
//     time *= 0.001; 
//     if(resizeRendererToDisplaySize(renderer)) {
//         const canvas = renderer.domElement; // renderer.domElement is the canvas you're rendering on 
//         camera.aspect = canvas.clientWidth / canvas.clientHeight; 
//         camera.updateProjectionMatrix();
//     }

//     scene.getObjectByName("sunCam").rotation.x = time * .1; 

//     renderer.render(scene, camera)

//     requestAnimationFrame(testFnc)
// }


// // requestAnimationFrame(render) // calls the above which loops 

// const sun = document.getElementById("sun")
// sun.addEventListener("click", () => {
//     let [x, y, z] = Object.values(getSize(sunMesh))
//     camera.position.set(x, y, z)
//     camera.up.set(0, 0, 1); 
//     camera.lookAt(new THREE.Vector3(...getVec(sunMesh)))
//     orbitcontrol.target = new THREE.Vector3(...getVec(sunMesh))
//     requestAnimationFrame(viewTarget)
// })

// const mercury = document.getElementById("mercury")
// mercury.addEventListener("click", () => {
//     camera.position.set(...getVec(mercurySystem)) // sets the camera right on top of mercury 
//         // notice this would return 0, 0, 0 for the mercury mesh because its position relative to its parent (mercurySystem) is at the 
//         // center, therefore 0, 0, 0  
//     camera.position.y = 15;
//     camera.up.set(0, 0, 1);
//     camera.lookAt(new THREE.Vector3(...getVec(mercurySystem)))
//     orbitcontrol.target = new THREE.Vector3(...getVec(mercurySystem)) 
//     requestAnimationFrame(viewTarget)
// })

// const venus = document.getElementById("venus")
// venus.addEventListener("click", () => {
//     camera.position.set(...getVec(venusSystem))
//     camera.position.y = 100
//     camera.up.set(0, 0, 1);
//     camera.lookAt(new THREE.Vector3(...getVec(venusSystem)))
//     orbitcontrol.target = new THREE.Vector3(...getVec(venusSystem)) 
//     requestAnimationFrame(viewTarget)
// })


// const earth = document.getElementById("earth")
// earth.addEventListener("click", () => {
//     camera.position.set(...getVec(earthSystem))
//     camera.position.y = 100
//     camera.up.set(0, 0, 1);
//     camera.lookAt(new THREE.Vector3(...getVec(earthSystem)))
//     orbitcontrol.target = new THREE.Vector3(...getVec(earthSystem)) 
//     requestAnimationFrame(viewTarget)
// })

// const mars = document.getElementById("mars")
// mars.addEventListener("click", () => {
//     camera.position.set(...getVec(marsSystem))
//     camera.position.y = 100
//     camera.up.set(0, 0, 1);
//     camera.lookAt(new THREE.Vector3(...getVec(marsSystem)))
//     orbitcontrol.target = new THREE.Vector3(...getVec(marsSystem)) 
//     requestAnimationFrame(viewTarget)
// })

// const saturn = document.getElementById("saturn")
// saturn.addEventListener("click", () => {
//     camera.position.set(...getVec(saturnSystem))
//     camera.position.y = 1000
//     camera.position.z = 1000
//     camera.up.set(0, 0, 1);
//     camera.lookAt(new THREE.Vector3(...getVec(saturnSystem)))
//     orbitcontrol.target = new THREE.Vector3(...getVec(saturnSystem)) 
//     requestAnimationFrame(viewTarget)
// })

// const jupiter = document.getElementById("jupiter")
// jupiter.addEventListener("click", () => {
//     camera.position.set(...getVec(jupiterSystem))
//     camera.position.y = 1000
//     camera.position.z = 1000
//     camera.up.set(0, 0, 1);
//     camera.lookAt(new THREE.Vector3(...getVec(jupiterSystem)))
//     orbitcontrol.target = new THREE.Vector3(...getVec(jupiterSystem)) 
//     requestAnimationFrame(viewTarget)
// })

// const uranus = document.getElementById("uranus")
// uranus.addEventListener("click", () => {
//     camera.position.set(...getVec(uranusSystem))
//     camera.position.y = 400
//     camera.position.z = 400
//     camera.up.set(0, 0, 1);
//     camera.lookAt(new THREE.Vector3(...getVec(uranusSystem)))
//     orbitcontrol.target = new THREE.Vector3(...getVec(uranusSystem)) 
//     requestAnimationFrame(viewTarget)
// })

// const neptune = document.getElementById("neptune")
// neptune.addEventListener("click", () => {
//     camera.position.set(...getVec(neptuneSystem))
//     camera.position.y = 400
//     camera.position.z = 400
//     camera.up.set(0, 0, 1);
//     camera.lookAt(new THREE.Vector3(...getVec(neptuneSystem)))
//     orbitcontrol.target = new THREE.Vector3(...getVec(neptuneSystem)) 
//     requestAnimationFrame(viewTarget)
// })

// const pluto = document.getElementById("pluto")
// pluto.addEventListener("click", () => {
//     camera.position.set(...getVec(plutoSystem))
//     camera.position.y = 400
//     camera.position.z = 400
//     camera.up.set(0, 0, 1);
//     camera.lookAt(new THREE.Vector3(...getVec(plutoSystem)))
//     orbitcontrol.target = new THREE.Vector3(...getVec(plutoSystem)) 
//     requestAnimationFrame(viewTarget)
// })

// const testbtn = document.getElementById("test")
// testbtn.addEventListener("click", () => {
//     camera.position.set(0, 1000, 0)
//     camera.up.set(0, 0, 1);
//     camera.lookAt(new THREE.Vector3(...getVec(solarSystem)))
//     const testObj = new THREE.Object3D; 
//     testObj.name = "sunCam"
//     scene.add(testObj)
//     solarSystem.add(testObj)
//     testObj.add(camera)
//     requestAnimationFrame(testFnc)
// })