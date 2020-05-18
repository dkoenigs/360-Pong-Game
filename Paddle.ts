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