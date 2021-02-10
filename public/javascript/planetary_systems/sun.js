import * as THREE from "/build/three.module.js"; 
import { getMaterial, makeSphere, createAxes} from "../util.js"

const sunTexture = new THREE.TextureLoader().load("../../images/sunmap.jpg");
const sunMaterial = getMaterial("basic", "rgb(255, 255, 255)", sunTexture); 
export const sunMesh = makeSphere(sunMaterial, 75, 32);
createAxes(sunMesh);

