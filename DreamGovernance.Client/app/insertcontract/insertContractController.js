define(['../module.base'], function(controllers) {
    'use strict';
    controllers.controller('insertContractController', ["$scope", function($scope) {
        try {
            angular.element(document).ready(function() {
                setTimeout(function() {
                    $("#form-wizard").smartWizard({
                        transitionEffect: "slide"
                    });
                }, 100);
            });
        }
        catch (e) {
            debugger;
        }
    }]);
});
