var app = angular.module('myApp', []);
app.controller('ContactController', function($scope, $http) {
  $scope.submitForm = function() {
    var data = {
      name: $scope.name,
      surname: $scope.surname,
      email: $scope.email,
      phone: $scope.phone,
      message: $scope.message
    };
    $http.post('/api/contact', data)
      .success(function() {
        $scope.success = true;
      });
  };
});