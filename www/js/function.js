
function setMenu(EgnimeDebloquer)
{
    var Menu = document.getElementById("nav");
    
for(var i=0;i<EgnimeDebloquer;i=i+5)
    { k=0;
        
        var ligne = '<li><h4>Chapitre '+(1+(i/5))+'</h4><ul>';

       do{ ligne += '<li><h5><a class="button" ui-sref="Enigme" href="#/Enigme" ng-click="setcurrent2('+(i+k)+')">Egnime ' + (1 + (parseInt(i / 5))) + '.' + (1 + k % 5) + '</h5></a></li> ';
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