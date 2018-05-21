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

import {
    SVG,
    Group,
    Stroke,
    Color
} from "introcs/graphics";

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

//----------------------------------------------------------------------------------------------------------||
export class Paddle {
    paddle: Sprite;
    currentOrientation: number; //location 0-3

    constructor() {
        var rectanglePart = PIXI.Sprite.fromImage('Blue Orange.png');
        rectanglePart.anchor.set(0.5);
        rectanglePart.height = 50;
        rectanglePart.width = 50;
        rectanglePart.x = 250;
        rectanglePart.y = 250;
        app.stage.addChild(rectanglePart);
        this.paddle = rectanglePart;
        this.currentOrientation = 0;

        
        

        Howler.pos(250, 250, 1); //Setting position of audio listener
    }
    rotateRight() {
        this.paddle.rotation += Math.PI / 2;
        // this.currentOrientation += Math.PI / 2;
        if (this.paddle.rotation < 0) {
            this.paddle.rotation = (2 * Math.PI + this.paddle.rotation);
            Howler.orientation(0,1,0,0,0,1); //Set Howler location
        }
        if (this.paddle.rotation > 6.2 && this.paddle.rotation < 6.3) {
            this.paddle.rotation = 0;
            this.currentOrientation = 0;
            Howler.orientation(0,1,0,0,0,1); //Set Howler location
        }
        if (this.paddle.rotation > 1.5 && this.paddle.rotation < 1.6) {
            this.paddle.rotation = Math.PI / 2;
            this.currentOrientation = 1;
            Howler.orientation(1,0,0,0,0,1); //Set Howler location
        }
        if (this.paddle.rotation > 3.1 && this.paddle.rotation < 3.2) {
            this.paddle.rotation = Math.PI;
            this.currentOrientation = 2;
            Howler.orientation(0,-1,0,0,0,1); //Set Howler location
        }
        if (this.paddle.rotation > 4.6 && this.paddle.rotation < 4.8) {
            this.paddle.rotation = Math.PI + (Math.PI / 2);
            this.currentOrientation = 3;
            Howler.orientation(-1,0,0,0,0,1); //Set Howler location
        }
        if (this.paddle.rotation === 0) {
            this.paddle.rotation = 0;
            this.currentOrientation = 0;
            Howler.orientation(0,1,0,0,0,1); //Set Howler location
        }
        // changeMessage(Math.round(this.currentOrientation * 100) / 100);

        //Check orientation and if it's behind, use different sound...
        // shooters.paddleSound.play();

        if (this.currentOrientation - bullet.origin === Math.abs(2)) {
            bullet.soundBehind.play();
        } else {
            bullet.soundNormal.play();
        }

        

    }
    rotateLeft() {
        this.paddle.rotation -= Math.PI / 2;
        // this.currentOrientation -= Math.PI / 2;
        if (this.paddle.rotation < 0) {
            this.paddle.rotation = (2 * Math.PI + this.paddle.rotation);
            Howler.orientation(0,1,0,0,0,1); //Set Howler location
        }
        if (this.paddle.rotation >= 6.2 && this.paddle.rotation < 6.3) {
            this.paddle.rotation = 0;
            this.currentOrientation = 0;
            Howler.orientation(0,1,0,0,0,1); //Set Howler location
        }
        if (this.paddle.rotation > 1.5 && this.paddle.rotation < 1.6) {
            this.paddle.rotation = Math.PI / 2;
            this.currentOrientation = 1;
            Howler.orientation(1,0,0,0,0,1); //Set Howler location
        }
        if (this.paddle.rotation > 3.1 && this.paddle.rotation < 3.2) {
            this.paddle.rotation = Math.PI;
            this.currentOrientation = 2;
            Howler.orientation(0,-1,0,0,0,1); //Set Howler location
        }
        if (this.paddle.rotation > 4.6 && this.paddle.rotation < 4.8) {
            this.paddle.rotation = Math.PI + (Math.PI / 2);
            this.currentOrientation = 3;
            Howler.orientation(-1,0,0,0,0,1); //Set Howler location
        }
        if (this.paddle.rotation === 0) {
            this.paddle.rotation = 0;
            this.currentOrientation = 0;
            Howler.orientation(0,1,0,0,0,1); //Set Howler location
        }
        
        // shooters.paddleSound.play();

        if (this.currentOrientation - bullet.origin === Math.abs(2)) {
            bullet.soundBehind.play();
        } else {
            bullet.soundNormal.play();
        }

        
    }
    
    rotateUsingSmartPhone(orientationValue: number) {
        this.paddle.rotation = orientationValue;
        // this.currentOrientation -= Math.PI / 2;
        if (this.paddle.rotation < 0) {
            this.paddle.rotation = (2 * Math.PI + this.paddle.rotation);
            Howler.orientation(0,1,0,0,0,1); //Set Howler location
        }
        if (this.paddle.rotation >= 6.2 && this.paddle.rotation < 6.3) {
            this.paddle.rotation = 0;
            this.currentOrientation = 0;
            Howler.orientation(0,1,0,0,0,1); //Set Howler location
        }
        if (this.paddle.rotation > 1.5 && this.paddle.rotation < 1.6) {
            this.paddle.rotation = Math.PI / 2;
            this.currentOrientation = 1;
            Howler.orientation(1,0,0,0,0,1); //Set Howler location
        }
        if (this.paddle.rotation > 3.1 && this.paddle.rotation < 3.2) {
            this.paddle.rotation = Math.PI;
            this.currentOrientation = 2;
            Howler.orientation(0,-1,0,0,0,1); //Set Howler location
        }
        if (this.paddle.rotation > 4.6 && this.paddle.rotation < 4.8) {
            this.paddle.rotation = Math.PI + (Math.PI / 2);
            this.currentOrientation = 3;
            Howler.orientation(-1,0,0,0,0,1); //Set Howler location
        }
        if (this.paddle.rotation === 0) {
            this.paddle.rotation = 0;
            this.currentOrientation = 0;
            Howler.orientation(0,1,0,0,0,1); //Set Howler location
        }

        // shooters.paddleSound.play();
        
        if (this.currentOrientation - bullet.origin === Math.abs(2)) {
            bullet.soundBehind.play();
        } else {
            bullet.soundNormal.play();
        }

        
    }
    rotateToCompass(orientation: number) {
        if (orientation === 0 ) {
            this.paddle.rotation = 0.0;
        } else if (orientation === 1 ) {
            this.paddle.rotation = Math.PI / 4;
        } else if (orientation === 2 ) {
            this.paddle.rotation = Math.PI / 2;
        } else {
            this.paddle.rotation = Math.PI / 4 * 3;
        }
    }
    
}
//----------------------------------------------------------------------------------------------------------||
export class Shooters {
    shooters: Graphics;
    selectedShooter: 0;
    successSound: Howl;
    failSound: Howl;
    paddleSound: Howl;

    constructor() {
        var shooters = new PIXI.Graphics();  
        shooters.beginFill(0xFFFFFF, 1);
        shooters.drawRect(225, 0, 50, 25);
        shooters.beginFill(0xFFFFFF, 1);
        shooters.drawRect(225, 475, 50, 25);
        shooters.beginFill(0xFFFFFF, 1);
        shooters.drawRect(0, 225, 25, 50);
        shooters.beginFill(0xFFFFFF, 1);
        shooters.drawRect(475, 225, 25, 50);       
        this.shooters = shooters;
        //Creating general sounds
        var successSound = new Howl({
            src: ['SuccessSound.mp3']
        });
        var failSound = new Howl({
            src: ['WrongSound.mp3']
        });
        
        var paddleSound = new Howl({
            src: ['SwishSound2.mp3']
        });
        this.paddleSound = paddleSound;
        this.successSound = successSound;
        this.failSound = failSound;
        successSound.volume(1);
        paddleSound.volume(1);
        failSound.volume(0.5);
        
        app.stage.addChild(this.shooters);
    }
}
//----------------------------------------------------------------------------------------------------------||
export class Bullet {
    bullet: Sprite;
    origin: number;
    location: number;
    bulletContainer: Container;
    x: number;
    y: number;
    speed: number; //WORK ON SOUND NEXT...
    soundNormal: Howl;
    soundBehind: Howl;
    

    constructor(origin: number, speed: number) { //origin will be 0-3, N,E,S,W (Shooters)
        this.origin = origin;
        this.speed = speed;
        this.location = origin;//Originally set location same as origin
        var bullet = PIXI.Sprite.fromImage('Green.jpg');      
        var bulletContainer = new PIXI.Container();
        app.stage.addChild(bulletContainer);
        bullet.height = 10; //setting dimensions of bullet sprite;
        bullet.width = 10;
        let centerX: number;
        let centerY: number;

        // Creating sound object
        var soundNormal = new Howl({
            src: ['FrontPingPongSound.mp3']
        });
        var soundBehind = new Howl({
            src: ['BehindPingPongSound.mp3']
        });
        this.soundNormal = soundNormal;
        this.soundBehind = soundBehind;
        soundNormal.volume(1);
        soundBehind.volume(1);


        if (origin === 0) {
            centerX = 245; //center bullet
            centerY = 25;
            soundNormal.pos(0, 10, 0); //Set position of left sound
            soundBehind.pos(0, 10, 0);
        } else if (origin === 1) {
            centerX = 465;
            centerY = 245;
            soundNormal.pos(10, 0, 0);
            soundBehind.pos(10, 0, 0);
            this.soundNormal.play();
        } else if (origin === 2) {
            centerX = 245;
            centerY = 465;
            soundNormal.pos(0, -10, 0);
            soundBehind.pos(0, -10, 0);
        } else {
            centerX = 25;
            centerY = 245;
            soundNormal.pos(-10, 0, 0);
            soundBehind.pos(-10, 0, 0);
        }

        if (paddle.currentOrientation - this.location === Math.abs(2)) {
            this.soundBehind.play();
        } else {
            this.soundNormal.play();
        }

        bullet.x = centerX;
        bullet.y = centerY;
        this.x = centerX; //Keep track of the bullet's coordinates
        this.y = centerY;

        bulletContainer.addChild(bullet);       
        this.bullet = bullet;
        this.bulletContainer = bulletContainer;
    }

    // changeVolume(value: number) {
    //     this.soundNormal.volume(value);
    //     this.soundBehind.volume(value);
    // }

    moveBullet(): void { //Move the bullet towards the paddle depending on its origin
        if (this.origin === 0) {
            this.bullet.y += 1.0 * this.speed; //Move the bullet
            this.y += 1.0 * this.speed; //Keep track of bullet location in the properties
        } else if (this.origin === 1) {
            this.bullet.x -= 1.0 * this.speed;
            this.x -= 1.0 * this.speed;
        } else if (this.origin === 2) {
            this.bullet.y -= 1.0 * this.speed;
            this.y -= 1.0 * this.speed;
        } else {
            this.bullet.x += 1.0 * this.speed;
            this.x += 1.0 * this.speed;
        }

    }
}

//----------------------------------------------------------------------------------------------------------||

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

        //Make sounds louder the closer the bullet is...
        
        // if (orientationDirectionlistener !== paddle.currentOrientation) {
        //     if (Math.abs(paddle.currentOrientation - bullet.location) === 2) {
        //         bullet.soundBehind.play();
        //     } else {
        //         bullet.soundNormal.play();
        //     }
        //     orientationDirectionlistener = paddle.currentOrientation;
        // }


        // if (bullet.origin === 0 || bullet.origin === 2) {
        //     bullet.changeVolume(0.5);
        //     bullet.changeVolume(0.5);
                
            
            // if (bullet.bullet.y > 100 && bullet.bullet.y < 150) {
            //     bullet.soundBehind.volume(0);
            //     bullet.soundNormal.volume(0);
            // }
            // if (bullet.bullet.y > 150 && bullet.bullet.y < 175) {
            //     bullet.soundBehind.volume(0);
            //     bullet.soundNormal.volume(0);
            // }
            // if (bullet.bullet.y > 175 && bullet.bullet.y < 200) {
            //     bullet.soundBehind.volume(0);
            //     bullet.soundNormal.volume(0);
            // }
            // if (bullet.bullet.y > 200 && bullet.bullet.y < 280) {
            //     bullet.soundBehind.volume();
            //     bullet.soundNormal.volume();
            // }
            // if (bullet.bullet.y > 280 && bullet.bullet.y < 300) {
            //     bullet.soundBehind.volume(0.8);
            //     bullet.soundNormal.volume(0.8);
            // }
            // if (bullet.bullet.y > 300 && bullet.bullet.y < 325) {
            //     bullet.soundBehind.volume(0.6);
            //     bullet.soundNormal.volume(0.6);
            // }
            // if (bullet.bullet.y > 325 && bullet.bullet.y < 350) {
            //     bullet.soundBehind.volume(0.4);
            //     bullet.soundNormal.volume(0.4);
            // }if (bullet.bullet.y > 350 && bullet.bullet.y < 400) {
            //     bullet.soundBehind.volume(0.2);
            //     bullet.soundNormal.volume(0.2);
            // }
        

        // if (bullet.bullet.x > 400 || bullet.bullet.x < 100 || bullet.bullet.y > 400 || bullet.bullet.y < 100) {
        //     bullet.soundBehind.volume(0.5);
        //     bullet.soundNormal.volume(0.5);
        // }
        // if (bullet.bullet.x > 300 || bullet.bullet.x < 200 || bullet.bullet.y > 300 || bullet.bullet.y < 200) {
        //     bullet.soundBehind.volume(0.75);
        //     bullet.soundNormal.volume(0.75);
        // }
        // if (bullet.bullet.x > 200 && bullet.bullet.x < 300 || bullet.bullet.y > 200 && bullet.bullet.y < 300) {
        //     bullet.soundBehind.volume(1);
        //     bullet.soundNormal.volume(1);
        // }


        bullet.moveBullet();

        if (scoreCountValue - scoreCountSet === 1) {
            bulletSpeedVariable += 0.1;
            soundLimit -= 1;
            scoreCountSet = scoreCountValue;
        }


        // if (scoreCountValue !== 0 && scoreCountValue % 2 === 0) { //Increase speed every 2 score increments
        //     bulletSpeedVariable += 0.0005;
        //     if (hasScoreChanged) {
        //         soundLimit --;
        //         hasScoreChanged = false;
        //     }
        //     // soundCounter ++; //Increase sound counter so sound is played at a shorter interval
        // }


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
