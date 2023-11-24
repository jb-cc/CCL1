class Guard extends ImageObject {
    constructor(name, x, y, width, height, src) {
        super(name, x, y, 48, 48, "images/GUARD_SPRITESHEET.png");
        console.log("Guard has been created");
        this.useGravity = false;
        this.addAnimationInformation("static", 0, 0);
        this.setCurrentAnimationByName("static");
        this.isRigid= true;
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
          console.log(otherObject.name + "collision with guard");
          console.log("Coin Counter: "+otherObject.coinCounter);
          if (otherObject.coinCounter == 6){
            this.isRigid = false;
            console.log(this.isRigid);
            console.log("Coin Counter: "+otherObject.coinCounter +", guard rigit?: "+ this.isRigid);
            box2.isActive=true;
            setTimeout(()=>{
              box2.isActive=false;
            },4000);
          } else {
            otherObject.restorePosition();
            console.log("not enough coins");
           box1.isActive=true;
            setTimeout(()=>{
              box1.isActive=false;
            },4000);
          }
        }
      }
}