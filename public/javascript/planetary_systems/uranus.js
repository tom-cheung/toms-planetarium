import * as THREE from "/build/three.module.js";
import { getTube, createPlanet } from "../util.js"


export const uranusData = {
    orbit: -3102.5, 
    rotation: -.027, 
    distance: 1400, 
    name: 'uranus',
    texture: "../../images/uranusmap.jpg", 
    size: 21, 
    segments: 32, 
}

export const uranusOrbit = getTube(1400, "planet", 50, 50, 0xebc334, "uranusOrbit", 0);
export const uranus = createPlanet(uranusData, uranusData.distance, 0, 0, "phong");



// export const uranusSystemObjects = []; 
// export const uranusSystem = new THREE.Object3D; 
// uranusSystemObjects.push(uranusSystem)
// uranusSystem.name = "uranusSystem"

// const uranusTexture = new THREE.TextureLoader().load("../../images/uranusmap.jpg")

// const uranusMaterial = new THREE.MeshBasicMaterial({
//     map: uranusTexture,
//     // emissive: 0xf56942,
//     // shininess: 25,
// }); 
// const uranusGeometry = new THREE.SphereGeometry(158, 32, 32);
// const uranusMesh = new THREE.Mesh(uranusGeometry, uranusMaterial);
// uranusSystem.add(uranusMesh);
// uranusSystemObjects.push(uranusMesh)
// uranusMesh.name = "uranus"