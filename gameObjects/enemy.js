class Enemy extends ImageObject {
  changeMoveDirectionPossibility = 1;
  changeMoveDirectionStep = 0.01;
  moveVelocity = Math.random() * 1.35;
  currentAnimation = "";
  moveBy = {
    x: 1 * this.moveVelocity,
    y: 0,
  };
  moveRandom = 1;
  maxHealth = 3;
  healthCounter = this.maxHealth;
  damageCounter = 0;
  damage = false;

  constructor(name, x, y, width, height, src) {
    super(name, x, y, width, height, src);
    console.log(`${this.name} has been created`);
    this.useGravity = true;
    this.mass = 0.6;
    // this.src = "images/CREW_SPRITESHEET.png";
    this.setBoundaryOffsets(22, -22, 13, -3);

    this.addAnimationInformation("walk_left", 15, 24);
    this.addAnimationInformation("walk_right", 5, 14);
    this.addAnimationInformation("attack_left", 40, 54);
    this.addAnimationInformation("attack_right", 25, 39);
  }

  update() {
    this.checkHealth();
    this.checkForHits();
    if (door.doorOpen == false) {
      this.walkRandom();
    } else this.walkToPlayerInRange();
  }

  checkHealth() {
    if (this.healthCounter <= 0) {
      this.isActive = false;
    }
  }
  walkRandom() {
    // default walking left and right while prison door is closed
    let result = Math.random();

    //  Right: 1 / Left: -1
    this.moveRandom *= result <= this.changeMoveDirectionStep ? -1 : 1;

    this.position.x += this.moveBy.x * this.moveRandom;
    this.position.y += this.moveBy.y;

    let animationName = this.moveRandom < 0 ? "walk_left" : "walk_right";
    this.setCurrentAnimationByName(animationName);
  }

  walkToPlayerInRange() {
    let distance = Math.abs(this.position.x - player.position.x);

    if (distance > 300) {
      this.walkRandom();
      console.log("player out of range");
      return;
    } else {
      console.log("player in range");
    }
    if (distance < 2) {
      return;
    }

    //  Right: 1 / Left: -1
    let side = this.position.x < player.position.x ? 1 : -1;

    this.position.x += this.moveBy.x * side;
    this.position.y += this.moveBy.y;

    let animationName =
      distance < 20
        ? side < 0
          ? "attack_left"
          : "attack_right"
        : side < 0
        ? "walk_left"
        : "walk_right";
    this.setCurrentAnimationByName(animationName);
    this.currentAnimation = animationName;
  }

  checkForHits() {
    let distanceX = Math.abs(this.position.x - player.position.x);
    let distanceY = Math.abs(this.position.y - player.position.y);
    if (distanceX <= 25 && distanceY <= 5) {
      if (player.damage == false) {
        setTimeout(() => {
          player.healthCounter--;
          player.damageCounter++;

          console.log("player Health: " + player.healthCounter);
        }, 300);

        player.damage = true;
        setTimeout(() => {
          player.damage = false;
        }, 1500);
      }
    }
  }
  // onCollision(otherObject) {
  //       if (otherObject.name == "player" || otherObject.name == "captain" || otherObject.name == "crew") {
  //           otherObject.restorePosition();
  //       }
  //   }
}
