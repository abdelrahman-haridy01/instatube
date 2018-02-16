'use strict';

angular.module('myApp.single', [
  'ngRoute', 'jtt_youtube', 'ngSanitize'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/single/:singleId', {
      templateUrl: 'components/single/single.html',
      controller: 'singleCtrl'
    });
    
  }])

  // support Video iframe
  .directive('iframeDirective', ['$sce', '$routeParams', '$timeout', function($sce, $routeParams, $timeout) {
    
    var itemSingle = $routeParams.singleId;
    return {
      restrict: 'A',
      controllerAs: 'singleCtrl',
      bindToController: true, //required in 1.3+ with controllerAs
      template: '<iframe src="{{ trustedUrl + itemSingle}}" frameborder="0" allowfullscreen></iframe>',
      link: function(scope, element, attrs) {
        $timeout(scope.$eval(attrs.iframeDirective), 0);
        scope.trustedUrl = $sce.trustAsResourceUrl("//www.youtube.com/embed/"+itemSingle);
      }
    }
  }])

  .controller('singleCtrl', ['$scope', '$sce', '$http', 'youtubeFactory', '$location', '$routeParams', function ($scope, $sce, $http, youtubeFactory, $location, $routeParams) {
    var itemSingle = $routeParams.singleId;
    var _apiKey = "AIzaSyCE8wSHeQEH9Efqt3PipjFGNc9IPudD874";

    // get video Details
    youtubeFactory.getVideoById({
      videoId: itemSingle,
      key: _apiKey,
    }).then(function (_data) {
      //on success
      // get 10 related videos by name of video
      $scope.video = _data.data.items[0];
  
        youtubeFactory.getVideosFromSearchByParams({
          q: _data.data.items[0].snippet.title,
          maxResults: "10",
          key: _apiKey,
          part: "id,snippet",
        }).then(function (_data) {
          $scope.items = _data.data.items;
          
        });

    }).catch(function (_data) {
      //on error
      console.log('error: No Data sent');
    });

    

  }]);
  
