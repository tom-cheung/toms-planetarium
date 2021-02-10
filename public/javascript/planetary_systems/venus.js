import * as THREE from "/build/three.module.js";
import {getTube, createPlanet} from "../util.js"

export const venusData = {
    orbit: -22.5, 
    rotation: -.00243, 
    distance: 400, 
    name: 'venus',
    texture: "../../images/venusmap.jpg", 
    size: 15, 
    segments: 32, 
}

export const venusOrbit = getTube(400, "planet", 50, 50, 0xebc334, "venusOrbit", 0);
export const venus = createPlanet(venusData, venusData.distance, 0, 0, "phong")

// export const venusSystemObjects = []; 

// export const venusSystem = new THREE.Object3D; 
// venusSystemObjects.push(venusSystem);
// venusSystem.name = "venusSystem"

// const venusTexture = new THREE.TextureLoader().load("../../images/venusmap.jpg")

// const venusGeometry = new THREE.SphereGeometry(38, 32, 32);
// const venusMaterial = new THREE.MeshBasicMaterial({
//     map: venusTexture,
//     // emissive: 0x5a5c5c,
// })
// const venusMesh = new THREE.Mesh(venusGeometry, venusMaterial);
// venusMesh.name = "venus"
// venusSystem.add(venusMesh);
// venusSystemObjects.push(venusMesh)
