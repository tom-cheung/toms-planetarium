import * as THREE from "/build/three.module.js";

export const earthTexture = new THREE.MeshPhongMaterial({
    map: new THREE.ImageUtils.loadTexture("../images/earth.jpg"), 
    color: 0xaaaaaa, 
    specular: 0x333333, 
    shininess: 25,  
})
