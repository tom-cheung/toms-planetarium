import * as THREE from "/build/three.module.js";
import { sizer } from "../util.js"

export const neptuneSystemObjects = []; 
export const neptuneSystem = new THREE.Object3D; 
neptuneSystemObjects.push(neptuneSystem)
neptuneSystem.name = "neptuneSystem"

const neptuneTexture = new THREE.TextureLoader().load("../../images/neptunemap.jpg")

const neptuneMaterial = new THREE.MeshBasicMaterial({
    map: neptuneTexture, 
    // emissive: 0xf56942,
    // shininess: 25,
}); 
const neptuneGeometry = new THREE.SphereGeometry(153, 32, 32);
const neptuneMesh = new THREE.Mesh(neptuneGeometry, neptuneMaterial);
neptuneSystem.add(neptuneMesh);
neptuneSystemObjects.push(neptuneMesh)
neptuneMesh.name = "neptune"