let panier = JSON.parse(localStorage.getItem('panierItems')) || [];
let boostervalider = JSON.parse(localStorage.getItem('boostervalider')) || [];
let panierCount = parseInt(localStorage.getItem('panierCount')) || 0;
let totalPrix = parseInt(localStorage.getItem('totalPrix')) || 0;

const painerUI = document.getElementById("valeur-painer");
const totaleUI = document.getElementById("valeur-totale");
const badgeUI = document.getElementById("panier-badge");
const panierListUI = document.querySelector(".Panieritems");
const cartslist = document.querySelector(".lescarts");
const preview = document.querySelector(".preview");
const lesboosterbox = document.querySelector(".lesboosterbox");
const btnClear = document.querySelector(".clear");
const btnvalider = document.querySelector(".valider"); // Peut être null

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
        </li>`).join("");
    }
}

function renderBoosterBox() {
    if (lesboosterbox) {
        lesboosterbox.innerHTML = boostervalider.map((item) =>
            `<li class="text-gray-50 flex items-center gap-2">
                <span>${item.nom}${item.qte > 1 ? ` ×${item.qte}` : ""} - ${item.prix * item.qte} DH</span>
            </li>`).join("");
    }
}

function saveData() {
    localStorage.setItem('panierCount', panierCount);
    localStorage.setItem('totalPrix', totalPrix);
    localStorage.setItem('panierItems', JSON.stringify(panier));
    localStorage.setItem('boostervalider', JSON.stringify(boostervalider));
}


if (btnClear) {
    btnClear.addEventListener('click', () => {
        panier = []; panierCount = 0; totalPrix = 0;
        updateUI(); saveData();
    });
}

if (btnvalider) {
    btnvalider.addEventListener('click', () => {
        if (panier.length === 0) return alert("Votre panier est vide !");
        boostervalider = [...panier];
        saveData();
        renderBoosterBox();
        alert("Votre commande a été validée !");
        panier = []; panierCount = 0; totalPrix = 0;
        updateUI(); saveData();
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
        updateUI(); saveData();
    });
}

document.addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains('ajouter')) {
        const parentDiv = e.target.closest('div');
        const nomElement = parentDiv.querySelector('.nom-booster');
        const prixElement = parentDiv.querySelector('.prix');
        const imgElement = parentDiv.querySelector('img');

        if (nomElement && prixElement && imgElement) {
            const nomPack = nomElement.innerText;
            const prix = parseInt(prixElement.innerText);
            const img = imgElement.getAttribute("src");

            const existing = panier.find(item => item.nom === nomPack);
            if (existing) {
                existing.qte += 1;
            } else {
                panier.push({ nom: nomPack, prix, img, qte: 1 });
            }
            panierCount += 1;
            totalPrix += prix;
            updateUI(); saveData();
        }
    }
});

const colors = {
    commune: "border-gray-500 bg-gray-500/80",
    rare: "border-sky-400 bg-sky-500/80",
    epique: "border-purple-500 bg-purple-500/80",
    legendaire: "border-amber-400 bg-amber-500/80"
};

if (typeof datacarts !== 'undefined' && cartslist) {
    renderCards(); // Affiche la grille
    
    // Affiche la 1ère carte par défaut si elle existe
    if (datacarts.length > 0) {
        showPreview(datacarts[0]);
    }
    
    cartslist.addEventListener("click", handleCardClick);
}
function renderCards() {
    if (typeof datacarts === 'undefined' || !cartslist) return;

    cartslist.innerHTML = datacarts.map(card => `
        <div data-id="${card.id}" class="h-[200px] w-[150px] p-2 rounded-2xl bg-black/30 border-2 ${colors[card.rarete].split(" ")[0]} flex flex-col items-center cursor-pointer hover:scale-105 transition">
            <img src="${card.img}" alt="${card.nom}" class="w-[70%] rounded-lg pointer-events-none">
            <p class="text-white text-xs font-bold mt-2 text-center pointer-events-none">${card.nom}</p>
        </div>`).join("");
}

function handleCardClick(e) {
    const cardDiv = e.target.closest("[data-id]");
    if (!cardDiv) return;

    const card = datacarts.find(c => c.id == cardDiv.dataset.id);
    if (card) {
        showPreview(card);
    }
}
function showPreview(card) {
    if (!preview) return;
    preview.innerHTML = `
        <img src="${card.img}" class="w-[200px] rounded-xl border-2 ${colors[card.rarete].split(" ")[0]}">
        <h3 class="text-amber-300 text-xl font-bold">${card.nom}</h3>
        <span class="px-2 py-1 rounded-full text-[10px] ${colors[card.rarete].split(" ")[1]} text-white">${card.rarete}</span>
    `;
}

function renderInboxing() {
    if (lesboosterbox) {
        lesboosterbox.innerHTML = boostervalider.map((item, index) => `
            <li class="text-gray-50 flex flex-col p-2 border-b border-white/10">
                <span>${item.nom} (x${item.qte})</span>
                <button data-index="${index}" class="ouvrir-booster mt-2 bg-amber-600 px-4 py-1 rounded text-sm hover:bg-amber-700">
                    Ouvrir ce booster
                </button>
            </li>
        `).join("");
    }
}
if (document.querySelector('.lesboosterbox')) {
    document.querySelector('.lesboosterbox').addEventListener('click', (e) => {
        if (!e.target.classList.contains('ouvrir-booster')) return;
        
        if (typeof datacarts !== 'undefined') {
            const randomCards = [...datacarts].sort(() => 0.5 - Math.random()).slice(0, 5);
            
            const les5cartsbox = document.querySelector('.les5cartsbox');
            if (les5cartsbox) {
                les5cartsbox.innerHTML = randomCards.map(card => `
                    <div class="flex flex-col items-center p-2 bg-white rounded-xl border border-white/10">
                        <img src="${card.img}" class="w-24 rounded-lg">
                        <p class="text-white text-xs mt-1">${card.nom}</p>
                    </div>
                `).join("");
            }
        }
    });
}

updateUI();
renderBoosterBox();
renderInboxing(); 