angular.module('e2e', ['ui.bootstrap','ui.router','ngAnimate']);

angular.module('e2e').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('first-test', {
        url: 'first-test',
        templateUrl: 'partial/first-test/first-test.html'
    });
    /* Add New States Above */
    $urlRouterProvider.otherwise('/home');

});

angular.module('e2e').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
