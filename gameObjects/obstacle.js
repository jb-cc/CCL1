class Obstacle extends GameObject {
    constructor(name, x, y, width, height) {
        super(name, x, y, width, height);
        this.isRigid = true;
    }

    draw() {
        //  gameManager.canvas.drawLayer.beginPath();
        //   gameManager.canvas.drawLayer.fillStyle = "#FFFFFF";
        //   gameManager.canvas.drawLayer.strokeStyle = "#000000";
        //   gameManager.canvas.drawLayer.rect(this.position.x, this.position.y, this.dimensions.width, this.dimensions.height);
        //   gameManager.canvas.drawLayer.fill();
        //   gameManager.canvas.drawLayer.stroke();
        //   gameManager.canvas.drawLayer.closePath();
    }
    onCollision(otherObject) {
        if (otherObject.name == "player" || otherObject.name == "captain" || otherObject.name == "crew") {
            otherObject.restorePosition();
        }
    }
}