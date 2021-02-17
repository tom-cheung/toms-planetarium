import * as THREE from "/build/three.module.js";
import {ambientLight} from "../light/light.js"
import {resizeRenderer} from "../util.js"
import {profileCamera} from "../camera.js"

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

// modal 
const modal = document.getElementById("simpleModal"); 
const openModal = document.getElementById("instruction-button");
const closeModal = document.getElementsByClassName("closeBtn");

openModal.addEventListener("click", () => {
    modal.style.display = "block";
})

closeModal[0].addEventListener("click", () => {
    modal.style.display = "none";
})

window.addEventListener('click', (e) => {
    if(e.target === modal) {
        modal.style.display = "none"
    }
})


// test

// export const findHandler = (scene, camera, control) => {
        
//     // let buttons = document.getElementsByTagName("BUTTON");
//     let buttons = document.getElementsByClassName("planet-button");
    
//     for(let i = 0; i < buttons.length; i++) {
      
        
//         buttons[i].addEventListener("click", () => 
//         {
//             let obj = scene.getObjectByName(buttons[i].id)
//             // let profile = document.getElementsByClassName("planet-profile-inner")[0];
//             // let profileCanvas = document.getElementById("profile-canvas");
//             // let camObj = scene.getObjectByName(`${buttons[i].id}` + "Cam");

            
            
//             control.target = obj.position;
//             control.update();
//             camera.lookAt(obj.position); 
            
//             // profile.style.display = "block";
            
//             // const profileRenderer = new THREE.WebGLRenderer({profileCanvas});
//             // const profileScene = new THREE.Scene(); 
//             // profileScene.add(ambientLight);
//             // profileScene.add(obj.clone());

//             // console.log(profileCanvas)
//             // console.log(profileScene)

//             // const profileRender = (time) => {
//             //     // console.log('hi')
//             //     time *= 0.001; 

//             //     if(resizeRenderer(profileRenderer)) {
//             //         profileCamera.aspect = profileCanvas.clientWidth / profileCanvas.clientHeight;
//             //         profileCamera.updateProjectionMatrix();
//             //     } 

//             //     profileRenderer.render(profileScene, profileCamera);

//             //     requestAnimationFrame(profileRender);
//             // }

//             // requestAnimationFrame(profileRender)
            
            
//             // camObj.add(camera);
//             // camera.position.set(200, 200, 200)
//             // if(profile.style.display === "none" || profile.style.display === "") {
//             //     profile.style.display ="block";
//             // } else {
//             //     profile.style.display = "none";
//             // }
//         }
//         );
//     }
// } 