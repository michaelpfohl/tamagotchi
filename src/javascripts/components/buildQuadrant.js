const buildQuadrant = (name, buttonName1, buttonName2, score) => {
  $(`#${name}`).html(`
    <div class="card-container-${name}">
        <h1 class="card-title-${name}">${name}</h1>
        <div class="button-container-${name}">
            <button class="action-button" id="button-${buttonName1}">${buttonName1}</button>
            <button class="action-button" id="button-${buttonName2}">${buttonName2}</button>
        </div>
        <div class="score">${score}</div>
    </div>
    `);
};

export default { buildQuadrant };
