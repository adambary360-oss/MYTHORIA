const MYTHORIA_CARDS = [
    {
        id: "forest-spirit",
        nom: "Esprit de la Forêt",
        img: "assets/carts/forest_spirit.png",
        description: "Gardien ancien des bois sacrés, il soigne ses alliés et éclaire les chemins oubliés.",
        type: "lumiere",
        rarete: "commune",
        attaque: 25,
        vie: 70
    },
    {
        id: "rusted-knight",
        nom: "Chevalier Rouillé",
        img: "assets/carts/rusted_knight.png",
        description: "Une armure brisée, un cœur intact. Il protège la lumière même dans ses derniers souffles.",
        type: "lumiere",
        rarete: "rare",
        attaque: 30,
        vie: 90
    },
    {
        id: "volcanic-dragon",
        nom: "Dragon Volcanique",
        img: "assets/carts/volcanic_dragon.png",
        description: "Né de la lave éternelle, son souffle réduit les armées entières en cendres.",
        type: "tenebres",
        rarete: "epique",
        attaque: 60,
        vie: 80
    },
    {
        id: "lich-king",
        nom: "Roi Liche",
        img: "assets/carts/lich_king.png",
        description: "Maître des morts-vivants, il règne sur les cryptes depuis un millénaire de magie interdite.",
        type: "tenebres",
        rarete: "legendaire",
        attaque: 75,
        vie: 95
    },
    {
        id: "shadow-assassin",
        nom: "Assassin de l'Ombre",
        img: "assets/carts/shadow_assassin.png",
        description: "Silencieux, rapide, mortel. On ne voit jamais son visage avant la dernière seconde.",
        type: "tenebres",
        rarete: "rare",
        attaque: 55,
        vie: 45
    },
    {
        id: "ghostly-wraith",
        nom: "Spectre Errant",
        img: "assets/carts/ghostly_wraith.png",
        description: "Un esprit perdu entre deux mondes qui entraîne les âmes vers l'oubli.",
        type: "tenebres",
        rarete: "commune",
        attaque: 35,
        vie: 50
    },
    {
        id: "venomous-spider",
        nom: "Araignée Venimeuse",
        img: "assets/carts/venomous_spider.png",
        description: "Discrète et létale, elle tisse des pièges où le poison remplace l'acier.",
        type: "minion",
        rarete: "commune",
        attaque: 20,
        vie: 35
    },
    {
        id: "forbidden-scroll",
        nom: "Parchemin Interdit",
        img: "assets/carts/forbidden_scroll.png",
        description: "Un savoir que nul ne devrait lire. Sa magie brûle celui qui l'ose invoquer.",
        type: "spell",
        rarete: "epique",
        effet: "Inflige 40 dégâts à une créature adverse."
    },
    {
        id: "dark-unicorn",
        nom: "Licorne Noire",
        img: "assets/carts/Dark Unicorn.png",
        description: "Créature corrompue par les ombres, sa corne transperce les défenses les plus solides.",
        type: "tenebres",
        rarete: "rare",
        attaque: 45,
        vie: 65
    },
    {
        id: "executioner",
        nom: "Bourreau Sombre",
        img: "assets/carts/Executioner.png",
        description: "Implacable et sans pitié, sa hache lourde ne tremble devant aucun adversaire.",
        type: "tenebres",
        rarete: "rare",
        attaque: 50,
        vie: 60
    },
    {
        id: "fallen-angel",
        nom: "Ange Déchu",
        img: "assets/carts/Fallen Angel.png",
        description: "Autrefois porteur de lumière céleste, ses ailes brisées répandent désormais les ténèbres.",
        type: "tenebres",
        rarete: "legendaire",
        attaque: 70,
        vie: 85
    },
    {
        id: "graveyard-golem",
        nom: "Golem des Tombes",
        img: "assets/carts/Graveyard Golem.png",
        description: "Colosse façonné de pierres tombales et d'ossements, doté d'une résistance herculéenne.",
        type: "tenebres",
        rarete: "epique",
        attaque: 40,
        vie: 100
    },
    {
        id: "mage-lightning",
        nom: "Mage de Foudre",
        img: "assets/carts/Mage Lightning.png",
        description: "Maître des orages sacrés, il canalise la foudre lumineuse pour frapper avec précision.",
        type: "lumiere",
        rarete: "epique",
        attaque: 65,
        vie: 55
    },
    {
        id: "skeleton-soldier",
        nom: "Soldat Squelette",
        img: "assets/carts/Skeleton Soldier.png",
        description: "Guerrier infatigable relevé de sa tombe, marchant aveuglément pour son maître.",
        type: "tenebres",
        rarete: "commune",
        attaque: 25,
        vie: 40
    },
    {
        id: "vampire-count",
        nom: "Comte Vampire",
        img: "assets/carts/Vampire Count.png",
        description: "Seigneur de la nuit élégant et fatal, se nourrissant de l'essence vitale de ses ennemis.",
        type: "tenebres",
        rarete: "epique",
        attaque: 60,
        vie: 70
    },
    {
        id: "witch",
        nom: "Sorcière des Brumes",
        img: "assets/carts/Witch.png",
        description: "Tisseuse de maléfices anciens, ses malédictions affaiblissent l'âme des guerriers.",
        type: "tenebres",
        rarete: "rare",
        attaque: 40,
        vie: 50
    }
];
