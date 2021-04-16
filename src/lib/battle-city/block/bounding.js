class Bounding{
  /**
   * @param {number} width 
   * @param {number} height 
   * @param {number} x 
   * @param {number} y 
   */
  constructor(opts) {
    Object.entries(opts).forEach(([key, val]) => {
      this[key] = val
    })
  }

  getLeftTop() {
    return [this.x - this.width / 2, this.y + this.height / 2]
  }
  getLeftBottom() {
    return [this.x - this.width / 2, this.y - this.height / 2]
  }
  getRightTop() {
    return [this.x + this.width / 2, this.y + this.height / 2]
  }
  getLeftBottom() {
    return [this.x + this.width / 2, this.y - this.height / 2]
  }


}

export default Bounding