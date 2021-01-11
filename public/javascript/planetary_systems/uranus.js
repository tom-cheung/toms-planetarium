import * as THREE from "/build/three.module.js";
import { sizer } from "../util.js"

export const uranusSystemObjects = []; 
export const uranusSystem = new THREE.Object3D; 
uranusSystemObjects.push(uranusSystem)
uranusSystem.name = "uranusSystem"

const uranusTexture = new THREE.TextureLoader().load("../../images/uranusmap.jpg")

const uranusMaterial = new THREE.MeshBasicMaterial({
    map: uranusTexture,
    // emissive: 0xf56942,
    // shininess: 25,
}); 
const uranusGeometry = new THREE.SphereGeometry(158, 32, 32);
const uranusMesh = new THREE.Mesh(uranusGeometry, uranusMaterial);
uranusSystem.add(uranusMesh);
uranusSystemObjects.push(uranusMesh)
uranusMesh.name = "uranus"