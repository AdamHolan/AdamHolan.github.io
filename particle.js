export {Particle, addVectors};
var canvas = document.querySelector('canvas');
var width = 800;
var height = 600;
var c = canvas.getContext('2d');
class Particle {
    constructor(x, y, mass, size, angle=0, colour="#000000") {
        this.x = x;
        this.y = y;
        this.mass = mass;
        this.size = size;
        this.angle = angle;
        this.speed = 1;
        this.colour = colour;
        this.applyGravity = false;
        canvas.addEventListener('click', (e) => this.update(e));

    }
    update(e) {
        if (this.applyGravity == true) this.applyGravity = false;
        else {this.applyGravity = true};

    }
    display() {
        // c.beginPath();
        // c.arc(this.x, this.y, this.size, 0, 2*Math.PI, false);
        
        c.strokeStyle = this.colour;
        c.fillStyle = c.strokeStyle;
        c.fillRect(this.x, this.y, this.size, this.size)
          // c.fill();
        // c.stroke(); 
    }

    bounce() {
        // Right boundary
        if (this.x > width - this.size) {
            this.x = 2 * (width - this.size) - this.x;
            this.angle = -this.angle;
            this.speed *= 0.98
        }
      
        // Left boundary
        else if (this.x < this.size) {
            this.x = 2 * this.size - this.x;
            this.angle = -this.angle;
            this.speed *= 0.98
        }
      
        // Top boundary
        if (this.y > height - this.size) {
            this.y = 2 * (height - this.size) - this.y;
            this.angle = Math.PI - this.angle;
            this.speed *= 0.98
        }
      
        // Bottom boundary
        else if (this.y < this.size) {
            this.y = 2 * this.size - this.y;
            this.angle = Math.PI - this.angle;
            this.speed *= 0.98;
        }
      }
    move() {
        requestAnimationFrame(() => {
          this.display();
          if (this.applyGravity) {this.gravity()};
          this.x += Math.sin(this.angle) * this.speed;
          this.y -= Math.cos(this.angle) * this.speed;
          this.bounce();
          this.move(); // Call move recursively for continuous animation
        });
    }

    gravity() {
        var min = 10;
        var dy = (this.y - height);
        var dist = Math.hypot(0, dy);
        var theta = Math.atan2(dy, 0);
        dist = Math.max(min, dist);
        var force = 0.2 * this.mass / dist*dist;
        this.accelerate([theta - 0.5 * Math.PI, force/this.mass])
    }

    accelerate(vector) {
        [this.angle, this.speed] = addVectors([this.angle, this.speed], vector)
    }
}

function addVectors(vector1, vector2) {
    const [a1, l1] = vector1;
    const [a2, l2] = vector2;
    
    const x = Math.sin(a1) * l1 + Math.sin(a2) * l2;
    const y = Math.cos(a1) * l1 + Math.cos(a2) * l2;
    
    const length = Math.hypot(x, y);
    const angle = 0.5 * Math.PI - Math.atan2(y, x);
    
    return [angle, length];
  }
