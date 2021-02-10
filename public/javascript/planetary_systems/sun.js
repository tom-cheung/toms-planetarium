import * as THREE from "/build/three.module.js"; 
import { getMaterial, makeSphere, createAxes} from "../util.js"

const sunMaterial = getMaterial("basic", "rgb(255, 255, 255)"); 
export const sunMesh = makeSphere(sunMaterial, 50, 32);
createAxes(sunMesh);

