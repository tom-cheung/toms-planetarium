import * as THREE from "/build/three.module.js";
import {createPlanet, getTube } from "../util.js"

export const neptuneData = {
    orbit: -6022.5, 
    rotation: .030, 
    distance: 1600, 
    name: 'neptune',
    texture: "../../images/neptunemap.jpg", 
    size: 22, 
    segments: 32, 
}

export const neptuneOrbit = getTube(1600, "planet", 50, 50, 0xebc334, "neptuneOrbit", 0);
export const neptune = createPlanet(neptuneData, neptuneData.distance, 0, 0, "phong")

// export const neptuneSystemObjects = []; 
// export const neptuneSystem = new THREE.Object3D; 
// neptuneSystemObjects.push(neptuneSystem)
// neptuneSystem.name = "neptuneSystem"

// const neptuneTexture = new THREE.TextureLoader().load("../../images/neptunemap.jpg")

// const neptuneMaterial = new THREE.MeshBasicMaterial({
//     map: neptuneTexture, 
//     // emissive: 0xf56942,
//     // shininess: 25,
// }); 
// const neptuneGeometry = new THREE.SphereGeometry(153, 32, 32);
// const neptuneMesh = new THREE.Mesh(neptuneGeometry, neptuneMaterial);
// neptuneSystem.add(neptuneMesh);
// neptuneSystemObjects.push(neptuneMesh)
// neptuneMesh.name = "neptune"