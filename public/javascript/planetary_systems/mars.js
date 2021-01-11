import * as THREE from "/build/three.module.js";
import { sizer } from "../util.js"

export const marsSystemObjects = []; 

export const marsSystem = new THREE.Object3D; 
marsSystemObjects.push(marsSystem);
marsSystem.name = "marsSystem"

const marsTexture = new THREE.TextureLoader().load("../../images/marsmap.jpg")

const marsGeometry = new THREE.SphereGeometry(21, 32, 32);
const marsMaterial = new THREE.MeshBasicMaterial({
    map: marsTexture, 
    // emissive: 0xf56942,
    // shininess: 25, 
}); 
const marsMesh = new THREE.Mesh(marsGeometry, marsMaterial);
marsSystem.add(marsMesh);
marsSystemObjects.push(marsMesh)
marsMesh.name = "mars"

const phobosOrbit = new THREE.Object3D; 
phobosOrbit.position.x = sizer(marsMesh) * 2
marsSystem.add(phobosOrbit)
phobosOrbit.name = "phobosOrbit"

const phobosMaterial = new THREE.MeshPhongMaterial({
    shininess: 25, 
    emissive: 0x222222, 
}); 
const phobosGeometry = new THREE.SphereGeometry(10, 32, 32);
const phobosMesh = new THREE.Mesh(phobosGeometry, phobosMaterial)
phobosOrbit.add(phobosMesh);
marsSystemObjects.push(phobosMesh)
phobosMesh.name = "phobos";


const deimosOrbit = new THREE.Object3D; 
deimosOrbit.position.x = sizer(marsMesh) * 4
marsSystem.add(deimosOrbit)
deimosOrbit.name = "deimosOrbit";

const deimosMaterial = new THREE.MeshPhongMaterial({
    shininess: 25, 
    emissive: 0x222222, 
}); 
const deimosGeometry = new THREE.SphereGeometry(10, 32, 32);
const deimosMesh = new THREE.Mesh(deimosGeometry, deimosMaterial)
deimosOrbit.add(deimosMesh);
marsSystemObjects.push(deimosMesh)
deimosMesh.name = "deimosMesh";