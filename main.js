let randomColor = () => "#" + Math.floor(Math.random()*16777215).toString(16);

let match;



function start() {
    /* let randomColor = () => "#" + Math.floor(Math.random()*16777215).toString(16); */
    let randomBox = document.getElementById("randomBox");
    randomBox.innerHTML = randomColor();
    
    match = Math.floor(Math.random()*4);
    
    let boxes = document.getElementsByClassName("box");
    for (let i=0; i < boxes.length; i++){
        boxes[i].style.backgroundColor = i == match ? randomBox.innerHTML: randomColor();

    }

};

function compareColorCode(x){
console.log(x,match)
    if( x === match+1){
        alert("You're the Greatest");
    } else {
        randomBox.innerHTML ="Try again";
    }
};



function clearAll() {
    window.location.reload()
}
    
