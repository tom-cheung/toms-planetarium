import * as THREE from "/build/three.module.js";
import { sizer } from "../util.js"

export const saturnSystemObjects = []; 
export const saturnSystem = new THREE.Object3D; 
saturnSystemObjects.push(saturnSystem)

const saturnMaterial = new THREE.MeshPhongMaterial({
    emissive: 0xf56942,
    shininess: 25,
}); 
const saturnGeometry = new THREE.SphereGeometry(20, 32, 32);
const saturnMesh = new THREE.Mesh(saturnGeometry, saturnMaterial);
saturnSystem.add(saturnMesh);
saturnSystemObjects.push(saturnMesh)

const enceladusOrbit = new THREE.Object3D; 
enceladusOrbit.position.x = sizer(saturnMesh) * 2; 
saturnSystem.add(enceladusOrbit)
saturnSystemObjects.push(enceladusOrbit)

const enceladusMaterial = new THREE.MeshPhongMaterial({
    emissive: 0xf56942,
    shininess: 25,
});
const enceladusGeometry = new THREE.SphereGeometry(10, 32, 32); 
const enceladusMesh = new THREE.Mesh(enceladusGeometry, enceladusMaterial)
enceladusOrbit.add(enceladusMesh); 
saturnSystemObjects.push(enceladusMesh)

const titanOrbit = new THREE.Object3D; 
titanOrbit.position.x = sizer(saturnMesh) * 4; 
saturnSystem.add(titanOrbit)
saturnSystemObjects.push(titanOrbit)

const titanMaterial = new THREE.MeshPhongMaterial({
    emissive: 0xf56942,
    shininess: 25,
});
const titanGeometry = new THREE.SphereGeometry(10, 32, 32); 
const titanMesh = new THREE.Mesh(titanGeometry, titanMaterial)
titanOrbit.add(titanMesh); 
saturnSystemObjects.push(titanMesh)