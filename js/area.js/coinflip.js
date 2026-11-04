const btnflip = document.getElementById("btnflip")
const overlaydiv = document.getElementById("overlaydiv")
const botdeck = (MYTHORIA_CARDS.sort(() => 0.5 - Math.random())).slice(0, 3); //deck ta3 bot

function off() {
    document.getElementById("overlay").style.display = "none";
}
//les choise
function choise() {
    const btnTénèbres = document.getElementById("Ténèbres")
    console.log(btnTénèbres)
    const btnLumière = document.getElementById("Lumière")
    console.log(btnLumière)

    btnTénèbres.addEventListener('click', (e) => {

        Ténèbresdeck(monDeck)
        Lumièredeck(botdeck)

    })
    btnLumière.addEventListener('click', (e) => {
        Ténèbresdeck(botdeck)
        Lumièredeck(monDeck)
    }
    )
}
function botchoise() {
    const botchoise = (Math.random() > 0.5 ? "Ténèbres" : "Lumière")
    if (botchoise === "Ténèbres") {
        Ténèbresdeck(monDeck)
        Lumièredeck(botdeck)
    }
    else {
        Ténèbresdeck(botdeck)
        Lumièredeck(monDeck)
    }
}    
    //trtomon ta3 les cart li f deck
function Ténèbresdeck(deck) {
    const Ténèbresdeck = deck.map(cart => {
        if (cart.type === 'lumiere') {
            return { ...cart, attaque: cart.attaque * 0.8 ,vie: cart.vie * 0.8};
        }
        return cart;
    });
    console.log(Ténèbresdeck);
    deck = Ténèbresdeck
    console.log(deck)
    return deck
}

function Lumièredeck(deck) {
    const Lumièredeck = deck.map(cart => {
        if (cart.type === 'tenebres') {
            return { ...cart, attaque: cart.attaque * 0.8 ,vie: cart.vie * 0.8 };
        }    
        return cart;
    });    

    deck = Lumièredeck
    console.log(deck)
    return deck
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

        choise()        
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
        botchoise()            

    }    
})    





