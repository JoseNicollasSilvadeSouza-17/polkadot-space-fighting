import Fighter from "../class/Fighter.js";
import randomWerewolf from "../utils/randomWerewolf.js";

const werewolfSkin = randomWerewolf();

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
    imageSrc: `./assets/images/characters/werewolves/${werewolfSkin}/idle.png`,
    framesMax: 8,
    scale: 1.5,
    offsetPosition: {
        x: 0,
        y: 46
    },
    sprites: {
        idle: {
            imageSrc: `./assets/images/characters/werewolves/${werewolfSkin}/idle.png`,
            framesMax: 8
        },
        walk: {
            imageSrc: `./assets/images/characters/werewolves/${werewolfSkin}/walk.png`,
            framesMax: 11
        },
        dead: {
            imageSrc: `./assets/images/characters/werewolves/${werewolfSkin}/dead.png`,
            framesMax: 2
        },
        attack: {
            imageSrc: `./assets/images/characters/werewolves/${werewolfSkin}/attack.png`,
            framesMax: 6
        },
        jump: {
            imageSrc: `./assets/images/characters/werewolves/${werewolfSkin}/jump.png`,
            framesMax: 11
        }
    }
});

export default player;