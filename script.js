const menuData = [
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
];

const container = document.getElementById("panini-list");

function renderMenu() {
  if (!container) return;
  container.innerHTML = menuData
    .map((item) => `
      <div class="card">
        <span class="badge">${item.categoria}</span>
        <h3>${item.nome}</h3>
        <p class="price">${item.prezzo}</p>
        <p class="descrizione">${item.descrizione}</p>
      </div>
    `).join("");
}

renderMenu();

// Gestione Bottone "Gira la ruota"
const btnPlay = document.getElementById("btn-play");
const resultMessage = document.getElementById("result-message");

if (btnPlay) {
  btnPlay.addEventListener("click", () => {
    const indiceCasuale = Math.floor(Math.random() * menuData.length);
    const piattoScelto = menuData[indiceCasuale];
    
    if (resultMessage) {
      resultMessage.innerText = `Oggi ti consiglio: ${piattoScelto.nome}! (${piattoScelto.prezzo})`;
    }
  });
}