let state;

let darkmode = false;

const WIDTH = 1000;
const HEIGHT = 600;
const OFFSET_X = 30;
const OFFSET_Y = 50;
const RECT_WIDTH = 100;
const RECT_HEIGHT = HEIGHT - 2 * OFFSET_Y;
const CONTAINER_RADIUS = 12; 
let smallestDisplay = (WIDTH > HEIGHT ? HEIGHT : WIDTH);

let titleFont;

let Player1 = new Player(1);
let Player2 = new Player(2);
let player1cash = Player1.cash;
let player2cash = Player2.cash;

let troopPool = new troopsPool()

function preload() {
  titleFont = loadFont('Franchise.ttf');
}

function changeStateToChoosing() {
  state = "CHOOSING";
  input1.remove();
  input2.remove();
  nextButton.remove();
  // clear();
  // removeElements();
}
let input1;
let input2;
let darkmodeButton;
let nextButton;
function setup() {
  createCanvas(WIDTH, HEIGHT);
  state = "CHOOSING";
  fill(220);
  input1 = createInput('').attribute('placeholder', 'Player 1');
  input2 = createInput('').attribute('placeholder', 'Player 2');
  input1.size(500)
  input2.size(500)
  nextButton = createButton('Play Now');
  nextButton.mousePressed(changeStateToChoosing);
  darkmodeButton = createButton(':)');
  darkmodeButton.position(20,40);
  darkmodeButton.size(40);
  darkmodeButton.mousePressed(changeDarkMode);
  if (state == "CHOOSING") {
    changeStateToChoosing();
    
  }
}

function changeDarkMode() {
  darkmode = !darkmode  
}

function draw() {
  background(230);
  if (darkmode == true) {
    background(50);
  } 
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
    createBasicText();
    createUIContainer();
    Player1.choose();
    Player2.choose();
    showTroopCounts();
  }
}
function selectTroops() {
  for (let i = 0; i < 5; i++) {
    if (Player1.troops[i] >= 0 && Player2.troops[i] >= 0) {
      if (Player1.pos == i) {
        if (keyCode === 68 && troopPool.troopscountList[i] > 0) {
          troopPool.troopscountList[i] -= 1;
          Player1.troops[i] += 1;
        }
        if (keyCode === 65 && troopPool.troopscountList[i] < troopPool.troopscountListStock[i] && Player1.troops[i] > 0) {
          troopPool.troopscountList[i] += 1;
          Player1.troops[i] -= 1;
        }
      }
      
      if (Player2.pos == i) {
        if (keyCode === RIGHT_ARROW && troopPool.troopscountList[i] > 0) {
          troopPool.troopscountList[i] -= 1;
          Player2.troops[i] += 1;
        }
        if (keyCode === LEFT_ARROW && troopPool.troopscountList[i] < troopPool.troopscountListStock[i] && Player2.troops[i] > 0) {
          troopPool.troopscountList[i] += 1;
          Player2.troops[i] -= 1;
        }
      }
    }
  }
}

function showTroopCounts() {
  for (let i = 1; i <= 5; i++) {
    fill(250);
    if (darkmode == true) {
      fill(70);
    }
    strokeWeight(4);
    circle(OFFSET_X + 50, OFFSET_Y + RECT_WIDTH * i - 50, 50);
    createText(Player1.troops[i -1], OFFSET_X + 50, RECT_WIDTH * i);
    fill(250);
    if (darkmode == true) {
      fill(70);
    }
    strokeWeight(4);
    circle(WIDTH - OFFSET_X - 50, OFFSET_Y + RECT_WIDTH * i - 50, 50);
    createText(Player2.troops[i -1], WIDTH - OFFSET_X - 50, RECT_WIDTH * i);
    
    createText(troopPool.troopscountList[i-1], WIDTH/2, RECT_WIDTH * i)
  }
}

function createText(string, x, y, size=20, font='Helvetica') {
  textFont(font);
  fill(0);
  textSize(size);
  strokeWeight(0);
  textAlign(CENTER, CENTER);
  text(string, x, y);
}

function createUIContainer() {
  stroke(50);
  if (darkmode == true) {
    stroke(0);

  }
  strokeWeight(3);
  fill(250);
  if (darkmode == true) {
    fill(70);
  }
  rect(OFFSET_X, OFFSET_Y, RECT_WIDTH, RECT_HEIGHT, CONTAINER_RADIUS);
  rect(WIDTH - OFFSET_X - RECT_WIDTH, OFFSET_Y, RECT_WIDTH, RECT_HEIGHT, CONTAINER_RADIUS);
}

function createBasicText() {
  createText(`${Player1.name}`, OFFSET_X + RECT_WIDTH / 2, OFFSET_Y / 2, 20);
  createText(`${Player2.name}`, WIDTH - OFFSET_X - RECT_WIDTH / 2, OFFSET_Y / 2, 20);
  createText(`Cash: ${player1cash}`, OFFSET_X + RECT_WIDTH / 2, HEIGHT - OFFSET_Y / 2, 20);
  createText(`Cash: ${player2cash}`, WIDTH - OFFSET_X - RECT_WIDTH / 2, HEIGHT - OFFSET_Y / 2, 20);
}

function keyPressed() {
  selectTroops();
  if (keyCode === 87) {
    if (Player1.pos > 0) {
      Player1.pos -= 1;
    }
  }
  if (keyCode === 83) {
    if (Player1.pos < 4) {
      Player1.pos += 1;
    }
  }
  if (keyCode === UP_ARROW) {
    if (Player2.pos > 0) {
      Player2.pos -= 1;
    }
  }
  if (keyCode === DOWN_ARROW) {
    if (Player2.pos < 4) {
      Player2.pos += 1;
    }
  }
}