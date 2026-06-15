// FORZIAMO LA LISTA DI BACKUP PER VEDERE SE IL JS FUNZIONA
const menuPredefinito = [
  { categoria: "Tris di Polpette", nome: "POLPETTE CLASSICHE", prezzo: "€ 5,00", descrizione: "Polpette di vitello, maiale, melanzane e pollo." },
  { categoria: "Burger", nome: "MAMMA ROSA", prezzo: "€ 6,00", descrizione: "Hamburger 200g, cheddar, insalata." },
  { categoria: "Friggitoria", nome: "DIPPERS", prezzo: "€ 4,00", descrizione: "Cheddar e bacon." }
];

function renderMenu() {
    console.log("Inizio rendering...");
    // Usiamo direttamente il menuPredefinito per testare
    const lista = menuPredefinito; 
    
    const mappe = [
        { cat: "Tris di Polpette", id: "tris-di-polpette-list" },
        { cat: "Burger", id: "panini-list" },
        { cat: "Friggitoria", id: "friggitoria-list" }
    ];

    mappe.forEach(m => {
        const container = document.getElementById(m.id);
        if (!container) {
            console.log("Contenitore non trovato: " + m.id);
            return;
        }
        
        const items = lista.filter(i => i.categoria === m.cat);
        console.log("Trovati " + items.length + " elementi per " + m.cat);
        
        container.innerHTML = items.length > 0 
            ? items.map(i => `<div class="card"><h3>${i.nome}</h3><p>${i.prezzo}</p><p>${i.descrizione}</p></div>`).join("")
            : "<p>Nessun articolo.</p>";
    });
}

document.addEventListener('DOMContentLoaded', () => {
    console.log("Pagina caricata, avvio renderMenu");
    renderMenu();
});