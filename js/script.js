// --- 1. Carrousel (Changement d'image fixe, sans animation) ---

var imagesCarrousel = [
    "../media/campus1.png", 
    "../media/campus2.png", 
    "../media/campus3.png",
    "../media/campus4.jpg"
];

var textesCarrousel = [
    "Notre campus principal", 
    "L'espace détente", 
    "Nos différents campus à proximité",
    "Nos salles de classes"
];

var indexActuel = 0;

function changerImageAutomatique() {
    var baliseImage = document.getElementById("image-carrousel");
    var baliseLegende = document.getElementById("legende-carrousel");

    if (baliseImage != null) {
        indexActuel = indexActuel + 1;
        if (indexActuel >= imagesCarrousel.length) {
            indexActuel = 0; 
        }

        baliseImage.src = imagesCarrousel[indexActuel];

        if (baliseLegende != null) {
            baliseLegende.innerHTML = "<strong>" + textesCarrousel[indexActuel] + "</strong>";
        }
    }
}

// Lancement automatique du carrousel
setInterval(changerImageAutomatique, 4000);


// --- 2. Formations ---

var baseDeDonneesFormations = {
    'grande-ecole': [
        { nom: "Prépas intégrées", description: "Ce cycle en deux ans prépare les étudiants en combinant formation scientifique et technique avec une formation générale." },
        { nom: "Cycle ingénieur", description: "Formation de 3 ans associant un haut niveau d'enseignement scientifique et technique à des compétences en gestion de projet et management." },
        { nom: "Majeure : Data Science", description: "Forme des ingénieurs capables d'analyser, structurer et valoriser les données via le Big Data et l'IA." },
        { nom: "Majeure : Information Technology", description: "Une formation au croisement de la stratégie, du développement logiciel et des technologies émergentes." },
        { nom: "Majeure : Sécurité & Réseaux", description: "Forme des ingénieurs experts dans la protection des systèmes, la sécurisation des infrastructures et la cybersécurité." }
    ],
    'tech-num': [
        { nom: "BTS SIO", description: "Formation Bac+2 pour devenir professionnel de l'informatique." },
        { nom: "Bachelor Développeur Web & IA", description: "Apporte les connaissances nécessaires pour développer un site web." },
        { nom: "Bachelor Cybersécurité & Réseaux", description: "Grade de Licence pour concevoir et déployer des stratégies de sécurité." },
        { nom: "Mastère Dev. Manager full stack", description: "Forme des experts du développement capables de manager des projets Web." }
    ],
    'digital': [
        { nom: "BTS Communication", description: "Formation pour maîtriser les techniques de communication interne et externe." },
        { nom: "Bachelor Marketing digital & communication", description: "Apprendre à créer des contenus et concevoir des stratégies de communication." },
        { nom: "Mastère UX Design", description: "Spécialisation dans la construction d'interfaces utilisateurs." },
        { nom: "Mastère Marketing digital & Management", description: "Gagner la fidélité des clients avec la publicité en ligne." }
    ]
};

function afficherPostIts(idFiliere) {
    var zoneAffichage = document.getElementById("zone-affichage-postits");
    zoneAffichage.innerHTML = "";

    var listeFormations = baseDeDonneesFormations[idFiliere];

    for (var i = 0; i < listeFormations.length; i++) {
        var formation = listeFormations[i];

        var divCase = document.createElement("div");
        divCase.className = "post-it";
        
        divCase.onclick = function() {
            var etaitOuvert = false;
            if (this.className.indexOf("ouvert") > -1) {
                etaitOuvert = true;
            }

            var toutesLesCases = document.getElementsByClassName("post-it");
            for (var j = 0; j < toutesLesCases.length; j++) {
                toutesLesCases[j].className = toutesLesCases[j].className.replace(" ouvert", "");
            }

            if (etaitOuvert == false) {
                this.className = this.className + " ouvert";
            }
        };

        var spanTitre = document.createElement("span");
        spanTitre.className = "titre-postit";
        spanTitre.innerHTML = formation.nom;

        var pDesc = document.createElement("p");
        pDesc.className = "desc-postit";
        pDesc.innerHTML = formation.description;

        divCase.appendChild(spanTitre);
        divCase.appendChild(pDesc);

        zoneAffichage.appendChild(divCase);
    }
}

// --- 3. Validation du Formulaire ---
function validerFormulaire() {
    var nomSaisi = document.getElementById("nom").value;
    var emailSaisi = document.getElementById("email").value;
    var messageSaisi = document.getElementById("message").value;
    var baliseErreur = document.getElementById("erreur-formulaire");

    if (nomSaisi == "" || emailSaisi == "" || messageSaisi == "") {
        if(baliseErreur != null) {
            baliseErreur.innerHTML = "Attention : tous les champs doivent être remplis.";
            baliseErreur.style.color = "red"; 
        }
        return false; 
    }

    var formatEmailValide = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
    if (formatEmailValide.test(emailSaisi) == false) {
         if(baliseErreur != null) {
            baliseErreur.innerHTML = "Format d'email invalide.";
            baliseErreur.style.color = "red";
         }
         return false;
    }
    
    return true;
}