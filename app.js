const WIDTH = 1000;
const HEIGHT = 600;
const OFFSET_X = 30;
const OFFSET_Y = 50;
const RECT_WIDTH = 100;
const RECT_HEIGHT = HEIGHT - 2 * OFFSET_Y;
const CONTAINER_RADIUS = 12; 
let smallestDisplay = (WIDTH > HEIGHT ? HEIGHT : WIDTH);

let player1cash = 10;
let player2cash = 20;

function setup() {
  createCanvas(WIDTH, HEIGHT);
}

function draw() {
  background(230);
  createBasicText();
  createUIContainer();
}

function createText(string, x, y, size) {
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
  createText('Player 1', OFFSET_X + RECT_WIDTH / 2, OFFSET_Y / 2, 20);
  createText('Player 2', WIDTH - OFFSET_X - RECT_WIDTH / 2, OFFSET_Y / 2, 20);
  createText(`Cash: ${player1cash}`, OFFSET_X + RECT_WIDTH / 2, HEIGHT - OFFSET_Y / 2, 20);
  createText(`Cash: ${player2cash}`, WIDTH - OFFSET_X - RECT_WIDTH / 2, HEIGHT - OFFSET_Y / 2, 20);
}
