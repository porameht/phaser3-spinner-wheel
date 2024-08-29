// import Phaser from 'phaser';

// export const gameOptions = {
//   slices: 8,
//   slicePrizes: ["A KEY!!!", "50 STARS", "500 STARS", "BAD LUCK!!!", "200 STARS", "100 STARS", "150 STARS", "BAD LUCK!!!"],
//   rotationTime: 3000
// };

// export const gameConfig: Phaser.Types.Core.GameConfig = {
//   type: Phaser.CANVAS,
//   width: 550,
//   height: 550,
//   backgroundColor: 0x880044,
//   parent: 'app'
// };
import Phaser from 'phaser';

export const gameOptions = {
  slices: 8,
  slicePrizes: ["A KEY!!!", "50 STARS", "500 STARS", "BAD LUCK!!!", "200 STARS", "100 STARS", "150 STARS", "BAD LUCK!!!"],
  rotationTime: 3000
};

// export const gameOptions = {
//   slices: 8,
//   slicePrizes: ["300 บาท", "ทอง 1 บาท", "5 บาท", "10 บาท", "15 บาท", "20 บาท", "25 บาท", "50 บาท"],
//   rotationTime: 3000
// };

export const gameConfig: Phaser.Types.Core.GameConfig = {
  type: Phaser.CANVAS,
  width: 550,
  height: 700, // Increased height to accommodate top and bottom elements
  // backgroundColor: 0x880044,
  parent: 'app',
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  }
};