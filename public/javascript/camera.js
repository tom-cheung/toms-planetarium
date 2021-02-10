import * as THREE from "/build/three.module.js"

const fov = 40; // 75 vertical 
const aspect = 2; 
const near = 0.1; // 0.1 from the start of the camera position 
const far = 100000; // up to 5 units from the start of the camera position
export const perspectiveCamera = new THREE.PerspectiveCamera(fov, aspect, near, far);
perspectiveCamera.position.z = 2750;
perspectiveCamera.position.y = 2750;
perspectiveCamera.position.x = 2750;
perspectiveCamera.lookAt(new THREE.Vector3(0,0,0)); // looks at this point in space. 



// const fov = 45; // vertical view 
// const aspect = 2; // default for the canvas 
// const near = .1; 
// const far = 1000000; 
// const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
// camera.position.z = 200; 
// camera.position.set(0, 5000, 0); 
// camera.up.set(0, 0, 1); 
// camera.lookAt(0, 0, 0)


// when picturing the camera picture a 3d object (a frustrum) as the view
// the camera points towards the -z axis (axis running across the x axis with the +y axis above)
// anything within the near and far of the frustum is rendered, anything outside of it is not 


// export default camera; 