angular.module('app')
    .config($stateProvider, $urlRouterProvider => {
        $urlRouterProvider.otherwise('/home');

        $stateProvider.state({
            name: 'billing.**',
            url: '/billing',
            lazyLoad: (transition) =>
                transition.injector().get('$ocLazyLoad').load('./build/billing.js')
        });

        $stateProvider.state({
            name: 'documents.**',
            url: '/documents',
            lazyLoad: (transition) =>
                transition.injector().get('$ocLazyLoad').load('./build/documents.js')
        });

        $stateProvider.state({
            name: 'labs.**',
            url: '/labs',
            lazyLoad: (transition) =>
                transition.injector().get('$ocLazyLoad').load('./build/labs.js')
        });
    });