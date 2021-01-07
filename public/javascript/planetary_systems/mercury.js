import * as THREE from "/build/three.module.js";
import { sizer } from "../util.js"

export const mercurySystemObjects = []; 

export const mercurySystem = new THREE.Object3D; 
mercurySystemObjects.push(mercurySystem);

const mercuryGeometry = new THREE.SphereGeometry(20, 32, 32);
const mercuryMaterial = new THREE.MeshPhongMaterial({
    emissive: 0x5a5c5c,
})
const mercuryMesh = new THREE.Mesh(mercuryGeometry, mercuryMaterial);
mercurySystem.add(mercuryMesh);
mercurySystemObjects.push(mercuryMesh)
