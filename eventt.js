console.log('hello to js dom events')
// option 01 directly set on the html element
// butttom onclick='console.log(67)'>Another button</button.

// option 02 - add onclick function
// <button onclick="makeRed()">Make Red</button>
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


// option 4
const pinkButton = document.getElementById('make-pink');
        // console.log(pinkButton);
        pinkButton.addEventListener('click', makePink)

        function makePink(){
            document.body.style.backgroundColor = 'pink';
        }

// option 04.01
const makeOliveButton = document.getElementById('make-olive');
        makeOliveButton.addEventListener('click', function makeOlive(){
            document.body.style.backgroundColor = 'olive';
        })

// option 04 final eta use korbo

document.getElementById('make-goldenRod').addEventListener('click',function(){
    document.body.style.backgroundColor = 'goldenRod';
})

