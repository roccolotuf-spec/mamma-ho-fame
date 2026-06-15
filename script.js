const menuPredefinito = [
  { categoria: "Tris di Polpette", nome: "POLPETTE CLASSICHE", prezzo: "€ 5,00", descrizione: "Polpette di vitello, maiale, melanzane e pollo." },
  { categoria: "Burger", nome: "MAMMA ROSA", prezzo: "€ 6,00", descrizione: "Hamburger 200g, cheddar, insalata." },
  { categoria: "Friggitoria", nome: "DIPPERS", prezzo: "€ 4,00", descrizione: "Cheddar e bacon." }
];

function renderMenu() {
    const lista = JSON.parse(localStorage.getItem('mieiPanini')) || menuPredefinito;
    const mappe = [
        { cat: "Tris di Polpette", id: "tris-di-polpette-list" },
        { cat: "Taglieri", id: "taglieri-list" },
        { cat: "Dolci", id: "dolci-list" },
        { cat: "Burger", id: "panini-list" },
        { cat: "Piadine", id: "piadine-list" },
        { cat: "Bao", id: "bao-list" },
        { cat: "Special", id: "special-list" },
        { cat: "Friggitoria", id: "friggitoria-list" },
        { cat: "Beverage", id: "beverage-list" }
    ];

    mappe.forEach(m => {
        const container = document.getElementById(m.id);
        if (!container) return;
        const items = lista.filter(i => i.categoria === m.cat);
        container.innerHTML = items.length > 0 
            ? items.map(i => `<div class="card"><h3>${i.nome}</h3><p>${i.prezzo}</p><p>${i.descrizione}</p></div>`).join("")
            : "<p>Nessun articolo.</p>";
    });
}

// Logica Ruota
document.addEventListener('DOMContentLoaded', () => {
    renderMenu();
    const btn = document.getElementById('btn-play');
    if (btn) {
        btn.addEventListener('click', () => {
            const nome = prompt("Nome?");
            if (!nome) return;
            const msg = document.getElementById('result-message');
            msg.innerText = Math.random() < 0.2 ? `🎉 Vinto, ${nome}!` : `Ritenta, ${nome}!`;
        });
    }
});