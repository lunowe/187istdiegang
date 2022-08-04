class Player {
  constructor(num) {
    this.name;
    this.cash = 100;
    this.troops = [0,0,0,0,0];
    this.pos = 0; // 0 - 4
    this.height = OFFSET_Y + RECT_WIDTH * this.pos;
    this.num = num
  }

  choose() {
    if (this.height < OFFSET_Y + RECT_WIDTH * this.pos) {
      this.height += 20;
    }
    if (this.height > OFFSET_Y + RECT_WIDTH * this.pos) {
      this.height -= 20;
    }
    noFill();
    strokeWeight(5);
    if (this.num == 1) {
      rect(OFFSET_X, this.height, RECT_WIDTH,RECT_WIDTH, CONTAINER_RADIUS);
    }
    if (this.num == 2) {
      rect(WIDTH - OFFSET_X - RECT_WIDTH, this.height, RECT_WIDTH,RECT_WIDTH, CONTAINER_RADIUS);
    }
  }
}