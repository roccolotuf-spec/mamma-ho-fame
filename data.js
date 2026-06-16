const defaultMenuData = {
  adminPassword: "MammaHoFame2026",
  sections: [
    {
      id: "tris",
      title: "Tris di Polpette",
      note: "",
      items: [
        {
          name: "Tris di Polpette",
          price: "€ 5,00",
          description: "Polpette di vitello, maiale, melanzane e pollo."
        }
      ]
    },
    {
      id: "taglieri",
      title: "Taglieri",
      note: "",
      items: [
        {
          name: "Salumi e formaggio piccolo",
          price: "€ 15,00",
          description: ""
        },
        {
          name: "Salumi e formaggio medio",
          price: "€ 22,00",
          description: ""
        },
        {
          name: "Salumi e formaggio e fritti grande",
          price: "€ 28,00",
          description: ""
        }
      ]
    },
    {
      id: "dolci",
      title: "Dolci",
      note: "Ogni dolce comprende due gusti a scelta e granella. Dalla terza salsa: € 0,50.",
      items: [
        {
          name: "Yogurt vari gusti",
          price: "€ 2,50 / 3,00 / 5,00",
          description: ""
        },
        {
          name: "Crepes vari gusti",
          price: "€ 3,50",
          description: ""
        },
        {
          name: "Pancake vari gusti",
          price: "€ 3,50",
          description: ""
        },
        {
          name: "Bubble Waffle vari gusti",
          price: "€ 3,50",
          description: ""
        }
      ]
    },
    {
      id: "burger",
      title: "Burger",
      note: "",
      items: [
        {
          name: "Mamma Rosa",
          price: "€ 6,00",
          description: "Hamburger 200g, cheddar, insalata, pomodoro."
        },
        {
          name: "Mamma Angela",
          price: "€ 8,00",
          description: "Petto di pollo impanato, stracciatella, insalata, salsa cesar, bacon."
        },
        {
          name: "Tarantarsia",
          price: "€ 7,00",
          description: "Hamburger di salsiccia, friggitelli fritti, caciocavallo, cipolla piastrata e maionese al pepe nero."
        },
        {
          name: "Mamma che Crispy",
          price: "€ 8,00",
          description: "Hamburger di scottona 200g, cheddar, bacon, salsa burger, insalata, pomodoro."
        },
        {
          name: "Croccante",
          price: "€ 10,00",
          description: "Hamburger 200g, crema cacio e pepe, patatine chips, cipolla, bacon, insalata, pomodoro."
        },
        {
          name: "Big Calabria",
          price: "€ 13,00",
          description: "Hamburger di scottona 200g, carne di salsiccia 200g, caciocavallo, cheddar, cipolla, bacon, patatine."
        },
        {
          name: "Smash Burger",
          price: "€ 8,00",
          description: "Doppio hamburger da 100g, insalata, salsa burger, bacon."
        },
        {
          name: "Pulled Pork",
          price: "€ 10,00",
          description: "Pulled pork, caciocavallo, cipolla, crema e granella di pistacchio."
        },
        {
          name: "Spicy By The Time",
          price: "€ 8,00",
          description: "Hamburger di scottona 200g, cheddar, mix di bacon, cipolla e peperoncino, maionese al pepe nero."
        },
        {
          name: "Cheese",
          price: "€ 8,50",
          description: "Smash burger, formaggio fuso, insalata, caciocavallo filante, corn flakes e maionese al pomodoro."
        }
      ]
    },
    {
      id: "piadine",
      title: "Piadine",
      note: "",
      items: [
        {
          name: "Bomba",
          price: "€ 12,00",
          description: "Pulled pork, hamburger, insalata, caciocavallo, patatine fritte, bacon."
        },
        {
          name: "Kebab",
          price: "€ 6,00",
          description: "Kebab, salsa yogurt, insalata, cipolla, pomodoro, piccante."
        },
        {
          name: "Milano",
          price: "€ 8,00",
          description: "Straccetti di pollo impanati, salsa cesar, bacon, insalata, caciocavallo, maionese."
        }
      ]
    },
    {
      id: "bao",
      title: "Bao",
      note: "Pane cinese.",
      items: [
        {
          name: "Bao 101",
          price: "€ 4,00",
          description: "Bao, insalata, salsa chili, straccetti di pollo panati nel panko."
        },
        {
          name: "Bao 102",
          price: "€ 4,00",
          description: "Bao, pulled pork, caciocavallo, crema di pistacchio."
        }
      ]
    },
    {
      id: "special",
      title: "Special",
      note: "",
      items: [
        {
          name: "Calabrosmash",
          price: "€ 9,00",
          description: "Smash, caciocavallo, bacon, cipolla caramellata, maionese alla nduja."
        },
        {
          name: "Queso",
          price: "€ 9,00",
          description: "Panino special con crema di formaggio filante, bacon croccante, salsa della casa e insalata."
        },
        {
          name: "Panini Cinesi",
          price: "€ 2,50",
          description: "3 panini cinesi con una salsa a scelta tra latte condensato, Nutella e pistacchio."
        }
      ]
    },
    {
      id: "friggitoria",
      title: "Friggitoria",
      note: "Salse a scelta € 0,20. La prima è in omaggio.",
      items: [
        {
          name: "Patatine fritte",
          price: "€ 2,50 / 3,00 / 4,00",
          description: "Piccolo, medio, grande."
        },
        {
          name: "Patatine e polpette",
          price: "€ 4,00",
          description: ""
        },
        {
          name: "Dippers cheddar e bacon",
          price: "€ 4,00",
          description: "Patatine con buccia."
        },
        {
          name: "Dippers cacio e pepe",
          price: "€ 4,00",
          description: "Patatine con buccia."
        },
        {
          name: "Dippers crema di pistacchio e mortadella",
          price: "€ 4,50",
          description: "Patatine con buccia."
        },
        {
          name: "Alette di pollo (6 pz)",
          price: "€ 4,00",
          description: ""
        },
        {
          name: "Box fritto",
          price: "€ 5,00",
          description: ""
        },
        {
          name: "Bandidos (10 pz)",
          price: "€ 5,00",
          description: ""
        },
        {
          name: "Chicken Nuggets (10 pz)",
          price: "€ 5,00",
          description: ""
        },
        {
          name: "Rustici Mignon",
          price: "€ 0,50",
          description: ""
        }
      ]
    },
    {
      id: "beverage",
      title: "Beverage",
      note: "",
      items: [
        {
          name: "Acqua 50cl",
          price: "€ 1,00",
          description: ""
        },
        {
          name: "Coca Cola / Fanta 33cl",
          price: "€ 2,00",
          description: ""
        },
        {
          name: "Estathe pesca/limone 33cl",
          price: "€ 2,00",
          description: ""
        },
        {
          name: "Estathe pesca/limone brick",
          price: "€ 1,50",
          description: ""
        },
        {
          name: "Red Bull",
          price: "€ 2,50",
          description: ""
        },
        {
          name: "Heineken 33cl",
          price: "€ 2,50",
          description: ""
        },
        {
          name: "Tuborg 33cl",
          price: "€ 2,00",
          description: ""
        },
        {
          name: "Corona 33cl",
          price: "€ 3,00",
          description: ""
        }
      ]
    }
  ]
};

function getMenuData() {
  const saved = localStorage.getItem("mammaHoFameData");
  return saved ? JSON.parse(saved) : defaultMenuData;
}

function saveMenuData(data) {
  localStorage.setItem("mammaHoFameData", JSON.stringify(data));
}
