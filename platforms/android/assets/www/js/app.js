// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})



.controller('Enigme', function($scope) {

    if (typeof $scope.NBenigme == 'undefined') {
        $scope.NBenigme=1;
        $scope.Resultat="Vous n'avez rien repondu";
        $scope.Enonce="La reponse est : Initiation de lyha";
        $scope.Reponse="Initiation de lyha";

    }


    $scope.plus = function() {
        $scope.NBenigme++;
        $scope.setEnoncer();
    };
    $scope.moin = function() {
        if($scope.NBenigme>1){$scope.NBenigme--;}
        $scope.setEnoncer();
    };

    $scope.setTexte = function() {
       switch ($scope.NBenigme)
       {   case 2:$scope.Enonce="1+1";break;
           case 3:$scope.Enonce="1+1";break;
           case 4:$scope.Enonce="1+1";break;
           case 5:$scope.Enonce="101010";break;
          default:$scope.Enonce="enoncer default";break;
       }
    };

    $scope.setReponse = function() {
        switch ($scope.NBenigme)
        {   case 2:$scope.Reponse="2";break;
            case 3:$scope.Reponse="11";break;
            case 4:$scope.Reponse="3";break;
            case 5:$scope.Reponse="42";break;
           default:$scope.Reponse="default ";break;
        }
    };


    $scope.setEnoncer = function() {
        $scope.Enonce="blabla";
        $scope.Reponse="bidon "+$scope.NBenigme;
        $scope.Resultat="Vous n'avez rien repondu";

        $scope.setTexte();
        $scope.setReponse();
        
    };

    $scope.validation=function() {
        var current = document.getElementById('saisie').value;

        if ($scope.Reponse == current) {
            $scope.Resultat='Vous avez trouvé la bonne reponse';
            document.getElementById('saisie').innerHTML ="";
            $scope.plus();

        }
        else {$scope.Resultat='Vous vous etes trompés';}

    };

 })

.config(function ($stateProvider,$urlRouterProvider) {
  $stateProvider.state('home',{
    url:'/home',
    templateUrl:'templates/home.html'
  })

  $stateProvider.state('Jouer',{
      url:'/Jouer',
    templateUrl:'templates/Jouer.html'
      })
  
  $stateProvider.state('Option',{ url:'/Option',
    templateUrl:'templates/Option.html' })
  
  $stateProvider.state('Credit',{    url:'/Credit',
    templateUrl:'templates/Credit.html'})
  
  $stateProvider.state('Enigme',{    url:'/Enigme',
    templateUrl:'templates/Enigme.html',
      controller:'Enigme'
  })
    
  
  
  $urlRouterProvider.otherwise('/home')
});
