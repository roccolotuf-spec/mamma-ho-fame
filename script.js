// Recupera i panini salvati nel localStorage (se non ce ne sono, usa una lista predefinita)
const savedMenu = JSON.parse(localStorage.getItem('mieiPanini')) || [
    // --- TRIS DI POLPETTE ---
  { categoria: "Tris di Polpette", nome: "POLPETTE CLASSICHE", prezzo: "€ 5,00", descrizione: "Polpette di vitello, maiale, melanzane e pollo." },
  // --- TAGLIERI ---
  { categoria: "Taglieri", nome: "TAGLIERE PICCOLO", prezzo: "€ 15,00", descrizione: "Salumi e formaggi selezionati del territorio." },
  { categoria: "Taglieri", nome: "TAGLIERE MEDIO", prezzo: "€ 22,00", descrizione: "Selezione assortita di salumi e formaggi." },
  { categoria: "Taglieri", nome: "TAGLIERE GRANDE", prezzo: "€ 28,00", descrizione: "Mix completo di salumi, formaggi e fritti artigianali." },
  // --- DOLCI ---
  { categoria: "Dolci", nome: "BUBBLE WAFFLE", prezzo: "€ 4,00", descrizione: "Waffle croccante con gelato, salse e granella." },
  // --- BURGER ---
  { categoria: "Burger", nome: "MAMMA ROSA", prezzo: "€ 6,00", descrizione: "Hamburger 200g, cheddar, insalata, pomodoro." },
  { categoria: "Burger", nome: "MAMMA ANGELA", prezzo: "€ 8,00", descrizione: "Petto di pollo impanato, stracciatella, insalata, salsa cesar, bacon." },
  { categoria: "Burger", nome: "TARANTARSIA", prezzo: "€ 7,00", descrizione: "Hamburger di salsiccia, friggitelli fritti, caciocavallo, cipolla piastrata, maionese al pepe nero." },
  { categoria: "Burger", nome: "MAMMA CHE CRISPY", prezzo: "€ 8,00", descrizione: "Hamburger di scottona 200g, cheddar, bacon, salsa burger, insalata, pomodoro." },
  { categoria: "Burger", nome: "CROCCANTE", prezzo: "€ 10,00", descrizione: "Hamburger 200g, crema cacio e pepe, patatine chips, cipolla, bacon, insalata, pomodoro." },
  { categoria: "Burger", nome: "BIG CALABRIA", prezzo: "€ 13,00", descrizione: "Hamburger di scottona 200g, carne di salsiccia 200g, caciocavallo, cheddar, cipolla, bacon, patatine." },
  { categoria: "Burger", nome: "SMASH BURGER", prezzo: "€ 8,00", descrizione: "Doppio hamburger di 100g, insalata, salsa burger, bacon." },
  { categoria: "Burger", nome: "PULLED PORK", prezzo: "€ 10,00", descrizione: "Pulled pork, caciocavallo, cipolla, crema e granella di pistacchio." },
  { categoria: "Burger", nome: "SPICY BY THE TIME", prezzo: "€ 8,00", descrizione: "Hamburger di scottona 200g, cheddar, mix di bacon, cipollas, peperoncino, maio al pepe nero." },
  { categoria: "Burger", nome: "CHEESE", prezzo: "€ 8,50", descrizione: "Smash e formaggio fuso, insalata, caciocavallo filante, corn flakes e maionese al pomodoro." },
  // PIADINE
  { categoria: "Piadine", nome: "BOMBA", prezzo: "€ 12,00", descrizione: "Pulled pork, hamburger, insalata, caciocavallo, patatine fritte, bacon." },
  { categoria: "Piadine", nome: "KEBAB", prezzo: "€ 6,00", descrizione: "Kebab, salsa yougurt, insalata, cipolla, pomodoro, piccante." },
  { categoria: "Piadine", nome: "MILANO", prezzo: "€ 8,00", descrizione: "Straccetti di pollo impanati, salsa cesar, insalata, caciocavallo, maionese." },
  // BAO & SPECIAL
  { categoria: "Special", nome: "BAO 101", prezzo: "€ 4,00", descrizione: "Bao, insalata, salsa chili, straccetti di pollo panati nel panko." },
  { categoria: "Special", nome: "BAO 102", prezzo: "€ 4,00", descrizione: "Bao, pulled pork, caciocavallo, crema di pistacchio." },
  { categoria: "Special", nome: "CALABROSMASH", prezzo: "€ 9,00", descrizione: "Smash, caciocavallo, bacon, cipolla caramellata, maionese al nduja." },
  { categoria: "Special", nome: "PANINI CINESI", prezzo: "€ 2,50", descrizione: "3 panini cinesi una salsa a scelta tra latte condensato, Nutella, pistacchio." },
  // FRIGGITORIA & BEVERAGE
  { categoria: "Friggitoria", nome: "PATATINE FRITTE", prezzo: "€ 2,50", descrizione: "Piccolo: 2,50€ | Medio: 3,00€ | Grande: 4,00€" },
  { categoria: "Friggitoria", nome: "DIPPERS", prezzo: "€ 4,00", descrizione: "Cheddar e bacon, Cacio e pepe, o Crema di pistacchio e mortadella." },
  { categoria: "Beverage", nome: "COCA COLA/FANTA", prezzo: "€ 2,00", descrizione: "Bottiglia 33cl." },
  { categoria: "Beverage", nome: "ESTATHE", prezzo: "€ 1,50", descrizione: "Pesca o limone." },

    // Aggiungi qui gli altri che avevi prima...
];

// Ora aggiorniamo la funzione renderMenu per usare 'savedMenu'
function renderMenu() {
    const container = document.getElementById('panini-list');
    if (!container) return;
    
    // Recuperiamo i dati
   // Recupera SOLO ciò che è salvato nel localStorage
// Se è vuoto, allora mostra una lista vuota (o quello che preferisci)
const savedMenu = JSON.parse(localStorage.getItem('mieiPanini')) || [];
    
    // Se non c'è nulla nel localStorage, mostriamo un messaggio o lasciamo vuoto
    if (savedMenu.length === 0) {
        container.innerHTML = "<p>Nessun panino disponibile al momento.</p>";
        return;
    }
    
    container.innerHTML = savedMenu.map(item => `
        <div class="card">
            <h3>${item.nome || "Nome non disponibile"}</h3>
            <p class="price">${item.prezzo || "Prezzo non disponibile"}</p>
            <p class="descrizione">${item.descrizione || ""}</p>
        </div>
    `).join("");
}







// Gestione Bottone "Gira la ruota"
document.getElementById('btn-play').addEventListener('click', () => {
    // 1. Chiediamo il nome all'utente
    const nomeUtente = prompt("Inserisci il tuo nome per tentare la fortuna:");
    
    // Se l'utente clicca "Annulla", usciamo dalla funzione
    if (!nomeUtente) return;

    // 2. Generiamo un numero casuale tra 0 e 1
    // Se è minore di 0.2, significa che c'è una probabilità del 20% di vincere
    const probabilitàVittoria = Math.random(); 
    
    const messaggio = document.getElementById('result-message');
    
    if (probabilitàVittoria < 0.2) {
        messaggio.innerText = `🎉 Complimenti ${nomeUtente}, hai vinto un omaggio! Mostra questo schermo alla cassa.`;
        messaggio.style.color = "#ff8c00"; // Colore arancio per la vittoria
    } else {
        messaggio.innerText = `Mi dispiace ${nomeUtente}, questa volta non hai vinto. Ritenta la fortuna un'altra volta!`;
        messaggio.style.color = "white"; // Colore bianco per il testo normale
    }
});