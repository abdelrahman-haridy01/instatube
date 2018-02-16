'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /main when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/main");
  });


  describe('main', function() {

    beforeEach(function() {
      browser.get('index.html#!/main');
    });


    it('should render main when user navigates to /main', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });



  
  describe('channel', function() {
    
        beforeEach(function() {
          browser.get('index.html#!/channel');
        });
    
    
        it('should render channel when user navigates to /channel', function() {
          expect(element.all(by.css('[ng-view] p')).first().getText()).
            toMatch(/partial for channel/);
        });
    
      });

      describe('single', function() {
        
            beforeEach(function() {
              browser.get('index.html#!/single');
            });
        
        
            it('should render single when user navigates to /single', function() {
              expect(element.all(by.css('[ng-view] p')).first().getText()).
                toMatch(/partial for single/);
            });
        
          });

});
