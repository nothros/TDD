
export class Board {
  width;
  height;
  board;
  ticker;
  block;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.board = this.reset();
    this.ticker = 0;
    this.block = undefined;
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
    if(this.block){
      throw new Error("already falling");
    }
    this.board[this.ticker][1] = block.color;
    this.block = block;
  }

  move(){
    this.board[this.ticker][1] = this.block.color;
  }

  tick(){
    this.ticker = this.ticker += 1;
    this.board=this.reset();
    this.move();
  }
}
