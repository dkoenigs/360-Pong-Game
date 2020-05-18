import {
    Sprite,
    Container,
    Application,
    Rectangle,
    Graphics,
    DisplayObject,
    Text,
    Circle,
    RoundedRectangle,
    ticker
} from "pixi.js";

import * as PIXI from 'pixi.js'

import {
    SVG,
    Group,
    Stroke,
    Color
} from "introcs/graphics";

import {Bullet} from "./Bullet";
import {Shooters} from "./Shooter";
import {Paddle} from "./Paddle";


let bulletSpeedVariable: number = 1;
let tickerPause: boolean = false;

/*
TO DO LIST:

- Change the sound for bullet from behind
- More rapid as bullet gets close
- Include collision and rejection sound
- Think about destroying bullet if collision is made
- Louder as bullet gets closer

- UI changes, high score reads out before playing again, remove rotation label

- Make it work with phone, adjust to dimmensions of phone browser...
- Think of anything else a visually impaired person would require to play/enjoy the game
*/


export function randomNumber(): number {
    return Math.floor(Math.random()*(3-0+1)+0);
}

export function detectBackHome() {
}

//----------------------------------------------------------------------------------------------------------||

export function detectCollisions() {
    if (bullet.origin === 0 && Math.abs(bullet.bullet.y - 220) < bullet.speed) {
        // if (paddle.paddle.rotation >=  Math.PI * 7 / 4 && paddle.paddle.rotation <= Math.PI / 4) {
        //     bullet.origin = 2;
        if (paddle.currentOrientation === 0) {
            bullet.origin = 2;
            shooters.successSound.play();
            changeScore();
        } else {
            bulletSpeedVariable = 1;
            soundCounter = 0;
            soundLimit = 20;                 
            bullet.bulletContainer.removeChild(bullet.bullet);
            bullet = new Bullet(randomNumber(), bulletSpeedVariable); // Need to destroy old version of bullet.
            shooters.failSound.play();
            
            promptStart();
        }
    } else if (bullet.origin === 1 && Math.abs(bullet.bullet.x - 275) < bullet.speed) {
        // if (paddle.paddle.rotation >= Math.PI / 4 && paddle.paddle.rotation <= Math.PI * 3 / 4) {
        //     bullet.origin = 3;
        if (paddle.currentOrientation === 1) {
            bullet.origin = 3;
            shooters.successSound.play();
            changeScore();
        } else {
            bulletSpeedVariable = 1;
            soundCounter = 0;  
            soundLimit = 20;   
            bullet.bulletContainer.removeChild(bullet.bullet);
            bullet = new Bullet(randomNumber(), bulletSpeedVariable); // Need to destroy old version of bullet.
            shooters.failSound.play();
            
            promptStart();
        }
    } else if (bullet.origin === 2 && Math.abs(bullet.bullet.y - 275) < bullet.speed) {
        // if (paddle.paddle.rotation >= Math.PI * 3 / 4 && paddle.paddle.rotation <= Math.PI * 5 / 4) {
        //     bullet.origin = 0;
        if (paddle.currentOrientation === 2) {
            bullet.origin = 0;
            shooters.successSound.play();
            changeScore();
        } else {
            bulletSpeedVariable = 1;
            soundCounter = 0;  
            soundLimit = 20;   
            bullet.bulletContainer.removeChild(bullet.bullet);
            bullet = new Bullet(randomNumber(), bulletSpeedVariable); // Need to destroy old version of bullet.
            shooters.failSound.play();
            
            promptStart();
        }
    } else if (bullet.origin === 3 && Math.abs(bullet.bullet.x - 220) < bullet.speed) {
        // if (paddle.paddle.rotation >= Math.PI * 3 / 4 && paddle.paddle.rotation <= Math.PI * 7 / 4) {
        //     bullet.origin = 1;
        if (paddle.currentOrientation === 3) {
            bullet.origin = 1;
            shooters.successSound.play();
            changeScore();
        } else {
            bulletSpeedVariable = 1;
            soundCounter = 0;  
            soundLimit = 20;   
            bullet.bulletContainer.removeChild(bullet.bullet);
            bullet = new Bullet(randomNumber(), bulletSpeedVariable); // Need to destroy old version of bullet.
            shooters.failSound.play();
            
            promptStart();
        }
    }
}

//----------------------------------------------------------------------------------------------------------||

window.onkeydown = function(event: KeyboardEvent): void {
    if (event.keyCode === 37) {paddle.rotateLeft();} //Left
    else if (event.keyCode === 39) {paddle.rotateRight();} //Right
    else if (event.keyCode === 80) {togglePause(false);changeRotation("");resetScore();}
}

export function handleStart(event: TouchEvent) {
    togglePause(false);
    changeRotation("");
    resetScore();
}

export function handleSmartPhoneOrientation(event: DeviceOrientationEvent) {
    
    var absolute = event.absolute;
    var alpha    = event.alpha; // Around Z axis...
    var beta     = event.beta;
    var gamma    = event.gamma;
    
    if (event.alpha != null) {
        changeMessage(event.alpha);
        // changeMessage(event.alpha);
        // changeRotation("Hi:" + paddle.currentOrientation + "Bye:" + smartPhoneDirection);

                    
        // if (paddle.currentOrientation !== smartPhoneDirection) { //only run if direction has changed!
            if (event.alpha < 315 && event.alpha > 225) {
                paddle.paddle.rotation = (Math.PI / 2);
                paddle.currentOrientation = 1;
                smartPhoneDirection = 1;
                
                Howler.orientation(1,0,0,0,0,1); //Set Howler location
                paddle.rotateUsingSmartPhone(Math.PI / 2);
            }
            if (event.alpha > 135 && event.alpha < 225) {
                paddle.paddle.rotation = Math.PI;
                paddle.currentOrientation = 2;
                smartPhoneDirection = 2;
                Howler.orientation(0,-1,0,0,0,1); //Set Howler location
                paddle.rotateUsingSmartPhone(Math.PI);
            }
            if (event.alpha > 45 && event.alpha < 135) {
                paddle.paddle.rotation = (Math.PI / 2) * 3;
                paddle.currentOrientation = 3;
                smartPhoneDirection = 3;
                Howler.orientation(-1,0,0,0,0,1); //Set Howler location
                paddle.rotateUsingSmartPhone((Math.PI / 2) * 3);
            }
            if (event.alpha > 315 || event.alpha < 45) {
                paddle.paddle.rotation = 0;
                paddle.currentOrientation = 0;
                smartPhoneDirection = 0;
                Howler.orientation(1,0,0,0,0,1); //Set Howler location
                paddle.rotateUsingSmartPhone(0);
            }

            
        // }
    }   
    
  }

//----------------------------------------------------------------------------------------------------------||

const app: Application = new Application(500, 500);
document.body.appendChild(app.view);

let paddle: Paddle = new Paddle();

let shooters: Shooters = new Shooters();

let bullet: Bullet = new Bullet(randomNumber(), bulletSpeedVariable);

let smartPhoneDirection: number = 0; //Checks smartphone direction...

window.addEventListener("touchstart", handleStart, false);

window.addEventListener("deviceorientation", handleSmartPhoneOrientation, true);
//window.addEventListener("deviceorientation", (ev) => console.log(ev));
console.log('set orientation handler');
// Creating text object
var orientation: Text = new PIXI.Text("Orientation: 0", {
    fontWeight: 'bold',
    fontSize: 20,
    fill: '#3e1707',
    align: 'center',
    stroke: '#a4410e',
    strokeThickness: 7
});

orientation.x = 0;
orientation.y = 0;
app.stage.addChild(orientation);

//Creating text object
var startText: Text = new PIXI.Text("", {
    fontWeight: 'bold',
    fontSize: 20,
    fill: '#3e1707',
    align: 'center',
    stroke: '#a4410e',
    strokeThickness: 7
});

startText.x = 0;
startText.y = 460;
app.stage.addChild(startText);

//Creating text object
var scoreCount: Text = new PIXI.Text("Score: 0", {
    fontWeight: 'bold',
    fontSize: 20,
    fill: '#3e1707',
    align: 'center',
    stroke: '#a4410e',
    strokeThickness: 7
});

scoreCount.x = 400;
scoreCount.y = 0;
app.stage.addChild(scoreCount);


let scoreCountValue: number = 0; //Score counter
let scoreCountSet: number = 0;
let soundCounter: number = 0; //Sound speed counter
let soundLimit: number = 20;
let soundValue: number = 1;
let hasScoreChanged: boolean = false;
let orientationDirectionlistener: number = 0;


//----------------------------------------------------------------------------------------------------------||

export function togglePause(choice: boolean): void {
    tickerPause = choice;
}

export function changeMessage(msg: number): void {
    orientation.text = "Orientation: " + msg;
}

export function changeScore(): void {
    scoreCountValue++;
    scoreCount.text = "Score: " + scoreCountValue;
}

export function resetScore(): void {
    scoreCountValue = 0;
    scoreCount.text = "Score: " + scoreCountValue;
}

export function changeRotation(msg: string): void {
    startText.text = msg;
}

export function promptStart(): void {
    tickerPause = true;
    changeRotation("Tap or <p> to Start");


    bulletSpeedVariable = 1;
    soundCounter = 0;
    soundLimit = 30;                 
    bullet.bulletContainer.removeChild(bullet.bullet);
    bullet = new Bullet(randomNumber(), bulletSpeedVariable); // Need to destroy old version of bullet.
    

}

//----------------------------------------------------------------------------------------------------------||

app.ticker.add(function(delta) {
    
    if (!tickerPause) {
        // rotate the container!
        // use delta to create frame-independent transform
        
        detectCollisions();
        detectBackHome();

        if (bullet.bullet.x > 500 || bullet.bullet.x < 0 || bullet.bullet.y > 500 || bullet.bullet.y < 0) {
            bullet.bulletContainer.removeChild(bullet.bullet);
            bullet = new Bullet(randomNumber(), bulletSpeedVariable);
        }


        bullet.moveBullet();

        if (scoreCountValue - scoreCountSet === 1) {
            bulletSpeedVariable += 0.1;
            soundLimit -= 1;
            scoreCountSet = scoreCountValue;
        }


        if (soundCounter < soundLimit) {
            soundCounter ++;
        } else {
            soundCounter = 0;

            if (Math.abs(paddle.currentOrientation - bullet.location) === 2) {
                bullet.soundBehind.play();
            } else {
                bullet.soundNormal.play();
            }
        }
    }
});
