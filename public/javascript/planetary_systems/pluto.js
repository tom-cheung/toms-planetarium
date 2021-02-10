import * as THREE from "/build/three.module.js";
import { createPlanet, getTube } from "../util.js";

export const plutoData = {
    orbit: -9052, 
    rotation: -.010, 
    distance: 1800, 
    name: 'pluto',
    texture: "../../images/plutomap2k.jpg", 
    size: 7, 
    segments: 32, 
}

export const plutoOrbit = getTube(1800, "planet", 50, 50, 0xebc334, "plutoOrbit", 0);
export const pluto = createPlanet(plutoData, plutoData.distance, 0, 0, "phong");

// export const plutoSystemObjects = []; 
// export const plutoSystem = new THREE.Object3D; 
// plutoSystemObjects.push(plutoSystem)
// plutoSystem.name = "plutoSystem";

// const plutoTexture = new THREE.TextureLoader().load("../../images/plutomap2k.jpg")

// const plutoMaterial = new THREE.MeshBasicMaterial({
//     map: plutoTexture, 
//     // emissive: 0xf56942,
//     // shininess: 25,
// }); 
// const plutoGeometry = new THREE.SphereGeometry(8, 32, 32);
// const plutoMesh = new THREE.Mesh(plutoGeometry, plutoMaterial);
// plutoSystem.add(plutoMesh);
// plutoSystemObjects.push(plutoMesh)
// plutoMesh.name = "pluto"