
export class Board {
  width;
  height;
  board;
  block;
  fallingBlock;
  fallingRow;
  fallingCol;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.board = this.reset();
    this.block = undefined;
    this.fallingRow = 0;

  }

  reset() {
    return Array(this.height).fill().map(() => Array(this.width).fill('.'));
  }

  

  toString(){
    let s = '';
    for(let row = 0; row < this.height; row++)
    {
      for(let col = 0; col < this.width; col++)
      {
        s+=this.hasFallingAt(row, col)? this.fallingBlock : this.board[row][col];
      }
      s+='\n'
    }
    return s;
  }


  draw(block){
    var mat = [...block.getMatrix()]
    var center = Math.ceil(this.width/2)-Math.floor(mat[0].length/2)-1;
   
    var testing = [...this.reset()]

    for(let row = 0; row < this.height; row++)
    {
      for(let col = 0; col < this.width; col++)
      {
        if(col == center && row < mat[0].length){
          testing[row].splice(center, mat[row].length, ...mat[row])
        }
      }
    }
    console.log("TESTIBOARS", testing)
  }

 

  hasFallingAt(row, col)
  {
    return this.hasFalling() && row == this.fallingRow && col == 1;
  }
  
  drop(block){
    
    if(this.hasFalling())
    {
      throw new Error("already falling");
    }
      this.fallingBlock = block.toString().trim();

    this.fallingRow = 0;
    this.draw(block)

  }


  hasFalling(){
    return this.fallingBlock != null;
  }

  tick(){

    if(this.fallingRow == this.height-1 || this.board[this.fallingRow+1][1] != '.')
    {
      this.board[this.fallingRow][1] = this.fallingBlock
      this.fallingBlock = null;
    }else {
      this.fallingRow ++;

    }
  }


}
