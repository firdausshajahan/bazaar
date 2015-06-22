// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

//Array of list juadah & minuman
var listJuadah = ['Roti Boom','Kuih Pelita','Sri Muka','Ayam Percik','Bubur Lambuk','Nasi Kerabu','Ikan Bakar','Kek Lapis','Roti Jala','Mee Goreng','Nasi Goreng','KFC','McD','Kuih Talam','Tau Fu Fa'];
var listMinum = ['Milo Ais','Air Bandung','Air Kosong','Teh Bunga','Teh Ais','Teh o Ais','Kopi O Panas','Air Sirap','Lemon Ice'];
//Controller to display value from random array
var app = angular.module('bzr', ['ionic']);
app.controller('bzr2',function($scope){
  $scope.toggleIftar = function() {
      $scope.kokoi = listJuadah[Math.floor(Math.random() * listJuadah.length)]; //bind the value
      $scope.ayak = listMinum[Math.floor(Math.random() * listMinum.length)];
  };

});

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
