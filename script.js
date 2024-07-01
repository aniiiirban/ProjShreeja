
const noButton = document.getElementById('b2');
const yesButton= document.getElementById('b1')

function getRandomPosition(max) {
    return Math.floor(Math.random() * max);
}

function moveButton(button) {
    const top = getRandomPosition(window.innerHeight - button.offsetHeight);
    const left = getRandomPosition(window.innerWidth - button.offsetWidth);
    button.style.position = 'absolute';
    button.style.top = `${top}px`;
    button.style.left = `${left}px`;
}


noButton.addEventListener('mouseover', function() {
    moveButton(noButton);
});

yesButton.addEventListener('click', function(){
    // window.open(filename, '_blank');
    alert("you clicked");
});

// document.addEventListener("DOMContentLoaded", function() {
    const quad1 = document.getElementById('q1');
    const quad2 = document.getElementById("q2");
    const quad3 = document.getElementById("q3");
    const quad4 = document.getElementById("q4");

    quad1.addEventListener('click', function(){
        alert("You clicked Quadrant 1!");
    });

    quad2.addEventListener("click", function() {
        alert("You clicked Quadrant 2!");
    });

    quad3.addEventListener("click", function() {
        alert("You clicked Quadrant 3!");
    });

    quad4.addEventListener("click", function() {
        alert("You clicked Quadrant 4!");
    });

    
    




// commitment, love is easy, relationship is hard 
// in the end you WILL have to choose the hard with someone, 
// the question is, do you choose me?