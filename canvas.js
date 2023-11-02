import { Particle, addVectors } from './particle.js'
import { Cursor } from './cursor.js';
import { Letter } from './letters.js';

var cursor = new Cursor();
var canvas = document.querySelector('canvas');
canvas.width = 800;
canvas.height = 600;
var c = canvas.getContext('2d');
var sprites = [];


sprites.push(cursor);

// for (let i = 1; i <= 360/2; i++) {
//     var particle = new Particle(canvas.height/2,canvas.width/2, 10, 5, i); 
//     sprites.push(particle);
// }
function spawnWord(word) {
    var objects = []
    var parsedWord = word.split("");
    var offset = 0;
    console.log(parsedWord)
    parsedWord.forEach(char => {
        var l = new Letter(100+offset, 0);
        let size = l.size;
        var blocks = l.spawn(char)
        blocks.forEach(block => objects.push(block));
        offset += l.size*7; 
    });
    return objects;
}

var adam = spawnWord("AdamHolan")
adam.forEach(block => sprites.push(block));


sprites.forEach(sprite => {
    // console.log(sprite.speed)
    // console.log(sprite)
    sprite.move();
})

setInterval(() => {
    c.clearRect(0, 0, canvas.width, canvas.height);
}, 1);