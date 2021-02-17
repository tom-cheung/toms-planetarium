# Tom's Planetarium 

Inspired by a clear star filled night sky, [Tom's Planetarium](https://tomsplanetarium.herokuapp.com/) aims to show some of the beauty found in our solar system. Leveraging the three.js library this application renders each planet and the sun as 3D objects. Each planet orbits around the sun and has it's own rotation.

<img src="./public/images/previewgif.gif" alt="./public/backimg/preview.png" width="852" height="480">

## Technologies Utilized 

* JavaScript 
* Three.js 
* Express
* HTML
* CSS 

## Key Features 

### Creating the rings of Saturn 

To best imitate the rings of Saturn, individual 3D ring objects were created. Their position were then set to that of Saturn's, while the radius of each ring was incremented so that each would encircle the planet. An array of colors was used randomly color each ring. The movement of the rings were set to match that of the movement of Saturn.   

```javascript
export const saturnsRingsArr = []; 
const colors = [0xe6ac00, 0xb38600, 0x666699, 0x336600, 0xe6e6e6, 0xcc9900]

for(let i = 0; i < 300; i++) {
    let distance; 
    if(saturnsRingsArr.length < 200) {
        distance = 5; 
    } else {
        distance = 7;
    }
    let ringGeometry = new THREE.TorusGeometry((saturnData.size + distance) + (i * .1), Math.random() * .1, 2, 50)
    let ringMaterial = new THREE.MeshBasicMaterial({
        side: THREE.DoubleSide, 
        transparent: true, 
        opacity: .4,
        color: colors[Math.floor(Math.random() * colors.length)],
    });
    let ring = new THREE.Mesh(ringGeometry, ringMaterial);
    ring.rotation.x = Math.PI / 2; 
    saturn.add(ring)
}
```

### User interaction with planets 

To allow users to interact with the 3D renderings of the planets, event listeners were added to images of each planet. A function was written to retrieve each planet image and a `click` event listener was applied to each. Upon clicking the picture of a planet an event handler would be triggered which would change the focus of the Three.js camera and controls. This allows users to zoom into a particular planet.   

```javascript 
// retrieve the elements with the class "planet-button" and add event listeners to each. 
export const findHandler = (scene, camera, control) => {
    let buttons = document.getElementsByClassName("planet-button");
    
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", () => 
        {
            let obj = scene.getObjectByName(buttons[i].id)  
            control.target = obj.position;
            control.update();
            camera.lookAt(obj.position); 
        }
        );
    }
}
```
   

