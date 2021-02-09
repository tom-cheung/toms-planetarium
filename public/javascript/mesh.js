import * as THREE from "/build/three.module.js";

const boxWidth = 1;
const boxHeight = 1;
const boxDepth = 1;
const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

const material = new THREE.MeshPhongMaterial({color: 0x44aa88});  // greenish blue

export const cube = new THREE.Mesh(geometry, material);


export const makeSphere = (radius, width, height, color, position, scene) => {
    const geometry = new THREE.SphereGeometry(radius, width, height);
    const material = new THREE.MeshPhongMaterial({color: color});
    const sphere = new THREE.Mesh(geometry, material);
    sphere.position.x = position;
    scene.add(sphere);
    return sphere;
}