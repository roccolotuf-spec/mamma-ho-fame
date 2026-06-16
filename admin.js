let isLoggedIn = false;

function populateSectionSelect() {
  const data = getMenuData();
  const sectionSelect = document.getElementById("sectionSelect");
  sectionSelect.innerHTML = "";

  data.sections.forEach(section => {
    const option = document.createElement("option");
    option.value = section.id;
    option.textContent = section.title;
    sectionSelect.appendChild(option);
  });
}

function renderAdminProducts() {
  const data = getMenuData();
  const adminProducts = document.getElementById("adminProducts");
  adminProducts.innerHTML = "";

  data.sections.forEach(section => {
    const wrapper = document.createElement("div");
    wrapper.className = "admin-product";

    wrapper.innerHTML = `
      <h3>${section.title}</h3>
      <div class="admin-item-form" id="section-${section.id}"></div>
    `;

    adminProducts.appendChild(wrapper);

    const container = wrapper.querySelector(`#section-${section.id}`);

    section.items.forEach((item, itemIndex) => {
      const row = document.createElement("div");
      row.className = "admin-card";

      row.innerHTML = `
        <div class="admin-product-row">
          <input type="text" value="${item.name}" data-section="${section.id}" data-index="${itemIndex}" data-field="name" />
          <input type="text" value="${item.price}" data-section="${section.id}" data-index="${itemIndex}" data-field="price" />
          <button class="delete-btn" data-section="${section.id}" data-index="${itemIndex}">Elimina</button>
        </div>
        <textarea data-section="${section.id}" data-index="${itemIndex}" data-field="description">${item.description}</textarea>
      `;

      container.appendChild(row);
    });
  });

  attachAdminEvents();
}

function attachAdminEvents() {
  const inputs = document.querySelectorAll("[data-field]");
  const deleteButtons = document.querySelectorAll(".delete-btn");

  inputs.forEach(input => {
    input.addEventListener("change", (e) => {
      const data = getMenuData();
      const sectionId = e.target.dataset.section;
      const index = Number(e.target.dataset.index);
      const field = e.target.dataset.field;

      const section = data.sections.find(s => s.id === sectionId);
      section.items[index][field] = e.target.value;

      saveMenuData(data);
    });
  });

  deleteButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      const data = getMenuData();
      const sectionId = e.target.dataset.section;
      const index = Number(e.target.dataset.index);

      const section = data.sections.find(s => s.id === sectionId);
      section.items.splice(index, 1);

      saveMenuData(data);
      renderAdminProducts();
    });
  });
}

function login() {
  const passwordInput = document.getElementById("adminPassword").value;
  const data = getMenuData();

  if (passwordInput === data.adminPassword) {
    isLoggedIn = true;
    document.getElementById("loginBox").classList.add("hidden");
    document.getElementById("adminPanel").classList.remove("hidden");
    populateSectionSelect();
    renderAdminProducts();
  } else {
    alert("Password errata");
  }
}

function logout() {
  isLoggedIn = false;
  document.getElementById("loginBox").classList.remove("hidden");
  document.getElementById("adminPanel").classList.add("hidden");
  document.getElementById("adminPassword").value = "";
}

function addItem() {
  const data = getMenuData();
  const sectionId = document.getElementById("sectionSelect").value;
  const name = document.getElementById("itemName").value.trim();
  const price = document.getElementById("itemPrice").value.trim();
  const description = document.getElementById("itemDescription").value.trim();

  if (!name || !price) {
    alert("Inserisci almeno nome e prezzo.");
    return;
  }

  const section = data.sections.find(s => s.id === sectionId);
  section.items.push({ name, price, description });

  saveMenuData(data);
  renderAdminProducts();

  document.getElementById("itemName").value = "";
  document.getElementById("itemPrice").value = "";
  document.getElementById("itemDescription").value = "";
}

function changePassword() {
  const data = getMenuData();
  const newPassword = document.getElementById("newPassword").value.trim();

  if (!newPassword) {
    alert("Inserisci una nuova password.");
    return;
  }

  data.adminPassword = newPassword;
  saveMenuData(data);
  alert("Password aggiornata con successo.");
  document.getElementById("newPassword").value = "";
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("loginBtn").addEventListener("click", login);
  document.getElementById("logoutBtn").addEventListener("click", logout);
  document.getElementById("addItemBtn").addEventListener("click", addItem);
  document.getElementById("changePasswordBtn").addEventListener("click", changePassword);
});
