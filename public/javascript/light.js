import * as THREE from "/build/three.module.js";


const lightColor = 0xfdfcf0;
const lightIntensity = 3;
const light = new THREE.PointLight(lightColor, lightIntensity)
// const light = new THREE.DirectionalLight(lightColor, lightIntensity);
// const light = new THREE.PointLight(lightColor, lightIntensity);
// light.position.set(-1, 2, 4);

export default light; 