import * as THREE from "/build/three.module.js";
import { sizer } from "../util.js"

export const plutoSystemObjects = []; 
export const plutoSystem = new THREE.Object3D; 
plutoSystemObjects.push(plutoSystem)

const plutoMaterial = new THREE.MeshPhongMaterial({
    emissive: 0xf56942,
    shininess: 25,
}); 
const plutoGeometry = new THREE.SphereGeometry(20, 32, 32);
const plutoMesh = new THREE.Mesh(plutoGeometry, plutoMaterial);
plutoSystem.add(plutoMesh);
plutoSystemObjects.push(plutoMesh)