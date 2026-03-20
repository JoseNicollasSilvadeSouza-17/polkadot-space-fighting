import Fighter from "../class/Fighter.js";

const player = new Fighter({
    position: {
        x: 0,
        y: 0
    },
    velocity: {
        x: 0,
        y: 0
    },
    offsetAttack: {
        x: 0,
        y: 0
    },
    imageSrc: "./assets/images/characters/werewolf/idle.png",
    framesMax: 8,
    scale: 1.5,
    offsetPosition: {
        x: 0,
        y: 46
    },
    sprites: {
        idle: {
            imageSrc: "./assets/images/characters/werewolf/idle.png",
            framesMax: 8
        },
        walk: {
            imageSrc: "./assets/images/characters/werewolf/walk.png",
            framesMax: 11
        },
        dead: {
            imageSrc: "./assets/images/characters/werewolf/dead.png",
            framesMax: 2
        },
        attack: {
            imageSrc: "./assets/images/characters/werewolf/attack.png",
            framesMax: 6
        },
        jump: {
            imageSrc: "./assets/images/characters/werewolf/jump.png",
            framesMax: 11
        }
    }
});

export default player;