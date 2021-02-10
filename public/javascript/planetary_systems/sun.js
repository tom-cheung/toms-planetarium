import * as THREE from "/build/three.module.js"; 
import { getMaterial, makeSphere, createAxes} from "../util.js"

export const sunData = {
    orbit: 0, 
    rotation: .020, 
    distance: 0, 
    name: 'sun',
    texture: "../../images/sunmap.jpg", 
    size: 75, 
    segments: 32, 
}
const sunTexture = new THREE.TextureLoader().load(sunData.texture);
const sunMaterial = getMaterial("basic", "rgb(255, 255, 255)", sunTexture); 
export const sun = makeSphere(sunMaterial, 75, 32);
sun.name = sunData.name; 
createAxes(sun);

