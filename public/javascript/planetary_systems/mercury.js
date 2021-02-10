import * as THREE from "/build/three.module.js";
import { getTube, createPlanet } from "../util.js"

export const mercuryData = {
    orbit: -5.86, 
    rotation: -.0058,
    // rotation: 0,  
    distance: 200, 
    name: 'mercury',
    texture: "../../images/mercurymap.jpg", 
    size: 10, 
    segments: 32, 
}

export const mercuryOrbit = getTube(mercuryData.distance, "planet", 50, 50, 0xebc334, "mercuryOrbit", 0);
export const mercury = createPlanet(mercuryData, mercuryData.distance, 0, 0, "phong")

// export const mercurySystemObjects = []; 

// export const mercurySystem = new THREE.Object3D; 
// mercurySystem.name = "mercurySystem";
// mercurySystemObjects.push(mercurySystem);


// const mercuryTexture = new THREE.TextureLoader().load("../../images/mercurymap.jpg")


// const mercuryGeometry = new THREE.SphereGeometry(15, 32, 32);
// const mercuryMaterial = new THREE.MeshBasicMaterial({
//     map: mercuryTexture,
//     // emissive: 0x5a5c5c,
// })
// const mercuryMesh = new THREE.Mesh(mercuryGeometry, mercuryMaterial);
// mercuryMesh.name = "mercury"
// mercurySystem.add(mercuryMesh);
// mercurySystemObjects.push(mercuryMesh)
