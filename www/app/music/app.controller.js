(function(){
    angular.module('starter')
    .controller('appController', appController);

    appController.$inject=['$scope','appService','$rootScope'];

    function appController ($scope, appService, $rootScope){
      var vm= this;
      vm.songs= appService.getSongs();
      vm.discardSong=discardSong;
      vm.addFavorite=addFavorite;
    }


    discardSong = function(index) {
     vm.songs.splice(0, 1);
    };

    addFavorite = function(index) {
      // var newCard = // new card data
      $rootScope.favorites.push(vm.favorites);
      vm.songs.splice(0,1);
    };

})();
