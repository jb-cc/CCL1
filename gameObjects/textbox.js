class Textbox extends ImageObject {
    text;
    textX;
    textY;
    constructor(name, x, y, width, height, text, textX, textY) {
        super(name, x, y, width, height);
        console.log("Textbox has been created");
        this.useGravity = false;
        this.addAnimationInformation("rotate", 0, 10);
        this.setCurrentAnimationByName("rotate");
        this.isActive = false;
        this.text = text;
        this.textX = textX;
        this.textY = textY;

      }
    

    
      draw() {
            gameManager.canvas.drawLayer.beginPath();
            gameManager.canvas.drawLayer.fillStyle = "#FFFFFF";
            gameManager.canvas.drawLayer.strokeStyle = "#000000";
            gameManager.canvas.drawLayer.rect(this.position.x, this.position.y, this.dimensions.width, this.dimensions.height);
            gameManager.canvas.drawLayer.fill();
            gameManager.canvas.drawLayer.stroke();
            gameManager.canvas.drawLayer.font = "15px Arial";
            gameManager.canvas.drawLayer.fillStyle = "#000000";
            gameManager.canvas.drawLayer.strokeStyle = " #000000";
            gameManager.canvas.drawLayer.fillText(this.text, this.textX,this.textY);
            gameManager.canvas.drawLayer.closePath();
      //   if (this.isLoaded) {
      //     this.changeFrameOfCurrentAnimation();
      //     gameManager.canvas.drawLayer.beginPath();
      //     gameManager.canvas.drawLayer.drawImage(
      //       this.image,
      //       this.currentSourceX,
      //       this.currentSourceY,
      //       this.dimensions.width,
      //       this.dimensions.height,
      //       this.position.x,
      //       this.position.y,
      //       this.dimensions.height,
      //       this.dimensions.width
      //     );
      //     gameManager.canvas.drawLayer.closePath();
      //   }
       }
      
}