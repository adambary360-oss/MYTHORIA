const btnflip = document.getElementById("btnflip")
console.log(btnflip)
const overlaydiv = document.getElementById("overlaydiv")
console.log(overlaydiv);

function off() {
    document.getElementById("overlay").style.display = "none";
}


btnflip.addEventListener('click', (e) => {
    const coin = (Math.random() > 0.5 ? "you" : "bot")
    console.log(coin)
    if (coin === "you") {

        btnflip.style.display = "none"

        overlaydiv.innerHTML = `<div class="flex flex-col items-center gap-4">
                    <img src="assets/icons/Lumière.png" alt="Lumière" class="max-h-[100px]">
                    <button onclick="off()"
                        class="bg-amber-900 border-2 border-amber-600 text-white px-8 py-3 rounded-xl uppercase tracking-wider font-bold hover:bg-amber-700 transition"
                        id="Lumière">
                        Lumière
                    </button>
                </div>

                <div class="flex flex-col items-center gap-4">
                    <img src="assets/icons/TénèbresTénèbres.png" alt="Ténèbres" class="max-h-[100px]">
                    <button onclick="off()"
                        class="bg-indigo-900 border-2 border-indigo-600 text-white px-8 py-3 rounded-xl uppercase tracking-wider font-bold hover:bg-indigo-700 transition"
                        id="Ténèbres">
                        Ténèbres
                    </button>
                </div>`
    }
    else {
        btnflip.style.display = "none"
        overlaydiv.innerHTML = `<div class = "flex flex-col items-center gap-4">
                <p class = "text-white"> le bot que va choise</p>
                     <button onclick="off()"
                    class="bg-amber-900 border-2 border-amber-600 text-white px-8 py-3 rounded-xl uppercase tracking-wider font-bold hover:bg-amber-700 transition"
                    id="Lumière">
                    start
                    </button> 
                    </div>`

    }
})


Ténèbresdeck()
function Ténèbresdeck() {
    const Ténèbrescarts = monDeck.map(cart => {
        if (cart.type === 'tenebres') {
            return { ...cart, attaque: cart.attaque * 0.8 };
        }
        return cart;
    });
    console.log(Ténèbrescarts);
    
}