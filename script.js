const painerUI = document.getElementById("valeur-painer");
const totaleUI = document.getElementById("valeur-totale");
const badgeUI = document.getElementById("panier-badge");
const btnAjouter = document.querySelectorAll(".ajouter");
const btnClear = document.querySelector(".clear");
const contité = document.querySelectorAll(".contité")
const box = document.querySelector(".lescarts")

let panier = [];

for (const raw of (localStorage.getItem('panierItems') || "").split(";")) {
    if (!raw) continue;
    const [nom, prix, qte] = raw.split("|");
    const existing = panier.find(item => item.nom === nom);
    if (existing) {
        existing.qte += Number(qte) || 1;
    } else {
        panier.push({ nom: nom, prix: Number(prix), qte: Number(qte) || 1 });
    }
}
localStorage.removeItem('panier');
let panierCount = panier.reduce((somme, item) => somme + item.qte, 0);
let totalPrix = panier.reduce((somme, item) => somme + item.prix * item.qte, 0);

const panierListUI = document.querySelector(".Panieritems");

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
        panierListUI.innerHTML = panier
            .map((item, index) => `<li class="text-gray-50 flex items-center gap-2">
            <button data-index="${index}" class="na9is w-6 h-6 border-2 border-amber-600 bg-amber-900 font-bold hover:bg-amber-800 transition">−</button>
            <span>${item.nom}${item.qte > 1 ? ` ×${item.qte}` : ""} - ${item.prix * item.qte} DH</span>
        </li>`)
            .join("");
    }
}

function saveData() {
    localStorage.setItem('panierCount', panierCount);
    localStorage.setItem('totalPrix', totalPrix);
    localStorage.setItem('panierItems', panier.map(item => `${item.nom}|${item.prix}|${item.qte}`).join(";"));
}

updateUI();

btnAjouter.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const parentDiv = e.target.closest('div');
        const nomPack = parentDiv.querySelector('.nom-booster').innerText;
        const prix = parseInt(parentDiv.querySelector('.prix').innerText);
        const existing = panier.find(item => item.nom === nomPack);
        if (existing) {
            existing.qte += 1;
        } else {
            panier.push({ nom: nomPack, prix, qte: 1 });
        }
        panierCount += 1;
        totalPrix += prix;
        console.log("panier", panier);
        updateUI();
        saveData();
    });
});

btnClear.addEventListener('click', () => {
    panier = [];
    panierCount = 0;
    totalPrix = 0;
    updateUI();
    saveData();
    console.log("Panier vidé");
});

if (panierListUI) {
    panierListUI.addEventListener('click', (e) => {
        const btn = e.target.closest('.na9is');
        if (!btn) return;
        
        const index = Number(btn.dataset.index);
        const item = panier[index];
        if (!item || item.qte <= 0) return;

        item.qte -= 1;
        panierCount -= 1;
        totalPrix -= item.prix;

        if (item.qte <= 0) {
            panier.splice(index, 1);
        }
        updateUI();
        saveData();
    });
}

