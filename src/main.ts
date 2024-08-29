import './style.css'
import { game } from './game';
import { resize } from './utils/resize';


window.onload = () => {
  resize();
  window.addEventListener('resize', resize, false);
};

game.start();