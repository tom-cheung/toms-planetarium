import * as THREE from "/build/three.module.js";
import { sizer } from "../util.js"

export const jupiterSystemObjects = []; 
export const jupiterSystem = new THREE.Object3D; 
jupiterSystemObjects.push(jupiterSystem)

const jupiterMaterial = new THREE.MeshPhongMaterial({
    emissive: 0xf56942,
    shininess: 25,
}); 
const jupiterGeometry = new THREE.SphereGeometry(20, 32, 32);
const jupiterMesh = new THREE.Mesh(jupiterGeometry, jupiterMaterial);
jupiterSystem.add(jupiterMesh);
jupiterSystemObjects.push(jupiterMesh)

const europaOrbit = new THREE.Object3D; 
europaOrbit.position.x = sizer(jupiterMesh) * 2; 
jupiterSystem.add(europaOrbit)
jupiterSystemObjects.push(europaOrbit)

const europaMaterial = new THREE.MeshPhongMaterial({
    emissive: 0xf56942,
    shininess: 25,
});
const europaGeometry = new THREE.SphereGeometry(10, 32, 32); 
const europaMesh = new THREE.Mesh(europaGeometry, europaMaterial)
europaOrbit.add(europaMesh); 
jupiterSystemObjects.push(europaMesh)

const ganymedeOrbit = new THREE.Object3D; 
ganymedeOrbit.position.x = sizer(jupiterMesh) * 4; 
jupiterSystem.add(ganymedeOrbit)
jupiterSystemObjects.push(ganymedeOrbit)

const ganymedeMaterial = new THREE.MeshPhongMaterial({
    emissive: 0xf56942,
    shininess: 25,
});
const ganymedeGeometry = new THREE.SphereGeometry(10, 32, 32); 
const ganymedeMesh = new THREE.Mesh(ganymedeGeometry, ganymedeMaterial)
ganymedeOrbit.add(ganymedeMesh); 
jupiterSystemObjects.push(ganymedeMesh)

const callistoOrbit = new THREE.Object3D; 
callistoOrbit.position.x = sizer(jupiterMesh) * 6; 
jupiterSystem.add(callistoOrbit)
jupiterSystemObjects.push(callistoOrbit)

const callistoMaterial = new THREE.MeshPhongMaterial({
    emissive: 0xf56942,
    shininess: 25,
});
const callistoGeometry = new THREE.SphereGeometry(10, 32, 32); 
const callistoMesh = new THREE.Mesh(callistoGeometry, callistoMaterial)
callistoOrbit.add(callistoMesh); 
jupiterSystemObjects.push(callistoMesh)

const ioOrbit = new THREE.Object3D; 
ioOrbit.position.x = sizer(jupiterMesh) * 8; 
jupiterSystem.add(ioOrbit)
jupiterSystemObjects.push(ioOrbit)

const ioMaterial = new THREE.MeshPhongMaterial({
    emissive: 0xf56942,
    shininess: 25,
});
const ioGeometry = new THREE.SphereGeometry(10, 32, 32); 
const ioMesh = new THREE.Mesh(ioGeometry, ioMaterial)
ioOrbit.add(ioMesh); 
jupiterSystemObjects.push(ioMesh)


