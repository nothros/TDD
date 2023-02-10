import { RotatingShape } from "./RotatingShape.mjs";

export class Tetromino{
    static T_SHAPE = new RotatingShape(
        ".T.\n" +
        "TTT\n" +
        "...\n", 4        
    )

    static I_SHAPE = new RotatingShape(
        ".....\n" +
        ".....\n" +
        "IIII.\n" +
        ".....\n" +
        ".....\n", 2
    )

    static O_SHAPE = new RotatingShape(
        ".OO\n" +
        ".OO\n" +
        "...\n", 1
    )


}