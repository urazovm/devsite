'use strict';

var app = angular.module('purblindApp', []);

app.directive('pbRestTest', function(){
  return {
    replace: true,
    restrict: 'E',
    scope: {},
    templateUrl: '/angular/templates/pbRestTest.html',
    controller: function($scope, $http){
      var creds = 'QVpRNUdrOElxdEhrSHNMRWNSLVVPSmU1U1gzSlFhSDgxd1AwNFVNbjVQZWJCN2pGeEpXZ3NKclRYLUVOTmJOT25ReW9jU1RTNEYzYTFtdmE6RUR6SHoycXp5Y1hOeWV1bklLaHRXX21LaUx2UUNzU254SXJkd3pVYnZ2bnFWQkRKWU9lUTJITFBKRWZoWUxFSW5OcVFTWVd4bkphcmtRS2M='
      $('document').ready(function(){
        $('select').material_select();
      });
      $scope.call = {
        host: 'https://api.sandbox.paypal.com',
        method: 'POST',
        endpoint: '/v1/payments/payment',
        data: '',
        response: {
          message: 'Response will show here.'
        },
        submit: function(){
          $http({
            method: 'POST',
            url: $scope.call.host + '/v1/oauth2/token',
            headers: {
              'Accept': 'application/json',
              'Authorization': 'Basic ' + creds,
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: 'grant_type=client_credentials'
          }).then(function(res){
            console.log(res);
            $http({
              method: $scope.call.method,
              url: $scope.call.host + $scope.call.endpoint,
              headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + res.data.access_token
              },
              data: $scope.call.data
            }).then(function(res){
              console.log(res.data);
              $scope.call.response = res.data;
            }).catch(function(err){
              $scope.call.response = err;
            });
          }).catch(function(err){
            
          });
        }
      }
      
    }
  }
});