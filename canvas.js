import { Particle, addVectors } from './particle.js'
import { Cursor } from './cursor.js';
import { spawnWord } from './letters.js';

var cursor = new Cursor();
var canvas = document.querySelector('canvas');
canvas.width = 800;
canvas.height = 600;
var c = canvas.getContext('2d');
var sprites = [];

sprites.push(cursor);

var adam = spawnWord("AdamHolan")
adam.forEach(block => sprites.push(block));


sprites.forEach(sprite => {
    sprite.move();
})

setInterval(() => {
    c.clearRect(0, 0, canvas.width, canvas.height);
}, 1);