const painerUI = document.getElementById("valeur-painer");
const totaleUI = document.getElementById("valeur-totale");
const btnAjouter = document.querySelectorAll(".ajouter");
const btnClear = document.querySelector(".clear");

let panierCount = parseInt(localStorage.getItem('panierCount')) || 0;
let totalPrix = parseInt(localStorage.getItem('totalPrix')) || 0;

function updateUI() {
    painerUI.innerText = panierCount;
    totaleUI.innerText = totalPrix + " DH";
}

function saveData() {
    localStorage.setItem('panierCount', panierCount);
    localStorage.setItem('totalPrix', totalPrix);
}

updateUI();

btnAjouter.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const parentDiv = e.target.closest('div'); 
        const prix = parseInt(parentDiv.querySelector('.prix').innerText);
        
        panierCount++;
        totalPrix += prix;
        
        updateUI();
        saveData();
    });
});

btnClear.addEventListener('click', () => {
    panierCount = 0;
    totalPrix = 0;
    
    updateUI();
    saveData();
    console.log("Panier vidé");
});