import * as THREE from "/build/three.module.js";
import {createRingOrbit, planetData, getTube} from "../util.js";

const earthData = planetData(365.26, 0.015, 25.3, "earth", null, 1, 32); 

export const earthOrbit = createRingOrbit(earthData.sunDistance);

export const tubeOrbit = getTube(25.3, .1, 8, 32, 0x757064, "ring", 0);


// export const earthSystemObjects = []; 

// export const earthSystem = new THREE.Object3D; 
// earthSystem.name = "earthSystem"
// earthSystemObjects.push(earthSystem);

// const earthTexture = new THREE.TextureLoader().load("../../images/earth.jpg")
// const earthAtmosTexture = new THREE.TextureLoader().load("../../images/clouds.png")

// const earthMaterial = new THREE.MeshPhongMaterial({
//     map: earthTexture, 
//     shininess: 25,
//     emissive: 0x4287f5,
// });
// const earthGeometry = new THREE.SphereGeometry(40, 32, 32);
// const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
// earthMesh.name = "earth"
// earthSystem.add(earthMesh)
// earthSystemObjects.push(earthMesh)

// const earthAtmosGeometry = new THREE.SphereGeometry(41, 32, 32);
// const earthAtmosMaterial = new THREE.MeshPhongMaterial({
//     map: earthAtmosTexture, 
//     transparent: true, 
//     opacity: 0.3, 
// })
// const earthAtmosMesh = new THREE.Mesh(earthAtmosGeometry, earthAtmosMaterial)
// earthAtmosMesh.name = "earthAtmos"
// earthSystem.add(earthAtmosMesh)
// earthSystemObjects.push(earthAtmosMesh)

// const moonSystem = new THREE.Object3D; 
// moonSystem.position.x = sizer(earthMesh) * 2; 
// earthSystem.add(moonSystem)
// earthSystemObjects.push(moonSystem)

// const moonGeometry = new THREE.SphereGeometry(20*.27, 32, 32);
// const moonMaterial = new THREE.MeshPhongMaterial({
//     // shininess: 25, 
//     emissive: 0x222222, 
// })
// const moonMesh = new THREE.Mesh(moonGeometry, moonMaterial);
// moonSystem.add(moonMesh)
// earthSystemObjects.push(moonMesh)



// const earthSystem = new THREE.Object3D; // used to create a 'orbit system' around earth for it's moon 
// earthSystem.position.x = 80; 
// solarSystem.add(earthSystem);
// objects.push(earthSystem); // pushes the earthSystem into the objects so it rotates, this is what rotates the moons 

// const earthMaterial = new THREE.MeshPhongMaterial({
//     // map: new THREE.ImageUtils.loadTexture("../images/earth.jpg"),
//     specular: 0x333333, 
//     shininess: 25, 
//     color: 0x2233FF, 
//     emissive: 0x112244
// })
// const earthMesh = new THREE.Mesh(sphere, earthMaterial); 
//     // addObject(5, 0, earthMesh) // adding earthMesh as another object to the scene. Both sunMesh and earthMesh would be children of 'scene'
//     // sunMesh.add(earthMesh) 
// //     // earthMesh.position.x = 10; // 
// //         // instead of adding earthMesh as another object to the scene, you now added it as a child to the sunMesh object. The earthMesh is now 'relative' to the sunMesh. If you position the earthMesh it relative to the position of the sunMesh
// //         // It is also affected by it's scaling. This isn't good when you want objects to be of different size. 
// //         // To make it so that the earth orbits around the sun and it maintains it's scaling you can add both the sun and the earth to a empty 3D object. Say solarsystem 
// //     // solarSystem.add(earthMesh); 
// //         // if you want the sun or the earth to rotate on it's own, and not just orbit something, you need to also add them to objects 
// earthSystem.add(earthMesh); // essentially placing earth above the earthSystem object, which is just an empty object. But it's importance is it allows you to create individual orbits 
// objects.push(earthMesh) // you are not adding it onto the scene, just to objects array which handles the rotation 

// const moonSystem = new THREE.Object3D; 
// moonSystem.position.x = 3; 
// earthSystem.add(moonSystem);
// objects.push(moonSystem) // dont need to push this if there's nothing orbiting the moon 

// const moonMaterial = new THREE.MeshPhongMaterial({color: 0x888888, emissive: 0x222222});
// const moonMesh = new THREE.Mesh(sphere, moonMaterial);
// moonMesh.scale.set(.5, .5, .5); 
// moonSystem.add(moonMesh)
// objects.push(moonMesh);
