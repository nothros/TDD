
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
    return Array(this.height).fill().map(() => Array(this.width).fill('.'));
  }

  toString() {
    this.toString2();
    let string = '';
    this.board.forEach(row => {
      row.forEach(cell => {
        string+=cell;
      }
      ),string+="\n";
    });

    return this.toString2();
  }

  toString2(){
    let s = '';
    for(let row = 0; row < this.height; row++)
    {
      for(let col = 0; col < this.width; col++)
      {
        s+='.';
      }
      s+='\n'
    }
    console.log(s);
    return s;
  }
  
  drop(block){
    if(this.block){
      throw new Error("already falling");
    }
    this.block = block;
    this.move(0,1, this.block.color);
  }

  move(row,col, cell){
    this.board[row][col] = cell;
  }

  hasFalling(){
    return this.ticker !== this.height;
  }

  tick(){
    this.ticker = this.ticker += 1;
    if(this.hasFalling()){
    this.move(this.ticker-1, 1, '.')
    this.move(this.ticker, 1, this.block.color);
    }
  }


}
