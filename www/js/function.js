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
        case 5:Reponse="180";break;
        default:Reponse="default ";break;
    }

return Reponse;
}

function setMenu(EgnimeDebloquer)
{
    var Menu = document.getElementById("nav");




for(var i=0;i<EgnimeDebloquer;i=i+5)
    { k=0;
        
        var ligne = '<li><h4>Chapitre '+(1+(i/5))+'</h4><ul>';


       do{ ligne += '<li><h5><a class="button" ui-sref="Enigme" href="#/Enigme" ng-click="set('+EgnimeDebloquer+')">Egnime ' + (1 + (parseInt(i / 5))) + '.' + (1 + k % 5) + '</h5></a></li> ';
           k++;
       }while(k<5 && k+i<EgnimeDebloquer);

        ligne+= '</li></ul> ';
    Menu.innerHTML+=ligne;
    }
}



function showlastmessage(){
    var div = dialog.getElementsByTagName("div");
    div[div.length-1].style.transition = "opacity 0.5s";
    div[div.length-1].style.opacity = 1;
}


function send(){
    var message = document.getElementById("message");
    if(message.value!=""){
        addmessageUser(message.value);
        message.value = "";


        showlastmessage();}
}


function addmessageLyha(texte){
    var dialog = document.getElementById("dialog");
    dialog.innerHTML += "<div class='left' style='opacity: 0'><p>"+message+"</p></div>";
}

function addmessageUser(message){
    var dialog = document.getElementById("dialog");
    dialog.innerHTML += "<div class='right' style='opacity: 0'><p>"+message+"</p></div>";
}