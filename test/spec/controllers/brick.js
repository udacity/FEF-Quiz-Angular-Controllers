'use strict';

describe('Controller: BrickCtrl', function () {

  // load the controller's module
  beforeEach(module('controllerQuizApp'));

  var BrickCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BrickCtrl = $controller('BrickCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BrickCtrl.awesomeThings.length).toBe(3);
  });
});
