export {Cursor};
var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
const image = document.getElementById('mushroom')
class Cursor {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.angle = 0;
        this.size = 50;
        canvas.addEventListener('mousemove', (e) => this.update(e));
    }
    display() {
        var halfSize = this.size/2;
        c.drawImage(image, this.x-halfSize, this.y - halfSize, this.size, this.size);
        // c.fillRect(this.x-halfSize, this.y-halfSize, this.size, this.size);
    }
    move() {
        requestAnimationFrame(() => {
            this.display(); // I implement this weirdly to make my code modular

            this.move(); // Call move recursively for continuous animation
          });
        }

    update(e) {
        var oldx = this.x;
        var oldy = this.y ;
        var rect = canvas.getBoundingClientRect();
        this.x = e.clientX - rect.left;
        this.y = e.clientY - rect.top;
        this.angle = Math.atan2(this.y-oldy, this.x - oldx);
        // console.log(this.angle);
    }
}

