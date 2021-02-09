// declaring variables 
const pointLight, sun, moon, earth, earthOrbit, ring, controls, scene, camera, renderer;

// segments for the planets/ sphere geometry 
const planetSegments = 48; 

// data for the earth. Looks like the first number is the days, maybe has to do with rotation
const earthData = ConstructPlanetData(365.2564, 0.015, 25, "earth", "img/earth.jpg", 1, planetSegments);

// data for the moon 
const moonData = constructPlanetData(29.5, 0.01, 2.8, "moon", "img/moon.jpg", 0.5, planetSegments);

// used for the orbit and rotation speeds 
const orbitData = {value: 200, runOrbit: true, runRotation: true}; 
const clock = new THREE.Clock()

// ConstructPlanetData function 

// constructions a POJO with all the planets data, reference for line 8 and 11 
const ConstructPlanetData = (myOrbitRate, myRotationRate, myDistancefromAxis, myName, myTexture, mySize, mySegments) => {
    return {
        orbitRate: myOrbitRate, 
        myRotationRate: myRotationRate, 
        myDistancefromAxis: myDistancefromAxis,
        myName: myName, 
        myTextuture: myTexture, 
        size: mySize, 
        segments: mySegments, 
    }
}

// makes the rings for the orbit? important thing to note is the rotation along the x axis   
const getRing = (size, innerDiameter, facets, myColor, myName, distanceFromAxis) => {
    const ring1Geometry = new THREE.RingGeometry(size, innerDiameter, facets, facets); // facets facters represents the radial and tubular segmenets, how round it looks  
    const ring1Material = new THREE.MeshBasicMaterial({color: myColor, side: THREE.DoubleSide});
    const myRing = new THREE.Mesh(ring1Geometry, ring1Material);
    myRing.name = myName; 
    myRing.position.set(distanceFromAxis, 0, 0); // sets the x axis distance from 
    myRing.rotation.x = Math.PI / 2; // this rotates it along the x axis, flips the ring so its horizontal along the x 
    scene.add(myRing);
    return myRing; 
}

// makes a different ring
const getTube = (size, innerDiameter, facets, myColor, myName, distanceFromAxis) => {
    const ringGeometry = new THREE.TorusGeometry(size, innerDiameter, facets, facets);
    const ringMaterial = new THREE.MeshBasicMaterial({color: myColor, side: THREE.DoubleSide});
    const myRing = new THREE.Mesh(ringGeometry, ringMaterial);
    myRing.name = myName;
    myRing.position.set(distanceFromAxis, 0, 0); // sets only x position from center
    myRing.rotation.x = Math.PI / 2
    scene.add(myRing)
    return myRing; 
}

const getMaterial = (type, color, myTexture) => {
    const materialOptions = {
        color: color === undefined ? 'rgb(255, 255, 255)' : color, 
        map: myTexture === undefined ? null : myTexture,
    };

    switch (type) {
        case 'basic':
            return new THREE.MeshBasicMaterial(materialOptions);
        case 'lambert':
            return new THREE.MeshLambertMaterial(materialOptions);
        case 'phong': 
            return new THREE.MeshPhongMaterial(materialOptions);
        case 'standard': 
            return new THREE.MeshStandardMaterial(materialOptions);
        default: 
            return new THREE.MeshBasicMaterial(materialOptions);
    }
}

const createVisibleOrbits = () => {
    const orbitWidth = 0.01; 
    earthOrbit = getRing(
        // creates a thin ring representing the orbit 
        earthData.distanceFromAxis + orbitWidth, 
            // from 0, 0, 0 you give it a radius of the distance from each planet to the sun 
            // this would create a ring with a circumference of that distance 
        earthData.distanceFromAxis - orbitWidth,
            // this would drop the inner ring by .1
        320, 
            // 320 segments, maybe more than you need 
        0xffffff,
            // color it white 
        0,
            // makes the center of the ring equal to the central axis, which makes sense... 
        )
}


// makes a sphere 
const getSphere = (material, size, segments) => {
    const geometry = new THREE.SphereGeometry(size, segments, segments);
    const obj = new THREE.Mesh(geometry, material); // material would likely be passing in the function up top 
    obj.castShadow = true; 

    return obj; 
}


// this creates the actual planet and adds it to the scene, positions it, and returns the planet object (mesh)  
const loadTexturedPlanet = (myData, x, y, z, myMaterialType) => { // my data maybe ConstructPlanetData function which returns a POJO
    const myMaterial; 
    const passThisTexture;

    if(myData.texture && myData.texture !== "") {
        passThisTexture = new THREE.ImageUtils.loadTexture(myData.texture); // grabs the texture from earthData 
    }

    if (myMaterialType) {
        myMaterial = getMaterial(myMaterialType, 'rgb(255, 255, 255)', passThisTexture);
    } else {
        myMaterial = getMaterial('lambert', 'rgb(255, 255, 255)', passThisTexture)
    } // default to this material if nothing is passed 

    myMaterial.receiveShadow = true; 
    myMaterial.castShadow = true; 
    const myPlanet = getSphere(myMaterial, myData.size, myData.segments) 
    myPlanet.receiveShadow = true; 
    myPlanet.name = myData.name;
    scene.add(myPlanet);
    myPlanet.position.set(x, y, z); 

    return myPlanet; 
}

const getPointLight = (intensity, color) => {
    const light = new THREE.PointLight(color, intensity);

    light.shadow.bias = 0.0001; 
    light.shadow.mapSize.width = 2048; 
    light.shadow.mapSize.height = 2048; 
    return light; 
}


// sets the rotation and the position of a mesh object, could be a planet or a moon 
const movePlanet = (myPlanet, myData, myTime, stopRotation) => {
    if(orbitData.orbitData.runRotation && !stopRotation) {
        myPlanet.rotation.y += myData.myRotationRate;
    }

    if(orbitData.runOrbit) {
        myPlanet.position.x = Math.cos(myTime * (1.0 / (myData.orbitRate * orbitData.value)) + 10.0) * myData.distanceFromAxis;
        myPlanet.position.z = Math.sin(myTime * (1.0 / (myData.orbitRate * orbitData.value)) + 10.0) * myData.distanceFromAxis;
    }
}


// sets the position of the moon relative to the position of the planet, 
// above, moon is defined with a distancefromaxis of a certain number but that number is the distance from the axis of the planet 
// this and move planet are called in the update function 
const moveMoon = (myMoon, myPlanet, myData, myTime) => {
    movePlanet(myMoon, myData, myTime);
        // myMoon is the actual moon mesh object, 
        // my data is the moonData, myTime is just the current time
        // movePlanet(moon, earth, moondata, time)
            // rotates the moon based on moondata 
            // sets a new position for the moon mesh object 
            // which is then taken and added to the planets position 
            // the result is set to the moons new position 
    if(orbitData.runOrbit) {
        // orbitData is just the orbitData const POJO from above, it has two boolean values 
        myMoon.position.x = myMoon.position.x + myPlanet.position.x; 
        myMoon.position.z = myMoon.position.z + myPlanet.position.z;
        // 
    }
}

const update = (renderer, scene, camera, controls) => {
    pointLight.position.copy(sun.position);
    controls.update(); 

    const time = Date.now(); 

    movePlanet(earth, earthData, time);
    movePlanet(ring, earthData, time, true);
    moveMoon(moon, earth, moonData,time);
        // the moon, earth you're passing in are the actual moon/earth mesh objects instantiated within init and set to the const declared above

    renderer.render(scene, camera);
    requestAnimationFrame(() => {
        update(renderer, scene, camera, controls)
    })
}

const init = () => {
    camera = new THREE.PerspectiveCamera(
        45, 
        window.innerWidth / window.innerHeight,
        1, 
        1000
    );
    camera.position.z = 30;
    camera.position.x = -30; 
    camera.position.y = 30; 
    camera.lookAt(new THREE.Vector3(0,0,0));

    scene = new THREE.Scene(); 

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    document.getElementById('webgl').appendChild(renderer.domElement); // renders canvas onto the dom 

    controls = new THREE.OrbitControls(camera, renderer.domElement); 

    const path = 'cubemap/';
    const format = '.jpg';
    const urls = [
        path + 'px' + format, path + 'nx' + format, 
        path = 'py' + format, path + 'ny' + format,
        path + 'pz' + format, path + 'nz' + format
    ]; 

    const reflectionCube = new THREE.CubeTextureLoader().load(urls);
    reflectionCube.format = THREE.RGBFormat; 

    scene.background = reflectionCube; 

    pointLight = getPointLight(1.5, "rgb(255, 220, 180)"); 
    scene.add(pointLight);

    var ambientLight = new THREE.AmbientLight(0xaaaaaa);
    scene.add(ambientLight); 

    // create the sun 
    const sunMaterial = getMaterial("basic", "rgb(255, 255, 255)"); // no texture 
    sun = getSphere(sunMaterial, 16, 48); // radius of 16, segments of 48 
    scene.add(sun);
    
    var spriteMaterial = new THREE.SpriteMaterial(
        {
            map: new THREE.ImageUtils.loadTexture("img/glow.png"),
            useScreenCoordinates: false, 
            color: 0xffffee, 
            transparent: false, 
            blending: THREE.AdditiveBlending, 
        });
    const sprite = new THREE.Sprite(spriteMaterial);
    sprite.scale.set(70, 70, 1.0);
    sun.add(sprite);
    
    // Create the Earth, the Moon and a ring around the earth (moon orbit?)
    earth = loadTexturedPlanet(earthData, earthData.distanceFromAxis, 0, 0);
        // passed to this function is earthData, a pojo containing key/value pairs of info for earth 
        // the distance from (0,0,0) from earthData, 
        // 0, 0 respectively for y and z coordinates 
        // the bulk of the info is in earthData. 
        // this returns a textured planet with it's position set (x, y, z)
    moon = loadTexturedPlanet(moonData, moonData.distanceFromAxis, 0, 0); 
        // passed to this function is moonData, a pojo with all the moon info, 
        // 
    ring = getTube(1.8, 0.05, 480, 0x757064, "ring", earthData.distanceFromAxis);
    
    //Create the visible orbit that the earth uses 
    createVisibleOrbits();

    // Create the GUI that displays controls
    const gui = new dat.GUI(); 
    const folder1 = gui.addFolder('light');
    folder1.add(pointLight, 'intensity', 0, 10);
    const folder2 = gui.addFolder('speed');
    folder2.add(orbitData, 'value', 0, 500);
    folder2.add(orbitData, 'runOrbit', 0, 1);
    folder2.add(orbitData, 'runRotation', 0, 1); 

    // start the animation
    update(renderer, scene, camera, controls)
}

init(); 



