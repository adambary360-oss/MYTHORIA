
const collectionList = document.getElementById("collection-list");
const activeDeckList = document.getElementById("active-deck");

function renderDeckPage() {
    if (!collectionList || !activeDeckList) return;

    if (!mesCartes || mesCartes.length === 0) {
        collectionList.innerHTML = `<p class="text-gray-300 text-sm col-span-full text-center py-4">Aucune carte disponible. Ouvrez des boosters pour enrichir votre collection !</p>`;
    } else {
        collectionList.innerHTML = mesCartes.map((card, index) => `
            <div class="cursor-pointer bg-black/40 p-2 rounded-xl border border-white/10 hover:scale-105 transition flex flex-col items-center" onclick="addToDeck(${index})">
                <img src="${card.img}" class="w-full h-28 object-contain">
                <p class="text-white text-xs mt-1 text-center font-semibold truncate w-full">${card.nom}</p>
            </div>`).join("");
    }

    if (!monDeck || monDeck.length === 0) {
        activeDeckList.innerHTML = `<p class="text-gray-300 text-sm col-span-full text-center py-4">Votre deck est vide (0/20). Cliquez sur une carte de votre collection pour l'ajouter.</p>`;
    } else {
        activeDeckList.innerHTML = monDeck.map((card, index) => `
            <div class="bg-amber-900/40 p-2 rounded-xl relative border border-amber-600/40 flex flex-col items-center">
                <img src="${card.img}" class="w-full h-28 object-contain">
                <button onclick="removeFromDeck(${index})" class="absolute top-1 right-1 bg-red-600 hover:bg-red-700 text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs transition cursor-pointer" title="Retirer du deck">✕</button>
                <p class="text-white text-xs mt-1 text-center font-semibold truncate w-full">${card.nom}</p>
            </div>`).join("");
    }
}

function addToDeck(index) {
    if (monDeck.length >= 20) {
        alert("Le deck est plein (max 20) !");
        return;
    }
    monDeck.push(mesCartes[index]);
    saveData();
    renderDeckPage();
}

function removeFromDeck(index) {
    monDeck.splice(index, 1);
    saveData();
    renderDeckPage();
}

renderDeckPage();

