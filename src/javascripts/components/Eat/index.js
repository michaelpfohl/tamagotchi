const buildQuadrant = () => {
  let score = 100;
  $('#eat').html(`
          <div class="card-container card-container-eat">
              <h1 class="card-title">Eat</h1>
              <div class="button-container">
                  <button class="action-button" id="button-healthy">Healthy</button>
                  <button class="action-button" id="button-unhealthy">Unhealthy</button>
              </div>
              <div id="eat-score">Full: ${score}</div>
          </div>
      `);
  $('#button-healthy').on('click', () => {
    score += 10;
    if (score > 100) {
      score = 100;
    }
    $('#eat-score').html(`Full: ${score}`);
  });
  $('#button-unhealthy').on('click', () => {
    score -= 3;
    if (score > 100) {
      score = 100;
    }
    $('#eat-score').html(`Full: ${score}`);
  });
};

export default { buildQuadrant };
