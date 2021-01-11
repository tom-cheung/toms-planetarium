import * as THREE from "/build/three.module.js";
import { sizer } from "../util.js"

export const plutoSystemObjects = []; 
export const plutoSystem = new THREE.Object3D; 
plutoSystemObjects.push(plutoSystem)
plutoSystem.name = "plutoSystem";

const plutoTexture = new THREE.TextureLoader().load("../../images/plutomap2k.jpg")

const plutoMaterial = new THREE.MeshBasicMaterial({
    map: plutoTexture, 
    // emissive: 0xf56942,
    // shininess: 25,
}); 
const plutoGeometry = new THREE.SphereGeometry(8, 32, 32);
const plutoMesh = new THREE.Mesh(plutoGeometry, plutoMaterial);
plutoSystem.add(plutoMesh);
plutoSystemObjects.push(plutoMesh)
plutoMesh.name = "pluto"