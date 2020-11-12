const buildQuadrant = () => {
  let score = 100;
  $('#fight').html(`
              <div class="card-container card-container-fight">
                  <h1 class="card-title">Fight</h1>
                  <div class="button-container">
                      <button class="action-button" id="button-run-away">Run Away</button>
                      <button class="action-button" id="button-commit-violence">Commit Violence</button>
                  </div>
                  <div id="fight-score">Strength: ${score}</div>
              </div>
          `);
  $('#button-run-away').on('click', () => {
    score += 1;
    if (score > 100) {
      score = 100;
    }
    $('#fight-score').html(`Strength: ${score}`);
  });
  $('#button-commit-violence').on('click', () => {
    score -= 10;
    if (score > 100) {
      score = 100;
    }
    $('#fight-score').html(`Strength: ${score}`);
  });
};

export default { buildQuadrant };
