const CUBE = document.querySelector('.cube');

let currentRotateX = -20;
let currentRotateY = 20;
let startX, startY;

CUBE.onmousedown = function(event) {
    startX = event.pageX;
    startY = event.pageY;

    function onMouseMove(event) {

        let deltaX = event.pageX - startX;
        let deltaY = event.pageY - startY;

        let newRotateX = currentRotateX - deltaY * 0.5;
        let newRotateY = currentRotateY + deltaX * 0.5;
        
        CUBE.style.transform = `rotateX(${newRotateX}deg) rotateY(${newRotateY}deg)`;
    }

    function onMouseUp(event) {

        let deltaX = event.pageX - startX;
        let deltaY = event.pageY - startY;
        
        currentRotateX -= deltaY * 0.5;
        currentRotateY += deltaX * 0.5;

        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
};