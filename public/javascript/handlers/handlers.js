

export const findHandler = (scene, camera, control) => {
        
    let buttons = document.getElementsByTagName("BUTTON");
    
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