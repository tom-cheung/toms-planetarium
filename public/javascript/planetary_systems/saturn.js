import * as THREE from "/build/three.module.js";
import { getTube, createPlanet } from "../util.js"


export const saturnData = {
    orbit: -1058.5, 
    rotation: .033, 
    distance: 1200, 
    name: 'jupiter',
    texture: "../../images/saturnmap.jpg", 
    ringTexture: "../../images/saturnringcolor.jpg",
    size: 28, 
    segments: 32, 
}

export const saturnOrbit = getTube(1200, "planet", 50, 50, 0xebc334, "saturnOrbit", 0);
export const saturn = createPlanet(saturnData, saturnData.distance, 0, 0, "phong");

const ringTexture = new THREE.TextureLoader().load(saturnData.ringTexture);
const ringsGeometry = new THREE.TorusGeometry(saturnData.size + 1, Math.random() * .1, 2, 50);
const ringsMaterial = new THREE.MeshBasicMaterial({
    side: THREE.DoubleSide, 
    map: ringTexture, 
    // transparent: true, 
    // opacity: .1, 
})
export const saturnRings = new THREE.Mesh(ringsGeometry, ringsMaterial);
saturnRings.name = "saturn rings";
saturnRings.rotation.x = Math.PI / 2;
saturnRings.position.x = saturnData.distance
// saturn.add(saturnRings);

export const saturnsRingsArr = []; 
const colors = [0xe6ac00, 0xb38600, 0x666699, 0x336600, 0xe6e6e6, 0xcc9900]

for(let i = 0; i < 300; i++) {
    let distance; 
    if(saturnsRingsArr.length < 200) {
        distance = 5; 
    } else {
        distance = 7;
    }
    let ringGeometry = new THREE.TorusGeometry((saturnData.size + distance) + (i * .1), Math.random() * .1, 2, 50)
    let ringMaterial = new THREE.MeshBasicMaterial({
        side: THREE.DoubleSide, 
        transparent: true, 
        opacity: .4,
        color: colors[Math.floor(Math.random() * colors.length)],
    });
    let ring = new THREE.Mesh(ringGeometry, ringMaterial);
    ring.rotation.x = Math.PI / 2; 
    // ring.position.x = saturnData.distance;
    // saturnsRingsArr.push(ring);
    saturn.add(ring)
}





// export const saturnSystemObjects = []; 
// export const saturnSystem = new THREE.Object3D; 
// saturnSystem.name = "saturnSystem"
// saturnSystemObjects.push(saturnSystem)

// const saturnTexture = new THREE.TextureLoader().load("../../images/saturn.jpg")

// const saturnRings = new THREE.TextureLoader().load("../../images/saturnrings.jpg")
// const saturnMaterial = new THREE.MeshBasicMaterial({
//     map: saturnTexture, 
// }); 
// const saturnGeometry = new THREE.SphereGeometry(362, 32, 32);
// const saturnMesh = new THREE.Mesh(saturnGeometry, saturnMaterial);
// saturnMesh.name = "saturn";
// saturnSystem.add(saturnMesh);
// saturnSystemObjects.push(saturnMesh)

// for( let i = 0, innerRadius = 372, outerRadius = 402, thetaSeg = 32; i < 7; i++, innerRadius = outerRadius + 2, outerRadius += 42 ) {
//     const ringGeometry = new THREE.RingBufferGeometry(innerRadius, outerRadius, thetaSeg)
//     ringGeometry.thetaStart = 180
//     const ringMaterial = new THREE.MeshPhongMaterial({
//         map: saturnRings, 
//         side: THREE.DoubleSide, 
//         // shininess: 25,
//         // emissive: 0xcc9900, 
//         transparent: true, 
//         opacity: .4, 
//     })
//     const ringMesh = new THREE.Mesh(ringGeometry, ringMaterial)
//     ringMesh.name = "saturnRings"
//     ringMesh.rotation.y = 1;
//     saturnSystem.add(ringMesh);
//     saturnSystemObjects.push(ringMesh)
// }

// const enceladusOrbit = new THREE.Object3D; 
// enceladusOrbit.position.x = sizer(saturnMesh) * 5; 
// saturnSystem.add(enceladusOrbit)
// saturnSystemObjects.push(enceladusOrbit)

// const enceladusMaterial = new THREE.MeshPhongMaterial({
//     emissive: 0xf56942,
//     shininess: 25,
// });
// const enceladusGeometry = new THREE.SphereGeometry(10, 32, 32); 
// const enceladusMesh = new THREE.Mesh(enceladusGeometry, enceladusMaterial)
// enceladusOrbit.add(enceladusMesh); 
// saturnSystemObjects.push(enceladusMesh)

// const titanOrbit = new THREE.Object3D; 
// titanOrbit.position.x = sizer(saturnMesh) * 10; 
// saturnSystem.add(titanOrbit)
// saturnSystemObjects.push(titanOrbit)

// const titanMaterial = new THREE.MeshPhongMaterial({
//     emissive: 0xf56942,
//     shininess: 25,
// });
// const titanGeometry = new THREE.SphereGeometry(10, 32, 32); 
// const titanMesh = new THREE.Mesh(titanGeometry, titanMaterial)
// titanOrbit.add(titanMesh); 
// saturnSystemObjects.push(titanMesh)