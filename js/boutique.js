
document.addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains('ajouter')) {
        const parentDiv = e.target.closest('div');
        const nomElement = parentDiv?.querySelector('.nom-booster');
        const prixElement = parentDiv?.querySelector('.prix');
        const imgElement = parentDiv?.querySelector('img');

        if (nomElement && prixElement) {
            const nomPack = nomElement.innerText.trim();
            const prix = parseInt(prixElement.innerText.trim());
            const imgPath = imgElement ? imgElement.getAttribute('src') : "assets/boosters/default.png";

            const existing = panier.find(item => item.nom === nomPack);
            if (existing) {
                existing.qte += 1;
            } else {
                panier.push({ nom: nomPack, prix, qte: 1, img: imgPath });
            }

            panierCount += 1;
            totalPrix += prix;
            updateUI();
            saveData();
        }
    }
});

