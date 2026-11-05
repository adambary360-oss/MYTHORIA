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
        },
        {
                "id": "card-20056",
                "nom": "Bête de Sang #1",
                "img": "assets/carts/20056.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "epique",
                "attaque": 52,
                "vie": 93
        },
        {
                "id": "card-20057",
                "nom": "Spectre Sauvage #2",
                "img": "assets/carts/20057.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "rare",
                "attaque": 46,
                "vie": 66
        },
        {
                "id": "card-20058",
                "nom": "Golem de la Forêt #3",
                "img": "assets/carts/20058.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "rare",
                "attaque": 56,
                "vie": 54
        },
        {
                "id": "card-20059",
                "nom": "Voleur de la Forêt #4",
                "img": "assets/carts/20059.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "legendaire",
                "attaque": 95,
                "vie": 105
        },
        {
                "id": "card-20060",
                "nom": "Golem Spectral #5",
                "img": "assets/carts/20060.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "rare",
                "attaque": 43,
                "vie": 47
        },
        {
                "id": "card-20061",
                "nom": "Mage d'Acier #6",
                "img": "assets/carts/20061.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "rare",
                "attaque": 39,
                "vie": 49
        },
        {
                "id": "card-20062",
                "nom": "Titan Céleste #7",
                "img": "assets/carts/20062.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "epique",
                "attaque": 54,
                "vie": 75
        },
        {
                "id": "card-20064",
                "nom": "Démon des Brumes #8",
                "img": "assets/carts/20064.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "rare",
                "attaque": 64,
                "vie": 67
        },
        {
                "id": "card-20066",
                "nom": "Titan des Enfers #9",
                "img": "assets/carts/20066.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "legendaire",
                "attaque": 91,
                "vie": 77
        },
        {
                "id": "card-20067",
                "nom": "Spectre Solaire #10",
                "img": "assets/carts/20067.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "legendaire",
                "attaque": 83,
                "vie": 106
        },
        {
                "id": "card-20068",
                "nom": "Ombre des Abysses #11",
                "img": "assets/carts/20068.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "legendaire",
                "attaque": 85,
                "vie": 90
        },
        {
                "id": "card-20069",
                "nom": "Assassin de Feu #12",
                "img": "assets/carts/20069.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "commune",
                "attaque": 48,
                "vie": 58
        },
        {
                "id": "card-20070",
                "nom": "Esprit Éternel #13",
                "img": "assets/carts/20070.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "legendaire",
                "attaque": 66,
                "vie": 91
        },
        {
                "id": "card-20071",
                "nom": "Gardien des Abysses #14",
                "img": "assets/carts/20071.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "rare",
                "attaque": 36,
                "vie": 76
        },
        {
                "id": "card-20072",
                "nom": "Sentinelle des Enfers #15",
                "img": "assets/carts/20072.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "rare",
                "attaque": 40,
                "vie": 61
        },
        {
                "id": "card-20073",
                "nom": "Assassin Céleste #16",
                "img": "assets/carts/20073.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "commune",
                "attaque": 27,
                "vie": 46
        },
        {
                "id": "card-20074",
                "nom": "Assassin Éternel #17",
                "img": "assets/carts/20074.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "rare",
                "attaque": 45,
                "vie": 63
        },
        {
                "id": "card-20075",
                "nom": "Gardien de la Forêt #18",
                "img": "assets/carts/20075.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "commune",
                "attaque": 40,
                "vie": 32
        },
        {
                "id": "card-20076",
                "nom": "Guerrier de Feu #19",
                "img": "assets/carts/20076.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "epique",
                "attaque": 73,
                "vie": 95
        },
        {
                "id": "card-20077",
                "nom": "Assassin Solaire #20",
                "img": "assets/carts/20077.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "epique",
                "attaque": 59,
                "vie": 81
        },
        {
                "id": "card-20078",
                "nom": "Chevalier de la Forêt #21",
                "img": "assets/carts/20078.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "legendaire",
                "attaque": 83,
                "vie": 77
        },
        {
                "id": "card-20079",
                "nom": "Sentinelle du Crépuscule #22",
                "img": "assets/carts/20079.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "legendaire",
                "attaque": 79,
                "vie": 90
        },
        {
                "id": "card-20080",
                "nom": "Sentinelle de Feu #23",
                "img": "assets/carts/20080.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "rare",
                "attaque": 37,
                "vie": 62
        },
        {
                "id": "card-20081",
                "nom": "Seigneur Céleste #24",
                "img": "assets/carts/20081.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "commune",
                "attaque": 35,
                "vie": 47
        },
        {
                "id": "card-20082",
                "nom": "Paladin Éternel #25",
                "img": "assets/carts/20082.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "commune",
                "attaque": 41,
                "vie": 59
        },
        {
                "id": "card-20083",
                "nom": "Esprit Éternel #26",
                "img": "assets/carts/20083.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "rare",
                "attaque": 37,
                "vie": 75
        },
        {
                "id": "card-20084",
                "nom": "Démon de Feu #27",
                "img": "assets/carts/20084.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "legendaire",
                "attaque": 82,
                "vie": 85
        },
        {
                "id": "card-20085",
                "nom": "Guerrier des Tempêtes #28",
                "img": "assets/carts/20085.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "commune",
                "attaque": 39,
                "vie": 60
        },
        {
                "id": "card-20087",
                "nom": "Gardien de l'Aube #29",
                "img": "assets/carts/20087.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "legendaire",
                "attaque": 80,
                "vie": 76
        },
        {
                "id": "card-20088",
                "nom": "Démon des Tempêtes #30",
                "img": "assets/carts/20088.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "commune",
                "attaque": 39,
                "vie": 42
        },
        {
                "id": "card-20089",
                "nom": "Golem Oublié #31",
                "img": "assets/carts/20089.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "rare",
                "attaque": 61,
                "vie": 51
        },
        {
                "id": "card-20090",
                "nom": "Chevalier Éternel #32",
                "img": "assets/carts/20090.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "commune",
                "attaque": 36,
                "vie": 41
        },
        {
                "id": "card-20091",
                "nom": "Spectre des Tempêtes #33",
                "img": "assets/carts/20091.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "legendaire",
                "attaque": 69,
                "vie": 90
        },
        {
                "id": "card-20092",
                "nom": "Prêtre Spectral #34",
                "img": "assets/carts/20092.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "rare",
                "attaque": 35,
                "vie": 49
        },
        {
                "id": "card-20093",
                "nom": "Dragon des Enfers #35",
                "img": "assets/carts/20093.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "rare",
                "attaque": 42,
                "vie": 72
        },
        {
                "id": "card-20094",
                "nom": "Seigneur de l'Aube #36",
                "img": "assets/carts/20094.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "rare",
                "attaque": 63,
                "vie": 78
        },
        {
                "id": "card-20095",
                "nom": "Esprit des Tempêtes #37",
                "img": "assets/carts/20095.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "rare",
                "attaque": 37,
                "vie": 72
        },
        {
                "id": "card-20096",
                "nom": "Démon Sauvage #38",
                "img": "assets/carts/20096.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "rare",
                "attaque": 46,
                "vie": 76
        },
        {
                "id": "card-20098",
                "nom": "Guerrier Oublié #39",
                "img": "assets/carts/20098.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "legendaire",
                "attaque": 83,
                "vie": 102
        },
        {
                "id": "card-20099",
                "nom": "Voleur des Abysses #40",
                "img": "assets/carts/20099.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "rare",
                "attaque": 51,
                "vie": 69
        },
        {
                "id": "card-20100",
                "nom": "Paladin des Tempêtes #41",
                "img": "assets/carts/20100.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "legendaire",
                "attaque": 86,
                "vie": 84
        },
        {
                "id": "card-20106",
                "nom": "Chasseur Oublié #42",
                "img": "assets/carts/20106.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "commune",
                "attaque": 45,
                "vie": 38
        },
        {
                "id": "card-20107",
                "nom": "Seigneur du Destin #43",
                "img": "assets/carts/20107.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "commune",
                "attaque": 22,
                "vie": 57
        },
        {
                "id": "card-20108",
                "nom": "Guerrier des Tempêtes #44",
                "img": "assets/carts/20108.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "rare",
                "attaque": 58,
                "vie": 49
        },
        {
                "id": "card-20109",
                "nom": "Ombre des Enfers #45",
                "img": "assets/carts/20109.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "epique",
                "attaque": 57,
                "vie": 82
        },
        {
                "id": "card-20111",
                "nom": "Paladin Éternel #46",
                "img": "assets/carts/20111.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "commune",
                "attaque": 39,
                "vie": 63
        },
        {
                "id": "card-20112",
                "nom": "Voleur des Abysses #47",
                "img": "assets/carts/20112.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "rare",
                "attaque": 38,
                "vie": 55
        },
        {
                "id": "card-20113",
                "nom": "Dragon de l'Aube #48",
                "img": "assets/carts/20113.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "epique",
                "attaque": 55,
                "vie": 70
        },
        {
                "id": "card-20114",
                "nom": "Chevalier Solaire #49",
                "img": "assets/carts/20114.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "commune",
                "attaque": 31,
                "vie": 62
        },
        {
                "id": "card-20115",
                "nom": "Bête d'Acier #50",
                "img": "assets/carts/20115.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "rare",
                "attaque": 52,
                "vie": 54
        },
        {
                "id": "card-20116",
                "nom": "Archère des Tempêtes #51",
                "img": "assets/carts/20116.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "legendaire",
                "attaque": 65,
                "vie": 77
        },
        {
                "id": "card-20117",
                "nom": "Bête des Enfers #52",
                "img": "assets/carts/20117.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "rare",
                "attaque": 52,
                "vie": 50
        },
        {
                "id": "card-20120",
                "nom": "Chevalier d'Acier #53",
                "img": "assets/carts/20120.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "epique",
                "attaque": 51,
                "vie": 68
        },
        {
                "id": "card-20123",
                "nom": "Démon des Enfers #54",
                "img": "assets/carts/20123.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "rare",
                "attaque": 61,
                "vie": 71
        },
        {
                "id": "card-20124",
                "nom": "Esprit du Crépuscule #55",
                "img": "assets/carts/20124.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "legendaire",
                "attaque": 68,
                "vie": 81
        },
        {
                "id": "card-20126",
                "nom": "Chevalier Oublié #56",
                "img": "assets/carts/20126.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "commune",
                "attaque": 50,
                "vie": 60
        },
        {
                "id": "card-20127",
                "nom": "Dragon de Glace #57",
                "img": "assets/carts/20127.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "epique",
                "attaque": 76,
                "vie": 73
        },
        {
                "id": "card-20129",
                "nom": "Ombre Spectral #58",
                "img": "assets/carts/20129.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "commune",
                "attaque": 20,
                "vie": 47
        },
        {
                "id": "card-20131",
                "nom": "Titan des Tempêtes #59",
                "img": "assets/carts/20131.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "epique",
                "attaque": 74,
                "vie": 67
        },
        {
                "id": "card-20133",
                "nom": "Gardien de l'Aube #60",
                "img": "assets/carts/20133.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "rare",
                "attaque": 51,
                "vie": 57
        },
        {
                "id": "card-20134",
                "nom": "Guerrier des Brumes #61",
                "img": "assets/carts/20134.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "commune",
                "attaque": 45,
                "vie": 64
        },
        {
                "id": "card-20136",
                "nom": "Prêtre des Brumes #62",
                "img": "assets/carts/20136.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "epique",
                "attaque": 77,
                "vie": 62
        },
        {
                "id": "card-20137",
                "nom": "Seigneur Spectral #63",
                "img": "assets/carts/20137.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "commune",
                "attaque": 47,
                "vie": 69
        },
        {
                "id": "card-20138",
                "nom": "Esprit Éternel #64",
                "img": "assets/carts/20138.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "legendaire",
                "attaque": 87,
                "vie": 108
        },
        {
                "id": "card-20140",
                "nom": "Prêtre Sauvage #65",
                "img": "assets/carts/20140.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "epique",
                "attaque": 64,
                "vie": 60
        },
        {
                "id": "card-20142",
                "nom": "Prêtre du Destin #66",
                "img": "assets/carts/20142.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "rare",
                "attaque": 46,
                "vie": 62
        },
        {
                "id": "card-20144",
                "nom": "Chasseur de l'Aube #67",
                "img": "assets/carts/20144.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "legendaire",
                "attaque": 88,
                "vie": 89
        },
        {
                "id": "card-20147",
                "nom": "Spectre Oublié #68",
                "img": "assets/carts/20147.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "epique",
                "attaque": 67,
                "vie": 69
        },
        {
                "id": "card-20148",
                "nom": "Assassin d'Acier #69",
                "img": "assets/carts/20148.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "commune",
                "attaque": 35,
                "vie": 59
        },
        {
                "id": "card-20150",
                "nom": "Sentinelle de Glace #70",
                "img": "assets/carts/20150.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "legendaire",
                "attaque": 80,
                "vie": 90
        },
        {
                "id": "card-20151",
                "nom": "Golem des Enfers #71",
                "img": "assets/carts/20151.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "commune",
                "attaque": 38,
                "vie": 31
        },
        {
                "id": "card-20152",
                "nom": "Dragon du Destin #72",
                "img": "assets/carts/20152.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "rare",
                "attaque": 58,
                "vie": 62
        },
        {
                "id": "card-20153",
                "nom": "Archère du Crépuscule #73",
                "img": "assets/carts/20153.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "commune",
                "attaque": 28,
                "vie": 70
        },
        {
                "id": "card-20154",
                "nom": "Gardien de l'Aube #74",
                "img": "assets/carts/20154.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "legendaire",
                "attaque": 75,
                "vie": 88
        },
        {
                "id": "card-20157",
                "nom": "Golem de l'Aube #75",
                "img": "assets/carts/20157.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "legendaire",
                "attaque": 94,
                "vie": 108
        },
        {
                "id": "card-20158",
                "nom": "Mage du Crépuscule #76",
                "img": "assets/carts/20158.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "rare",
                "attaque": 49,
                "vie": 76
        },
        {
                "id": "card-20159",
                "nom": "Dragon du Destin #77",
                "img": "assets/carts/20159.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "rare",
                "attaque": 60,
                "vie": 68
        },
        {
                "id": "card-20160",
                "nom": "Voleur des Abysses #78",
                "img": "assets/carts/20160.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "legendaire",
                "attaque": 90,
                "vie": 109
        },
        {
                "id": "card-20161",
                "nom": "Esprit Oublié #79",
                "img": "assets/carts/20161.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "commune",
                "attaque": 26,
                "vie": 61
        },
        {
                "id": "card-20162",
                "nom": "Paladin du Destin #80",
                "img": "assets/carts/20162.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "commune",
                "attaque": 49,
                "vie": 65
        },
        {
                "id": "card-20163",
                "nom": "Archère des Tempêtes #81",
                "img": "assets/carts/20163.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "legendaire",
                "attaque": 74,
                "vie": 91
        },
        {
                "id": "card-20164",
                "nom": "Golem de Glace #82",
                "img": "assets/carts/20164.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "epique",
                "attaque": 51,
                "vie": 87
        },
        {
                "id": "card-20165",
                "nom": "Voleur de la Forêt #83",
                "img": "assets/carts/20165.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "epique",
                "attaque": 77,
                "vie": 65
        },
        {
                "id": "card-20166",
                "nom": "Mage de Feu #84",
                "img": "assets/carts/20166.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "commune",
                "attaque": 21,
                "vie": 35
        },
        {
                "id": "card-20167",
                "nom": "Spectre de l'Aube #85",
                "img": "assets/carts/20167.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "rare",
                "attaque": 39,
                "vie": 68
        },
        {
                "id": "card-20168",
                "nom": "Prêtre d'Acier #86",
                "img": "assets/carts/20168.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "rare",
                "attaque": 37,
                "vie": 73
        },
        {
                "id": "card-20170",
                "nom": "Seigneur des Brumes #87",
                "img": "assets/carts/20170.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "legendaire",
                "attaque": 72,
                "vie": 79
        },
        {
                "id": "card-20171",
                "nom": "Ombre de Glace #88",
                "img": "assets/carts/20171.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "rare",
                "attaque": 57,
                "vie": 58
        },
        {
                "id": "card-20172",
                "nom": "Sentinelle de Glace #89",
                "img": "assets/carts/20172.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "epique",
                "attaque": 75,
                "vie": 69
        },
        {
                "id": "card-20173",
                "nom": "Esprit du Crépuscule #90",
                "img": "assets/carts/20173.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "epique",
                "attaque": 51,
                "vie": 87
        },
        {
                "id": "card-20174",
                "nom": "Assassin de Sang #91",
                "img": "assets/carts/20174.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "rare",
                "attaque": 54,
                "vie": 57
        },
        {
                "id": "card-20175",
                "nom": "Voleur du Destin #92",
                "img": "assets/carts/20175.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "epique",
                "attaque": 56,
                "vie": 81
        },
        {
                "id": "card-20176",
                "nom": "Dragon Sauvage #93",
                "img": "assets/carts/20176.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "commune",
                "attaque": 48,
                "vie": 47
        },
        {
                "id": "card-20177",
                "nom": "Gardien Spectral #94",
                "img": "assets/carts/20177.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "epique",
                "attaque": 80,
                "vie": 62
        },
        {
                "id": "card-20178",
                "nom": "Mage d'Acier #95",
                "img": "assets/carts/20178.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "commune",
                "attaque": 42,
                "vie": 58
        },
        {
                "id": "card-20179",
                "nom": "Bête Oublié #96",
                "img": "assets/carts/20179.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "commune",
                "attaque": 47,
                "vie": 37
        },
        {
                "id": "card-20181",
                "nom": "Assassin de la Forêt #97",
                "img": "assets/carts/20181.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "legendaire",
                "attaque": 81,
                "vie": 104
        },
        {
                "id": "card-20183",
                "nom": "Dragon Solaire #98",
                "img": "assets/carts/20183.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "rare",
                "attaque": 49,
                "vie": 65
        },
        {
                "id": "card-20184",
                "nom": "Esprit des Enfers #99",
                "img": "assets/carts/20184.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "commune",
                "attaque": 35,
                "vie": 66
        },
        {
                "id": "card-20185",
                "nom": "Gardien Sauvage #100",
                "img": "assets/carts/20185.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "epique",
                "attaque": 69,
                "vie": 71
        },
        {
                "id": "card-20186",
                "nom": "Bête de Glace #101",
                "img": "assets/carts/20186.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "commune",
                "attaque": 42,
                "vie": 30
        },
        {
                "id": "card-20187",
                "nom": "Chevalier de Feu #102",
                "img": "assets/carts/20187.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "commune",
                "attaque": 24,
                "vie": 30
        },
        {
                "id": "card-20189",
                "nom": "Chevalier Sauvage #103",
                "img": "assets/carts/20189.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "commune",
                "attaque": 40,
                "vie": 43
        },
        {
                "id": "card-20190",
                "nom": "Guerrier de Sang #104",
                "img": "assets/carts/20190.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "rare",
                "attaque": 63,
                "vie": 68
        },
        {
                "id": "card-20191",
                "nom": "Archère Sauvage #105",
                "img": "assets/carts/20191.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "rare",
                "attaque": 41,
                "vie": 63
        },
        {
                "id": "card-20194",
                "nom": "Dragon de Feu #106",
                "img": "assets/carts/20194.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "epique",
                "attaque": 71,
                "vie": 60
        },
        {
                "id": "card-20195",
                "nom": "Démon de Sang #107",
                "img": "assets/carts/20195.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "commune",
                "attaque": 26,
                "vie": 68
        },
        {
                "id": "card-20198",
                "nom": "Paladin du Destin #108",
                "img": "assets/carts/20198.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "epique",
                "attaque": 80,
                "vie": 73
        },
        {
                "id": "card-20202",
                "nom": "Seigneur du Crépuscule #109",
                "img": "assets/carts/20202.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "commune",
                "attaque": 21,
                "vie": 44
        },
        {
                "id": "card-20204",
                "nom": "Titan des Tempêtes #110",
                "img": "assets/carts/20204.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "rare",
                "attaque": 45,
                "vie": 46
        },
        {
                "id": "card-20206",
                "nom": "Voleur de Glace #111",
                "img": "assets/carts/20206.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "legendaire",
                "attaque": 90,
                "vie": 82
        },
        {
                "id": "card-20207",
                "nom": "Esprit du Crépuscule #112",
                "img": "assets/carts/20207.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "epique",
                "attaque": 74,
                "vie": 76
        },
        {
                "id": "card-20209",
                "nom": "Assassin Solaire #113",
                "img": "assets/carts/20209.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "epique",
                "attaque": 76,
                "vie": 93
        },
        {
                "id": "card-20210",
                "nom": "Bête Oublié #114",
                "img": "assets/carts/20210.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "rare",
                "attaque": 49,
                "vie": 78
        },
        {
                "id": "card-20211",
                "nom": "Titan de Glace #115",
                "img": "assets/carts/20211.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "legendaire",
                "attaque": 84,
                "vie": 77
        },
        {
                "id": "card-20212",
                "nom": "Gardien des Brumes #116",
                "img": "assets/carts/20212.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "legendaire",
                "attaque": 71,
                "vie": 94
        },
        {
                "id": "card-20216",
                "nom": "Seigneur des Tempêtes #117",
                "img": "assets/carts/20216.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "commune",
                "attaque": 30,
                "vie": 56
        },
        {
                "id": "card-20218",
                "nom": "Sentinelle de Feu #118",
                "img": "assets/carts/20218.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "commune",
                "attaque": 26,
                "vie": 31
        },
        {
                "id": "card-20221",
                "nom": "Voleur de Feu #119",
                "img": "assets/carts/20221.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "legendaire",
                "attaque": 89,
                "vie": 107
        },
        {
                "id": "card-20222",
                "nom": "Gardien d'Acier #120",
                "img": "assets/carts/20222.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "rare",
                "attaque": 58,
                "vie": 51
        },
        {
                "id": "card-20225",
                "nom": "Guerrier des Brumes #121",
                "img": "assets/carts/20225.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "rare",
                "attaque": 59,
                "vie": 65
        },
        {
                "id": "card-20226",
                "nom": "Mage du Crépuscule #122",
                "img": "assets/carts/20226.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "commune",
                "attaque": 36,
                "vie": 38
        },
        {
                "id": "card-20227",
                "nom": "Sentinelle du Crépuscule #123",
                "img": "assets/carts/20227.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "legendaire",
                "attaque": 87,
                "vie": 76
        },
        {
                "id": "card-20228",
                "nom": "Golem de la Forêt #124",
                "img": "assets/carts/20228.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "commune",
                "attaque": 25,
                "vie": 36
        },
        {
                "id": "card-20229",
                "nom": "Titan du Destin #125",
                "img": "assets/carts/20229.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "commune",
                "attaque": 49,
                "vie": 55
        },
        {
                "id": "card-20230",
                "nom": "Paladin de la Forêt #126",
                "img": "assets/carts/20230.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "rare",
                "attaque": 64,
                "vie": 68
        },
        {
                "id": "card-20231",
                "nom": "Bête des Tempêtes #127",
                "img": "assets/carts/20231.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "epique",
                "attaque": 77,
                "vie": 94
        },
        {
                "id": "card-20232",
                "nom": "Sentinelle d'Acier #128",
                "img": "assets/carts/20232.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "epique",
                "attaque": 78,
                "vie": 84
        },
        {
                "id": "card-20234",
                "nom": "Sentinelle des Brumes #129",
                "img": "assets/carts/20234.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "commune",
                "attaque": 32,
                "vie": 36
        },
        {
                "id": "card-20236",
                "nom": "Prêtre Céleste #130",
                "img": "assets/carts/20236.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "commune",
                "attaque": 31,
                "vie": 38
        },
        {
                "id": "card-20238",
                "nom": "Démon du Crépuscule #131",
                "img": "assets/carts/20238.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "epique",
                "attaque": 70,
                "vie": 77
        },
        {
                "id": "card-20240",
                "nom": "Chevalier Oublié #132",
                "img": "assets/carts/20240.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "rare",
                "attaque": 58,
                "vie": 71
        },
        {
                "id": "card-20241",
                "nom": "Ombre des Enfers #133",
                "img": "assets/carts/20241.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "legendaire",
                "attaque": 67,
                "vie": 90
        },
        {
                "id": "card-20242",
                "nom": "Golem de l'Aube #134",
                "img": "assets/carts/20242.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "rare",
                "attaque": 63,
                "vie": 54
        },
        {
                "id": "card-20243",
                "nom": "Dragon Éternel #135",
                "img": "assets/carts/20243.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "epique",
                "attaque": 80,
                "vie": 79
        },
        {
                "id": "card-20245",
                "nom": "Chevalier Céleste #136",
                "img": "assets/carts/20245.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "legendaire",
                "attaque": 78,
                "vie": 105
        },
        {
                "id": "card-20246",
                "nom": "Ombre d'Acier #137",
                "img": "assets/carts/20246.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "commune",
                "attaque": 41,
                "vie": 42
        },
        {
                "id": "card-20247",
                "nom": "Golem de l'Aube #138",
                "img": "assets/carts/20247.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "epique",
                "attaque": 62,
                "vie": 76
        },
        {
                "id": "card-20249",
                "nom": "Archère Spectral #139",
                "img": "assets/carts/20249.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "commune",
                "attaque": 23,
                "vie": 33
        },
        {
                "id": "card-20250",
                "nom": "Chasseur de Sang #140",
                "img": "assets/carts/20250.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "legendaire",
                "attaque": 72,
                "vie": 100
        },
        {
                "id": "card-20252",
                "nom": "Chevalier Oublié #141",
                "img": "assets/carts/20252.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "epique",
                "attaque": 65,
                "vie": 65
        },
        {
                "id": "card-20253",
                "nom": "Mage Sauvage #142",
                "img": "assets/carts/20253.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "epique",
                "attaque": 61,
                "vie": 89
        },
        {
                "id": "card-20255",
                "nom": "Démon Oublié #143",
                "img": "assets/carts/20255.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "rare",
                "attaque": 43,
                "vie": 54
        },
        {
                "id": "card-20256",
                "nom": "Gardien Éternel #144",
                "img": "assets/carts/20256.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "legendaire",
                "attaque": 75,
                "vie": 88
        },
        {
                "id": "card-20257",
                "nom": "Mage Solaire #145",
                "img": "assets/carts/20257.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "rare",
                "attaque": 57,
                "vie": 47
        },
        {
                "id": "card-20259",
                "nom": "Guerrier de Sang #146",
                "img": "assets/carts/20259.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "legendaire",
                "attaque": 89,
                "vie": 79
        },
        {
                "id": "card-20260",
                "nom": "Golem des Tempêtes #147",
                "img": "assets/carts/20260.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "legendaire",
                "attaque": 75,
                "vie": 94
        },
        {
                "id": "card-20261",
                "nom": "Titan de la Forêt #148",
                "img": "assets/carts/20261.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "rare",
                "attaque": 54,
                "vie": 62
        },
        {
                "id": "card-20264",
                "nom": "Archère du Destin #149",
                "img": "assets/carts/20264.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "epique",
                "attaque": 70,
                "vie": 72
        },
        {
                "id": "card-20265",
                "nom": "Sentinelle de Glace #150",
                "img": "assets/carts/20265.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "epique",
                "attaque": 57,
                "vie": 87
        },
        {
                "id": "card-20266",
                "nom": "Spectre des Brumes #151",
                "img": "assets/carts/20266.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "epique",
                "attaque": 74,
                "vie": 62
        },
        {
                "id": "card-20267",
                "nom": "Guerrier Éternel #152",
                "img": "assets/carts/20267.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "rare",
                "attaque": 51,
                "vie": 47
        },
        {
                "id": "card-20268",
                "nom": "Assassin du Crépuscule #153",
                "img": "assets/carts/20268.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "rare",
                "attaque": 64,
                "vie": 68
        },
        {
                "id": "card-20269",
                "nom": "Gardien de l'Aube #154",
                "img": "assets/carts/20269.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "commune",
                "attaque": 29,
                "vie": 65
        },
        {
                "id": "card-20270",
                "nom": "Ombre Spectral #155",
                "img": "assets/carts/20270.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "rare",
                "attaque": 55,
                "vie": 48
        },
        {
                "id": "card-20271",
                "nom": "Paladin des Tempêtes #156",
                "img": "assets/carts/20271.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "legendaire",
                "attaque": 88,
                "vie": 76
        },
        {
                "id": "card-20272",
                "nom": "Titan Céleste #157",
                "img": "assets/carts/20272.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "commune",
                "attaque": 31,
                "vie": 55
        },
        {
                "id": "card-20273",
                "nom": "Bête du Destin #158",
                "img": "assets/carts/20273.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "legendaire",
                "attaque": 82,
                "vie": 105
        },
        {
                "id": "card-20274",
                "nom": "Sentinelle des Brumes #159",
                "img": "assets/carts/20274.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "commune",
                "attaque": 25,
                "vie": 43
        },
        {
                "id": "card-20275",
                "nom": "Dragon de la Forêt #160",
                "img": "assets/carts/20275.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "legendaire",
                "attaque": 67,
                "vie": 79
        },
        {
                "id": "card-20276",
                "nom": "Gardien Oublié #161",
                "img": "assets/carts/20276.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "rare",
                "attaque": 35,
                "vie": 66
        },
        {
                "id": "card-20277",
                "nom": "Ombre de Sang #162",
                "img": "assets/carts/20277.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "rare",
                "attaque": 57,
                "vie": 46
        },
        {
                "id": "card-20281",
                "nom": "Démon de l'Aube #163",
                "img": "assets/carts/20281.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "commune",
                "attaque": 30,
                "vie": 60
        },
        {
                "id": "card-20282",
                "nom": "Paladin des Brumes #164",
                "img": "assets/carts/20282.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "epique",
                "attaque": 78,
                "vie": 87
        },
        {
                "id": "card-20283",
                "nom": "Ombre de Feu #165",
                "img": "assets/carts/20283.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "epique",
                "attaque": 52,
                "vie": 63
        },
        {
                "id": "card-20285",
                "nom": "Spectre du Crépuscule #166",
                "img": "assets/carts/20285.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "rare",
                "attaque": 37,
                "vie": 72
        },
        {
                "id": "card-20286",
                "nom": "Seigneur de l'Aube #167",
                "img": "assets/carts/20286.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "epique",
                "attaque": 56,
                "vie": 75
        },
        {
                "id": "card-20287",
                "nom": "Assassin du Crépuscule #168",
                "img": "assets/carts/20287.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "epique",
                "attaque": 72,
                "vie": 79
        },
        {
                "id": "card-20288",
                "nom": "Mage des Brumes #169",
                "img": "assets/carts/20288.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "rare",
                "attaque": 59,
                "vie": 68
        },
        {
                "id": "card-20289",
                "nom": "Mage de l'Aube #170",
                "img": "assets/carts/20289.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "rare",
                "attaque": 53,
                "vie": 63
        },
        {
                "id": "card-20292",
                "nom": "Bête de Glace #171",
                "img": "assets/carts/20292.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "epique",
                "attaque": 70,
                "vie": 74
        },
        {
                "id": "card-20293",
                "nom": "Esprit de la Forêt #172",
                "img": "assets/carts/20293.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "legendaire",
                "attaque": 82,
                "vie": 78
        },
        {
                "id": "card-20294",
                "nom": "Dragon du Destin #173",
                "img": "assets/carts/20294.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "rare",
                "attaque": 64,
                "vie": 45
        },
        {
                "id": "card-20296",
                "nom": "Chasseur du Crépuscule #174",
                "img": "assets/carts/20296.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "commune",
                "attaque": 37,
                "vie": 70
        },
        {
                "id": "card-20297",
                "nom": "Esprit Solaire #175",
                "img": "assets/carts/20297.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "commune",
                "attaque": 43,
                "vie": 34
        },
        {
                "id": "card-20299",
                "nom": "Archère de la Forêt #176",
                "img": "assets/carts/20299.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "epique",
                "attaque": 55,
                "vie": 95
        },
        {
                "id": "card-20300",
                "nom": "Dragon des Tempêtes #177",
                "img": "assets/carts/20300.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "rare",
                "attaque": 39,
                "vie": 74
        },
        {
                "id": "card-20303",
                "nom": "Sentinelle Éternel #178",
                "img": "assets/carts/20303.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "epique",
                "attaque": 62,
                "vie": 86
        },
        {
                "id": "card-20304",
                "nom": "Guerrier de Glace #179",
                "img": "assets/carts/20304.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "epique",
                "attaque": 63,
                "vie": 79
        },
        {
                "id": "card-20305",
                "nom": "Prêtre de Feu #180",
                "img": "assets/carts/20305.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "epique",
                "attaque": 62,
                "vie": 78
        },
        {
                "id": "card-20306",
                "nom": "Archère Spectral #181",
                "img": "assets/carts/20306.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "rare",
                "attaque": 45,
                "vie": 54
        },
        {
                "id": "card-20307",
                "nom": "Sentinelle Céleste #182",
                "img": "assets/carts/20307.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "rare",
                "attaque": 46,
                "vie": 45
        },
        {
                "id": "card-20309",
                "nom": "Chasseur Oublié #183",
                "img": "assets/carts/20309.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "legendaire",
                "attaque": 81,
                "vie": 110
        },
        {
                "id": "card-20310",
                "nom": "Gardien de Sang #184",
                "img": "assets/carts/20310.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "commune",
                "attaque": 35,
                "vie": 66
        },
        {
                "id": "card-20311",
                "nom": "Ombre de Sang #185",
                "img": "assets/carts/20311.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "legendaire",
                "attaque": 68,
                "vie": 92
        },
        {
                "id": "card-20313",
                "nom": "Guerrier des Abysses #186",
                "img": "assets/carts/20313.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "legendaire",
                "attaque": 93,
                "vie": 92
        },
        {
                "id": "card-20314",
                "nom": "Chevalier de la Forêt #187",
                "img": "assets/carts/20314.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "legendaire",
                "attaque": 93,
                "vie": 105
        },
        {
                "id": "card-20315",
                "nom": "Prêtre de l'Aube #188",
                "img": "assets/carts/20315.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "commune",
                "attaque": 34,
                "vie": 63
        },
        {
                "id": "card-20316",
                "nom": "Assassin Céleste #189",
                "img": "assets/carts/20316.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "epique",
                "attaque": 65,
                "vie": 74
        },
        {
                "id": "card-20317",
                "nom": "Bête Éternel #190",
                "img": "assets/carts/20317.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "legendaire",
                "attaque": 83,
                "vie": 97
        },
        {
                "id": "card-20318",
                "nom": "Esprit Sauvage #191",
                "img": "assets/carts/20318.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "rare",
                "attaque": 47,
                "vie": 47
        },
        {
                "id": "card-20319",
                "nom": "Mage des Tempêtes #192",
                "img": "assets/carts/20319.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "rare",
                "attaque": 48,
                "vie": 61
        },
        {
                "id": "card-20320",
                "nom": "Paladin d'Acier #193",
                "img": "assets/carts/20320.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "commune",
                "attaque": 39,
                "vie": 49
        },
        {
                "id": "card-20322",
                "nom": "Esprit des Enfers #194",
                "img": "assets/carts/20322.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "commune",
                "attaque": 39,
                "vie": 59
        },
        {
                "id": "card-20326",
                "nom": "Chasseur des Brumes #195",
                "img": "assets/carts/20326.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "rare",
                "attaque": 59,
                "vie": 70
        },
        {
                "id": "card-20327",
                "nom": "Titan de l'Aube #196",
                "img": "assets/carts/20327.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "rare",
                "attaque": 55,
                "vie": 64
        },
        {
                "id": "card-20328",
                "nom": "Esprit de l'Aube #197",
                "img": "assets/carts/20328.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "legendaire",
                "attaque": 88,
                "vie": 104
        },
        {
                "id": "card-20329",
                "nom": "Voleur Céleste #198",
                "img": "assets/carts/20329.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "rare",
                "attaque": 47,
                "vie": 63
        },
        {
                "id": "card-20330",
                "nom": "Archère de Sang #199",
                "img": "assets/carts/20330.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "rare",
                "attaque": 51,
                "vie": 53
        },
        {
                "id": "card-20331",
                "nom": "Voleur Solaire #200",
                "img": "assets/carts/20331.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "epique",
                "attaque": 75,
                "vie": 62
        },
        {
                "id": "card-20332",
                "nom": "Guerrier des Abysses #201",
                "img": "assets/carts/20332.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "epique",
                "attaque": 53,
                "vie": 95
        },
        {
                "id": "card-20333",
                "nom": "Voleur Oublié #202",
                "img": "assets/carts/20333.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "rare",
                "attaque": 42,
                "vie": 58
        },
        {
                "id": "card-20334",
                "nom": "Dragon Spectral #203",
                "img": "assets/carts/20334.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "legendaire",
                "attaque": 74,
                "vie": 103
        },
        {
                "id": "card-20335",
                "nom": "Guerrier Solaire #204",
                "img": "assets/carts/20335.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "epique",
                "attaque": 53,
                "vie": 66
        },
        {
                "id": "card-20336",
                "nom": "Ombre Sauvage #205",
                "img": "assets/carts/20336.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "legendaire",
                "attaque": 94,
                "vie": 94
        },
        {
                "id": "card-20337",
                "nom": "Prêtre de la Forêt #206",
                "img": "assets/carts/20337.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "legendaire",
                "attaque": 82,
                "vie": 85
        },
        {
                "id": "card-20341",
                "nom": "Seigneur Spectral #207",
                "img": "assets/carts/20341.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "commune",
                "attaque": 24,
                "vie": 53
        },
        {
                "id": "card-20342",
                "nom": "Golem d'Acier #208",
                "img": "assets/carts/20342.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "rare",
                "attaque": 43,
                "vie": 78
        },
        {
                "id": "card-20343",
                "nom": "Esprit du Crépuscule #209",
                "img": "assets/carts/20343.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "rare",
                "attaque": 56,
                "vie": 51
        },
        {
                "id": "card-20344",
                "nom": "Sentinelle de l'Aube #210",
                "img": "assets/carts/20344.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "legendaire",
                "attaque": 86,
                "vie": 83
        },
        {
                "id": "card-20345",
                "nom": "Ombre des Abysses #211",
                "img": "assets/carts/20345.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "epique",
                "attaque": 61,
                "vie": 88
        },
        {
                "id": "card-20346",
                "nom": "Gardien d'Acier #212",
                "img": "assets/carts/20346.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "epique",
                "attaque": 55,
                "vie": 79
        },
        {
                "id": "card-20347",
                "nom": "Paladin d'Acier #213",
                "img": "assets/carts/20347.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "rare",
                "attaque": 46,
                "vie": 66
        },
        {
                "id": "card-20348",
                "nom": "Mage du Crépuscule #214",
                "img": "assets/carts/20348.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "commune",
                "attaque": 27,
                "vie": 48
        },
        {
                "id": "card-20350",
                "nom": "Titan Solaire #215",
                "img": "assets/carts/20350.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "rare",
                "attaque": 46,
                "vie": 71
        },
        {
                "id": "card-20352",
                "nom": "Archère Oublié #216",
                "img": "assets/carts/20352.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "commune",
                "attaque": 44,
                "vie": 35
        },
        {
                "id": "card-20353",
                "nom": "Seigneur du Crépuscule #217",
                "img": "assets/carts/20353.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "rare",
                "attaque": 49,
                "vie": 76
        },
        {
                "id": "card-20355",
                "nom": "Chasseur de l'Aube #218",
                "img": "assets/carts/20355.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "rare",
                "attaque": 38,
                "vie": 49
        },
        {
                "id": "card-20356",
                "nom": "Ombre Oublié #219",
                "img": "assets/carts/20356.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "commune",
                "attaque": 33,
                "vie": 70
        },
        {
                "id": "card-20357",
                "nom": "Paladin de l'Aube #220",
                "img": "assets/carts/20357.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "commune",
                "attaque": 26,
                "vie": 35
        },
        {
                "id": "card-20358",
                "nom": "Prêtre de l'Aube #221",
                "img": "assets/carts/20358.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "rare",
                "attaque": 38,
                "vie": 49
        },
        {
                "id": "card-20359",
                "nom": "Paladin des Brumes #222",
                "img": "assets/carts/20359.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "epique",
                "attaque": 67,
                "vie": 79
        },
        {
                "id": "card-20362",
                "nom": "Chevalier Oublié #223",
                "img": "assets/carts/20362.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "rare",
                "attaque": 59,
                "vie": 65
        },
        {
                "id": "card-20363",
                "nom": "Paladin des Tempêtes #224",
                "img": "assets/carts/20363.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "epique",
                "attaque": 63,
                "vie": 86
        },
        {
                "id": "card-20365",
                "nom": "Gardien Céleste #225",
                "img": "assets/carts/20365.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "commune",
                "attaque": 25,
                "vie": 64
        },
        {
                "id": "card-20366",
                "nom": "Chevalier des Enfers #226",
                "img": "assets/carts/20366.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "commune",
                "attaque": 44,
                "vie": 32
        },
        {
                "id": "card-20367",
                "nom": "Guerrier Éternel #227",
                "img": "assets/carts/20367.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "epique",
                "attaque": 62,
                "vie": 65
        },
        {
                "id": "card-20370",
                "nom": "Golem de la Forêt #228",
                "img": "assets/carts/20370.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "legendaire",
                "attaque": 68,
                "vie": 99
        },
        {
                "id": "card-20371",
                "nom": "Bête Éternel #229",
                "img": "assets/carts/20371.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "epique",
                "attaque": 61,
                "vie": 75
        },
        {
                "id": "card-20372",
                "nom": "Paladin Spectral #230",
                "img": "assets/carts/20372.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "epique",
                "attaque": 52,
                "vie": 71
        },
        {
                "id": "card-20373",
                "nom": "Chasseur de Feu #231",
                "img": "assets/carts/20373.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "commune",
                "attaque": 34,
                "vie": 40
        },
        {
                "id": "card-20374",
                "nom": "Sentinelle de Feu #232",
                "img": "assets/carts/20374.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "rare",
                "attaque": 53,
                "vie": 66
        },
        {
                "id": "card-20378",
                "nom": "Démon de la Forêt #233",
                "img": "assets/carts/20378.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "commune",
                "attaque": 49,
                "vie": 56
        },
        {
                "id": "card-20379",
                "nom": "Titan des Abysses #234",
                "img": "assets/carts/20379.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "epique",
                "attaque": 58,
                "vie": 79
        },
        {
                "id": "card-20380",
                "nom": "Assassin Solaire #235",
                "img": "assets/carts/20380.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "epique",
                "attaque": 72,
                "vie": 70
        },
        {
                "id": "card-20382",
                "nom": "Gardien Oublié #236",
                "img": "assets/carts/20382.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "commune",
                "attaque": 23,
                "vie": 69
        },
        {
                "id": "card-20383",
                "nom": "Mage Solaire #237",
                "img": "assets/carts/20383.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "legendaire",
                "attaque": 84,
                "vie": 84
        },
        {
                "id": "card-20384",
                "nom": "Prêtre Oublié #238",
                "img": "assets/carts/20384.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "legendaire",
                "attaque": 85,
                "vie": 77
        },
        {
                "id": "card-20386",
                "nom": "Esprit du Destin #239",
                "img": "assets/carts/20386.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "commune",
                "attaque": 24,
                "vie": 55
        },
        {
                "id": "card-20387",
                "nom": "Voleur d'Acier #240",
                "img": "assets/carts/20387.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "legendaire",
                "attaque": 70,
                "vie": 75
        },
        {
                "id": "card-20388",
                "nom": "Guerrier Céleste #241",
                "img": "assets/carts/20388.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "rare",
                "attaque": 38,
                "vie": 68
        },
        {
                "id": "card-20389",
                "nom": "Titan des Tempêtes #242",
                "img": "assets/carts/20389.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "legendaire",
                "attaque": 81,
                "vie": 83
        },
        {
                "id": "card-20390",
                "nom": "Seigneur d'Acier #243",
                "img": "assets/carts/20390.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "legendaire",
                "attaque": 74,
                "vie": 105
        },
        {
                "id": "card-20392",
                "nom": "Esprit des Abysses #244",
                "img": "assets/carts/20392.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "commune",
                "attaque": 46,
                "vie": 36
        },
        {
                "id": "card-20393",
                "nom": "Golem des Brumes #245",
                "img": "assets/carts/20393.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "commune",
                "attaque": 38,
                "vie": 46
        },
        {
                "id": "card-20394",
                "nom": "Chasseur des Brumes #246",
                "img": "assets/carts/20394.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "legendaire",
                "attaque": 92,
                "vie": 96
        },
        {
                "id": "card-20395",
                "nom": "Spectre d'Acier #247",
                "img": "assets/carts/20395.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "legendaire",
                "attaque": 65,
                "vie": 108
        },
        {
                "id": "card-20397",
                "nom": "Assassin de Glace #248",
                "img": "assets/carts/20397.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "epique",
                "attaque": 52,
                "vie": 84
        },
        {
                "id": "card-20398",
                "nom": "Ombre Sauvage #249",
                "img": "assets/carts/20398.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "legendaire",
                "attaque": 86,
                "vie": 99
        },
        {
                "id": "card-20400",
                "nom": "Seigneur Solaire #250",
                "img": "assets/carts/20400.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "epique",
                "attaque": 50,
                "vie": 63
        },
        {
                "id": "card-20401",
                "nom": "Assassin des Brumes #251",
                "img": "assets/carts/20401.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "legendaire",
                "attaque": 84,
                "vie": 78
        },
        {
                "id": "card-20402",
                "nom": "Ombre du Crépuscule #252",
                "img": "assets/carts/20402.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "legendaire",
                "attaque": 85,
                "vie": 80
        },
        {
                "id": "card-20405",
                "nom": "Assassin Spectral #253",
                "img": "assets/carts/20405.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "epique",
                "attaque": 66,
                "vie": 69
        },
        {
                "id": "card-20406",
                "nom": "Sentinelle des Enfers #254",
                "img": "assets/carts/20406.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "commune",
                "attaque": 49,
                "vie": 34
        },
        {
                "id": "card-20408",
                "nom": "Esprit du Crépuscule #255",
                "img": "assets/carts/20408.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "legendaire",
                "attaque": 78,
                "vie": 102
        },
        {
                "id": "card-20409",
                "nom": "Gardien Céleste #256",
                "img": "assets/carts/20409.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "legendaire",
                "attaque": 70,
                "vie": 92
        },
        {
                "id": "card-20411",
                "nom": "Gardien de la Forêt #257",
                "img": "assets/carts/20411.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "rare",
                "attaque": 63,
                "vie": 79
        },
        {
                "id": "card-20413",
                "nom": "Spectre Solaire #258",
                "img": "assets/carts/20413.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "legendaire",
                "attaque": 81,
                "vie": 109
        },
        {
                "id": "card-20414",
                "nom": "Golem Sauvage #259",
                "img": "assets/carts/20414.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "legendaire",
                "attaque": 79,
                "vie": 103
        },
        {
                "id": "card-20416",
                "nom": "Seigneur Oublié #260",
                "img": "assets/carts/20416.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "legendaire",
                "attaque": 94,
                "vie": 104
        },
        {
                "id": "card-20417",
                "nom": "Gardien Éternel #261",
                "img": "assets/carts/20417.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "legendaire",
                "attaque": 76,
                "vie": 95
        },
        {
                "id": "card-20418",
                "nom": "Prêtre Sauvage #262",
                "img": "assets/carts/20418.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "epique",
                "attaque": 60,
                "vie": 79
        },
        {
                "id": "card-20419",
                "nom": "Archère de la Forêt #263",
                "img": "assets/carts/20419.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "commune",
                "attaque": 34,
                "vie": 38
        },
        {
                "id": "card-20421",
                "nom": "Sentinelle de Glace #264",
                "img": "assets/carts/20421.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "commune",
                "attaque": 49,
                "vie": 39
        },
        {
                "id": "card-20423",
                "nom": "Guerrier Éternel #265",
                "img": "assets/carts/20423.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "commune",
                "attaque": 20,
                "vie": 52
        },
        {
                "id": "card-20424",
                "nom": "Spectre Sauvage #266",
                "img": "assets/carts/20424.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "epique",
                "attaque": 54,
                "vie": 69
        },
        {
                "id": "card-20425",
                "nom": "Prêtre d'Acier #267",
                "img": "assets/carts/20425.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "commune",
                "attaque": 44,
                "vie": 46
        },
        {
                "id": "card-20427",
                "nom": "Ombre de Sang #268",
                "img": "assets/carts/20427.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "commune",
                "attaque": 24,
                "vie": 45
        },
        {
                "id": "card-20430",
                "nom": "Titan Oublié #269",
                "img": "assets/carts/20430.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "legendaire",
                "attaque": 66,
                "vie": 88
        },
        {
                "id": "card-20431",
                "nom": "Archère Solaire #270",
                "img": "assets/carts/20431.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "legendaire",
                "attaque": 77,
                "vie": 99
        },
        {
                "id": "card-20432",
                "nom": "Démon des Brumes #271",
                "img": "assets/carts/20432.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "epique",
                "attaque": 64,
                "vie": 66
        },
        {
                "id": "card-20433",
                "nom": "Esprit de Feu #272",
                "img": "assets/carts/20433.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "epique",
                "attaque": 63,
                "vie": 89
        },
        {
                "id": "card-20435",
                "nom": "Bête des Enfers #273",
                "img": "assets/carts/20435.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "legendaire",
                "attaque": 95,
                "vie": 100
        },
        {
                "id": "card-20436",
                "nom": "Paladin des Tempêtes #274",
                "img": "assets/carts/20436.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "epique",
                "attaque": 68,
                "vie": 79
        },
        {
                "id": "card-20438",
                "nom": "Assassin du Destin #275",
                "img": "assets/carts/20438.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "commune",
                "attaque": 43,
                "vie": 65
        },
        {
                "id": "card-20439",
                "nom": "Mage de la Forêt #276",
                "img": "assets/carts/20439.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "epique",
                "attaque": 61,
                "vie": 72
        },
        {
                "id": "card-20440",
                "nom": "Spectre Sauvage #277",
                "img": "assets/carts/20440.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "epique",
                "attaque": 60,
                "vie": 91
        },
        {
                "id": "card-20441",
                "nom": "Bête du Destin #278",
                "img": "assets/carts/20441.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "legendaire",
                "attaque": 95,
                "vie": 104
        },
        {
                "id": "card-20443",
                "nom": "Mage des Abysses #279",
                "img": "assets/carts/20443.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "commune",
                "attaque": 44,
                "vie": 55
        },
        {
                "id": "card-20444",
                "nom": "Mage des Abysses #280",
                "img": "assets/carts/20444.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "rare",
                "attaque": 57,
                "vie": 61
        },
        {
                "id": "card-20446",
                "nom": "Guerrier des Brumes #281",
                "img": "assets/carts/20446.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "legendaire",
                "attaque": 65,
                "vie": 108
        },
        {
                "id": "card-20447",
                "nom": "Ombre des Tempêtes #282",
                "img": "assets/carts/20447.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "epique",
                "attaque": 75,
                "vie": 71
        },
        {
                "id": "card-20448",
                "nom": "Mage Sauvage #283",
                "img": "assets/carts/20448.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "rare",
                "attaque": 48,
                "vie": 70
        },
        {
                "id": "card-20449",
                "nom": "Titan Céleste #284",
                "img": "assets/carts/20449.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "epique",
                "attaque": 61,
                "vie": 77
        },
        {
                "id": "card-20450",
                "nom": "Démon Spectral #285",
                "img": "assets/carts/20450.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "legendaire",
                "attaque": 88,
                "vie": 85
        },
        {
                "id": "card-20454",
                "nom": "Seigneur Solaire #286",
                "img": "assets/carts/20454.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "epique",
                "attaque": 61,
                "vie": 62
        },
        {
                "id": "card-20455",
                "nom": "Démon de la Forêt #287",
                "img": "assets/carts/20455.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "epique",
                "attaque": 61,
                "vie": 82
        },
        {
                "id": "card-20457",
                "nom": "Esprit Solaire #288",
                "img": "assets/carts/20457.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "commune",
                "attaque": 41,
                "vie": 70
        },
        {
                "id": "card-20458",
                "nom": "Voleur du Destin #289",
                "img": "assets/carts/20458.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "legendaire",
                "attaque": 73,
                "vie": 104
        },
        {
                "id": "card-20459",
                "nom": "Démon du Crépuscule #290",
                "img": "assets/carts/20459.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "commune",
                "attaque": 21,
                "vie": 42
        },
        {
                "id": "card-20460",
                "nom": "Prêtre des Enfers #291",
                "img": "assets/carts/20460.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "commune",
                "attaque": 33,
                "vie": 48
        },
        {
                "id": "card-20461",
                "nom": "Assassin de Sang #292",
                "img": "assets/carts/20461.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "commune",
                "attaque": 29,
                "vie": 31
        },
        {
                "id": "card-20464",
                "nom": "Bête de l'Aube #293",
                "img": "assets/carts/20464.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "legendaire",
                "attaque": 86,
                "vie": 81
        },
        {
                "id": "card-20465",
                "nom": "Chasseur de la Forêt #294",
                "img": "assets/carts/20465.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "epique",
                "attaque": 51,
                "vie": 67
        },
        {
                "id": "card-20467",
                "nom": "Démon des Abysses #295",
                "img": "assets/carts/20467.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "rare",
                "attaque": 59,
                "vie": 70
        },
        {
                "id": "card-20472",
                "nom": "Esprit des Enfers #296",
                "img": "assets/carts/20472.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "legendaire",
                "attaque": 70,
                "vie": 104
        },
        {
                "id": "card-20473",
                "nom": "Archère de Feu #297",
                "img": "assets/carts/20473.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "legendaire",
                "attaque": 75,
                "vie": 99
        },
        {
                "id": "card-20474",
                "nom": "Sentinelle Céleste #298",
                "img": "assets/carts/20474.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "epique",
                "attaque": 61,
                "vie": 82
        },
        {
                "id": "card-20475",
                "nom": "Ombre de Glace #299",
                "img": "assets/carts/20475.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "rare",
                "attaque": 46,
                "vie": 53
        },
        {
                "id": "card-20476",
                "nom": "Bête de Sang #300",
                "img": "assets/carts/20476.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "commune",
                "attaque": 27,
                "vie": 39
        },
        {
                "id": "card-20477",
                "nom": "Spectre des Brumes #301",
                "img": "assets/carts/20477.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "rare",
                "attaque": 37,
                "vie": 64
        },
        {
                "id": "card-20479",
                "nom": "Bête de la Forêt #302",
                "img": "assets/carts/20479.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "commune",
                "attaque": 33,
                "vie": 60
        },
        {
                "id": "card-20480",
                "nom": "Ombre de Sang #303",
                "img": "assets/carts/20480.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "legendaire",
                "attaque": 68,
                "vie": 101
        },
        {
                "id": "card-20482",
                "nom": "Archère de Sang #304",
                "img": "assets/carts/20482.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "rare",
                "attaque": 47,
                "vie": 71
        },
        {
                "id": "card-20484",
                "nom": "Prêtre des Brumes #305",
                "img": "assets/carts/20484.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "rare",
                "attaque": 62,
                "vie": 67
        },
        {
                "id": "card-20485",
                "nom": "Esprit Solaire #306",
                "img": "assets/carts/20485.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "commune",
                "attaque": 47,
                "vie": 69
        },
        {
                "id": "card-20486",
                "nom": "Ombre Sauvage #307",
                "img": "assets/carts/20486.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "commune",
                "attaque": 28,
                "vie": 39
        },
        {
                "id": "card-20487",
                "nom": "Dragon d'Acier #308",
                "img": "assets/carts/20487.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "legendaire",
                "attaque": 76,
                "vie": 96
        },
        {
                "id": "card-20489",
                "nom": "Chevalier des Abysses #309",
                "img": "assets/carts/20489.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "commune",
                "attaque": 20,
                "vie": 51
        },
        {
                "id": "card-20490",
                "nom": "Démon Spectral #310",
                "img": "assets/carts/20490.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "legendaire",
                "attaque": 89,
                "vie": 83
        },
        {
                "id": "card-20491",
                "nom": "Golem du Destin #311",
                "img": "assets/carts/20491.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "rare",
                "attaque": 51,
                "vie": 75
        },
        {
                "id": "card-20493",
                "nom": "Bête des Abysses #312",
                "img": "assets/carts/20493.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "rare",
                "attaque": 35,
                "vie": 47
        },
        {
                "id": "card-20494",
                "nom": "Chevalier d'Acier #313",
                "img": "assets/carts/20494.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "commune",
                "attaque": 32,
                "vie": 33
        },
        {
                "id": "card-20495",
                "nom": "Gardien Céleste #314",
                "img": "assets/carts/20495.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "epique",
                "attaque": 63,
                "vie": 89
        },
        {
                "id": "card-20497",
                "nom": "Archère du Destin #315",
                "img": "assets/carts/20497.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "rare",
                "attaque": 44,
                "vie": 53
        },
        {
                "id": "card-20498",
                "nom": "Sentinelle des Enfers #316",
                "img": "assets/carts/20498.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "legendaire",
                "attaque": 71,
                "vie": 91
        },
        {
                "id": "card-20502",
                "nom": "Chevalier du Destin #317",
                "img": "assets/carts/20502.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "epique",
                "attaque": 77,
                "vie": 91
        },
        {
                "id": "card-20504",
                "nom": "Démon Oublié #318",
                "img": "assets/carts/20504.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "legendaire",
                "attaque": 70,
                "vie": 93
        },
        {
                "id": "card-20508",
                "nom": "Guerrier de Feu #319",
                "img": "assets/carts/20508.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "rare",
                "attaque": 48,
                "vie": 56
        },
        {
                "id": "card-20510",
                "nom": "Voleur des Brumes #320",
                "img": "assets/carts/20510.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "epique",
                "attaque": 71,
                "vie": 86
        },
        {
                "id": "card-20511",
                "nom": "Archère de Sang #321",
                "img": "assets/carts/20511.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "legendaire",
                "attaque": 83,
                "vie": 90
        },
        {
                "id": "card-20512",
                "nom": "Golem des Enfers #322",
                "img": "assets/carts/20512.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "legendaire",
                "attaque": 80,
                "vie": 89
        },
        {
                "id": "card-20513",
                "nom": "Chevalier du Destin #323",
                "img": "assets/carts/20513.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "rare",
                "attaque": 36,
                "vie": 67
        },
        {
                "id": "card-20515",
                "nom": "Assassin de Feu #324",
                "img": "assets/carts/20515.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "legendaire",
                "attaque": 95,
                "vie": 97
        },
        {
                "id": "card-20516",
                "nom": "Gardien du Destin #325",
                "img": "assets/carts/20516.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "epique",
                "attaque": 55,
                "vie": 90
        },
        {
                "id": "card-20517",
                "nom": "Mage Éternel #326",
                "img": "assets/carts/20517.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "epique",
                "attaque": 75,
                "vie": 77
        },
        {
                "id": "card-20519",
                "nom": "Spectre des Tempêtes #327",
                "img": "assets/carts/20519.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "epique",
                "attaque": 73,
                "vie": 89
        },
        {
                "id": "card-20520",
                "nom": "Guerrier de Feu #328",
                "img": "assets/carts/20520.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "commune",
                "attaque": 22,
                "vie": 46
        },
        {
                "id": "card-20522",
                "nom": "Mage de Glace #329",
                "img": "assets/carts/20522.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "commune",
                "attaque": 43,
                "vie": 47
        },
        {
                "id": "card-20524",
                "nom": "Titan de Glace #330",
                "img": "assets/carts/20524.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "rare",
                "attaque": 48,
                "vie": 47
        },
        {
                "id": "card-20527",
                "nom": "Spectre des Enfers #331",
                "img": "assets/carts/20527.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "epique",
                "attaque": 76,
                "vie": 67
        },
        {
                "id": "card-20528",
                "nom": "Esprit des Brumes #332",
                "img": "assets/carts/20528.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "rare",
                "attaque": 45,
                "vie": 54
        },
        {
                "id": "card-20530",
                "nom": "Sentinelle de Glace #333",
                "img": "assets/carts/20530.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "legendaire",
                "attaque": 87,
                "vie": 88
        },
        {
                "id": "card-20531",
                "nom": "Mage des Enfers #334",
                "img": "assets/carts/20531.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "commune",
                "attaque": 40,
                "vie": 48
        },
        {
                "id": "card-20533",
                "nom": "Titan Céleste #335",
                "img": "assets/carts/20533.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "legendaire",
                "attaque": 86,
                "vie": 93
        },
        {
                "id": "card-20534",
                "nom": "Titan de l'Aube #336",
                "img": "assets/carts/20534.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "epique",
                "attaque": 70,
                "vie": 63
        },
        {
                "id": "card-20535",
                "nom": "Assassin Oublié #337",
                "img": "assets/carts/20535.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "epique",
                "attaque": 67,
                "vie": 61
        },
        {
                "id": "card-20536",
                "nom": "Spectre de la Forêt #338",
                "img": "assets/carts/20536.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "commune",
                "attaque": 25,
                "vie": 48
        },
        {
                "id": "card-20537",
                "nom": "Chasseur des Brumes #339",
                "img": "assets/carts/20537.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "legendaire",
                "attaque": 80,
                "vie": 101
        },
        {
                "id": "card-20539",
                "nom": "Prêtre d'Acier #340",
                "img": "assets/carts/20539.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "rare",
                "attaque": 57,
                "vie": 54
        },
        {
                "id": "card-20540",
                "nom": "Assassin de Feu #341",
                "img": "assets/carts/20540.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "epique",
                "attaque": 77,
                "vie": 74
        },
        {
                "id": "card-20541",
                "nom": "Mage du Crépuscule #342",
                "img": "assets/carts/20541.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "legendaire",
                "attaque": 68,
                "vie": 109
        },
        {
                "id": "card-20544",
                "nom": "Paladin du Crépuscule #343",
                "img": "assets/carts/20544.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "rare",
                "attaque": 59,
                "vie": 71
        },
        {
                "id": "card-20545",
                "nom": "Chevalier d'Acier #344",
                "img": "assets/carts/20545.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "epique",
                "attaque": 75,
                "vie": 68
        },
        {
                "id": "card-20546",
                "nom": "Gardien Oublié #345",
                "img": "assets/carts/20546.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "legendaire",
                "attaque": 70,
                "vie": 87
        },
        {
                "id": "card-20549",
                "nom": "Chevalier des Enfers #346",
                "img": "assets/carts/20549.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "epique",
                "attaque": 72,
                "vie": 71
        },
        {
                "id": "card-20550",
                "nom": "Dragon des Brumes #347",
                "img": "assets/carts/20550.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "commune",
                "attaque": 34,
                "vie": 62
        },
        {
                "id": "card-20553",
                "nom": "Titan Céleste #348",
                "img": "assets/carts/20553.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "epique",
                "attaque": 51,
                "vie": 60
        },
        {
                "id": "card-20554",
                "nom": "Archère Oublié #349",
                "img": "assets/carts/20554.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "epique",
                "attaque": 64,
                "vie": 66
        },
        {
                "id": "card-20555",
                "nom": "Archère de la Forêt #350",
                "img": "assets/carts/20555.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "epique",
                "attaque": 66,
                "vie": 60
        },
        {
                "id": "card-20556",
                "nom": "Mage de la Forêt #351",
                "img": "assets/carts/20556.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "rare",
                "attaque": 37,
                "vie": 60
        },
        {
                "id": "card-20558",
                "nom": "Assassin d'Acier #352",
                "img": "assets/carts/20558.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "epique",
                "attaque": 62,
                "vie": 89
        },
        {
                "id": "card-20559",
                "nom": "Paladin de Sang #353",
                "img": "assets/carts/20559.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "commune",
                "attaque": 20,
                "vie": 65
        },
        {
                "id": "card-20560",
                "nom": "Guerrier Spectral #354",
                "img": "assets/carts/20560.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "legendaire",
                "attaque": 82,
                "vie": 85
        },
        {
                "id": "card-20561",
                "nom": "Chasseur du Crépuscule #355",
                "img": "assets/carts/20561.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "rare",
                "attaque": 39,
                "vie": 71
        },
        {
                "id": "card-20563",
                "nom": "Chasseur de Sang #356",
                "img": "assets/carts/20563.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "epique",
                "attaque": 73,
                "vie": 75
        },
        {
                "id": "card-20564",
                "nom": "Voleur Oublié #357",
                "img": "assets/carts/20564.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "commune",
                "attaque": 24,
                "vie": 48
        },
        {
                "id": "card-20565",
                "nom": "Bête des Enfers #358",
                "img": "assets/carts/20565.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "epique",
                "attaque": 66,
                "vie": 66
        },
        {
                "id": "card-20566",
                "nom": "Esprit des Brumes #359",
                "img": "assets/carts/20566.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "rare",
                "attaque": 47,
                "vie": 59
        },
        {
                "id": "card-20567",
                "nom": "Seigneur des Abysses #360",
                "img": "assets/carts/20567.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "legendaire",
                "attaque": 65,
                "vie": 90
        },
        {
                "id": "card-20568",
                "nom": "Voleur de la Forêt #361",
                "img": "assets/carts/20568.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "epique",
                "attaque": 65,
                "vie": 65
        },
        {
                "id": "card-20570",
                "nom": "Dragon de l'Aube #362",
                "img": "assets/carts/20570.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "epique",
                "attaque": 80,
                "vie": 80
        },
        {
                "id": "card-20571",
                "nom": "Titan de Feu #363",
                "img": "assets/carts/20571.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "rare",
                "attaque": 37,
                "vie": 64
        },
        {
                "id": "card-20572",
                "nom": "Ombre de Sang #364",
                "img": "assets/carts/20572.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "epique",
                "attaque": 61,
                "vie": 80
        },
        {
                "id": "card-20574",
                "nom": "Voleur des Brumes #365",
                "img": "assets/carts/20574.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "rare",
                "attaque": 62,
                "vie": 50
        },
        {
                "id": "card-20575",
                "nom": "Voleur Oublié #366",
                "img": "assets/carts/20575.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "commune",
                "attaque": 48,
                "vie": 40
        },
        {
                "id": "card-20576",
                "nom": "Gardien Solaire #367",
                "img": "assets/carts/20576.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "commune",
                "attaque": 38,
                "vie": 64
        },
        {
                "id": "card-20577",
                "nom": "Chasseur d'Acier #368",
                "img": "assets/carts/20577.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "rare",
                "attaque": 58,
                "vie": 68
        },
        {
                "id": "card-20580",
                "nom": "Dragon de Feu #369",
                "img": "assets/carts/20580.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "legendaire",
                "attaque": 89,
                "vie": 105
        },
        {
                "id": "card-20581",
                "nom": "Ombre des Tempêtes #370",
                "img": "assets/carts/20581.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "epique",
                "attaque": 77,
                "vie": 76
        },
        {
                "id": "card-20582",
                "nom": "Esprit de l'Aube #371",
                "img": "assets/carts/20582.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "commune",
                "attaque": 45,
                "vie": 39
        },
        {
                "id": "card-20584",
                "nom": "Paladin de la Forêt #372",
                "img": "assets/carts/20584.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "epique",
                "attaque": 78,
                "vie": 61
        },
        {
                "id": "card-20585",
                "nom": "Chevalier des Enfers #373",
                "img": "assets/carts/20585.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "rare",
                "attaque": 55,
                "vie": 52
        },
        {
                "id": "card-20586",
                "nom": "Paladin des Enfers #374",
                "img": "assets/carts/20586.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "commune",
                "attaque": 49,
                "vie": 51
        },
        {
                "id": "card-20587",
                "nom": "Démon de l'Aube #375",
                "img": "assets/carts/20587.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "commune",
                "attaque": 47,
                "vie": 60
        },
        {
                "id": "card-20589",
                "nom": "Seigneur des Tempêtes #376",
                "img": "assets/carts/20589.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "legendaire",
                "attaque": 80,
                "vie": 89
        },
        {
                "id": "card-20590",
                "nom": "Ombre de Feu #377",
                "img": "assets/carts/20590.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "epique",
                "attaque": 67,
                "vie": 65
        },
        {
                "id": "card-20591",
                "nom": "Mage Sauvage #378",
                "img": "assets/carts/20591.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "epique",
                "attaque": 77,
                "vie": 68
        },
        {
                "id": "card-20592",
                "nom": "Titan Éternel #379",
                "img": "assets/carts/20592.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "epique",
                "attaque": 74,
                "vie": 69
        },
        {
                "id": "card-20595",
                "nom": "Dragon de Sang #380",
                "img": "assets/carts/20595.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "commune",
                "attaque": 23,
                "vie": 30
        },
        {
                "id": "card-20596",
                "nom": "Ombre Sauvage #381",
                "img": "assets/carts/20596.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "epique",
                "attaque": 59,
                "vie": 79
        },
        {
                "id": "card-20597",
                "nom": "Titan Solaire #382",
                "img": "assets/carts/20597.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "legendaire",
                "attaque": 78,
                "vie": 103
        },
        {
                "id": "card-20598",
                "nom": "Ombre du Crépuscule #383",
                "img": "assets/carts/20598.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "rare",
                "attaque": 43,
                "vie": 53
        },
        {
                "id": "card-20599",
                "nom": "Sentinelle du Crépuscule #384",
                "img": "assets/carts/20599.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "legendaire",
                "attaque": 78,
                "vie": 89
        },
        {
                "id": "card-20601",
                "nom": "Dragon Céleste #385",
                "img": "assets/carts/20601.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "epique",
                "attaque": 79,
                "vie": 67
        },
        {
                "id": "card-20602",
                "nom": "Bête de l'Aube #386",
                "img": "assets/carts/20602.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "legendaire",
                "attaque": 87,
                "vie": 100
        },
        {
                "id": "card-20603",
                "nom": "Gardien du Crépuscule #387",
                "img": "assets/carts/20603.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "legendaire",
                "attaque": 74,
                "vie": 85
        },
        {
                "id": "card-20605",
                "nom": "Assassin Spectral #388",
                "img": "assets/carts/20605.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "epique",
                "attaque": 64,
                "vie": 74
        },
        {
                "id": "card-20606",
                "nom": "Ombre Spectral #389",
                "img": "assets/carts/20606.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "commune",
                "attaque": 34,
                "vie": 64
        },
        {
                "id": "card-20608",
                "nom": "Sentinelle du Crépuscule #390",
                "img": "assets/carts/20608.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "commune",
                "attaque": 46,
                "vie": 47
        },
        {
                "id": "card-20611",
                "nom": "Golem Oublié #391",
                "img": "assets/carts/20611.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "epique",
                "attaque": 53,
                "vie": 95
        },
        {
                "id": "card-20612",
                "nom": "Chevalier des Abysses #392",
                "img": "assets/carts/20612.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "epique",
                "attaque": 73,
                "vie": 64
        },
        {
                "id": "card-20613",
                "nom": "Voleur Spectral #393",
                "img": "assets/carts/20613.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "rare",
                "attaque": 36,
                "vie": 50
        },
        {
                "id": "card-20615",
                "nom": "Chevalier des Abysses #394",
                "img": "assets/carts/20615.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "legendaire",
                "attaque": 73,
                "vie": 97
        },
        {
                "id": "card-20616",
                "nom": "Bête de Feu #395",
                "img": "assets/carts/20616.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "commune",
                "attaque": 28,
                "vie": 42
        },
        {
                "id": "card-20617",
                "nom": "Prêtre de la Forêt #396",
                "img": "assets/carts/20617.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "lumiere",
                "rarete": "commune",
                "attaque": 33,
                "vie": 65
        },
        {
                "id": "card-20619",
                "nom": "Bête des Brumes #397",
                "img": "assets/carts/20619.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "commune",
                "attaque": 50,
                "vie": 68
        },
        {
                "id": "card-20620",
                "nom": "Titan Solaire #398",
                "img": "assets/carts/20620.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "legendaire",
                "attaque": 86,
                "vie": 98
        },
        {
                "id": "card-20621",
                "nom": "Seigneur des Tempêtes #399",
                "img": "assets/carts/20621.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "rare",
                "attaque": 64,
                "vie": 71
        },
        {
                "id": "card-20622",
                "nom": "Paladin d'Acier #400",
                "img": "assets/carts/20622.jpg",
                "description": "Une puissante créature mythique prête pour le combat.",
                "type": "tenebres",
                "rarete": "commune",
                "attaque": 40,
                "vie": 41
        }
];
