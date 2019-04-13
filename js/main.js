// motivational sentence parts
const startMot = ['Think about being most of the time', 'Try to be', 'Take a step back and be', 'Without fear you will be', 'Think of yourself as a person who is'];
const midMot = ['on time', 'curious about life', 'openminded', 'satisfied with what you have', 'enthusiastic', 'calm and relaxed', 'beautiful', 'attractive', 'a fish'];
const endMot = ['because it is a good virtue.', 'that\ can make things awesome.', 'but not too much because that can hurt.', 'that has the power to change your life.', 'wouldn\'t that be awesome?'];

//fact sentence parts
const startFct = ['Drinking pineapple juice', 'Solving the rubiks cube 10 times a day', 'Barking like a dog', 'Imagining to be able to fly'];
const midFct = ['will make your legs longer', 'gives you a lasting boost of happiness', 'makes people around you scared', 'will lead you to financial success'];
const endFct =['so you can jump even higher!', 'so you will live a fulfilled life!', 'which can make you lose your teeth very fast.', 'which was proven by a recent study from Stanford.'];

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

// Delete previous quotes before outputting new ones
function clear() {
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
}

// generateQuotesLoop
function generate(clickedBtn) {
    for(i = 0; i < howMany; i++) {
        let curQuote;
        if (clickedBtn=== 'factBtn') {
            curQuote = generateFct();
        } else if (clickedBtn === 'motBtn') {
            curQuote = generateMot();
        }
        const quoteElmt = document.createElement('p');
        quoteElmt.className = 'rounded p-3 shadow-sm';
        quoteElmt.innerText = curQuote;
        list.appendChild(quoteElmt);
    }
}

// handler to generate quotes
function onClick(e){
    clear();
    // find out which (fact or motivational) button was clicked
    let btnClicked = e.target.id;
    generate(btnClicked);
}

document.querySelector('.clearBtn').firstElementChild.addEventListener('click', function() {
    clear();
})