import * as THREE from "/build/three.module.js"
import { createMaterial, createLineMaterial } from './materials.js'

export const makePlanet = ( geometry, color, pos, scene ) => {
    const material = new THREE.MeshPhongMaterial({ // MeshPhongMaterial NEEDS lighting otherwise it's black 
        color: color,
        // wireframe: true, 
    });

    const planet = new THREE.Mesh(geometry, material);

    scene.add(planet)

    planet.position.x = pos; 

    return planet; 
}

export const makeSphere = ( geometry, color) => {
    const material = new THREE.MeshPhongMaterial({ // MeshPhongMaterial NEEDS lighting otherwise it's black 
        color: color,
        wireframe: true, 
    });

    const planet = new THREE.Mesh(geometry, material);

    return planet; 
}

export const addSolidGeometry = (x, y, geometry, add) => {
    const mesh = new THREE.Mesh(geometry, createMaterial());

    add(x, y, mesh); 
} 

export const addLineGeometry = (x, y, geometry, add) => {
    const mesh = new THREE.LineSegments(geometry, createLineMaterial());

    add(x, y, mesh);
}

export const axesHelper = (object) => {
    const axes = new THREE.AxesHelper(); 
    axes.material.depthTest = false; 
    axes.rendererOrder = 1; 
    object.add(axes)
}