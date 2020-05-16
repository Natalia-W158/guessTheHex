

function start() {
    let randomColor = () => "#" + Math.floor(Math.random()*16777215).toString(16);
    let randomBox = document.getElementById("randomBox");
    randomBox.innerHTML = randomColor();
    

    let boxes = document.getElementsByClassName("box");
    for (let box of boxes){
        box.style.backgroundColor = randomColor();
    }

}

function compareColorCode(x){
    let randomColor = () => "#" + Math.floor(Math.random()*16777215).toString(16);
    if( x === randomColor()){
        randomBox.innerHTML= "You're the Greatest";
    } else {
        randomBox.innerHTML ="Try again";
    }
    
}



function clearAll() {
    window.location.reload()
}
    
