'use strict';

var app = angular.module('purblindApp', []);

app.directive('pbRestTest', function(){
  return {
    replace: true,
    restrict: 'E',
    scope: {},
    templateUrl: '/angular/templates/pbRestTest.html',
    controller: function($scope, $http){
      $scope.display = {
        endpoint: {
          group: 'Payments',
          name: 'Create a payment',
          method: 'POST',
          addId: '',
          addIdLabel: '',
          startUrl: '/v1/payments/payment',
          endUrl: '',
          fullUrl: '/v1/payments/payment',
          needsId: false
        },
        changeDisplay: function(i){
          $scope.display.endpoint.group = $scope.call.endpoints[i].group;
          $scope.display.endpoint.name = $scope.call.endpoints[i].name;
          $scope.display.endpoint.method = $scope.call.endpoints[i].method;
          $scope.display.endpoint.addId = $scope.call.endpoints[i].addId;
          $scope.display.endpoint.addIdLabel = $scope.call.endpoints[i].addId;
          $scope.display.endpoint.startUrl = $scope.call.endpoints[i].startUrl;
          $scope.display.endpoint.endUrl = $scope.call.endpoints[i].endUrl;
          $scope.display.endpoint.fullUrl = $scope.call.endpoints[i].startUrl + $scope.call.endpoints[i].addId + $scope.call.endpoints[i].endUrl;
          $scope.display.endpoint.needsId = $scope.call.endpoints[i].needsId;
        },
        updateAddId: function(){
          $scope.display.endpoint.fullUrl = $scope.display.endpoint.startUrl + $scope.display.endpoint.addId + $scope.display.endpoint.endUrl
        }
      }
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
          {
            group: 'Payments',
            name: 'Create a payment',
            method: 'POST',
            addId: '',
            startUrl: '/v1/payments/payment',
            endUrl: '',
            needsId: false
          },
          {
            group: 'Payments',
            name: 'Execute an approved PayPal payment',
            method: 'POST',
            addId: 'Payment_id',
            startUrl: '/v1/payments/payment/',
            endUrl: '/execute',
            needsId: true
          },
          {
            group: 'Payments',
            name: 'Look up a payment resource',
            method: 'GET',
            addId: 'Payment_id',
            startUrl: '/v1/payments/payment/',
            endUrl: '',
            needsId: true
          },
          {
            group: 'Payments',
            name: 'Update a payment resource',
            method: 'PATCH',
            addId: 'Payment_id',
            startUrl: '/v1/payments/payment/',
            endUrl: '',
            needsId: true
          },
          {
            group: 'Payments',
            name: 'List payment resources',
            method: 'GET',
            addId: '',
            startUrl: '/v1/payments/payment/',
            endUrl: '',
            needsId: false
          },
          {
            group: 'Sale Transactions',
            name: 'Look up a sale',
            method: 'GET',
            addId: 'Sale_id',
            startUrl: '/v1/payments/sale/',
            endUrl: '',
            needsId: true
          },
          {
            group: 'Sale Transactions',
            name: 'Refund a sale',
            method: 'POST',
            addId: 'Sale_id',
            startUrl: '/v1/payments/sale/',
            endUrl: '/refund',
            needsId: true
          },
          {
            group: 'Refunds',
            name: 'Look up a refund',
            method: 'GET',
            addId: 'Refund_id',
            startUrl: '/v1/payments/refund/',
            endUrl: '',
            needsId: true
          },
          {
            group: 'Authorizations',
            name: 'Look up an authorization',
            method: 'GET',
            addId: 'Authorization_id',
            startUrl: '/v1/payments/authorization/',
            endUrl: '',
            needsId: true
          },
          {
            group: 'Authorizations',
            name: 'Capture an authorization',
            method: 'POST',
            addId: 'Authorization_id',
            startUrl: '/v1/payments/authorization/',
            endUrl: '/capture',
            needsId: true
          },
          {
            group: 'Authorizations',
            name: 'Void an authorization',
            method: 'POST',
            addId: 'Authorization_id',
            startUrl: '/v1/payments/authorization/',
            endUrl: '/void',
            needsId: true
          },
          {
            group: 'Authorizations',
            name: 'Reauthorize a payment',
            method: 'POST',
            addId: 'Authorization_id',
            startUrl: '/v1/payments/authorization/',
            endUrl: '/reauthorize',
            needsId: true
          },
          {
            group: 'Captures',
            name: 'Look up a captured payment',
            method: 'GET',
            addId: 'Capture_id',
            startUrl: '/v1/payments/capture/',
            endUrl: '',
            needsId: true
          },
          {
            group: 'Captures',
            name: 'Refund a captured payment',
            method: 'POST',
            addId: 'Capture_id',
            startUrl: '/v1/payments/capture/',
            endUrl: '/refund',
            needsId: true
          },
          {
            group: 'Orders',
            name: 'Retrieve an order',
            method: 'GET',
            addId: 'Order_id',
            startUrl: '/v1/payments/orders/',
            endUrl: '',
            needsId: true
          },
          {
            group: 'Orders',
            name: 'Authorize an order',
            method: 'POST',
            addId: 'Order_id',
            startUrl: '/v1/payments/orders/',
            endUrl: '/authorize',
            needsId: true
          },
          {
            group: 'Orders',
            name: 'Capture an order',
            method: 'POST',
            addId: 'Order_id',
            startUrl: '/v1/payments/orders/',
            endUrl: '/authorize',
            needsId: true
          },
          {
            group: 'Orders',
            name: 'Void an order',
            method: 'POST',
            addId: 'Order_id',
            startUrl: '/v1/payments/orders/',
            endUrl: '/capture',
            needsId: true
          },
          {
            group: 'Billing Plans',
            name: 'Create a plan',
            method: 'POST',
            addId: '',
            startUrl: '/v1/payments/billing-plans',
            endUrl: '',
            needsId: true
          },
          {
            group: 'Billing Plans',
            name: 'Update a plan',
            method: 'PATCH',
            addId: 'Plan-id',
            startUrl: '/v1/payments/billing-plans/',
            endUrl: '',
            needsId: true
          },
          {
            group: 'Billing Plans',
            name: 'Retrieve a plan',
            method: 'GET',
            addId: 'Plan-id',
            startUrl: '/v1/payments/billing-plans/',
            endUrl: '',
            needsId: true
          },
          {
            group: 'Billing Plans',
            name: 'List plans',
            method: 'GET',
            addId: '',
            startUrl: '/v1/payments/billing-plans',
            endUrl: '',
            needsId: true
          },
          {
            group: 'Billing Agreements',
            name: 'Create an agreement',
            method: 'POST',
            addId: '',
            startUrl: '/v1/payments/billing-agreements',
            endUrl: '',
            needsId: false
          },
          {
            group: 'Billing Agreements',
            name: 'Execute an agreement',
            method: 'POST',
            addId: 'Payment_token',
            startUrl: '/v1/payments/billing-agreements/',
            endUrl: '/agreement-execute',
            needsId: true
          },
          {
            group: 'Billing Agreements',
            name: 'Update an agreement',
            method: 'PATCH',
            addId: 'Agreement_id',
            startUrl: '/v1/payments/billing-agreements/',
            endUrl: '',
            needsId: true
          },
          {
            group: 'Billing Agreements',
            name: 'Retrieve an agreement',
            method: 'GET',
            addId: 'Agreement_id',
            startUrl: '/v1/payments/billing-agreements/',
            endUrl: '',
            needsId: true
          },
          {
            group: 'Billing Agreements',
            name: 'Suspend an agreement',
            method: 'POST',
            addId: 'Agreement_id',
            startUrl: '/v1/payments/billing-agreements/',
            endUrl: '/suspend',
            needsId: true
          },
          {
            group: 'Billing Agreements',
            name: 'Reactivate an agreement',
            method: 'POST',
            addId: 'Agreement_id',
            startUrl: '/v1/payments/billing-agreements/',
            endUrl: '/re-activate',
            needsId: true
          },
          {
            group: 'Billing Agreements',
            name: 'Cancel an agreement',
            method: 'POST',
            addId: 'Agreement_id',
            startUrl: '/v1/payments/billing-agreements/',
            endUrl: '/cancel',
            needsId: true
          },
          {
            group: 'Billing Agreements',
            name: 'Search for transactions',
            method: 'GET',
            addId: 'Agreement_id',
            startUrl: '/v1/payments/billing-agreements/',
            endUrl: '/transactions',
            needsId: true
          },
          {
            group: 'Billing Agreements',
            name: 'Set outstanding agreement amounts',
            method: 'POST',
            addId: 'Agreement_id',
            startUrl: '/v1/payments/billing-agreements/',
            endUrl: '/set-balance',
            needsId: true
          },
          {
            group: 'Billing Agreements',
            name: 'Bill outstanding agreement amounts',
            method: 'POST',
            addId: 'Agreement_id',
            startUrl: '/v1/payments/billing-agreements/',
            endUrl: '/bill-balance',
            needsId: true
          },
          {
            group: 'Payouts',
            name: 'Create a Batch or Single Payout',
            method: 'POST',
            addId: '',
            startUrl: '/v1/payments/payouts',
            endUrl: '',
            needsId: true
          },
          {
            group: 'Payouts',
            name: 'Get the status of a batch payout',
            method: 'GET',
            addId: 'Payout_batch_id',
            startUrl: '/v1/payments/payouts/',
            endUrl: '',
            needsId: true
          },
          {
            group: 'Payouts',
            name: 'Get the status of a payout item',
            method: 'GET',
            addId: 'Payout_item_id',
            startUrl: '/v1/payments/payouts-item/',
            endUrl: '',
            needsId: true
          },
          {
            group: 'Payouts',
            name: 'Cancel an unclaimed payout item',
            method: 'POST',
            addId: 'Payout_item_id',
            startUrl: '/v1/payments/payouts-item/',
            endUrl: '/cancel',
            needsId: true
          },
          {
            group: 'Vault',
            name: 'Store a credit card',
            method: 'POST',
            addId: '',
            startUrl: '/v1/vault/credit-cards',
            endUrl: '',
            needsId: false
          },
          {
            group: 'Vault',
            name: 'Delete a stored credit card',
            method: 'DELETE',
            addId: 'Credit_card_id',
            startUrl: '/v1/vault/credit-cards/',
            endUrl: '',
            needsId: true
          },
          {
            group: 'Vault',
            name: 'Look up a stored credit card',
            method: 'GET',
            addId: 'Credit_card_id',
            startUrl: '/v1/vault/credit-cards/',
            endUrl: '',
            needsId: true
          },
          {
            group: 'Vault',
            name: 'List credit card resources',
            method: 'GET',
            addId: '',
            startUrl: '/v1/vault/credit-cards',
            endUrl: '',
            needsId: false
          },
          {
            group: 'Vault',
            name: 'Update a stored credit card',
            method: 'PATCH',
            addId: 'Credit_card_id',
            startUrl: '/v1/vault/credit-cards/',
            endUrl: '',
            needsId: true
          },
          {
            group: 'Identity',
            name: 'Grant token from authorization code',
            method: 'POST',
            addId: '',
            startUrl: '/v1/identity/openidconnect/tokenservice',
            endUrl: '',
            needsId: false
          },
          {
            group: 'Identity',
            name: 'Grant token from refresh token',
            method: 'POST',
            addId: '',
            startUrl: '/v1/identity/openidconnect/tokenservice',
            endUrl: '',
            needsId: false
          },
          {
            group: 'Identity',
            name: 'Get user information',
            method: 'GET',
            addId: '',
            startUrl: '/v1/identity/openidconnect/tokenservice',
            endUrl: '',
            needsId: false
          },
          {
            group: 'Invoices',
            name: 'Create an invoice',
            method: 'POST',
            addId: '',
            startUrl: '/v1/invoicing/invoices',
            endUrl: '',
            needsId: true
          },
          {
            group: 'Invoices',
            name: 'Send an Invoice',
            method: 'POST',
            addId: 'Invoice_id',
            startUrl: ' /v1/invoicing/invoices/',
            endUrl: '/send',
            needsId: true
          },
          {
            group: 'Invoices',
            name: 'Update an invoice',
            method: 'PUT',
            addId: 'Invoice_id',
            startUrl: '/v1/invoicing/invoices/',
            endUrl: '',
            needsId: true
          },
          {
            group: 'Invoices',
            name: 'Retrieve an invoice',
            method: 'GET',
            addId: 'Invoice_id',
            startUrl: '/v1/invoicing/invoices/',
            endUrl: '',
            needsId: true
          },
          {
            group: 'Invoices',
            name: 'Get invoices of a merchant',
            method: 'GET',
            addId: '',
            startUrl: '/v1/invoicing/invoices',
            endUrl: '',
            needsId: true
          },
          {
            group: 'Invoices',
            name: 'Search for invoices',
            method: 'POST',
            addId: '',
            startUrl: '/v1/invoicing/search',
            endUrl: '',
            needsId: true
          },
          {
            group: 'Invoices',
            name: 'Send an Invoice Reminder',
            method: 'POST',
            addId: 'Invoice_id',
            startUrl: '/v1/invoicing/invoices/',
            endUrl: '/remind',
            needsId: true
          },
          {
            group: 'Invoices',
            name: 'Cancel an invoice',
            method: 'POST',
            addId: 'Invoice_id',
            startUrl: '/v1/invoicing/invoices/',
            endUrl: '/cancel',
            needsId: true
          },
          {
            group: 'Invoices',
            name: 'Delete an invoice',
            method: 'DELETE',
            addId: 'Invoice_id',
            startUrl: '/v1/invoicing/invoices/',
            endUrl: '',
            needsId: true
          },
          {
            group: 'Invoices',
            name: 'Retrieve a QR code',
            method: 'GET',
            addId: 'Invoice_id',
            startUrl: '/v1/invoicing/invoices/',
            endUrl: '/qr-code',
            needsId: true
          },
          {
            group: 'Invoices',
            name: 'Record a payment',
            method: 'POST',
            addId: 'Invoice_id',
            startUrl: '/v1/invoicing/invoices/',
            endUrl: '/record-payment',
            needsId: true
          },
          {
            group: 'Invoices',
            name: 'Record a refund',
            method: 'POST',
            addId: 'Invoice_id',
            startUrl: '/v1/invoicing/invoices/',
            endUrl: '/record-refund',
            needsId: true
          },
          {
            group: 'Payment Experience',
            name: 'Create a web experience profile',
            method: 'POST',
            addId: '',
            startUrl: '/v1/payment-experience/web-profiles',
            endUrl: '',
            needsId: true
          },
          {
            group: 'Payment Experience',
            name: 'Retrieve a web experience profile',
            method: 'GET',
            addId: 'Profile-id',
            startUrl: '/v1/payment-experience/web-profiles/',
            endUrl: '',
            needsId: true
          },
          {
            group: 'Payment Experience',
            name: 'List web experience profiles',
            method: 'GET',
            addId: '',
            startUrl: '/v1/payment-experience/web-profiles',
            endUrl: '',
            needsId: true
          },
          {
            group: 'Payment Experience',
            name: 'Update a web experience profile',
            method: 'PUT',
            addId: 'Profile-id',
            startUrl: '/v1/payment-experience/web-profiles/',
            endUrl: '',
            needsId: true
          },
          {
            group: 'Payment Experience',
            name: 'Partially update a web experience profile',
            method: 'PATCH',
            addId: 'Profile-id',
            startUrl: '/v1/payment-experience/web-profiles/',
            endUrl: '',
            needsId: true
          },
          {
            group: 'Payment Experience',
            name: 'Delete a web experience profile',
            method: 'DELETE',
            addId: 'Profile-id',
            startUrl: '/v1/payment-experience/web-profiles/',
            endUrl: '',
            needsId: true
          },
          {
            group: 'Webhooks',
            name: 'Create a webhook',
            method: 'POST',
            addId: '',
            startUrl: '/v1/notifications/webhooks',
            endUrl: '',
            needsId: true
          },
          {
            group: 'Webhooks',
            name: 'Get a webhook',
            method: 'GET',
            addId: 'Webhook_id',
            startUrl: '/v1/notifications/webhooks/',
            endUrl: '',
            needsId: true
          },
          {
            group: 'Webhooks',
            name: 'List all webhooks',
            method: 'GET',
            addId: '',
            startUrl: '/v1/notifications/webhooks/',
            endUrl: '',
            needsId: true
          },
          {
            group: 'Webhooks',
            name: 'Update a webhook',
            method: 'PATCH',
            addId: 'Webhook_id',
            startUrl: '/v1/notifications/webhooks/',
            endUrl: '',
            needsId: true
          },
          {
            group: 'Webhooks',
            name: 'Delete a webhook',
            method: 'DELETE',
            addId: 'Webhook_id',
            startUrl: '/v1/notifications/webhooks/',
            endUrl: '',
            needsId: true
          },
          {
            group: 'Webhooks',
            name: 'Retrieve a webhook event',
            method: 'GET',
            addId: 'Event_id',
            startUrl: '/v1/notifications/webhooks-events/',
            endUrl: '',
            needsId: true
          },
          {
            group: 'Webhooks',
            name: 'Search webhook events',
            method: 'GET',
            addId: '',
            startUrl: '/v1/notifications/webhooks-events',
            endUrl: '',
            needsId: true
          },
          {
            group: 'Webhooks',
            name: 'Resend a webhook event',
            method: 'POST',
            addId: 'Event_id',
            startUrl: '/v1/notifications/webhooks-events/',
            endUrl: '/resend',
            needsId: true
          },
          {
            group: 'Webhooks',
            name: 'Get a reference list of webhook event types',
            method: 'GET',
            addId: '',
            startUrl: '/v1/notifications/webhooks-event-types',
            endUrl: '',
            needsId: true
          },
          {
            group: 'Webhooks',
            name: 'List subscribed webhook event types',
            method: 'GET',
            addId: 'Webhook_id',
            startUrl: '/v1/notifications/webhooks/',
            endUrl: '/event-types',
            needsId: true
          },
          {
            group: 'Webhooks',
            name: 'Simulate a webhook event',
            method: 'POST',
            addId: '',
            startUrl: '/v1/notifications/simulate-event',
            endUrl: '',
            needsId: true
          }
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
            $scope.call.cred.response.invalid = null;
            $scope.call.cred.response.valid = null;
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
              } else if (res.data.error === "invalid_client") {
                $scope.call.cred.response.invalid = "Invalid Credentials";
              }
              $scope.call.response = res.data;
            }).catch(function(err){
              if(err.statusText === "Unauthorized"){
                $scope.call.cred.response.invalid = "Invalid Credentials";
              }
              $scope.call.response = err.data;
            });
          }
        },
        submit: function(){
          $scope.call.cred.response.invalid = null;
          $scope.call.cred.response.valid = null;
          $http({
            method: 'POST',
            url: $scope.env.host + '/v1/oauth2/token',
            headers: {
              'Accept': 'application/json',
              'Authorization': 'Basic ' + $scope.call.creds,
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: 'grant_type=client_credentials'
          }).then(function(res){
            $http({
              method: $scope.display.endpoint.method,
              url: $scope.env.host + $scope.display.endpoint.fullUrl,
              headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + res.data.access_token
              },
              data: $scope.call.data
            }).then(function(res){
              if(res.data.access_token){
                $scope.call.cred.response.valid = "Valid Credentials";
              } else if (res.data.error === "invalid_client") {
                $scope.call.cred.response.invalid = "Invalid Credentials";
              }
              $scope.call.response = res.data;
            }).catch(function(err){
              $scope.call.response = err;
            });
          }).catch(function(err){
            if(err.statusText === "Unauthorized"){
              $scope.call.cred.response.invalid = "Invalid Credentials";
            }
            $scope.call.response = err.data;
          });
        }
      }
      $scope.env = {
        host: 'https://api.sandbox.paypal.com',
        method: 'POST',
        endpoint: '0'
      }
    }
  }
});
