(function(){
    angular.module('starter')
    .controller('appController', appController);

    appController.$inject=['$scope','appService'];

    function appController ($scope, appService){
      var vm= this;
      vm.songs= appService.getSongs();
    }

})();
