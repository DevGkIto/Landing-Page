renderPlayerCards();
renderCoachCards();

function renderPlayerCards() {
  let cardsHTML = "";

  players.forEach((player) => {
    cardsHTML += `
        <div class="col-12 col-sm-6 col-md-4 col-lg-2 mb-3 cursor" 
        onclick="window.location.href='${player.profileLink}'">
          <div class="card card-size hover-shadow">
            <div class="card-body d-flex">
              <img alt="${player.name}" src="/assets/${player.nickname}.jpg" class="player-image rounded" />
              <div class="ms-3 mt-3">
                <div class="player-name">${player.name}</div>
                <div class="fw-bold">${player.nickname}</div>
              </div>
            </div>
          </div>
        </div>`;
  });

  document.getElementById("playerCards").innerHTML = cardsHTML;
}

function renderCoachCards() {
  let cardsHTML = "";

  coachingRoles.forEach((coach) => {
    cardsHTML += `
        <div class="col-12 col-md-4 cursor"
        onclick="window.location.href='${coach.profileLink}'">
          <h2>${coach.role}</h2>
          <div class="card card-size hover-shadow">
            <div class="card-body d-flex">
              <img alt="${coach.name}" src="/assets/${coach.nickname}.jpg" class="player-image rounded" />
              <div class="ms-3 mt-3">
                <div class="player-name">${coach.name}</div>
                <div class="fw-bold">${coach.nickname}</div>
              </div>
            </div>
          </div>
        </div>
    `;
  });

  document.getElementById("coachCards").innerHTML = cardsHTML;
}
