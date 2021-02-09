import * as THREE from "/build/three.module.js";
import { OrbitControls } from '/jsm/controls/OrbitControls.js';
import { frontLight, backLight, getPointLight, ambientLight } from '../light/light.js';
import { perspectiveCamera } from '../camera.js';
import { resizeRenderer, addObject, createMaterial, addSolidGeometry, createAxes } from '../util.js';
import {sunMesh} from "../planetary_systems/sun.js";
import {earthOrbit, tubeOrbit} from "../planetary_systems/earth.js";

const canvas = document.getElementById('main-canvas');
const renderer = new THREE.WebGLRenderer({canvas});

const scene = new THREE.Scene(); 

const orbitControl = new OrbitControls(perspectiveCamera, canvas);

scene.add(getPointLight(1.5, "rgb(255, 220, 180)"));
scene.add(ambientLight);
scene.add(sunMesh);
scene.add(tubeOrbit);

const render = (time) => {
    time *= 0.001;

    if(resizeRenderer(renderer)) {
        perspectiveCamera.aspect = canvas.clientWidth / canvas.clientHeight;
        perspectiveCamera.updateProjectionMatrix();
    } 

    renderer.render(scene, perspectiveCamera);

    requestAnimationFrame(render); 
}

requestAnimationFrame(render);



// renderer.render(scene, perspectiveCamera);
