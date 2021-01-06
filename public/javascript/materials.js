import * as THREE from "/build/three.module.js";

export const createMaterial = () => {
    const material = new THREE.MeshPhongMaterial({
        side: THREE.DoubleSide, 
        // wireframe: true, 
        // double sided color. if viewing a sphere, cube, etc., there's no reason to color both sides unless you want the user to be inside one of them. like in my case 
        // but things like ShapeBufferGeometry are 2d and if you dont use DoubleSide then only one side would be colored 
    }); 

    const hue = Math.random(); // hue range is 0 to 1, red at 0, green at .33, blue at .66,  
    const saturation = 1; // range from 0 to 1, with 0 having no color and 1 being most saturated with color
    const luminance = .5; // ranges from 0 to 1 with 0 being black and 1 being white and .5 being the maximum amount of color 
    material.color.setHSL(hue, saturation, luminance)

    return material; 
}

export const createLineMaterial = () => {
    const material = new THREE.LineBasicMaterial({color: 0xFFFFFF}); 
    return material; 
}