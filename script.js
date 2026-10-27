const painerUI = document.getElementById("valeur-painer");
const totaleUI = document.getElementById("valeur-totale");
const badgeUI = document.getElementById("panier-badge");
const btnAjouter = document.querySelectorAll(".ajouter");
const btnClear = document.querySelector(".clear");
const contité = document.querySelectorAll(".contité")
const cartslist = document.querySelector(".lescarts")
const preview = document.querySelector(".preview");
const lesboosterbox = document.querySelector(".lesboosterbox")
console.log(lesboosterbox);

// panier
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
// colors
const colors = {
    commune: "border-gray-500    bg-gray-500/80",
    rare: "border-sky-400     bg-sky-500/80",
    epique: "border-purple-500  bg-purple-500/80",
    legendaire: "border-amber-400   bg-amber-500/80"
};
//cartsbox
const collection = datacarts
cartslist.innerHTML = collection.map(card => `
        <div data-id="${card.id}"
             class=" h-[50%] w-[50%] p-2 rounded-2xl bg-black/30 border-2 ${colors[card.rarete].split(" ")[0]}
                    flex flex-col items-center cursor-poin ter hover:scale-105 transition">
            <img src="${card.img}" alt="${card.nom}" class="w-[50%] rounded-lg pointer-events-none">
            <p class="text-white text-sm font-bold mt-2 pointer-events-none">${card.nom}</p>
            <span class="inline-block mt-1 px-2 text-xs rounded-full ${colors[card.rarete].split(" ")[1]} text-white pointer-events-none">
                ${card.rarete}
            </span>
        </div>
    `).join("");
// preview
const showCard = (card) => {
    preview.innerHTML = `
            <img src="${card.img}" alt="${card.nom}" class="w-[20rem] rounded-xl border-2 ${colors[card.rarete].split(" ")[0]}">
            <h3 class="text-amber-300 text-2xl font-bold font-[family-name:'MedievalSharp',cursive] mt-3">${card.nom}</h3>
            <div class="flex gap-2 mt-2">
                <span class="px-3 py-1 rounded-full text-xs font-bold ${colors[card.rarete].split(" ")[1]} text-white">${card.rarete}</span>
                <span class="px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-white">${card.type}</span>
            </div>
            <p class="text-white/80 text-sm mt-3">${card.description}</p>
            ${card.type === "spell"
            ? `<div class="mt-3 p-3 rounded-xl bg-white/10 border border-white/20 text-white text-sm">
                       ✨ ${card.effet}
                   </div>`
            : `<div class="flex gap-3 mt-3">
                       <div class="flex-1 text-center p-3 rounded-xl bg-white/10 border border-white/20">
                           ⚔️ <span class="text-amber-300 font-bold text-xl">${card.attaque}</span>
                       </div>
                       <div class="flex-1 text-center p-3 rounded-xl bg-white/10 border border-white/20">
                           ❤️ <span class="text-emerald-300 font-bold text-xl">${card.vie}</span>
                       </div>
                 </div>`}`;
};

showCard(collection[0]); //pardafo
// cleck les carts
cartslist.addEventListener("click", (e) => {
    const cardDiv = e.target.closest("[data-id]");
    if (!cardDiv) return;
    const id = cardDiv.dataset.id;
    const card = collection.find(c => c.id === id);
    if (card) showCard(card);
});

//boosterbox
lesboosterbox.innerHTML = panier.map()
