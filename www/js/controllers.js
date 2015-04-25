angular.module('doorphone.controllers', ['ngCordova'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope, $cordovaFlashlight, $cordovaMedia) {
  var src = "myrecording.mp3";

  $scope.isRecording = false;
  
  $scope.flashOn = function() {
    $cordovaFlashlight.toggle()
      .then(function(success) { /* success */ },
        function(error) { /* error */ });
  };
  $scope.flashOff = function() {
    $cordovaFlashlight.toggle()
      .then(function(success) { /* success */ },
        function(error) { /* error */ });
  };

  $scope.startRecording = function() {
  var media = new Media(src, null, null, null);
    if (!$scope.isRecording) {
      media.startRecord();
      $scope.isRecording = true;
    } else {
      media.stopRecord();
    }
  };

})

.controller('PlaylistCtrl', function($scope, $stateParams) {});