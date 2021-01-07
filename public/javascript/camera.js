import * as THREE from "/build/three.module.js"

const fov = 45; // vertical view 
const aspect = 2; // default for the canvas 
const near = .1; 
const far = 10000; 
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
// camera.position.z = 200; 
camera.position.set(0, 5000, 0); 
camera.up.set(0, 0, 1); 
camera.lookAt(0, 0, 0)


// when picturing the camera picture a 3d object (a frustrum) as the view
// the camera points towards the -z axis (axis running across the x axis with the +y axis above)
// anything within the near and far of the frustum is rendered, anything outside of it is not 


export default camera; 