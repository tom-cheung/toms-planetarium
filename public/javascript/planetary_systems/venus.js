import * as THREE from "/build/three.module.js";

export const venusSystemObjects = []; 

export const venusSystem = new THREE.Object3D; 
venusSystemObjects.push(venusSystem);
venusSystem.name = "venusSystem"

const venusTexture = new THREE.TextureLoader().load("../../images/venusmap.jpg")

const venusGeometry = new THREE.SphereGeometry(38, 32, 32);
const venusMaterial = new THREE.MeshBasicMaterial({
    map: venusTexture,
    // emissive: 0x5a5c5c,
})
const venusMesh = new THREE.Mesh(venusGeometry, venusMaterial);
venusMesh.name = "venus"
venusSystem.add(venusMesh);
venusSystemObjects.push(venusMesh)
