
class PlayerFigure extends ImageObject {
    moveBy = {
	    "left": 0,
	    "top": 0
    };

    moveVelocity = 2;
    startJump = false;
    coinCounter = 0;
    maxHealth = 20;
    healthCounter = this.maxHealth;
    
    damageCounter = 0;
    damage = false;
    isHitting = false;

    constructor(name, x, y, width, height, src) {
        super(name, x, y, width, height, src);
        console.log("PlayerFigure has been created");
        this.useGravity = true;
        this.mass = 0.5;
    }

    update() {
        this.position.x += this.moveBy.left;
        this.position.y += this.moveBy.top;
        this.checkWorldPostion();
        this.checkForHits(captain);
        this.checkForHits(crew1);
        this.checkForHits(crew2);
        this.checkForHits(crew3);
        this.checkForHits(crew4);
        this.checkForHits(crew5);
        this.checkForHits(crew6);
        if (this.startJump) {
            this.addAntiGravityForce(70);
            this.startJump = false;
        }
        if (this.healthCounter <=0) {
            lose.style.display = "block";
        }
        
    }
    
    checkWorldPostion() {
        if (this.boundaries.getBottomBoundary() <= gameManager.canvas.canvasBoundaries.top) {
            this.position.y = gameManager.canvas.canvasBoundaries.bottom;
        }
        else if (this.boundaries.getTopBoundary() >= gameManager.canvas.canvasBoundaries.bottom) {
            this.position.y = gameManager.canvas.canvasBoundaries.top - this.dimensions.height;
        }
        else if (this.boundaries.getRightBoundary() <= gameManager.canvas.canvasBoundaries.left) {
            this.position.x = gameManager.canvas.canvasBoundaries.right;
        }
        else if (this.boundaries.getLeftBoundary() >= gameManager.canvas.canvasBoundaries.right) {
            this.position.x = gameManager.canvas.canvasBoundaries.left - this.dimensions.width;
        }
    }

    
    checkForHits(enemy){
       let distanceX = Math.abs(this.position.x - enemy.position.x);
       let distanceY = Math.abs(this.position.y - enemy.position.y);
       if (distanceX <= 35 && distanceY <=5 && this.isHitting == true) {
        if (enemy.damage == false) {
            setTimeout(() => {
                enemy.healthCounter--;
                console.log("enemy Health: " +enemy.healthCounter);
            }, 300);
            
            
            enemy.damage = true;
            setTimeout(() => {
                enemy.damage = false;
            }, 1500);
       }
    }
      
    }
    changeFrameOfCurrentAnimation() {
        this.currentAnimationFrameDuration++;
        if (this.currentAnimationFrameDuration < this.animationDurationPerFrame) {
          return;
        }
        this.currentAnimationFrameDuration = 0;
        if (this.currentAnimationFrame > this.currentEndFrame) {
          this.currentAnimationFrame = this.currentStartFrame;
          return;
        }
        let currentRow = Math.floor(this.currentAnimationFrame / this.columns);
        let currentColumn = this.currentAnimationFrame % this.columns;
        this.currentSourceY = currentRow * this.dimensions.height;
        this.currentSourceX = currentColumn * this.dimensions.width;
        this.currentAnimationFrame++;
      }
}
