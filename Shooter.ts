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