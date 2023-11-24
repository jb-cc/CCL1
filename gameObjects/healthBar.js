class HealthBar extends GameObject {
    constructor(name, x, y, width, height, figure, colorOfHealthBar) {
        super(name, x, y, width, height);
        this.isRigid = false;
        this.useGravity = false;
        this.figure= figure;
        this.colorOfHealthBar = colorOfHealthBar;
        console.log('HealthBar has been created');
    }

    update() {
        this.position.x = this.figure.position.x;
        this.position.y = this.figure.position.y-10;
      }
    
    draw() {
                    if (this.figure.isActive== true && door.doorOpen == true) {
                     gameManager.canvas.drawLayer.beginPath();
                    gameManager.canvas.drawLayer.fillStyle = "rgb(0, 0, 0)";
                    gameManager.canvas.drawLayer.strokeStyle = "#000000";
                    gameManager.canvas.drawLayer.rect(this.position.x, this.position.y, this.dimensions.width, this.dimensions.height);
                    gameManager.canvas.drawLayer.fill();
                    gameManager.canvas.drawLayer.stroke();
                    gameManager.canvas.drawLayer.closePath();

                    gameManager.canvas.drawLayer.beginPath();
                    gameManager.canvas.drawLayer.fillStyle = this.colorOfHealthBar;
                    gameManager.canvas.drawLayer.strokeStyle = "#000000";
                    gameManager.canvas.drawLayer.rect(this.position.x /*+(this.figure.damageCounter*2)*/, this.position.y, 50*(this.figure.healthCounter/this.figure.maxHealth), this.dimensions.height);
                    gameManager.canvas.drawLayer.fill();
                    gameManager.canvas.drawLayer.stroke();
                    gameManager.canvas.drawLayer.closePath();
                }
        
      }

}