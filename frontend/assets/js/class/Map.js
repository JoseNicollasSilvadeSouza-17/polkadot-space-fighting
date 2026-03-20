export default class Map {
    constructor({
        position,
        imageSrc
    }) {
        this.position = position,
        this.image = new Image(),
        this.image.src = imageSrc
    }

    draw(context) {
        context.drawImage(
            this.image,
            this.position.x,
            this.position.y
        );
    }

    update() {
        this.draw();
    }
}