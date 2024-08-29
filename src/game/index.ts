import Phaser from 'phaser';
import { gameConfig } from './config';
import { PlayGame } from './scenes/PlayGame';

class Game {
  private game: Phaser.Game;

  constructor() {
    this.game = new Phaser.Game(gameConfig);
    this.game.scene.add('PlayGame', PlayGame);
  }

  start() {
    this.game.scene.start('PlayGame');
  }
}

export const game = new Game();