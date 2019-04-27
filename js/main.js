// motivational sentence parts
const startMotArr = ['Think about being most of the time', 'Try to be', 'Take a step back and be', 'Without fear you will be', 'Think of yourself as a person who is', 'I am sure that other people think you are'];
const midMotArr = ['on time', 'curious about life', 'openminded', 'satisfied with what you have', 'enthusiastic', 'calm and relaxed', 'beautiful', 'attractive', 'a fish', 'reliable', 'trustworthy', 'grateful', 'entertaining'];
const endMotArr = ['because it is a good virtue.', 'that can make things awesome.', 'but not too much because that can hurt.', 'that has the power to change your life.', "wouldn't that be awesome?", 'everybody loves that!', 'whenever you can!'];

//fact sentence parts
const startFctArr = ['Drinking pineapple juice', 'Eating more vegetables', 'Solving the rubiks cube 10 times a day', 'Barking like a dog', 'Going to bed before midnight', 'Swimming in the sea', 'Cuddling with somebody or something', 'Imagining to be able to fly'];
const midFctArr = [
  'will make your legs longer',
  'gives you a lasting boost of happiness',
  'makes you fit and strong',
  'lets your body generate new cells',
  'has a great effect on your hippocampus',
  'makes people around you scared',
  'will lead to a more natural looking skin',
  'will lead you to financial success'
];
const endFctArr = [
  'so you will grow in size.',
  'so you will live a more fulfilled life.',
  'so you will never have to do the dishes again.',
  'so you wake up and you will feel like reborn.',
  'and increases your life expectancy on average by 4 years.',
  'which can make you lose your teeth.',
  'which was proven by a recent study from Stanford.'
];

// to store how many quotes the user wants to be generated
let howMany = 1;

// get div which holds the generated quotes
const UIoutput = document.querySelector('.quoteOutput');

//event delegation for the toggle buttons
document.body.addEventListener('click', onNumClick);

// gets generate-quotes buttons and adds event listeners
document.querySelector('#factBtn').addEventListener('click', generateClick);
document.querySelector('#motBtn').addEventListener('click', generateClick);

document.querySelector('.clearBtn').firstElementChild.addEventListener('click', function() {
  clear();
});

// event handler to find out how many quotes the user wants
function onNumClick(e) {
  if (e.target.classList.contains('howManyBtn')) {
    howMany = e.target.innerText;
    howMany = parseInt(howMany);
  }
}

// handler to generate quotes
function generateClick(e) {
  clear();
  // find out which (fact or motivational) button was clicked
  let btnClicked = e.target.id;
  generate(btnClicked);
}

// generate quotes loop
function generate(btnClicked) {
  for (i = 0; i < howMany; i++) {
    let curQuote;
    if (btnClicked === 'factBtn') {
      curQuote = generateFct();
    } else if (btnClicked === 'motBtn') {
      curQuote = generateMot();
    }
    const quoteElmt = document.createElement('p');
    quoteElmt.className = 'rounded p-3 shadow-sm';
    quoteElmt.innerText = curQuote;
    UIoutput.appendChild(quoteElmt);
  }
}

// generate random motivational quotes function
function generateMot() {
  let motStart = startMotArr[Math.floor(Math.random() * startMotArr.length)];
  let motMid = midMotArr[Math.floor(Math.random() * midMotArr.length)];
  let motEnd = endMotArr[Math.floor(Math.random() * endMotArr.length)];

  let motOutput = motStart + ' ' + motMid + ', ' + motEnd;
  return motOutput;
}

// generate random facts function
function generateFct() {
  let fctStart = startFctArr[Math.floor(Math.random() * startFctArr.length)];
  let fctMid = midFctArr[Math.floor(Math.random() * midFctArr.length)];
  let fctEnd = endFctArr[Math.floor(Math.random() * endFctArr.length)];

  let fctOutput = fctStart + ' ' + fctMid + ', ' + fctEnd;
  return fctOutput;
}

// Delete previous quotes before outputting new ones
function clear() {
  while (UIoutput.firstChild) {
    UIoutput.removeChild(UIoutput.firstChild);
  }
}
