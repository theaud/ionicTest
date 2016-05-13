
angular.module('starter', ['ionic'])

.run(function($ionicPlatform,$rootScope) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
      $rootScope.Users = {'header':'Header'};
      $rootScope.reponse={'gentil':'gentil','normal':'normal','mechant':'mechant'}

      $rootScope.DialogueAfficherchoix =getDialogueAfficherchoix();
      $rootScope.DialogueAfficher = getDialogueAfficher();
      $rootScope.data=MongoClient.find();
      var mongodb = require('mongodb');

      var MongoClient = mongodb.MongoClient;
      var url = 'mongodb://localhost:8100/my_database_name';

      $rootScope.EgnimeDebloquer=12;
      $rootScope.current=10;
  });
})


.controller('TEST', function($scope){
    $scope.Users.header="TEST";

})

.controller('Enigme', function($scope) {

    if (typeof $scope.NBenigme == 'undefined') {
        $scope.NBenigme=1;
        $scope.Resultat="Vous n'avez rien repondu";
        $scope.Enonce="La reponse est : Initialisation de lyha";
        $scope.Reponse="Initialisation de lyha";
        $scope.Users.header="Enigme";
    }


    $scope.plus = function() {
        $scope.NBenigme++;
        $scope.setEnoncer();
    };
    $scope.moin = function() {
        if($scope.NBenigme>1){$scope.NBenigme--;}
        $scope.setEnoncer();
    };

    $scope.Dialogue = function() {

        //vers dialogue
    };

    $scope.setEnoncer = function() {
        $scope.Enonce="blabla";
        $scope.Reponse="bidon ";
        $scope.Resultat="Vous n'avez rien repondu";

        $scope.Enonce=setTexte($scope.NBenigme);
        $scope.Reponse=setReponse($scope.NBenigme);


    };

    $scope.validation=function() {
        var current = document.getElementById('saisie').value;

        if ($scope.Reponse == current) {
            $scope.Resultat='Vous avez trouvé la bonne reponse';
            document.getElementById('saisie').value ="";
            $scope.plus();

        }
        else {$scope.Resultat='Vous vous etes trompés';}

    };

 })

.controller('home', function($scope){
        $scope.Users.header="home";
    
        sfHover = function() {
        var sfEls = document.getElementById("nav").getElementsByTagName("li");
        for (var i=0; i<sfEls.length; i++) {
            sfEls[i].onmouseover=function() {
                this.className+=" sfhover";
            }
            sfEls[i].onmouseout=function() {
                this.className=this.className.replace(new RegExp(" sfhover\b"), "");
            }
        }
    }
    if (window.attachEvent) window.attachEvent("onload", sfHover);


    })

.controller('Selection', function($scope){
        $scope.Users.header="Selection";

    $scope.NBenigmeSSS=1;
    $scope.Chapitre_1="yo";


    /*
    $scope.miseenpage=function() {
        $scope.Chapitre_1="";
        for (var i=0; i<NBenigmeSSS; i++)
        {
            $scope.Chapitre_1+="<li>"+i+"</li>";
            document.getElementById("Chapitre_1").innerHTML ="<li>"+i+"</li>";
        }
    }
    */
    $scope.ajout=function(){
        var dialog = document.getElementById("menu");
        dialog.innerHTML += "<div ><p>dddd</p></div>";
        $scope.value=3;
    }
    $scope.set = function(yolo) {
        $scope.value=yolo;
       
    };
   setMenu(21);
    
  
   // document.getElementById("Chapitre_1").innerHTML = "<li>{{Chapitre_1}}</li>";
    


    })
.controller('Dialogue', function($scope){
        $scope.Users.header="Dialogue";
        $scope.affichage = function() {



        };
    })

.controller('Jouer', function($scope){
        $scope.Users.header="Jouer";
    })

    .controller('Option', function($scope){
        $scope.Users.header="Option";
    })

    .controller('Credit', function($scope){
        $scope.Users.header="Credit";
    })


    .config(function ($stateProvider,$urlRouterProvider) {
  $stateProvider.state('home',{
    url:'/home',
    templateUrl:'templates/home.html',
      controller:'home'
  })

  $stateProvider.state('Jouer',{
      url:'/Jouer',
    templateUrl:'templates/Jouer.html',
      controller:'Jouer'
      });

  $stateProvider.state('Option',{ url:'/Option',
    templateUrl:'templates/Option.html',
      controller:'Option' });

  $stateProvider.state('Credit',{    url:'/Credit',
    templateUrl:'templates/Credit.html',
      controller:'Credit'});

  $stateProvider.state('Enigme',{    url:'/Enigme',
    templateUrl:'templates/Enigme.html',
      controller:'Enigme'
  });
  $stateProvider.state('TEST',{    url:'/TEST',
   templateUrl:'templates/TEST.html',
   controller:'TEST'
  });
  $stateProvider.state('Dialogue',{    url:'/Dialogue',
            templateUrl:'templates/Dialogue.html',
            controller:'Dialogue'
        });

    $stateProvider.state('Selection',{    url:'/Selection',
        templateUrl:'templates/Selection.html',
        controller:'Selection'
    });
  $urlRouterProvider.otherwise('/home')
});
