const quadrants = [
  {
    name: 'eat',
    button1: 'healthy',
    button2: 'unhealthy',
    defaultScore: 100,
  },
  {
    name: 'play',
    button1: 'super-fun',
    button2: 'slightly-fun',
    defaultScore: 50,
  },
  {
    name: 'fight',
    button1: 'run-away',
    button2: 'commit-violence',
    defaultScore: 100,
  },
  {
    name: 'sleep',
    button1: 'nap',
    button2: 'deep-slumber',
    defaultScore: 50,
  }
];

const getQuadrants = () => quadrants;

export default { getQuadrants };
