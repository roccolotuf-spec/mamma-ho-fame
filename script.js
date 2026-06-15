// 1. Dati predefiniti (Il backup se il localStorage è vuoto)
const menuPredefinito = [
  { categoria: "Tris di Polpette", nome: "POLPETTE CLASSICHE", prezzo: "€ 5,00", descrizione: "Polpette di vitello, maiale, melanzane e pollo." },
  { categoria: "Taglieri", nome: "TAGLIERE PICCOLO", prezzo: "€ 15,00", descrizione: "Salumi e formaggi selezionati del territorio." },
  { categoria: "Taglieri", nome: "TAGLIERE MEDIO", prezzo: "€ 22,00", descrizione: "Selezione assortita di salumi e formaggi." },
  { categoria: "Taglieri", nome: "TAGLIERE GRANDE", prezzo: "€ 28,00", descrizione: "Mix completo di salumi, formaggi e fritti artigianali." },
  { categoria: "Dolci", nome: "BUBBLE WAFFLE", prezzo: "€ 4,00", descrizione: "Waffle croccante con gelato, salse e granella." },
  { categoria: "Burger", nome: "MAMMA ROSA", prezzo: "€ 6,00", descrizione: "Hamburger 200g, cheddar, insalata, pomodoro." },
  { categoria: "Special", nome: "PANINI CINESI", prezzo: "€ 2,50", descrizione: "3 panini cinesi con una salsa a scelta tra latte condensato, Nutella, pistacchio." },
  { categoria: "Friggitoria", nome: "DIPPERS", prezzo: "€ 4,00", descrizione: "Cheddar e bacon, Cacio e pepe, o Crema di pistacchio e mortadella." }
];

// 2. Funzione per renderizzare il menu completo
function renderMenu() {
    const listaCompleta = JSON.parse(localStorage.getItem('mieiPanini')) || menuPredefinito;

    // Mappatura tra categoria nei dati e ID nel tuo HTML
    const categorie = [
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

    categorie.forEach(item => {
        const container = document.getElementById(item.id);
        if (!container) return;

        const filtrati = listaCompleta.filter(p => p.categoria === item.cat);
        
        container.innerHTML = filtrati.length > 0 
            ? filtrati.map(p => `
                <div class="card">
                    <h3>${p.nome}</h3>
                    <p class="price">${p.prezzo}</p>
                    <p>${p.descrizione}</p>
                </div>
            `).join("")
            : "<p>Nessun articolo in questa categoria.</p>";
    });
}

// 3. Logica Ruota (Controlliamo che il bottone esista prima)
const btnPlay = document.getElementById('btn-play');
if (btnPlay) {
    btnPlay.addEventListener('click', () => {
        const nomeUtente = prompt("Inserisci il tuo nome per tentare la fortuna:");
        if (!nomeUtente) return;
        
        const messaggio = document.getElementById('result-message');
        if (Math.random() < 0.2) {
            messaggio.innerText = `🎉 Complimenti ${nomeUtente}, hai vinto un omaggio!`;
            messaggio.style.color = "#ff8c00";
        } else {
            messaggio.innerText = `Mi dispiace ${nomeUtente}, riprova!`;
            messaggio.style.color = "white";
        }
    });
}

// Avvio
renderMenu();