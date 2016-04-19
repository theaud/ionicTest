// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
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

      $rootScope.back = function() {
          $scope.Users.header="back";
      };

  });
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

    .controller('home', function($scope){
        $scope.Users.header="home";
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
      })
  
  $stateProvider.state('Option',{ url:'/Option',
    templateUrl:'templates/Option.html',
      controller:'Option' })
  
  $stateProvider.state('Credit',{    url:'/Credit',
    templateUrl:'templates/Credit.html',
      controller:'Credit'})
  
  $stateProvider.state('Enigme',{    url:'/Enigme',
    templateUrl:'templates/Enigme.html',
      controller:'Enigme'
  })
    
  
  
  $urlRouterProvider.otherwise('/home')
});
