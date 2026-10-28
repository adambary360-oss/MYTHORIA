
const lesboosterbox = document.querySelector(".lesboosterbox");
const les5cartsbox = document.querySelector(".les5cartsbox");

function renderInboxing() {
    if (!lesboosterbox) return;

    if (!boostervalider || boostervalider.length === 0) {
        lesboosterbox.innerHTML = `<li class="text-white/80 p-4 text-center">Aucun booster à ouvrir. Achetez et validez vos boosters dans la Boutique !</li>`;
        return;
    }

    lesboosterbox.innerHTML = boostervalider.map((item, index) => {
        const qte = item.qte || 1;
        return `
        <li class="p-4 border border-white/10 flex justify-between items-center bg-black/30 rounded-xl mb-2 hover:bg-black/40 transition">
            <div class="flex items-center gap-3">
                ${item.img ? `<img src="${item.img}" alt="${item.nom}" class="w-12 h-16 object-contain">` : ''}
                <div>
                    <p class="text-white font-bold flex items-center gap-2">
                        ${item.nom}
                        ${qte > 1 ? `<span class="bg-amber-600/80 text-white text-xs px-2 py-0.5 rounded-full font-semibold">×${qte}</span>` : ''}
                    </p>
                    <p class="text-amber-400 text-sm font-semibold">${item.prix} DH</p>
                </div>
            </div>
            <button data-index="${index}" class="ouvrir-booster bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg transition font-bold shadow-md cursor-pointer">
                Ouvrir (1)
            </button>
        </li>
    `;}).join("");
}

if (lesboosterbox) {
    renderInboxing();

    lesboosterbox.addEventListener('click', (e) => {
        const btn = e.target.closest('.ouvrir-booster');
        if (!btn) return;
        const index = Number(btn.dataset.index);

        const cardPool = (typeof datacarts !== 'undefined' && datacarts.length) 
            ? datacarts 
            : ((typeof MYTHORIA_CARDS !== 'undefined') ? MYTHORIA_CARDS : []);

        if (cardPool.length > 0) {
            const randomCards = [...cardPool].sort(() => 0.5 - Math.random()).slice(0, 5);
            mesCartes = [...mesCartes, ...randomCards]; // Enregistrer dans la collection

            // Décrémenter la quantité ou retirer si 1
            if (boostervalider[index].qte && boostervalider[index].qte > 1) {
                boostervalider[index].qte -= 1;
            } else {
                boostervalider.splice(index, 1);
            }

            saveData();
            renderInboxing();

            if (les5cartsbox) {
                les5cartsbox.innerHTML = randomCards.map(card => {
                    const rarityColor = colors[card.rarete]?.split(" ")[0] || 'border-amber-500';
                    const badgeBg = colors[card.rarete]?.split(" ")[1] || 'bg-amber-600';
                    return `
                    <div class="flex flex-col items-center p-3 bg-black/40 rounded-2xl border-2 ${rarityColor} hover:scale-105 transition shadow-lg text-center">
                        <img src="${card.img}" alt="${card.nom}" class="w-full h-40 object-contain rounded-lg">
                        <p class="text-white font-bold text-sm mt-2">${card.nom}</p>
                        <span class="mt-1 px-2 py-0.5 rounded-full text-[10px] text-white font-bold uppercase ${badgeBg}">${card.rarete || 'carte'}</span>
                        <div class="flex justify-between w-full text-[11px] text-gray-300 mt-2 px-1">
                            <span>⚔️ ${card.attaque || 0}</span>
                            <span>❤️ ${card.vie || 0}</span>
                        </div>
                    </div>`;
                }).join("");
            }
        }
    });
}

