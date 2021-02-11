import * as THREE from "/build/three.module.js"

export const resizeRenderer = (renderer) => {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth; 
    const height = canvas.clientHeight; 
    const needResize = canvas.width !== width || canvas.height !== height; 
    if (needResize) {
        renderer.setSize(width, height, false);
    }
    return needResize; 
}

export const addObject = (x, y, obj, scene, objects) => {
    let spread = 15; 

    obj.position.x = x * spread;
    obj.position.y = y * spread; 
    scene.add(obj);
    objects.push(obj);
}

export const createMaterial = () => {
    const material = new THREE.MeshPhongMaterial({
        side: THREE.DoubleSide,
    });

    const hue = Math.random(); // hue ranges from 0 to 1, Math.random() returns a random value from 0 to 1 
    const saturdation = 1;
    const luminance = .5; 
    material.color.setHSL(hue, saturdation, luminance);
    return material; 
}

export const addSolidGeometry = (x, y, geometry, scene, objects) => {
    const mesh = new THREE.Mesh(geometry, createMaterial());
    addObject(x, y, mesh, scene, objects)
}

export const addLineGeometry = (x, y, geometry) => {
    const material = new THREE.LineBasicMaterial({color: 0x000000});
    const mesh = new THREE.LineSegments(geometry, material);
    addObject(x, y, mesh);
}

export const makeSphere = (material, size, segments) => {
    const geometry = new THREE.SphereGeometry(size, segments, segments); 
    const obj = new THREE.Mesh(geometry, material);
    obj.castShadow = true; 
    return obj; 
}

export const getMaterial = (type, color, myTexture) => {
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

export const getTube = (radius, type, radialSeg, tubSeg, color, name, distanceFromAxis, ringTexture) => {

    let tubeRadius, texture; 

    if(type === "planet") {
        tubeRadius = 1.5; 
    } 

    if(type === "rings") {
        tubeRadius = 20; 
        texture = new THREE.TextureLoader().load(ringTexture);
    }
    const tubeGeometry = new THREE.TorusGeometry(radius, tubeRadius, radialSeg, tubSeg);
    const tubeMaterial = new THREE.MeshBasicMaterial({color, side: THREE.DoubleSide, map: texture === undefined ? null : texture});
    const myTube = new THREE.Mesh(tubeGeometry, tubeMaterial);
    myTube.name = name;
    myTube.position.set(distanceFromAxis, 0, 0); // sets only x position from center
    myTube.rotation.x = Math.PI / 2
    return myTube; 
}

const getRing = (innerRadius, outerRadius, facets, myColor, myName, distanceFromAxis) => {
    const ringGeometry = new THREE.RingGeometry(innerRadius, outerRadius, facets, facets); // facets facters represents the radial and tubular segmenets, how round it looks  
    const ringMaterial = new THREE.MeshBasicMaterial({color: myColor, side: THREE.DoubleSide});
    const myRing = new THREE.Mesh(ringGeometry, ringMaterial);
    myRing.name = myName; 
    myRing.position.set(distanceFromAxis, 0, 0); // sets the x axis distance from 
    myRing.rotation.x = Math.PI / 2; // this rotates it along the x axis, flips the ring so its horizontal along the x 
    // scene.add(myRing);
    return myRing; 
}

export const createAxes = (obj) => {
    const axes = new THREE.AxesHelper();
    axes.material.depthTest = false; 
    axes.renderOrder = 1; 
    obj.add(axes)
}

export const createRingOrbit = (objDistance) => {
    const orbitWidth = .1; 
    const earthOrbit = getRing(
        objDistance - orbitWidth, // 25.01
        objDistance + orbitWidth, // 24.99
        32, 
        0xffffff,
        'earthOrbit',
        0, 
        )
    return earthOrbit
}

export const createPlanet = (planetData, x, y, z, material ) => {

    let planetMaterial, planetTexture; 

    if(planetData.texture && planetData.texture !== "") {
        planetTexture = new THREE.TextureLoader().load(planetData.texture); // grabs the texture from earthData 
    }

    if (material) {
        planetMaterial = getMaterial(material, 'rgb(255, 255, 255)', planetTexture);
    } else {
        planetMaterial = getMaterial('lambert', 'rgb(255, 255, 255)', planetTexture)
    } // default to this material if nothing is passed 

    planetMaterial.receiveShadow = true; 
    planetMaterial.castShadow = true; 
    const newPlanet = makeSphere(planetMaterial, planetData.size, planetData.segments) 
    newPlanet.receiveShadow = true; 
    newPlanet.name = planetData.name;
    newPlanet.position.set(x, y, z); 
    return newPlanet;
    
    // scene.add(myPlanet);
}

export const updateOrbit = (planet, planetData, time, stopRotate) => {

    let rotation; 
    if(stopRotate === undefined) {
        rotation = planetData.rotation; 
    } else {
        rotation = 0; 
    }
    
    planet.rotation.y += rotation; 

    planet.position.x = Math.cos(time * (1.0 / (planetData.orbit * 200)) + 10.0) * planetData.distance
    planet.position.z = Math.sin(time * (1.0 / (planetData.orbit * 200)) + 10.0) * planetData.distance
}

export const starField = (numStars, width, height) => {
    const canvas = document.createElement('CANVAS');

    canvas.width = width; 
    canvas.height = height; 

    const ctx = canvas.getContext('2d'); 

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, width, height); 

    for(let i = 0; i < numStars; i++) {
        const radius = Math.random() * 2; 
        const x = Math.floor(Math.random() * width);
        const y = Math.floor(Math.random() * height);

        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = 'white';
        ctx.fill();
    }

    const texture = new THREE.Texture(canvas);
    texture.needsUpdate = true; 
    return texture; 
}







// export const makePlanet = ( geometry, color, pos, scene ) => {
//     const material = new THREE.MeshPhongMaterial({ // MeshPhongMaterial NEEDS lighting otherwise it's black 
//         color: color,
//         // wireframe: true, 
//     });

//     const planet = new THREE.Mesh(geometry, material);

//     scene.add(planet)

//     planet.position.x = pos; 

//     return planet; 
// }

// export const makeSphere = ( geometry, color) => {
//     const material = new THREE.MeshPhongMaterial({ // MeshPhongMaterial NEEDS lighting otherwise it's black 
//         color: color,
//         wireframe: true, 
//     });

//     const planet = new THREE.Mesh(geometry, material);

//     return planet; 
// }

// export const addSolidGeometry = (x, y, geometry, add) => {
//     const mesh = new THREE.Mesh(geometry, createMaterial());

//     add(x, y, mesh); 
// } 

// export const addLineGeometry = (x, y, geometry, add) => {
//     const mesh = new THREE.LineSegments(geometry, createLineMaterial());

//     add(x, y, mesh);
// }

// export const axesHelper = (object) => {
//     const axes = new THREE.AxesHelper(); 
//     axes.material.depthTest = false; 
//     axes.rendererOrder = 1; 
//     object.add(axes)
// }

// export const sizer = (mesh) => {
//     const boundingBox = new THREE.Box3().setFromObject(mesh);
//     const size = boundingBox.getSize().x/2
//     return size; 
// }

// export const getSize = (object) => {
//     const boundingBox = new THREE.Box3().setFromObject(object);
//     const size = boundingBox.getSize()
//     return size;
// }