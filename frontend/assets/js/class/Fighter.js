import { HEIGHT } from "../utils/config.js";
import Map from "./Map.js";

export default class Fighter extends Map {
    width = 52;
    height = 150;

    constructor({
        position,
        velocity,
        offsetAttack,
        health = 100,
        imageSrc,
        framesMax = 1,
        scale = 1,
        offsetPosition = {
            x: 0,
            y: 0
        },
        sprites
    }) {
        super({
            position,
            imageSrc
        });

        this.velocity = velocity;
        this.attackBox = {
            position: {
                x: this.position.x,
                y: this.position.y
            },
            offset: offsetAttack,
            width: 100,
            height: 50
        },
        this.isAttacking = true,
        this.health = health,
        this.framesMax = framesMax,
        this.scale = scale,
        this.framesCurrent = 0,
        this.framesElapsed = 0,
        this.framesHold = 5,
        this.offsetPosition = offsetPosition,
        this.sprites = sprites

        for(const sprite in sprites) {
            sprites[sprite].image = new Image();
            sprites[sprite].image.src = sprites[sprite].imageSrc;
        }
    }

    draw(context) {
        context.fillStyle = "#ff2670";

        context.drawImage(
            this.image,
            this.framesCurrent * (this.image.width / this.framesMax),
            0,
            this.image.width / this.framesMax,
            this.image.height,
            this.position.x - this.offsetPosition.x,
            this.position.y - this.offsetPosition.y,
            (this.image.width / this.framesMax) * this.scale,
            this.image.height * this.scale
        );

        if(this.isAttacking) {
            context.fillStyle = "#05f";
            context.fillRect(
                this.attackBox.position.x,
                this.attackBox.position.y,
                this.attackBox.width,
                this.attackBox.height
            );
        }
    }

    animateFrame() {
        this.framesElapsed++;

        if(this.framesElapsed % this.framesHold === 0) {
            if(this.framesCurrent < this.framesMax) {
                this.framesCurrent++;
            } else {
                this.framesCurrent = 0;
            }
        }
    }

    update(context, HEIGHT, gravity) {
        this.draw(context);

        this.animateFrame();

        this.attackBox.position.x = this.position.x - this.attackBox.offset.x;
        this.attackBox.position.y = this.position.y;

        this.position.y += this.velocity.y;
        this.position.x += this.velocity.x;

        if(this.position.y + this.height + this.velocity.y >= HEIGHT) {
            this.velocity.y = 0;
        } else {
            this.velocity.y += gravity;
        }
    }

    attack() {
        this.isAttacking = true;

        setTimeout(() => {
            this.isAttacking = false;
        }, 500);
    }

    switchSprites(sprite) {
        if(this.image === this.sprites.attack.image && this.framesCurrent < this.sprites.attack.framesMax - 1) {
            return;
        }

        switch(sprite) {
            case "walk": {
                if(this.image !== this.sprites.walk.image) {
                    this.image = this.sprites.walk.image;
                    this.framesMax = this.sprites.walk.framesMax;
                }
                break;
            }

            case "dead": {
                if(this.image !== this.sprites.dead.image) {
                    this.image = this.sprites.dead.image;
                    this.framesMax = this.sprites.dead.framesMax;
                }
                break;
            }
            
            case "attack": {
                if(this.image !== this.sprites.attack.image) {
                    this.image = this.sprites.attack.image;
                    this.framesMax = this.sprites.attack.framesMax;
                }
                break;
            }

            case "jump": {
                if(this.image !== this.sprites.jump.image) {
                    this.image = this.sprites.jump.image;
                    this.framesMax = this.sprites.jump.framesMax;
                }
                break;
            }

            case "idle": default: {
                if(this.image !== this.sprites.idle.image) {
                    this.image = this.sprites.idle.image;
                    this.framesMax = this.sprites.idle.framesMax;
                }
                break;
            }
        }
    }
}