export class Board {
  width;
  height;

  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  toString() {
    console.log('.'*this.width)
    return "TODO";
  }
}
