class Coin extends ImageObject {
  constructor(name, x, y, width, height, src) {
    super(name, x, y, 32, 32, "images/coin-Sheet.png");
    console.log("Coin has been created");
    this.useGravity = false;
    this.addAnimationInformation("rotate", 0, 10);
    this.setCurrentAnimationByName("rotate");
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
      gameManager.canvas.drawLayer.closePath();
    }
  }
  onCollision(otherObject) {
    if (otherObject.name == "player") {
      console.log(otherObject.coinCounter);
      otherObject.coinCounter++;
      console.log(otherObject.coinCounter);
      this.isActive = false;
    }
  }
}
