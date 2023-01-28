
export class Board {
  width;
  height;
  board;
  ticker;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.board = this.reset();
    this.ticker = 0;
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
    this.board[this.ticker][1] = block.color;
  }

  move(){
    this.board[this.ticker][1] = this.block;
  }


}
