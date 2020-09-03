import build from './components/buildQuadrant';
import quadrants from './data/quadrantInfo';

import '../styles/main.scss';

const init = () => {
  quadrants.getQuadrants().forEach((quadrant) => {
    build.buildQuadrant(quadrant.name, quadrant.button1, quadrant.button2, quadrant.defaultScore);
  });
};

init();
