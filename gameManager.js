class GameManager {
  //properties
  gameObjects = [];
  canvas = null;
  currentTimeStamp;
  previousTimeStamp;
  currentDeltaTime;
  timeHelper;

  constructor() {
    window.gameManager = this;
    window.gravityHelper = new GravityHelper();
    window.mouseHelper = new MouseHelper();
    console.log("gameManager created");
  }

  //functions
  gameLoop() {
    gameManager.currentTimeStamp = performance.now();
    gameManager.currentDeltaTime = gameManager.currentTimeStamp - gameManager.previousTimeStamp;
    gameManager.previousTimeStamp = gameManager.currentTimeStamp;
    gameManager.timeHelper += gameManager.currentDeltaTime;
    if (gameManager.timeHelper < 10) {
      requestAnimationFrame(gameManager.gameLoop);
    } else {
      gameManager.timeHelper = 0;

    canvas.drawLayer.clearRect(
      0,
      0,
      canvas.canvasHTMLElement.width,
      canvas.canvasHTMLElement.height
    );
    for (let gameLoopState = 0; gameLoopState < 5; gameLoopState++) {
      //gameLoopState 0 -> store positions of and update all objects
      //gameLoopState 1 -> check if the updated objects are colliding
      //gameLoopState 2 -> apply Gravity Forces to all objects (where useGravity == true)
      //gameLoopState 3 -> check if objects (after gravity) are hitting something
      //gameLoopState 4 -> apply changes after gravity, execute mousehandlers and finally: DRAW

      gameManager.gameObjects.forEach((gameObject) => {
        if (gameObject.isActive) {
          if (gameLoopState == 0) {
            gameObject.storePosition();
            gameObject.update();
          }
          if (gameLoopState == 1) {
            gameObject.currentGravityCollisionObject = null;
            gameManager.checkObjectsForCollisions(gameObject);
          }
          if (gameLoopState == 2 && gameObject.useGravity) {
            gravityHelper.applyGravityForces(gameObject, false);
          }
          if (gameLoopState == 3) {
            gameManager.checkObjectsForGravityCollisions(gameObject);
          }
          if (gameLoopState == 4) {
            if (gameObject.useGravity) {
              if (gameObject.currentGravityCollisionObject != null) {
                gravityHelper.applyGravityForces(gameObject, true);
                gravityHelper.applyGameObjectToHitPlatform(gameObject);
              } else {
                gameObject.isFalling = true;
              }
            }
            mouseHelper.checkObjectMouseEvent(gameObject);

            //gameObject.rotate();
            gameObject.draw();
            //gameObject.restoreCanvas();
          }
        }
      });
    }
    mouseHelper.recentMouseEvent = 0;
    requestAnimationFrame(gameManager.gameLoop);
  }
}

  checkObjectsForCollisions(object1) {
    for (
      let i = object1.gameObjectIndex + 1;
      i < gameManager.gameObjects.length;
      i++
    ) {
      let object2 = gameManager.gameObjects[i];
      if (object2.isActive) {
        //normal collision after update
        let collisionDetected = this.detectCollision(object1, object2);
        if (collisionDetected) {
          object1.onCollision(object2);
          object2.onCollision(object1);
        }
      }
    }
  }

  checkObjectsForGravityCollisions(object1) {
    for (
      let i = object1.gameObjectIndex + 1;
      i < gameManager.gameObjects.length;
      i++
    ) {
      let object2 = gameManager.gameObjects[i];
      if (object2.isActive && object2.isRigid && object1.useGravity) {
        gravityHelper.checkForGravityCollision(object1, object2);
      }
      if (object2.isActive && object1.isRigid && object2.useGravity) {
        gravityHelper.checkForGravityCollision(object2, object1);
      }
    }
  }

  detectCollision(object1, object2) {
    //overlap on x axis
    if (
      object1.boundaries.getLeftBoundary() <=
        object2.boundaries.getRightBoundary() &&
      object1.boundaries.getRightBoundary() >=
        object2.boundaries.getLeftBoundary()
    ) {
      //overlap on y axis
      if (
        object1.boundaries.getTopBoundary() <=
          object2.boundaries.getBottomBoundary() &&
        object1.boundaries.getBottomBoundary() >=
          object2.boundaries.getTopBoundary()
      ) {
        return true;
      }
    }
  }

  addGameObject(object) {
    this.gameObjects.push(object);
    object.gameObjectIndex = this.gameObjects.length - 1;
  }

  setCanvas(canvas) {
    this.canvas = canvas;
  }
}
