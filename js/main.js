// motivational sentence parts
const startMot = ['A successful person is', 'Try to be', 'Just take a step back and be', 'Without fear you will be'];
const midMot = ['on time', 'curious about life', 'openminded', 'satisfied with what you have', 'enthusiastic', 'calm and relaxed'];
const endMot = ['because it is a good virtue.', 'that\'s what makes things beautiful.', 'but not too much because that can be harmful.', 'that has the power to change lifes.'];

//fact sentence parts
const startFct = ['Drinking pineapple juice', 'Solving the rubiks cube 10 times a day', 'Barking like a dog'];
const midFct = ['will make your legs longer', 'gives you a lasting boost of happiness', 'makes people around you scared'];
const endFct =['so you can jump even higher!', 'so you will live a fulfilled life!', 'which can make you lose your teeth very fast.'];

// to store how many quotes the user wants to be generated
let howMany = 1;

// get div which holds the generated quotes
const list = document.querySelector('.quoteOutput');

//event delegation for the toggle buttons
document.body.addEventListener('click', onNumClick);

function onNumClick(e){
    if(e.target.classList.contains('eventDel')){
        howMany = e.target.innerText;
        howMany = parseInt(howMany);
    }
}

// generate random motivational quotes function
function generateMot() {
    let numMotStart = Math.floor(Math.random() * startMot.length);
    let numMotMid = Math.floor(Math.random() * midMot.length);
    let numMotEnd = Math.floor(Math.random() * endMot.length);

    let motOutput = startMot[numMotStart] + ' ' + midMot[numMotMid] + ', ' + endMot[numMotEnd];
    return motOutput;
}

// generate random facts function
function generateFct() {
    let numFctStart = Math.floor(Math.random() * startFct.length);
    let numFctMid = Math.floor(Math.random() * midFct.length);
    let numFctEnd = Math.floor(Math.random() * endFct.length);

    let fctOutput = startFct[numFctStart] + ' ' + midFct[numFctMid] + ', ' + endFct[numFctEnd];
    return fctOutput;
}


// gets generate-quotes buttons and adds event listeners
document.querySelector('#factBtn').addEventListener('click', onClick);
document.querySelector('#motBtn').addEventListener('click', onClick);


// handler to generate quotes
function onClick(e){
    // Delete previous quotes before outputting new ones
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
    // find out which (fact or motivational) button was clicked
    let btnClicked = e.target.id;
    if (btnClicked === 'factBtn') {
        // generate that many fact quotes
        for(i = 0; i < howMany; i++) {
            let curQuote = generateFct();
            const quoteElmt = document.createElement('p');
            quoteElmt.className = 'rounded p-3 shadow-sm';
            quoteElmt.innerText = curQuote;
            list.appendChild(quoteElmt);
        }
    } else if (btnClicked === 'motBtn'){
        // generate that many fact quotes
        for(i = 0; i < howMany; i++) {
            let curQuote = generateMot();
            const quoteElmt = document.createElement('p');
            quoteElmt.className = 'rounded p-3 shadow-sm';
            quoteElmt.innerText = curQuote;
            list.appendChild(quoteElmt);
        }
    }
}