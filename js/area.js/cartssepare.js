
const btnjrcart = document.getElementById("jrcart")
const slots = document.querySelectorAll(".slot")
const rendomcartsdiv = document.getElementById("rendomcarts")
const t9sima = rendomcartsdiv.childNodes;



btnjrcart.addEventListener('click', (e) => {
    console.log(t9sima);
    jrcart()
}

)
slots.forEach((slot) => {

    slot.addEventListener("dragover", (e) => {
        e.preventDefault()
    })
    slot.addEventListener("drop", (e) => {
        e.preventDefault()
        if (slot.children.length === 0) {
            const cardId = e.dataTransfer.getData("text/plain");
            const draggedCard = document.getElementById(cardId);
            if (draggedCard) {
                draggedCard.removeAttribute("draggable");
                slot.appendChild(draggedCard);
                console.log("Carte invoquée avec succès !");
            }
        } else {
            alert("Cet emplacement est déjà occupé !");
        }
    })
})


function jrcart() {
    if (t9sima.length >= 5) {
        alert('max 5 carts')
    }
    else if (monDeck.length === 0) {
        alert("deck est vide !")
        return
    }
    else {
        const randomItem = monDeck[Math.floor(Math.random() * monDeck.length)];
        console.log(monDeck[randomItem]);
        const drawncard = monDeck.splice(randomItem, 1)[0]

        const cartscnava = document.createElement("div")
        cartscnava.id = drawncard.id
        cartscnava.setAttribute("draggable", "true")
        cartscnava.innerHTML = `<img src="${drawncard.img}" alt="${drawncard.nom}" class="w-[85%] h-[120px] object-contain rounded-lg pointer-events-none">
            <p class="text-white text-xs font-bold mt-2 text-center pointer-events-none truncate w-full px-1">${drawncard.nom}</p>
            <span class="mt-1 px-2 py-0.5 rounded-full text-[9px] ${colors[drawncard.rarete]?.split(" ")[1] || 'bg-amber-600'} text-white font-bold uppercase pointer-events-none">${drawncard.rarete || 'carte'}</span>`
        cartscnava.className = `h-[210px] w-[150px] p-2 rounded-2xl bg-black/40 item-center  border-2 flex flex-col items-center cursor-pointer hover:scale-200 transition shadow-lg shrink-0 gap-3 `
        rendomcartsdiv.appendChild(cartscnava)
        cartscnava.addEventListener("dragstart", (e) => {
            e.dataTransfer.setData("text/plain", drawncard.id)
        })
        cartscnava.addEventListener("dragend", () => {
            cartscnava.style.opacity = "1";
        }

        )
    }
}





