//this has to be done always at first - for any game!
let gameManager = new GameManager();

//this has to be done always at first - for any game!
new GameManager();


let canvas = new Canvas("canvas");
//let pacMan = new PlayerFigure("pacMan", 210, 210, 80, 80);
let player = new PlayerFigure(
  "player",
  280,
  640,
  48,
  48,
  "images/PLAYER_SPRITESHEET.png"
);
player.setBoundaryOffsets(22, -22, 13, -3);
player.addAnimationInformation("walk_up", 2, 2);
player.addAnimationInformation("walk_left", 15, 24);
player.addAnimationInformation("walk_right", 5, 14);
player.addAnimationInformation("walk_down", 2, 2);

player.addAnimationInformation("idle_up", 2, 2);
player.addAnimationInformation("idle_left", 3, 3);
player.addAnimationInformation("idle_right", 1, 1);
player.addAnimationInformation("idle_down", 2, 2);

player.addAnimationInformation("attack_left", 40, 54);
player.addAnimationInformation("attack_right", 25, 39);

let captain = new Captain("captain", 100, 178, 48, 48, "images/CAPTAIN_SPRITESHEET.png");
let crew1 = new Enemy ("crew" ,400, 178, 48, 48, "images/CREW_SPRITESHEET.png");
let crew2 = new Enemy ("crew" ,500, 178, 48, 48, "images/CREW_SPRITESHEET.png");
let crew3 = new Enemy ("crew" ,600, 178, 48, 48, "images/CREW_SPRITESHEET.png");
let crew4 = new Enemy ("crew" ,800, 178, 48, 48, "images/CREW_SPRITESHEET.png");
let crew5 = new Enemy ("crew" ,900, 178, 48, 48, "images/CREW_SPRITESHEET.png");
let crew6 = new Enemy ("crew" ,950, 178, 48, 48, "images/CREW_SPRITESHEET.png");





function setupYummyDots() {
  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      new YummyDot("nomNom", x * 100 + 40, y * 100 + 40, 20, 20);
    }
  }
}

function setupWalls() {
  for (let y = 0; y < wallMap.length; y++) {
    for (let x = 0; x < wallMap[y].length; x++) {
      if (wallMap[y][x] == 1) {
        new Wall("obstacle", x * 100, y * 100, 100, 100);
      }
    }
  }
}

// setupYummyDots();
//deck of ship
new Wall("shipfloor", 236.5, 719, 939, 10);
new Wall("shipdeck_left1", 54, 269, 140, 10);
new Wall("shipdeck_left2", 202, 280, 110, 10);
new Wall("shipdeck_left3", 338, 310, 219, 10);
new Wall("shipdeck_left_top_wall_bugfix", 436, 316, 123, 20);
new Wall("shipdeck_middle1", 586, 342, 151, 12);
new Wall("shipdeck_middle2", 781, 342, 277, 12);
new Wall("shipdeck_right", 1078, 315, 368, 12);
new Wall("shipdeck__right_top_wall_bugfix", 1291, 323, 144, 20);
//shipborder
new Wall("border_left", 0, 0, 53, 768);
new Wall("border_right", 1435, 0, 100, 768);

// ship walls
// all walls are counted from bottom to top
// chamber 1
new Wall("chamber1_wall_left", 226, 676, 16, 50);
new Wall("chamber1_wall_left2", 209, 542, 10, 127);
new Wall("chamber1_wall_left2mini", 219, 655, 10, 16);
new Wall("chamber1_wall_left3", 160, 514, 22, 20);
new Wall("chamber1_wall_left4", 150, 500, 22, 10);
new Wall("chamber1_wall_left5", 155, 510, 22, 5);
new Wall("chamber1_wall_left6", 131, 479, 37, 21);
new Wall("chamber1_wall_left7", 113, 343, 16, 141);
new Wall("chamber1_wall_left8", 96, 278, 19, 58);
new Wall("chamber1_ladder_wall", 376, 402, 10, 317);
new Wall("chamber1_top_wall_bugfix", 114, 276, 89, 14);
// chamber 2
new Wall("chamber2_ladder_wall", 431, 321, 10, 350);
new Wall ("ladder_invisible_bugfix_wall",480,526,2,69)
new Wall("chamber2_treasureroom_left", 713, 622, 8, 97);
new Wall("chamber2_treasureroom_right", 881, 622, 8, 97);
new Wall("chamber2_treasureroom_top", 690, 615, 199, 8);
new Wall("chamber2_wall_middle1", 789, 546, 8, 69);
new Wall("chamber2_wall_middle2", 739, 538, 108, 8);
new Wall("chamber2_wall_middle3", 724, 523, 25, 8);
new Wall("chamber2_wall_middle4", 724, 503, 8, 20);
new Wall("chamber2_wall_top1", 784, 435, 8, 56);
new Wall("chamber2_wall_top2", 682, 427, 314, 10);
new Wall("chamber2_wall_top3", 683, 353, 8, 74);

// chamber 3
new Wall("chamber3_wall_left1", 881, 555, 8, 60);
new Wall("chamber3_wall_left2", 836, 555, 52, 8);
new Wall("chamber3_wall_right1", 1155, 628, 8, 90);
new Wall("chamber3_wall_right2", 1087, 621, 82, 8);
new Wall("chamber3_wall_right3", 1157, 602, 82, 8);
new Wall("chamber3_wall_right4", 1230, 579, 115, 8);
new Wall("chamber3_wall_right5", 1337, 532, 8, 55);
new Wall("chamber3_wall_right6", 932, 526, 352, 8);
new Wall("chamber3_wall_right6", 1324, 526, 41, 8);
new Wall("chamber3_wall_right7", 1356, 469, 8, 64);
new Wall("chamber3_wall_right8", 1171, 505, 50, 8);
new Wall("chamber3_wall_right9", 1213, 483, 49, 8);
new Wall("chamber3_wall_right10", 1249, 462, 134, 8);
new Wall("chamber3_wall_right11", 1373, 430, 8, 40);
new Wall("chamber3_wall_right12", 1380, 325, 8, 100);
new Wall("chamber3_wall_top1", 970, 353, 8, 25);

// all platforms are counted from bottom to top
// platforms chamber 1
new Obstacle("platform1_chamber1", 224, 670, 45, 6);
new Obstacle("platform2_chamber1", 297, 632, 38, 6);
new Obstacle("platform3_chamber1", 441, 636, 49, 6);
new Obstacle("platform4_chamber1", 334, 598, 43, 6);
new Obstacle("platform5_chamber1", 262, 573, 30, 6);
new Obstacle("platform6_chamber1", 176, 535, 51, 6);
new Obstacle("platform7_chamber1", 302, 513, 39, 6);
new Obstacle("platform8_chamber1", 324, 466, 53, 6);
new Obstacle("platform9_chamber1", 224, 427, 86, 6);
new Obstacle("platform10_chamber1", 163, 381, 49, 6);
new Obstacle("platform11_chamber1", 351, 402, 26, 6);
new Obstacle("platform12_chamber1", 115, 336, 45, 6);
// platforms chamber 2
new Obstacle("platform1_chamber2", 606, 681, 43, 6);
new Obstacle("platform2_chamber2", 502, 661, 48, 6);
new Obstacle("platform3_chamber2", 580, 535, 69, 6);
new Obstacle("platform4_chamber2", 478, 520, 24, 6);
new Obstacle("platform5_chamber2", 669, 502, 56, 6);
new Obstacle("platform6_chamber2", 532, 495, 49, 6);
new Obstacle("platform7_chamber2", 612, 463, 44, 6);
new Obstacle("platform8_chamber2", 513, 447, 31, 6);
new Obstacle("platform9_chamber2", 441, 418, 31, 6);
// platforms chamber 3
new Obstacle("platform1_chamber3", 1084, 681, 28, 6);
new Obstacle("platform2_chamber3", 889, 669, 56, 6);
new Obstacle("platform3_chamber3", 1002, 645, 55, 6);
new Obstacle("platform4_chamber3", 985, 606, 28, 6);
new Obstacle("platform5_chamber3", 922, 589, 55, 6);
// platforms chamber 4
new Obstacle("platform1_chamber4", 1030, 445, 48, 6);
new Obstacle("platform2_chamber4", 1131, 442, 52, 6);
new Obstacle("platform3_chamber4", 1336, 424, 49, 6);
new Obstacle("platform4_chamber4", 1242, 409, 50, 6);

// platforms deck
new Obstacle ("platform_deck1", 594, 279, 69, 8)
new Obstacle ("platform_deck1", 973, 286, 69, 8)
new Obstacle ("platform_deck1", 1079, 243, 48, 8)

// LADDERS

 new Ladder("ladder1", 388, 393, 38, 324);
 new Ladder("ladder2", 441, 520, 34, 115);
 new Ladder("ladder3", 738, 342, 39, 81);
 new Ladder("ladder4", 1287, 525, 36, 50);
 
// fix for issue where you could not move up when JUMPING into a ladder
 new Wall("chamber2_top_wall_bugfix", 684, 434, 300, 18);
 new Wall("chamber4_wall_bugfix_left", 731, 355, 2, 30);
 new Wall("chamber4_wall_bugfix_right", 783, 355, 2, 30);
 

// Gravity blocks
//ladder 1
new GravityBlock ("ladder1_startBlock",346,326,20,80);
new GravityBlock ("ladder1_endBlock",460,650,43,69);
new GravityBlock ("ladder1_endBlock2",440,641,44,15);
new GravityBlock ("ladder1_topBlock",355,321,75,25);
//ladder 2
new GravityBlock ("ladder2_startBlock",490,527,20,110);
new GravityBlock ("ladder2_endBlock",483,468,24,54);
new GravityBlock ("ladder2_topBlock",442,467,52,10);
//ladder 3
new GravityBlock ("ladder3_startBlock",1237,536,31,41);
new GravityBlock ("ladder3_endBlock",1265,473,17,51);
new GravityBlock ("ladder3_endBlock2",1327,484,22,41);
new GravityBlock ("ladder3_topBlock",1265,472,90,5);
//ladder 4
new GravityBlock ("ladder4_startBlock",787,356,33,70);
new GravityBlock ("ladder4_startBlock2",693,357,33,68);
new GravityBlock ("ladder4_endBlock",687,279,34,60);
new GravityBlock ("ladder4_endBlock2",791,282,34,60);
new GravityBlock ("ladder4_topBlock",687,256,139,35);

// COINS

let coin1 = new Coin("coin", 133, 450);
let coin2 = new Coin("coin", 116, 305);
let coin3 = new Coin("coin", 440, 386);
let coin4 = new Coin("coin", 440, 605);
let coin5 = new Coin("coin", 893, 639);
let coin6 = new Coin("coin", 1322, 495);


// STAIRS

// stairs 0
new Stairs ("stairs0_step1",189,273,16,20);
new Stairs ("stairs0_step2", 182,267,16,20);


// stairs 1
new Stairs ("stairs1_step0", 291,278,24,10);
new Stairs ("stairs1_step1", 331,310,15,10);
new Stairs ("stairs1_step2", 324,305,15,10);
new Stairs ("stairs1_step3", 318,295,13,10);
new Stairs ("stairs1_step4", 301,287,20,10);
new Stairs ("stairs1_step5", 293,280,20,10);
// stairs 2
new Stairs ("stairs2_step1", 574,337,13,10);
new Stairs ("stairs2_step2", 566,330,11,10);
new Stairs ("stairs2_step3", 556,321,11,10);
new Stairs ("stairs2_step4", 539,314,24,14);
new Stairs ("stairs2_step5", 539,310,20,14);
// stairs 3
new Stairs ("stairs3_step1", 1055,337,11,20);
new Stairs ("stairs3_step2", 1063,330,18,20);
new Stairs ("stairs3_step3", 1071,323,22,20);
new Stairs ("stairs3_step4", 1076,313,30,20);

// Visible Coin Counter
new CoinCounter("coinCounter", 10,25);

// Health Bar



let crew1Health = new HealthBar ("crew1Health", 1300, 30, 50, 5, crew1, "rgb(255,0,0)" );
let crew2Health = new HealthBar ("crew1Health", 1300, 30, 50, 5, crew2, "rgb(255,0,0)" );
let crew3Health = new HealthBar ("crew1Health", 1300, 30, 50, 5, crew3, "rgb(255,0,0)" );
let crew4Health = new HealthBar ("crew1Health", 1300, 30, 50, 5, crew4, "rgb(255,0,0)" );
let crew5Health = new HealthBar ("crew1Health", 1300, 30, 50, 5, crew5, "rgb(255,0,0)" );
let crew6Health = new HealthBar ("crew1Health", 1300, 30, 50, 5, crew6, "rgb(255,0,0)" );
let captainHealth = new HealthBar ("captainHealth", 1300, 30, 50, 5, captain, "rgb(255,215,0)" );
let playerHealth = new HealthBar ("playerHealth", 1300, 30, 50, 5, player, "rgb(255,255,255)");

// guard
new Guard ("guard",785,380 )
new Guard ("guard",700,380 )



// prisondoor
let door =new Prisondoor ("door",738,333,102,22 );

// textbox
let box1 =new Textbox ("textbox1",644,351,448,32, "Ye stinky bastard, give me doubloons or ye will rot in here forever",650, 372 );
let box2 =new Textbox ("textbox2",644,351,448,32, "Aye, tanks fer the doubloons scallywag. ye can leave the prison", 650, 372 );

// ====================================================================================
// start screen setup
// ====================================================================================

const audio = document.getElementById("audio");
function setVolume(volume) {
  audio.volume = volume;
}



const startBtn = document.getElementById("startBtn");
const controlBtn = document.getElementById("controlBtn");
const start1 = document.getElementById("start1");
const start2 = document.getElementById("start2");
const start3 = document.getElementById("start3");
const control1 = document.getElementById("control1");
const control2 = document.getElementById("control2");
const backBtn = document.getElementById("backBtn");
const lose = document.getElementById("lose");
const win = document.getElementById("win");

startBtn.addEventListener('mouseover', (event) => showStart2());
controlBtn.addEventListener('mouseover', (event) => showStart3());
backBtn.addEventListener('mouseover', (event) => showBack());
startBtn.addEventListener('click', (event) => startGame());
controlBtn.addEventListener('click', (event) => goToControls());
backBtn.addEventListener('click', (event) => goBackToStart1());
backBtn.disabled = true;
backBtn.style.display = 'none';


function showStart2 (){
  control1.style.display = 'none';
   control2.style.display = 'none';
   start1.style.display = 'none';
   start2.style.display = 'block';
   start3.style.display = 'none';
   startBtn.disabled = false;
   controlBtn.disabled = false;
   backBtn.disabled = true;
   console.log("showStart2 was called")
}
function showStart3 (){
  control1.style.display = 'none';
  control2.style.display = 'none';
  start1.style.display = 'none';
  start2.style.display = 'none';
  start3.style.display = 'block';
  startBtn.disabled = false;
  controlBtn.disabled = false;
  backBtn.disabled = true;
  console.log("showStart3 was called")
}
function showBack (){
  control1.style.display = 'none';
  control2.style.display = 'block';
  start1.style.display = 'none';
  start2.style.display = 'none';
  start3.style.display = 'none';
  startBtn.disabled = true;
   controlBtn.disabled = true;
   backBtn.disabled = false;
  console.log("showBack was called")
}

function startGame(){
  control1.style.display = 'none';
  control2.style.display = 'none';
  start1.style.display = 'none';
  start2.style.display = 'none';
  start3.style.display = 'none';
  startBtn.disabled = true;
  controlBtn.disabled = true;
  setVolume(0.2);
  audio.muted = false;
  console.log("startGame was called")
}
function goToControls(){
  control1.style.display = 'block';
  control2.style.display = 'none';
  start1.style.display = 'none';
  start2.style.display = 'none';
  start3.style.display = 'none';
  startBtn.disabled = true;
  controlBtn.disabled = true;
  backBtn.disabled = false;
  backBtn.style.display = 'block';
  console.log("goToControls was called")
}
function goBackToStart1 (){
  control1.style.display = 'none';
  control2.style.display = 'none';
  start1.style.display = 'block';
  start2.style.display = 'none';
  start3.style.display = 'none';
  startBtn.disabled = false;
  controlBtn.disabled = false;
  backBtn.disabled = true;
  backBtn.style.display = 'none';
  console.log("goBackToStart1 was called")
}

requestAnimationFrame(gameManager.gameLoop);