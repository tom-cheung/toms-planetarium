import * as THREE from "/build/three.module.js";


const sphereRadius = 5;
const sphereWidthSeg = 32;
const sphereHeightSeg = 32;
export const sphere = new THREE.SphereGeometry(sphereRadius, sphereWidthSeg, sphereHeightSeg); // the shape of the object 


const cubeWidth = 8;
const cubeHeight = 8;
const cubeDepth = 8;
export const cube = new THREE.BoxBufferGeometry(cubeWidth, cubeHeight, cubeDepth);
