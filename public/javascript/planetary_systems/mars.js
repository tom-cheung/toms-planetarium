import * as THREE from "/build/three.module.js";
import { sizer } from "../util.js"

export const marsSystemObjects = []; 

export const marsSystem = new THREE.Object3D; 
marsSystemObjects.push(marsSystem);

const marsGeometry = new THREE.SphereGeometry(20, 32, 32);
const marsMaterial = new THREE.MeshPhongMaterial({
    emissive: f56942,
    shininess: 25, 
}); 
