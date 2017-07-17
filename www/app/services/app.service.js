(function(){
    angular.module('starter').service('songService',songService);

    songService.$inject=['$http', 'API'];

  function songService($http,API){
    var service={
      getSongs: getSongs
    };

    function getSongs(){
      return $http({
        method: 'GET',
        url: API.url+'/recommendations'
      })
      .then(function(response){
        return response;
      })
      .catch(function(error){
        console.error('Error binding whit HTTP service');
      });
    }

    return service;
  }
})();
