import * as THREE from "/build/three.module.js";
import { OrbitControls } from '/jsm/controls/OrbitControls.js';
import { frontLight, backLight, getPointLight, ambientLight } from '../light/light.js';
import { perspectiveCamera } from '../camera.js';
import { resizeRenderer, addObject, createMaterial, addSolidGeometry, createAxes, updateOrbit, starField} from '../util.js';
import {sunMesh} from "../planetary_systems/sun.js";

// planet import 
import {sky} from "../planetary_systems/skybox.js"
import {mercuryOrbit, mercury, mercuryData} from "../planetary_systems/mercury.js";
import {venusOrbit, venus, venusData} from "../planetary_systems/venus.js"
import {earthOrbit, earth, earthAtmosphere, earthData} from "../planetary_systems/earth.js";
import {marsOrbit, mars, marsData} from "../planetary_systems/mars.js"
import {jupiterOrbit, jupiter, jupiterData} from "../planetary_systems/jupiter.js";
import {saturnOrbit, saturn, saturnData} from "../planetary_systems/saturn.js";
import {uranusOrbit, uranus, uranusData} from "../planetary_systems/uranus.js";
import {neptuneOrbit, neptune, neptuneData} from "../planetary_systems/neptune.js"; 
import {plutoOrbit, pluto, plutoData} from "../planetary_systems/pluto.js";

const canvas = document.getElementById('main-canvas');
const renderer = new THREE.WebGLRenderer({canvas});

const scene = new THREE.Scene(); 

const orbitControl = new OrbitControls(perspectiveCamera, canvas);
orbitControl.maxDistance = 7000; 

scene.add(getPointLight(1.5, "rgb(255, 220, 180)"));
scene.add(ambientLight);

// orbits 
scene.add(sky); 
scene.add(sunMesh);
scene.add(mercuryOrbit, mercury);
scene.add(venusOrbit, venus);
scene.add(earthOrbit, earth, earthAtmosphere);
scene.add(marsOrbit, mars);
scene.add(jupiterOrbit, jupiter);
scene.add(saturnOrbit, saturn);
scene.add(uranusOrbit, uranus);
scene.add(neptuneOrbit, neptune);
scene.add(plutoOrbit, pluto);

const render = (time) => {
    time *= 0.001;

    if(resizeRenderer(renderer)) {
        perspectiveCamera.aspect = canvas.clientWidth / canvas.clientHeight;
        perspectiveCamera.updateProjectionMatrix();
    } 

    const timeNow = Date.now();

    updateOrbit(mercury, mercuryData, timeNow);
    updateOrbit(venus, venusData, timeNow);
    updateOrbit(earth, earthData, timeNow);
    updateOrbit(earthAtmosphere, earthData, timeNow);
    updateOrbit(mars, marsData, timeNow);
    updateOrbit(jupiter, jupiterData, timeNow);
    updateOrbit(saturn, saturnData, timeNow);
    updateOrbit(uranus, uranusData, timeNow);
    updateOrbit(neptune, neptuneData, timeNow);
    updateOrbit(pluto, plutoData, timeNow);


    // perspectiveCamera.lookAt(mercury.position);
    // mercury.add(perspectiveCamera);

    orbitControl.update();

    renderer.render(scene, perspectiveCamera);

    requestAnimationFrame(render); 
}

requestAnimationFrame(render);



// renderer.render(scene, perspectiveCamera);