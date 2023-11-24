class Prisondoor extends ImageObject {
    constructor(name, x, y, width, height, src) {
        super(name, x, y, 102,22, "images/gitter.png");
        console.log("Prisondoor has been created");
        this.useGravity = false;
        this.addAnimationInformation("static", 0, 0);
        this.setCurrentAnimationByName("static");
        this.isRigid= true;
        this.isActive=true;
        
      }
      doorOpen = false;
    
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
          console.log(otherObject.name + "collision with Prisondoor");
          console.log("Coin Counter: "+otherObject.coinCounter);
          if (otherObject.coinCounter == 6){
            this.isActive = false;
            this.doorOpen = true;
            console.log(this.isRigid);
            console.log("Coin Counter: "+otherObject.coinCounter +", Door rigit?: "+ this.isRigid);
            // document.getElementById("win").style.display = "block"
        
          } else {
            otherObject.restorePosition();
            console.log("not enough coins");
           
          }
        }
      }
}
