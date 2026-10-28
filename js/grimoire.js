
const cartslist = document.querySelector(".lescarts");
const preview = document.querySelector(".preview");

function renderCards() {
    if (!cartslist) return;

    if (!mesCartes || mesCartes.length === 0) {
        cartslist.innerHTML = `
            <div class="text-white text-center p-6 col-span-full">
                <p class="text-lg">Vous ne possédez aucune carte pour le moment.</p>
                <p class="text-sm text-gray-300 mt-2">Achetez des boosters dans la <strong>Boutique</strong> et ouvrez-les dans la page <strong>Inboxing</strong> !</p>
            </div>`;
        return;
    }

    cartslist.innerHTML = mesCartes.map((card, index) => `
        <div data-index="${index}" class="h-[210px] w-[150px] p-2 rounded-2xl bg-black/40 border-2 ${colors[card.rarete]?.split(" ")[0] || 'border-amber-400'} flex flex-col items-center cursor-pointer hover:scale-105 transition shadow-lg shrink-0">
            <img src="${card.img}" alt="${card.nom}" class="w-[85%] h-[120px] object-contain rounded-lg pointer-events-none">
            <p class="text-white text-xs font-bold mt-2 text-center pointer-events-none truncate w-full px-1">${card.nom}</p>
            <span class="mt-1 px-2 py-0.5 rounded-full text-[9px] ${colors[card.rarete]?.split(" ")[1] || 'bg-amber-600'} text-white font-bold uppercase pointer-events-none">${card.rarete || 'carte'}</span>
        </div>`).join("");
}

if (cartslist) {
    renderCards();
    cartslist.addEventListener("click", (e) => {
        const cardDiv = e.target.closest("[data-index]");
        if (cardDiv) {
            const index = Number(cardDiv.dataset.index);
            const card = mesCartes[index];
            if (card && preview) {
                preview.innerHTML = `
                    <img src="${card.img}" class="w-[220px] max-h-[300px] object-contain rounded-xl border-2 ${colors[card.rarete]?.split(" ")[0] || 'border-amber-400'} shadow-2xl">
                    <h3 class="text-amber-300 text-2xl font-bold mt-3 text-center">${card.nom}</h3>
                    <span class="px-3 py-1 rounded-full text-xs ${colors[card.rarete]?.split(" ")[1] || 'bg-amber-600'} text-white font-bold uppercase mt-1">${card.rarete || 'carte'}</span>
                    <p class="text-gray-300 text-sm italic text-center mt-2 max-w-[260px]">${card.description || card.effet || ''}</p>
                    <div class="flex justify-between w-full max-w-[200px] text-white font-bold text-sm mt-3 px-4 py-1 bg-black/40 rounded-lg">
                        <span>⚔️ Attaque: ${card.attaque || 0}</span>
                        <span>❤️ Vie: ${card.vie || 0}</span>
                    </div>
                `;
            }
        }
    });
}

