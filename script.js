function renderMenu() {
  const menuContainer = document.getElementById("menu-container");
  const data = getMenuData();

  menuContainer.innerHTML = "";

  data.sections.forEach((section, index) => {
    const sectionEl = document.createElement("section");
    sectionEl.className = `menu-section ${index === 0 ? "full" : ""}`;
    sectionEl.id = section.id;

    sectionEl.innerHTML = `
      <h2>${section.title}</h2>
      ${section.note ? `<div class="note-box">${section.note}</div>` : ""}
      <div class="menu-grid">
        ${section.items.map(item => `
          <article class="menu-item">
            <div class="menu-item-head">
              <div class="menu-item-name">${item.name}</div>
              <div class="menu-item-price">${item.price}</div>
            </div>
            ${item.description ? `<p class="menu-item-desc">${item.description}</p>` : ""}
          </article>
        `).join("")}
      </div>
    `;

    menuContainer.appendChild(sectionEl);
  });
}

function initWheelGame() {
  const spinBtn = document.getElementById("spinBtn");
  const wheel = document.getElementById("wheel");
  const result = document.getElementById("gameResult");

  let currentRotation = 0;
  let isSpinning = false;

  spinBtn.addEventListener("click", () => {
    if (isSpinning) return;

    isSpinning = true;
    result.textContent = "";

    const rand = Math.random();
    let outcome;
    let segmentAngle;

    if (rand < 0.25) {
      outcome = "Hai vinto una bibita omaggio!";
      segmentAngle = 45;
    } else if (rand < 0.75) {
      outcome = "Ritenta!";
      segmentAngle = rand < 0.50 ? 135 : 315;
    } else {
      outcome = "Hai vinto un panino omaggio!";
      segmentAngle = 225;
    }

    const extraSpins = 1800;
    currentRotation += extraSpins + (360 - segmentAngle);

    wheel.style.transform = `rotate(${currentRotation}deg)`;

    setTimeout(() => {
      result.textContent = outcome;
      isSpinning = false;
    }, 4200);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderMenu();
  initWheelGame();
});
