function getDialogueAfficher()
{    return [
    {   "vide"   : "_",
        "afficher":"false",
        "choix":1,
        "Texte1"  : "gentil",
        "Texte2" : "normal",
        "Texte3" : "mechant",
    },
    {   "vide"   : "_",
        "afficher":"false",
        "choix":1,
        "Texte1"  : "gentil",
        "Texte2" : "normal",
        "Texte3" : "mechant",
    },
    {   "vide"   : "_",
        "afficher":"false",
        "choix":1,
        "Texte1"  : "gentil",
        "Texte2" : "normal",
        "Texte3" : "mechant",
    },
    {   "vide"   : "_",
        "afficher":"false",
        "choix":1,
        "Texte1"  : "gentil",
        "Texte2" : "normal",
        "Texte3" : "mechant",
    }
];

}

function getDialogueAfficherchoix()
{return [
    {   "enoncer":"enoncer",
        "choix": 1,
        "afficher": "vide"},
    {   "enoncer":"enoncer",
        "choix": 1,
        "afficher": "Texte1"},
    {   "enoncer":"enoncer",
        "choix": 1,
        "afficher": "Texte2"},
    {   "enoncer":"enoncer",
        "choix": 1,
        "afficher": "Texte3"}
];
}



function setTexte($NBenigme)
{switch ($NBenigme)
{   case 1:Enonce="La reponse est : Initialisation de lyha";break;
    case 2:Enonce="1+1";break;
    case 3:Enonce="1+1";break;
    case 4:Enonce="1+1";break;
    case 5:Enonce="101010";break;
    case 6:Enonce="Thomas mesure 90cm + la moitié de sa taille. Combien de cm mesure t-il ?";break;
    default:Enonce="enoncer default";break;
}
    return Enonce;
}
function setReponse(NBenigme)
{switch (NBenigme)
{   case 1:Reponse="Initialisation de lyha";break;
    case 2:Reponse="2";break;
    case 3:Reponse="11";break;
    case 4:Reponse="3";break;
    case 5:Reponse="42";break;
    case 6:Reponse="180";break;
    default:Reponse="default ";break;
}

    return Reponse;
}
