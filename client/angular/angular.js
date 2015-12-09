'use strict';

var app = angular.module('purblindApp', []);

app.directive('pbRestTest', function(){
  return {
    replace: true,
    restrict: 'E',
    scope: {},
    templateUrl: '/angular/templates/pbRestTest.html',
    controller: function($scope, $http){

      $scope.call = {
        methods: [
          {type: 'POST'},
          {type: 'GET'},
          {type: 'PUT'},
          {type: 'PATCH'},
          {type: 'DELETE'}
        ],
        envs: [
          {
            'name': 'Sandbox',
            'host': 'https://api.sandbox.paypal.com'
          },
          {
            'name': 'Live',
            'host': 'https://api.paypal.com'
          }
        ],
        endpoints: [
          {url: '/v1/payments/payment'},
          {url: '/v1/payments/test'}
        ],
        clientid: '',
        clientsecret: '',
        creds: '',
        data: '',
        response: {
          message: 'Response will show here.'
        },
        cred: {
          response: {
            valid: null,
            invalid: null
          },
          submit: function(){
            $scope.call.creds = btoa($scope.call.clientid + ':' + $scope.call.clientsecret);
            $http({
              method: 'POST',
              url: $scope.env.host + '/v1/oauth2/token',
              headers:{
                'Accept': 'application/json',
                'Authorization': 'Basic ' + $scope.call.creds,
                'Content-Type': 'application/x-www-form-urlencoded'
              },
              data: 'grant_type=client_credentials'
            }).then(function(res){
              if(res.data.access_token){
                $scope.call.cred.response.valid = "Valid Credentials";
              }
              $scope.call.response = res.data;
            }).catch(function(err){
              if(!res.data.access_token){
                $scope.call.cred.response.invalid = 'Invalid Credentials';
              }
              $scope.call.response = err;
            });
          }
        },
        submit: function(){
          $http({
            method: 'POST',
            url: $scope.call.env + '/v1/oauth2/token',
            headers: {
              'Accept': 'application/json',
              'Authorization': 'Basic ' + $scope.call.creds,
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
      $scope.env = {
        host: 'https://api.sandbox.paypal.com',
        method: 'POST',
        endpoint: '/v1/payments/payment'
      }
    }
  }
});
