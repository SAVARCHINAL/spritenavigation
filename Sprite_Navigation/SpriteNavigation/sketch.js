/***********************************************************************************
  Sprite Navigation

  Simple use of the p5.play library
------------------------------------------------------------------------------------
	To use:
	Add this line to the index.html

  <script src="p5.timer.js"></script>
***********************************************************************************/

// This is a 'sprite' which we can move
var ghost;
var speed = 10;

// The is a static sprite
var star;
var starImg;

const W_KEY = 87;
const S_KEY = 83;
const D_KEY = 68;
const A_KEY = 65;


function preload() {
  starImg = loadImage('assets/fullStar.png');
}
// Setup code goes here
function setup() {
  createCanvas(windowWidth, windowHeight);

  // create a sprite with dimensions
  ghost = createSprite(400, 150);
  box = createSprite(300, 200);

  // This is a *numbered* sequence of PNG files
  // We add animation to different sprites
  ghost.addAnimation('floating', 'assets/ghost_standing0001.png', 'assets/ghost_standing0002.png');
 box.addAnimation('floating', 'assets/girl2.png', 'assets/girl3.png','assets/girl4.png','assets/girl5.png','assets/girl6.png');
  // create a star in the middle of the screen
  //star = createSprite(width/2, height/2);
  //star.addImage('star', starImg);

  frameRate(30);
 }

// Draw code goes here
function draw() {
  // could draw a PNG file here
  background(255);

  // trap keyboard arrow keys
  checkMovement();

  // drawSprites is a function in p5.play, draws all the sprites
  drawSprites();

  // callback function
  //ghost.overlap(star, ghostCollision);
}

// This will reset position
function keyPressed() {
  if( key === ' ') {
    ghost.position.x = width/2;
    ghost.position.y = height/2;
  }
}



function checkMovement() {
  // Check x movement
  if(keyIsDown(RIGHT_ARROW)) {
    ghost.velocity.x = speed;
  }
  else if(keyIsDown(LEFT_ARROW)) {
    ghost.velocity.x = -speed;
  }
  else {
    ghost.velocity.x = 0;
  }

  // Check y movement
  if(keyIsDown(DOWN_ARROW)) {
    ghost.velocity.y = speed;
  }
  else if(keyIsDown(UP_ARROW)) {
    ghost.velocity.y = -speed;
  }
  else {
    ghost.velocity.y = 0;
  }
 // Check x movement
    if(keyIsDown(D_KEY)) {
      box.velocity.x = speed;
    }
    else if(keyIsDown(A_KEY)) {
      box.velocity.x = -speed;
    }
    else {
      box.velocity.x = 0;
    }
  
    // Check y movement
    if(keyIsDown(S_KEY)) {
      box.velocity.y = speed;
    }
    else if(keyIsDown(W_KEY)) {
      box.velocity.y = -speed;
    }
    else {
      box.velocity.y = 0;
    }
  }

 
 


// SpriteA is the sprite in question, spriteA will be ghost in this case
// SpriteB is the one that it collided with
function ghostCollision(spriteA, spriteB) {
  ghost.position.x = 100;
  ghost.position.y = 100;

  //spriteB.remove();
}
