console.log('hello to js dom events')


// option 02 - add onclick function
function makeRed(){
    document.body.style.backgroundColor='red';
}


// 0ption 03
const makeBlueButton = document.getElementById('make-blue');
        makeBlueButton.onclick = makeBlue;
        // console.log(makeBlueButton);
        function makeBlue(){
            document.body.style.backgroundColor = 'blue';}

// another 03.01
// const purpleButton = document.getElementById('make-purple');
        // console.log(purpleButton);
        const purpleButton = document.getElementById('make-purple');
        purpleButton.onclick = function makePurple(){
            document.body.style.backgroundColor = 'purple';
        }