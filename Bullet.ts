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