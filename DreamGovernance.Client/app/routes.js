/**
 * Defines the main routes in the application.
 * The routes you see here will be anchors '#/' unless specifically configured otherwise.
 */

define(['./app'], function (app) {
    'use strict';
    return app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'app/dashboard/dashboardView.html',
            controller: 'dashboardController'
        });

        $routeProvider.when('/view2', {
            templateUrl: 'app/insertcontract/insertContractView.html',
            controller: 'insertContractController'
        });

        $routeProvider.otherwise({
            redirectTo: '/view1'
        });
    }]);
});
