import eat from './components/Eat/index';
import play from './components/Play/index';
import fight from './components/Fight/index';
import sleep from './components/Sleep/index';

import '../styles/main.scss';

const init = () => {
  eat.buildQuadrant();
  play.buildQuadrant();
  fight.buildQuadrant();
  sleep.buildQuadrant();
};

init();
