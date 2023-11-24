class Ladder extends Obstacle {
    constructor(name, x, y, width, height) {
        super(name, x, y, width, height);
        
    }
    draw() {
        //   gameManager.canvas.drawLayer.beginPath();
        //   gameManager.canvas.drawLayer.fillStyle = "rgba(32, 45, 21, 0.8)";
        //   gameManager.canvas.drawLayer.strokeStyle = "#000000";
        //   gameManager.canvas.drawLayer.rect(this.position.x, this.position.y, this.dimensions.width, this.dimensions.height);
        //   gameManager.canvas.drawLayer.fill();
        //   gameManager.canvas.drawLayer.stroke();
        //   gameManager.canvas.drawLayer.closePath();   
    }
    onCollision(otherObject) {
        if (otherObject.name == "player" || otherObject.name == "captain") {
            otherObject.useGravity = false;
        }

    }
}