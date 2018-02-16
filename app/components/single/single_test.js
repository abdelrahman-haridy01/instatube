'use strict';

describe('myApp.single module', function() {

  beforeEach(module('myApp.single'));

  describe('single controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var singleCtrl = $controller('singleCtrl');
      expect(singleCtrl).toBeDefined();
    }));

  });
});