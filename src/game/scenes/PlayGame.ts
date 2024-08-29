import Phaser from 'phaser';
import { gameOptions } from '../config';

export class PlayGame extends Phaser.Scene {
  private wheel!: Phaser.GameObjects.Sprite;
  private pin!: Phaser.GameObjects.Sprite;
  private prizeText!: Phaser.GameObjects.Text;
  private canSpin: boolean = true;

  constructor() {
    super('PlayGame');
  }

  preload() {
    this.load.image('wheel', 'src/assets/wheel.png');
    this.load.image('pin', 'src/assets/pin.png');
  }

  create() {
    this.wheel = this.add.sprite(this.game.config.width as number / 2, this.game.config.height as number / 2, 'wheel');
    this.pin = this.add.sprite(this.game.config.width as number / 2, this.game.config.height as number / 2, 'pin');

    this.prizeText = this.add.text(this.game.config.width as number / 2, this.game.config.height as number - 20, 'Spin the wheel', {
      font: 'bold 32px Arial',
      color: 'white'
    });
    this.prizeText.setOrigin(0.5);

    this.input.on('pointerdown', this.spinWheel, this);
  }

  spinWheel() {
    if (this.canSpin) {
      this.prizeText.setText('');
      this.canSpin = false;

      const rounds: number = Phaser.Math.Between(2, 4);
      const degrees: number = Phaser.Math.Between(0, 360);
      const prize: number = gameOptions.slices - 1 - Math.floor(degrees / (360 / gameOptions.slices));

      this.tweens.add({
        targets: [this.wheel],
        angle: 360 * rounds + degrees,
        duration: gameOptions.rotationTime,
        ease: 'Cubic.easeOut',
        callbackScope: this,
        onComplete: () => {
          this.prizeText.setText(gameOptions.slicePrizes[prize]);
          this.canSpin = true;
        }
      });
    }
  }
}