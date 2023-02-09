
export class RotatingShape{
    
    rows;
    matrix;

    constructor(shape, amountOfPosition = 4){
        
        console.log(amountOfPosition)
    
        this.matrix = [];
        this.rows = shape.replaceAll(" ", "").trim().split("\n")
        
        for(var i = 0; i < this.rows.length; i++){
            this.matrix.push([...this.rows[i]]);
        }
        Object.freeze(this);
    }




    toString(){
        return this.print(this.matrix)
    }

    print(mat){
        var s='';
        for(var row = 0; row < mat.length; row++){
            for(var col = 0; col < mat[0].length; col++){
                s+=mat[row][col]
            }
            s+="\n"
        }
        return s;
    }

    
    rotateRight(){
        var e = this.matrix[0].map((val, i) => this.matrix.map(row => row[i]).reverse())
       
        return new RotatingShape(this.print(e));
    }


    rotateLeft(){
            var e = this.matrix[0].map((val, i) => this.matrix.map(row => row[row.length-1-i]));
           

            return new RotatingShape(this.print(e));
        
           
        
    }

    checkBlock(mat){
        if(!mat[0].includes('T') && mat[0].includes('.'))
        {
            return 'I';
        }
        else{
            return 'T';
        }
    }

      
}