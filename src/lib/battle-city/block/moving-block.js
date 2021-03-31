class MovingBlock {
  constructor(opts) {
    const { speed, x, y, boundingBox } = opts
    this.speed = speed
    this.auto = auto
    this.direction = direction
    this.x = x
    this.y = y
    this.boundingBox = boundingBox
  }

  move(direction) {
    switch (direction) {
      case 'up':
        this.y += 1
        break;
      case 'right':
        this.x += 1
        break;
      case 'down':
        this.y -= 1
        break;
      case 'left':
        this.x -= 1
        break;
    }
  }

  destory() {

  }

}