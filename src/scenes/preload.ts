export class PreloadScene extends Phaser.Scene {

	preload(): void {

		this.load.crossOrigin = 'anonymous';
		this.load.maxParallelDownloads = Infinity;

	    this.load.image('ground', 'assets/sprites/platform.png');
		this.load.spritesheet('dude', 'assets/sprites/dude.png', { frameWidth: 32, frameHeight: 48 });
		
		this.load.image('bullet', 'assets/bullet.png');
    	this.load.image('enemyBullet', 'assets/enemy-bullet.png');
    	this.load.spritesheet('invader', 'assets/invader32x32x4.png', { frameWidth: 32, frameHeight: 32 });
    	this.load.image('ship', 'assets/player.png');
    	this.load.spritesheet('kaboom', 'assets/explode.png', { frameWidth: 128, frameHeight: 128 });
    	this.load.image('starfield', 'assets/starfield.png');

	}	

	create(): void {
		this.scene.start('GameTitle');
	}

}
