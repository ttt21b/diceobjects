let dice = [];
let numberOfDice = 5;
let bgColor = "darkolivegreen"
let total = 0; //total sum of dice values
let lastTotal = 0; // stores the last sum

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < numberOfDice; i++) {
    dice[i] = new Die(50); // argument is the size of the die
  }
}

function draw() {
  background(bgColor);
  
  
  // loop over the array and place+display each die
  for (let i = 0; i < dice.length; i++) {
    const die = dice[i]; // 'die' is a temporary variable for the current array item
    die.place(die.size*1.2*i+die.size, die.size*2); // place the die neatly in the row
    die.display(); // actually draw it on screen
  }
 // for the sum number in the middle
  fill(255); 
  textSize(32); 
  textAlign(CENTER, CENTER); 
  text(lastTotal, windowWidth / 2, windowHeight / 2); 
}

function mouseClicked() {
  // loop over the array of dice...
  for (let i = 0; i < dice.length; i++) {
    const die = dice[i];
    // if the cursor is over the current die, freeze/unfreeze that die
    if (die.isTouched(mouseX,mouseY)) {
      die.toggleFreeze();
    }
  }
}

// for computers...
function keyPressed() {
  shakeDice();
}

// for phones...
function deviceShaken() {
  shakeDice();
}

// loop over the array of dice and try to roll each one in turn
// (note that a die won't actually roll if it's frozen)
// also, output the list of values to the console
function shakeDice() {
  let list = "values: ";
  let total = 0;
  for (let i = 0; i < dice.length; i++) {
    const die = dice[i];
    die.roll();
    list = list + die.value + " ";
    total += die.value;

  }

  if (total > 19) {
    bgColor = "green"; // for total greater than 20
  } else {
    bgColor = "red"; // for total less than or equal to 20
  }

  lastTotal = total;
  console.log(total);
 

}