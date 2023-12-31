export {letters, spawnWord, Letter}
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
                    // console.log(L)
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

function spawnWord(word) {
    
    var objects = []
    var parsedWord = word.split("");
    var offset = 0;
    console.log(parsedWord)
    parsedWord.forEach(char => {
        var l = new Letter(100+offset, 0);
        console.log(char)
        var blocks = l.spawn(char)
        blocks.forEach(block => objects.push(block));
        offset += l.size*7; 
    });
    return objects;
}

const letters = {
    A: [
      [0, 1, 1, 1, 0],
      [1, 0, 0, 0, 1],
      [1, 0, 0, 0, 1],
      [1, 1, 1, 1, 1],
      [1, 0, 0, 0, 1]
    ],
  
    B: [
      [1, 1, 1, 0, 0],
      [1, 0, 0, 1, 1],
      [1, 1, 1, 0, 0],
      [1, 0, 0, 1, 1],
      [1, 1, 1, 0, 0]
    ],
  
    C: [
      [0, 1, 1, 1, 0],
      [1, 0, 0, 0, 1],
      [1, 0, 0, 0, 0],
      [1, 0, 0, 0, 1],
      [0, 1, 1, 1, 0]
    ],
  
    D: [
      [1, 1, 1, 0, 0],
      [1, 0, 0, 1, 1],
      [1, 0, 0, 0, 1],
      [1, 0, 0, 1, 1],
      [1, 1, 1, 0, 0]
    ],
  
    E: [
      [1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0],
      [1, 1, 1, 0, 0],
      [1, 0, 0, 0, 0],
      [1, 1, 1, 1, 1]
    ],
  
    F: [
      [1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0],
      [1, 1, 1, 0, 0],
      [1, 0, 0, 0, 0],
      [1, 0, 0, 0, 0]
    ],
  
    G: [
      [0, 1, 1, 1, 0],
      [1, 0, 0, 0, 0],
      [1, 0, 0, 1, 0],
      [1, 0, 0, 0, 1],
      [0, 1, 1, 1, 0]
    ],
  
    H: [
      [1, 0, 0, 0, 1],
      [1, 0, 0, 0, 1],
      [1, 1, 1, 1, 1],
      [1, 0, 0, 0, 1],
      [1, 0, 0, 0, 1]
    ],
  
    I: [
      [1, 1, 1, 1, 1],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
      [1, 1, 1, 1, 1]
    ],
  
    J: [
      [0, 0, 0, 1, 0],
      [0, 0, 0, 1, 0],
      [0, 0, 0, 1, 0],
      [1, 0, 0, 1, 0],
      [0, 1, 1, 0, 0]
    ],
  
    K: [
      [1, 0, 0, 0, 1],
      [1, 0, 0, 1, 0],
      [1, 1, 1, 0, 0],
      [1, 0, 0, 1, 0],
      [1, 0, 0, 0, 1]
    ],
  
    L: [
      [1, 0, 0, 0, 0],
      [1, 0, 0, 0, 0],
      [1, 0, 0, 0, 0],
      [1, 0, 0, 0, 0],
      [1, 1, 1, 1, 1]
    ],
  
    M: [
      [1, 0, 0, 0, 1],
      [1, 1, 0, 1, 1],
      [1, 0, 1, 0, 1],
      [1, 0, 0, 0, 1],
      [1, 0, 0, 0, 1]
    ],
  
    N: [
      [1, 0, 0, 0, 1],
      [1, 1, 0, 0, 1],
      [1, 0, 1, 0, 1],
      [1, 0, 0, 1, 1],
      [1, 0, 0, 0, 1]
    ],
  
    O: [
      [0, 1, 1, 1, 0],
      [1, 0, 0, 0, 1],
      [1, 0, 0, 0, 1],
      [1, 0, 0, 0, 1],
      [0, 1, 1, 1, 0]
    ],
  
    P: [
      [1, 1, 1, 1, 0],
      [1, 0, 0, 0, 1],
      [1, 1, 1, 1, 0],
      [1, 0, 0, 0, 0],
      [1, 0, 0, 0, 0]
    ],
  
    Q: [
      [0, 1, 1, 1, 0],
      [1, 0, 0, 0, 1],
      [1, 0, 0, 0, 1],
      [1, 0, 0, 1, 0],
      [0, 1, 1, 0, 1]
    ],
  
    R: [
      [1, 1, 1, 0, 0],
      [1, 0, 0, 1, 0],
      [1, 1, 1, 0, 0],
      [1, 0, 0, 1, 0],
      [1, 0, 0, 0, 1]
    ],
  
    S: [
      [0, 1, 1, 1, 0],
      [1, 0, 0, 0, 1],
      [0, 1, 1, 0, 0],
      [0, 0, 0, 1, 0],
      [1, 1, 1, 0, 0]
    ],
  
    T: [
      [1, 1, 1, 1, 1],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0]
    ],
  
    U: [
      [1, 0, 0, 0, 1],
      [1, 0, 0, 0, 1],
      [1, 0, 0, 0, 1],
      [1, 0, 0, 0, 1],
      [0, 1, 1, 1, 0]
    ],
  
    V: [
      [1, 0, 0, 0, 1],
      [1, 0, 0, 0, 1],
      [1, 0, 0, 0, 1],
      [0, 1, 0, 1, 0],
      [0, 0, 1, 0, 0]
    ],
  
    W: [
      [1, 0, 0, 0, 1],
      [1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1],
      [1, 1, 0, 1, 1],
      [1, 0, 0, 0, 1]
    ],
  
    X: [
      [1, 0, 0, 0, 1],
      [0, 1, 0, 1, 0],
      [0, 0, 1, 0, 0],
      [0, 1, 0, 1, 0],
      [1, 0, 0, 0, 1]
    ],
  
    Y: [
      [1, 0, 0, 0, 1],
      [0, 1, 0, 1, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0]
    ],
  
    Z: [
      [1, 1, 1, 1, 1],
      [0, 0, 0, 1, 0],
      [0, 0, 1, 0, 0],
      [0, 1, 0, 0, 0],
      [1, 1, 1, 1, 1]
    ],
    a: [
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [0, 1, 1, 1, 1]
      ],
    
      b: [
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 1, 1, 1, 0],
        [1, 0, 0, 0, 1],
        [1, 1, 1, 1, 0]
      ],
    
      c: [
        [0, 0, 1, 1, 1],
        [0, 1, 0, 0, 0],
        [1, 0, 0, 0, 0],
        [0, 1, 0, 0, 0],
        [0, 0, 1, 1, 1]
      ],
    
      d: [
        [0, 0, 0, 1, 1],
        [0, 0, 0, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 0, 0, 0, 1],
        [1, 1, 1, 1, 0]
      ],
    
      e: [
        [1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0],
        [1, 1, 1, 0, 0],
        [1, 0, 0, 0, 0],
        [1, 1, 1, 1, 1]
      ],
    
      f: [
        [1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0],
        [1, 1, 1, 0, 0],
        [1, 0, 0, 0, 0],
        [1, 0, 0, 0, 0]
      ],
    
      g: [
        [0, 0, 1, 1, 1],
        [0, 1, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [0, 1, 1, 1, 0]
      ],
    
      h: [
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 1, 1, 1, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1]
      ],
    
      i: [
        [1, 1, 1, 1, 1],
        [0, 1, 0, 0, 0],
        [0, 1, 0, 0, 0],
        [0, 1, 0, 0, 0],
        [1, 1, 1, 1, 1]
      ],
    
      j: [
        [0, 0, 1, 1, 1],
        [0, 0, 0, 1, 0],
        [0, 0, 0, 1, 0],
        [0, 1, 0, 1, 0],
        [0, 0, 1, 0, 0]
      ],
    
      k: [
        [1, 0, 0, 0, 1],
        [1, 0, 0, 1, 0],
        [1, 1, 1, 0, 0],
        [1, 0, 0, 1, 0],
        [1, 0, 0, 0, 1]
      ],
    
      l: [
        [1, 0, 0, 0, 0],
        [1, 0, 0, 0, 0],
        [1, 0, 0, 0, 0],
        [1, 0, 0, 0, 0],
        [1, 1, 1, 1, 1]
      ],
    
      m: [
        [0, 0, 0, 0, 0],
        [1, 0, 0, 0, 1],
        [1, 1, 0, 1, 1],
        [1, 0, 1, 0, 1],
        [1, 0, 0, 0, 1]
      ],
    
      n: [
        [0, 0, 0, 0, 0],
        [1, 0, 0, 1, 0],
        [1, 1, 0, 1, 0],
        [1, 0, 1, 1, 0],
        [1, 0, 0, 1, 0]
      ],
    
      o: [
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [0, 1, 1, 1, 0]
      ],
    
      p: [
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 1, 1, 1, 0],
        [1, 0, 0, 0, 0],
        [1, 0, 0, 0, 0]
      ],
    
      q: [
        [0, 0, 1, 1, 1],
        [0, 1, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [0, 1, 0, 0, 1],
        [0, 0, 1, 1, 0]
      ],
    
      r: [
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 1, 1, 1, 0],
        [1, 0, 0, 1, 0],
        [1, 0, 0, 0, 1]
      ],
    
      s: [
        [0, 0, 1, 1, 1],
        [0, 1, 0, 0, 0],
        [0, 0, 1, 1, 0],
        [0, 0, 0, 0, 1],
        [1, 1, 1, 1, 0]
      ],
    
      t: [
        [1, 1, 1, 1, 1],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0]
      ],
    
      u: [
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [0, 0, 1, 1, 0]
      ],
    
      v: [
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [0, 0, 1, 0, 0],
        [0, 1, 0, 0, 0]
      ],
    
      w: [
        [1, 0, 0, 0, 1],
        [1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1],
        [1, 1, 0, 1, 1],
        [1, 0, 0, 0, 1]
      ],
    
      x: [
        [1, 0, 0, 0, 1],
        [0, 1, 0, 1, 0],
        [0, 0, 1, 0, 0],
        [0, 1, 0, 1, 0],
        [1, 0, 0, 0, 1]
      ],
    
      y: [
        [1, 0, 0, 0, 1],
        [0, 1, 0, 1, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0]
      ],
    
      z: [
        [1, 1, 1, 1, 1],
        [0, 0, 0, 1, 0],
        [0, 0, 1, 0, 0],
        [0, 1, 0, 0, 0],
        [1, 1, 1, 1, 1]
      ]
  };
