export {letters, Letter}
import { Particle } from "./particle.js";
class Block extends Particle{
    constructor(x, y, size, mass=0, angle=Math.PI, colour="#FFFFFF") {
        super(x, y, mass, size, angle, colour);
    }
    move() {
        requestAnimationFrame(() => {
          this.y -= Math.cos(this.angle) * this.speed;
          this.display();
          this.move(); // Call move recursively for continuous animation.
        });
      }
}
class Letter {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 10;
        this.blockList = [];
    }
    // Method: render the letters.
    // 1, 0, 0, 0, 1 => Place one block at x + size * j
    // then spawn next row at y - size * i
    spawn(L) {
        for (let i = 0; i<5; i++) {
            for (let j = 0; j<5; j++) {
                if (letters[L][i][j]==1) {
                    // console.log(true)
                    // initially, j*size = 0 so no offset. 
                    // as j => 0 the offset goes to 4*5 = 20. 
                    var xPos = this.x + (this.size * j)
                    // initially i = 0, and we want i = 4, so (4-i) achieves this
                    var yPos = this.y + (this.size * i)
                    // console.log(xPos, yPos)
                    var b = new Block(xPos, yPos, this.size);
                    // console.log(b)
                    this.blockList.push(b);
                }
            }
        }
        return this.blockList
    }
}
const letters = {
    A: [
      [0, 1, 1, 1, 0],
      [1, 0, 0, 0, 1],
      [1, 0, 0, 0, 1],
      [1, 1, 1, 1, 1],
      [1, 0, 0, 0, 1]
    ],
    d: [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1],
      [0, 0, 0, 0, 1],
      [0, 1, 1, 1, 1],
      [1, 1, 1, 1, 1]
    ],
    a: [
      [0, 0, 0, 0, 0],
      [0, 1, 1, 1, 0],
      [1, 0, 0, 0, 1],
      [1, 0, 0, 0, 1],
      [0, 1, 1, 1, 1]
    ],
    m: [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [1, 1, 0, 1, 1],
      [1, 0, 1, 0, 1],
      [1, 0, 0, 0, 1]
    ],
    H: [
      [1, 0, 0, 0, 1],
      [1, 0, 0, 0, 1],
      [1, 1, 1, 1, 1],
      [1, 0, 0, 0, 1],
      [1, 0, 0, 0, 1]
    ],
    o: [
      [0, 0, 0, 0, 0],
      [0, 1, 1, 1, 0],
      [1, 0, 0, 0, 1],
      [1, 0, 0, 0, 1],
      [0, 1, 1, 1, 0]
    ],
    l: [
      [1, 0, 0, 0, 0],
      [1, 0, 0, 0, 0],
      [1, 0, 0, 0, 0],
      [1, 0, 0, 0, 0],
      [1, 1, 1, 1, 1]
    ],
    n: [
      [0, 0, 0, 0, 0],
      [1, 0, 0, 0, 1],
      [1, 1, 0, 0, 1],
      [1, 0, 1, 0, 1],
      [1, 0, 0, 1, 1]
    ]
  };