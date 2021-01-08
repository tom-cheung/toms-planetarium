import * as THREE from "/build/three.module.js";
import { sizer } from "../util.js"

export const neptuneSystemObjects = []; 
export const neptuneSystem = new THREE.Object3D; 
neptuneSystemObjects.push(neptuneSystem)

const neptuneMaterial = new THREE.MeshPhongMaterial({
    emissive: 0xf56942,
    shininess: 25,
}); 
const neptuneGeometry = new THREE.SphereGeometry(20, 32, 32);
const neptuneMesh = new THREE.Mesh(neptuneGeometry, neptuneMaterial);
neptuneSystem.add(neptuneMesh);
neptuneSystemObjects.push(neptuneMesh)