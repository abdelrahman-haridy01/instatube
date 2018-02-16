'use strict';

angular.module('myApp.channel', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/channel/:channelId', {
    templateUrl: 'components/channel/channel.html',
    controller: 'channelCtrl'
  });
}])

.controller('channelCtrl', ['$scope', '$http', 'youtubeFactory', '$location', '$routeParams', function ($scope, $http, youtubeFactory, $location, $routeParams) {
  var _channelId = $routeParams.channelId;
  var _apiKey = "AIzaSyCE8wSHeQEH9Efqt3PipjFGNc9IPudD874";

// docs: https://developers.google.com/youtube/v3/docs/search/list
youtubeFactory.getVideosFromChannelById({
  channelId: _channelId, 
  key: _apiKey,
}).then(function (_data) {
  //on success
  $scope.channel = _data.data.items[0];
  $scope.videosChannel = _data.data.items;

}).catch(function (_data) {
  //on error
});

}]);