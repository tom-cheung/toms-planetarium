import * as THREE from "/build/three.module.js";


const lightColor = 0xfdfcf0;
const lightIntensity = 3;
export const pointLight = new THREE.PointLight(lightColor, lightIntensity)

export const ambientLight = new THREE.AmbientLight(lightColor, lightIntensity);

// const light = new THREE.DirectionalLight(lightColor, lightIntensity);
 