// WINDOW

// console.log(window.innerHeight);
// console.log(window.innerWidth);

// SCREEN
// console.log(screen.width);
// console.log(screen.height);

// function Open() {
//     location.reload();
// }

// function Close() {
//     window.close();
// }



// keyup / keydown / keypress


// document.body.onkeyup = function(e) {
//     if(e.keyCode === 13) {
//         alert('You pressed Enter');
//     }
// }


// let btn = document.getElementById('btn');
// let text = document.getElementById('text');

// btn.onclick = function(e) {
//     console.log(e.target);
// }

// text.onclick = function(e) {
//     document.write(e.target.innerHTML)
// }


// let count = document.getElementById('count');
// let times = 0;

// document.body.onkeyup = function(e) {
//     if(e.keyCode === 32) {
//         document.body.style.backgroundColor = 'red'
//     }
// }

if(input.value != '' || input.value != null ) {
    
}

let elgiz = 0;
let box = document.getElementById('game');
document.body.onkeydown = function(e){

    if(e.keyCode === 39) {
        elgiz += 40;
       
        box.style.left = `${elgiz}px`;
    }
    
    if(e.keyCode === 40) {
        elgiz += 40;
       
        box.style.top = `${elgiz}px`;
    }
}