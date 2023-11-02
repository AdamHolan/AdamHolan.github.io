export {Cursor};
var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
const image = document.getElementById('mushroom')
class Cursor {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.angle = 0;
        this.subAngle = 0;
        this.size = 50;
        this.maxLength = 15;
        this.angleList = new Array(this.maxLength);
        canvas.addEventListener('mousemove', (e) => this.update(e));
    }
    display() {
        var halfSize = this.size/2;
        // c.drawImage(image, this.x-halfSize, this.y - halfSize, this.size, this.size);
        // c.fillRect(this.x-halfSize, this.y-halfSize, this.size, this.size);
        // c.beginPath();
        // c.moveTo(this.x, this.y);
        // var x1 = (this.x + (10 * Math.cos(this.angle)));
        // var y1 = (this.y + (10 * Math.sin(this.angle)));
        // c.lineTo(x1, y1)
        // c.stroke();
        // Length and width of the pointer triangle
        const length = 20;
        const width = 10;

        c.save();

        // Translate the canvas to the endpoint of the vector
        c.translate(this.x, this.y);

        // Rotate the canvas to match the angle
        c.rotate(this.angle + Math.PI);


    // Calculate the position of the center of the triangle relative to the mouse
        const centerX = length / 2;
        const centerY = 0;

        // Draw the triangle
        c.beginPath();
        c.moveTo(-centerX, -centerY - width / 2);
        c.lineTo(centerX, -centerY - width / 2);
        c.lineTo(centerX, -centerY + width / 2);
        c.closePath();
        // Fill and stroke the triangle
        c.fillStyle = "red"; // Change the color as needed
        c.fill();
        c.stroke();

        c.restore();

    }
    move() {
        requestAnimationFrame(() => {
            this.display(); // I implement this weirdly to make my code modular

            this.move(); // Call move recursively for continuous animation
          });
        }

    mean(arr) {
        var sum = 0;
        arr.forEach(num => {
            sum += num;
        });
        return sum/arr.length
    }
    update(e) {
        var oldx = this.x;
        var oldy = this.y;
        var rect = canvas.getBoundingClientRect();
        this.x = e.clientX - rect.left;
        this.y = e.clientY - rect.top;
        var thisAngle = Math.atan2(this.y - oldy, this.x - oldx);
        
        // Convert the angle to degrees for easier quadrant detection
        this.angleList.push(thisAngle);
        if (this.angleList.length > this.maxLength) {
            this.angleList = this.angleList.slice(-this.maxLength);
        }
        
        // Calculate the mean angle by considering the quadrant
        let sumX = 0;
        let sumY = 0;
        for (let i = 0; i < this.angleList.length; i++) {
            let angleInRadians = this.angleList[i];
            sumX += Math.cos(angleInRadians);
            sumY += Math.sin(angleInRadians);
        }
        this.angle = (Math.atan2(sumY, sumX));
    
        // console.log(this.angleList);
    }
}

