import * as THREE from "/build/three.module.js";
import { sizer } from "../util.js"

export const mercurySystemObjects = []; 

export const mercurySystem = new THREE.Object3D; 
mercurySystem.name = "mercurySystem";
mercurySystemObjects.push(mercurySystem);


const mercuryTexture = new THREE.TextureLoader().load("../../images/mercurymap.jpg")


const mercuryGeometry = new THREE.SphereGeometry(15, 32, 32);
const mercuryMaterial = new THREE.MeshBasicMaterial({
    map: mercuryTexture,
    // emissive: 0x5a5c5c,
})
const mercuryMesh = new THREE.Mesh(mercuryGeometry, mercuryMaterial);
mercuryMesh.name = "mercury"
mercurySystem.add(mercuryMesh);
mercurySystemObjects.push(mercuryMesh)
