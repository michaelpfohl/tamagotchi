const buildQuadrant = () => {
  let score = 50;
  $('#play').html(`
            <div class="card-container card-container-play">
                <h1 class="card-title">Play</h1>
                <div class="button-container">
                    <button class="action-button" id="button-super-fun">Super Fun</button>
                    <button class="action-button" id="button-slightly-fun">Slightly Fun</button>
                </div>
                <div id="play-score">Fun: ${score}</div>
            </div>
        `);
  $('#button-super-fun').on('click', () => {
    score += 50;
    if (score > 100) {
      score = 100;
    }
    $('#play-score').html(`Fun: ${score}`);
  });
  $('#button-slightly-fun').on('click', () => {
    score += 2;
    if (score > 100) {
      score = 100;
    }
    $('#play-score').html(`Fun: ${score}`);
  });
};

export default { buildQuadrant };
