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

export const getTube = (radius, tubeRadius, radialSeg, tubSeg, color, name, distanceFromAxis) => {
    const tubeGeometry = new THREE.TorusGeometry(radius, tubeRadius, radialSeg, tubSeg);
    const tubeMaterial = new THREE.MeshBasicMaterial({color, side: THREE.DoubleSide});
    const myTube = new THREE.Mesh(tubeGeometry, tubeMaterial);
    myTube.name = name;
    myTube.position.set(distanceFromAxis, 0, 0); // sets only x position from center
    myTube.rotation.x = Math.PI / 2
    // scene.add(myRing)
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

export const createTubeOrbit = (objDistance) => {
    
}

export const planetData = (orbitRate, rotationRate, sunDistance, name, texture, size, segments ) => {
    return {
        orbitRate, 
        rotationRate, 
        sunDistance, 
        name, 
        texture, 
        size, 
        segments, 
    }
};


// 






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