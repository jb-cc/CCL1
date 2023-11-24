class CoinCounter extends ImageObject {
    constructor(name, x, y,) {
        super(name, x, y, 96, 96, "images/counterCoin.png");
        console.log("Coin has been created");
        this.useGravity = false;
        this.addAnimationInformation("static", 0, 0);
        this.setCurrentAnimationByName("static");
      }
      draw() {
        if (this.isLoaded) {
          this.changeFrameOfCurrentAnimation();
          gameManager.canvas.drawLayer.beginPath();
          gameManager.canvas.drawLayer.drawImage(
            this.image,
            this.currentSourceX,
            this.currentSourceY,
            this.dimensions.width,
            this.dimensions.height,
            this.position.x,
            this.position.y,
            this.dimensions.width,
            this.dimensions.height
          );
          gameManager.canvas.drawLayer.font = "30px Arial";
          gameManager.canvas.drawLayer.fillStyle = "#000000";
          gameManager.canvas.drawLayer.strokeStyle = " #000000";
          gameManager.canvas.drawLayer.fillText("x "+ player.coinCounter, 100,80);
          gameManager.canvas.drawLayer.closePath();
          
        }
      }
}