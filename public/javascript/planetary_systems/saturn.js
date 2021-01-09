import * as THREE from "/build/three.module.js";
import { sizer } from "../util.js"

export const saturnSystemObjects = []; 
export const saturnSystem = new THREE.Object3D; 
saturnSystem.name = "saturnSystem"
saturnSystemObjects.push(saturnSystem)

const saturnTexture = new THREE.TextureLoader().load("../../images/saturn.jpg")

const saturnRings = new THREE.TextureLoader().load("../../images/saturnrings.jpg")
const saturnMaterial = new THREE.MeshBasicMaterial({
    map: saturnTexture, 
}); 
const saturnGeometry = new THREE.SphereGeometry(362, 32, 32);
const saturnMesh = new THREE.Mesh(saturnGeometry, saturnMaterial);
saturnMesh.name = "saturn";
saturnSystem.add(saturnMesh);
saturnSystemObjects.push(saturnMesh)

for( let i = 0, innerRadius = 372, outerRadius = 402, thetaSeg = 32; i < 7; i++, innerRadius = outerRadius + 2, outerRadius += 42 ) {
    const ringGeometry = new THREE.RingBufferGeometry(innerRadius, outerRadius, thetaSeg)
    ringGeometry.thetaStart = 180
    const ringMaterial = new THREE.MeshPhongMaterial({
        map: saturnRings, 
        side: THREE.DoubleSide, 
        // shininess: 25,
        // emissive: 0xcc9900, 
        transparent: true, 
        opacity: .4, 
    })
    const ringMesh = new THREE.Mesh(ringGeometry, ringMaterial)
    ringMesh.name = "saturnRings"
    ringMesh.rotation.y = 1;
    saturnSystem.add(ringMesh);
    saturnSystemObjects.push(ringMesh)
}

const enceladusOrbit = new THREE.Object3D; 
enceladusOrbit.position.x = sizer(saturnMesh) * 5; 
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
titanOrbit.position.x = sizer(saturnMesh) * 10; 
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