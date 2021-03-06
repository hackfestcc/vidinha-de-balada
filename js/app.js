(function() {
  'use strict';

  angular
    .module('baladaApp', ['ui.router'])
    .constant('RESTAPI', 'http://127.0.0.1:5000/')
    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'views/home.html',
          controller: 'HomeCtrl',
          controllerAs: 'ctrl'
        })
        .state('perfil', {
          url: '/perfil/:id',
          templateUrl: 'views/perfil.html',
          controller: 'PerfilCtrl',
          controllerAs: 'ctrl'
        });
      $urlRouterProvider.otherwise('/');
    });
})();
