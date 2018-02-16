'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.main',
  'myApp.channel',
  'myApp.single',
  'jtt_youtube'
]).
  config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({ redirectTo: '/main' });
  }])



  .controller('appController', ['$scope', 'youtubeFactory', '$location', '$timeout', function ($scope, youtubeFactory, $location, $timeout) {


    $scope.search = function () {
      $scope.loading = true;
      var q = document.getElementById('query').value;
      $timeout(function () {
        var _apiKey = "AIzaSyCE8wSHeQEH9Efqt3PipjFGNc9IPudD874";
        youtubeFactory.getVideosFromSearchByParams({
          q: q,
          maxResults: "10",
          key: _apiKey,
          part: "id,snippet",
        }).then(function (_data) {
          $scope.loading = false;
          $scope.items = _data.data.items;
        });

      }, 2000);

      

    };

    $scope.focused = function() {
      $location.path('/main');
    }


  }]);
