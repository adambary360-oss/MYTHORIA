
let panier = JSON.parse(localStorage.getItem('panierItems')) || [];
let boostervalider = JSON.parse(localStorage.getItem('boostervalider')) || [];
let mesCartes = JSON.parse(localStorage.getItem('mesCartes')) || [];
let monDeck = JSON.parse(localStorage.getItem('monDeck')) || [];
let panierCount = parseInt(localStorage.getItem('panierCount')) || 0;
let totalPrix = parseInt(localStorage.getItem('totalPrix')) || 0;

const painerUI = document.getElementById("valeur-painer");
const totaleUI = document.getElementById("valeur-totale");
const badgeUI = document.getElementById("panier-badge");
const panierListUI = document.querySelector(".Panieritems");
const btnClear = document.querySelector(".clear");
const btnvalider = document.querySelector(".valider");

const colors = {
    commune: "border-gray-500 bg-gray-500/80",
    rare: "border-sky-400 bg-sky-500/80",
    epique: "border-purple-500 bg-purple-500/80",
    legendaire: "border-amber-400 bg-amber-500/80"
};

function saveData() {
    localStorage.setItem('panierCount', panierCount);
    localStorage.setItem('totalPrix', totalPrix);
    localStorage.setItem('panierItems', JSON.stringify(panier));
    localStorage.setItem('boostervalider', JSON.stringify(boostervalider));
    localStorage.setItem('mesCartes', JSON.stringify(mesCartes));
    localStorage.setItem('monDeck', JSON.stringify(monDeck));
}

function updateUI() {
    if (badgeUI) {
        badgeUI.innerText = panierCount;
        badgeUI.classList.toggle("hidden", panierCount === 0);
    }
    if (painerUI && totaleUI) {
        painerUI.innerText = panierCount;
        totaleUI.innerText = totalPrix + " DH";
    }
    if (panierListUI) {
        panierListUI.innerHTML = panier.map((item, index) => `
            <li class="text-gray-50 flex items-center gap-2">
                <button data-index="${index}" class="na9is w-6 h-6 border-2 border-amber-600 bg-amber-900 font-bold hover:bg-amber-800 transition">−</button>
                <span>${item.nom}${item.qte > 1 ? ` ×${item.qte}` : ""} - ${item.prix * item.qte} DH</span>
            </li>`).join("");
    }
}

if (btnClear) {
    btnClear.addEventListener('click', () => {
        panier = [];
        panierCount = 0;
        totalPrix = 0;
        updateUI();
        saveData();
    });
}

if (btnvalider) {
    btnvalider.addEventListener('click', () => {
        if (panier.length === 0) return alert("Votre panier est vide !");

        let currentBoosters = JSON.parse(localStorage.getItem('boostervalider')) || [];

        panier.forEach(item => {
            const existing = currentBoosters.find(b => b.nom === item.nom);
            if (existing) {
                existing.qte = (existing.qte || 1) + (item.qte || 1);
            } else {
                currentBoosters.push({
                    nom: item.nom,
                    prix: item.prix,
                    img: item.img || "assets/boosters/default.png",
                    qte: item.qte || 1
                });
            }
        });

        boostervalider = currentBoosters;
        localStorage.setItem('boostervalider', JSON.stringify(boostervalider));

        alert("Commande validée !");

        panier = [];
        panierCount = 0;
        totalPrix = 0;
        updateUI();
        saveData();

        if (typeof renderInboxing === 'function') renderInboxing();
    });
}

if (panierListUI) {
    panierListUI.addEventListener('click', (e) => {
        const btn = e.target.closest('.na9is');
        if (!btn) return;
        const index = Number(btn.dataset.index);
        panierCount -= panier[index].qte;
        totalPrix -= (panier[index].prix * panier[index].qte);
        panier.splice(index, 1);
        updateUI();
        saveData();
    });
}

updateUI();

