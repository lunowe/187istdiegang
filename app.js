let state;

const WIDTH = 1000;
const HEIGHT = 600;
const OFFSET_X = 30;
const OFFSET_Y = 50;
const RECT_WIDTH = 100;
const RECT_HEIGHT = HEIGHT - 2 * OFFSET_Y;
const CONTAINER_RADIUS = 12; 
let smallestDisplay = (WIDTH > HEIGHT ? HEIGHT : WIDTH);

let titleFont;

let Player1 = new Player();
let Player2 = new Player();
let player1cash = Player1.cash;
let player2cash = Player2.cash;

function preload() {
  titleFont = loadFont('Franchise.ttf');
}

function changeStateToChoosing() {
  state = "CHOOSING";
  clear();
}
let input1;
let input2;
function setup() {
  createCanvas(WIDTH, HEIGHT);
  state = "STARTUP";
  fill(220);
  input1 = createInput('').attribute('placeholder', 'Player 1');
  input2 = createInput('').attribute('placeholder', 'Player 2');
  input1.size(500)
  input2.size(500)
  let nextButton = createButton('Play Now');
  nextButton.mousePressed(changeStateToChoosing);
}

function draw() {
  background(230);
  if (state == "STARTUP") {
    createText('187 ist das Game', WIDTH/2, OFFSET_Y * 1.5, 100, titleFont);
    Player1.name = input1.value();
    Player2.name = input2.value();
  } else if (state == "CHOOSING") {
    if (Player1.name == "") {
      Player1.name = "Player 1";
    }
    if (Player2.name == "") {
      Player2.name = "Player 2";
    }
    removeElements();
    createBasicText();
    createUIContainer();
  }
}

function createText(string, x, y, size, font='Helvetica') {
  textFont(font);
  fill(0);
  textSize(size);
  strokeWeight(0);
  textAlign(CENTER, CENTER);
  text(string, x, y);
}

function createUIContainer() {
  stroke(50);
  strokeWeight(3);
  fill(250);
  rect(OFFSET_X, OFFSET_Y, RECT_WIDTH, RECT_HEIGHT, CONTAINER_RADIUS);
  rect(WIDTH - OFFSET_X - RECT_WIDTH, OFFSET_Y, RECT_WIDTH, RECT_HEIGHT, CONTAINER_RADIUS);
}

function createBasicText() {
  createText(`${Player1.name}`, OFFSET_X + RECT_WIDTH / 2, OFFSET_Y / 2, 20);
  createText(`${Player2.name}`, WIDTH - OFFSET_X - RECT_WIDTH / 2, OFFSET_Y / 2, 20);
  createText(`Cash: ${player1cash}`, OFFSET_X + RECT_WIDTH / 2, HEIGHT - OFFSET_Y / 2, 20);
  createText(`Cash: ${player2cash}`, WIDTH - OFFSET_X - RECT_WIDTH / 2, HEIGHT - OFFSET_Y / 2, 20);
}
