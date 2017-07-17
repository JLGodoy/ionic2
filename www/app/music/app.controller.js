(function(){
  'use strict';
    angular.module('starter')
    .controller('appController', appController);

    appController.$inject=['$scope','$ionicPlatform', '$rootScope', 'songService'];

    function appController ($scope, $ionicPlatform, $rootScope, songService){
      var vm= this;
      var audio= new Audio();
      vm.songs= [];
      vm.discardSong=discardSong;
      vm.addFavorite=addFavorite;
      vm.addSongs=addSongs;
      vm.playSong=playSong;

      $ionicPlatform.ready(onReady);

      function onReady(){
        vm.addSongs();
      }

      function playSong(){
        audio.src= vm.songs[0].preview_url;
        audio.play();
      }

      function addSongs(){
        songService.getSongs()
        .then(function (response){
          vm.songs= vm.songs.concat(response.data);
          vm.playSong();
        });

      }

      function addFavorite(){
        $rootScope.favorites.push(vm.songs[0]);
        vm.discardSong();

      }

      function discardSong(){
        vm.songs.splice(0,1);
        if (vm.songs.length < 2) {
          vm.addSongs();
        }
        vm.playSong();
      }
}

})();
