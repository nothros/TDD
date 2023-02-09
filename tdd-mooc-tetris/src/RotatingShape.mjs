
export class RotatingShape{
    
    rows;
    matrix;
    positions;
    currentPosition;
    amountOfPosition; 

    constructor(shape, amountOfPosition = 4, currentPosition = 0){
        this.amountOfPosition = amountOfPosition;
        this.positions = [];
        this.currentPosition = currentPosition;
                
        this.matrix = [];
        this.rows = shape.replaceAll(" ", "").trim().split("\n")
        
        for(var i = 0; i < this.rows.length; i++){
            this.matrix.push([...this.rows[i]]);
        }
        this.positions[0]=this.matrix;
        for(let j = 1; j < amountOfPosition; j++){
            var d = this.positions[j-1]
            console.log(d)
           var e = d.map((val, i) => d.map(row => row[i]).reverse())
            
            this.positions[j]=e
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

    
    /*rotateRight(){
        var e = this.matrix[0].map((val, i) => this.matrix.map(row => row[i]).reverse())
       
        return new RotatingShape(this.print(e));
    }*/

    rotateRight(){       
        let position = this.currentPosition == this.amountOfPosition -1 ? 0 : this.currentPosition+1;
        return new RotatingShape(this.print(this.positions[position], this.amountOfPosition, position));
    }

        
    rotateLeft(){       
        let position = this.currentPosition == 0 ? this.amountOfPosition -1 : this.currentPosition-1;
        return new RotatingShape(this.print(this.positions[position], this.amountOfPosition, position));
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