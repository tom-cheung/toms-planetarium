import * as THREE from "/build/three.module.js";


const color = 0xFFFFFF; 
const intensity = 1; 
export const frontLight = new THREE.DirectionalLight(color, intensity); // shines towards a target 
frontLight.position.set(-1, -2, 4) // x, y, z coordinates 

export const backLight = new THREE.DirectionalLight(color, intensity);
backLight.position.set(1, -2, -4);

export const ambientLight = new THREE.AmbientLight(0xaaaaaa)

export const getPointLight = (intensity, color) => {
    const light = new THREE.PointLight(color, intensity);

    light.shadow.bias = 0.0001; 
    light.shadow.mapSize.width = 2048; 
    light.shadow.mapSize.height = 2048;

    return light; 
}

// const lightColor = 0xfdfcf0;
// const lightIntensity = 3;
// export const pointLight = new THREE.PointLight(lightColor, lightIntensity)

// export const ambientLight = new THREE.AmbientLight(lightColor, lightIntensity);

// const light = new THREE.DirectionalLight(lightColor, lightIntensity);
 