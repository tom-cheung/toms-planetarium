import * as THREE from "/build/three.module.js";
import {starField} from "../util.js";

const skySphere = new THREE.SphereGeometry(7500, 32, 32);
// const skyBox = new THREE.BoxGeometry(120, 120, 120);
const skyBoxMaterial = new THREE.MeshBasicMaterial({
    map: starField(3000, 10000, 10000),
    side: THREE.DoubleSide, 
})
export const sky = new THREE.Mesh(skySphere, skyBoxMaterial);
