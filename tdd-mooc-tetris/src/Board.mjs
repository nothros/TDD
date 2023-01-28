
export class Board {
  width;
  height;
  board;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.board = this.reset();
  }

  reset() {
    return Array(this.width).fill().map(() => Array(this.height).fill('.'));
  }

  toString() {
    let string = '';
    this.board.forEach(row => {
      row.forEach(cell => {
        string+=cell;
      }
      ),string+="\n";
    });

    return string;
  }
  
  drop(block){
    this.board[0][1] = block.color;
  }

}
