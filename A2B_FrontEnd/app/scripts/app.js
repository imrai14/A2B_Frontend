'use strict';

/**
 * @ngdoc overview
 * @name a2BClientApp
 * @description
 * # a2BClientApp
 *
 * Main module of the application.
 */
angular
  .module('a2BClientApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'UserCtrl'
      })
      .when('/userprofile', {

        templateUrl: 'views/userProfile.html',
        controller: 'UserCtrl'

      })

      // .when('/', {

      //   templateUrl: 'views/login.html',
      //   controller: 'UserLogoutCtrl'

      // })
  



      .otherwise({
        redirectTo: '/'
      });
  });