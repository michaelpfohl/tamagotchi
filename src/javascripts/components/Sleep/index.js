const buildQuadrant = () => {
  let score = 50;
  $('#sleep').html(`
                <div class="card-container card-container-sleep">
                    <h1 class="card-title">Sleep</h1>
                    <div class="button-container">
                        <button class="action-button" id="button-nap">Nap</button>
                        <button class="action-button" id="button-deep-slumber">Deep Slumber</button>
                    </div>
                    <div id="sleep-score">Energy: ${score}</div>
                </div>
            `);
  $('#button-nap').on('click', () => {
    score += 50;
    if (score > 100) {
      score = 100;
    }
    $('#sleep-score').html(`Energy: ${score}`);
  });
  $('#button-deep-slumber').on('click', () => {
    score += 60;
    if (score > 100) {
      score = 100;
    }
    $('#sleep-score').html(`Energy: ${score}`);
  });
};

export default { buildQuadrant };
