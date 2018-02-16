'use strict';

angular.module('myApp.main', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/main', {
    templateUrl: 'components/main/main.html',
    controller: 'mainCtrl'
  });
}])


.controller('mainCtrl', [function($scope) {


}]);