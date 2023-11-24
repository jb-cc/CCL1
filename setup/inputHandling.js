function keyDown(eventInformation) {

	switch (eventInformation.key) {
		 case "w":
		 	if (player.isFalling || player.antiGravityForce > 0) {
	 		return;}
			if (player.useGravity) {player.startJump = true;} 
			else {
				player.moveBy.top = -2;
			}			
			break;
		case "a":
			if (player.moveBy.left != 0 || player.moveBy.top != 0) {
				return;
			}
			player.moveBy.top = 0;
			player.moveBy.left = -player.moveVelocity;
			player.setCurrentAnimationByName("walk_left");
			break;
		case "d":
			if (player.moveBy.left != 0 || player.moveBy.top != 0) {
				return;
			}
			player.moveBy.top = 0 ;
			player.moveBy.left = player.moveVelocity;
			player.setCurrentAnimationByName("walk_right");
			break;
		case "s":
			if (player.moveBy.left != 0 || player.moveBy.top != 0) {
				return;
			}
			player.moveBy.top = player.moveVelocity+1;
			player.moveBy.left = 0;
			player.setCurrentAnimationByName("walk_down");
			break;
		case " ":
			if (player.isFalling || player.antiGravityForce > 0) {
				return;}
			   if (player.useGravity) {player.startJump = true;} 
			   else {
				   player.moveBy.top = -2;
			   }
			break
		case "Enter":
			

			// console.log ("====================================================")
			// console.log("currentStartFrame: "+player.currentStartFrame)
			// 	console.log("walk_left.startFrame: " +player.animations["walk_left"].startFrame)
			// 	console.log("idle_left.startFrame: " +player.animations["idle_left"].startFrame)

			// 	console.log("walk_right.startFrame: " +player.animations["walk_right"].startFrame)
			// 	console.log("idle_right.startFrame: " +player.animations["idle_right"].startFrame)
			// 	console.log("attack_left startframe: "+player.animations["attack_left"].startFrame)
			player.isHitting = true;
			if (player.currentStartFrame === player.animations["walk_left"].startFrame || player.currentStartFrame === player.animations["idle_left"].startFrame || player.currentStartFrame === player.animations["attack_left"].startFrame ) {
				player.setCurrentAnimationByName("attack_left");
				console.log ("attack left");
				
				} 
			 if (player.currentStartFrame == player.animations["walk_right"].startFrame  || player.currentStartFrame === player.animations["idle_right"].startFrame || player.currentStartFrame === player.animations["attack_right"].startFrame) {		// Having a "else if" here changes the bugs direction, but does not remove it
				console.log("currentStartFrame before right attack: "+player.currentStartFrame)
					player.setCurrentAnimationByName("attack_right"); 
					console.log ("attack right");
			} 
			break;
	}
}
window.addEventListener("keydown", keyDown);

function keyUp(eventInformation) {
	switch (eventInformation.key) {
		case "w":
		    player.moveBy.top = 0;
			
			break;
		case "a":
			
			player.moveBy.left = 0;
			player.setCurrentAnimationByName("idle_left");			
			break;
		case "d":
			
			player.moveBy.left = 0;			
			player.setCurrentAnimationByName("idle_right");			
			break;
		case "s":
			player.moveBy.top = 0;
						
			player.setCurrentAnimationByName("idle_down");			
			break;
		case " ":
			player.moveBy.top = 0;
			
			break;
		case "Enter":		
		player.isHitting = false;

		if(player.hitTimeout)
			clearTimeout(player.hitTimeout);

		player.hitTimeout = setTimeout(() => {
			if (player.currentStartFrame == player.animations["attack_left"].startFrame) {
				player.setCurrentAnimation(40,40); // idle with sword
				player.currentAnimationName = ("");
				console.log ("----------------");
				console.log ("attack idle left");				
				} 
			if (player.currentStartFrame == player.animations["attack_right"].startFrame) {
				player.setCurrentAnimation(25,25); // idle with sword		
				player.currentAnimationName = ("");	
				console.log ("---------------");
				console.log ("attack idle right");				
				}  else {
				return;
			}
		}, 400);
			
			break;
	}
}
window.addEventListener("keyup", keyUp);
