export class Board {
  width;
  height;
  board;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.board = new Array(this.height).fill(new Array(this.width).fill('.'))
  }

  toString() {
    let string = '';
    this.board.forEach(row => {
      row.forEach(cell => {
        string+=cell;
      }
      ),string+='\n'
    });

    return string;
  }
}
