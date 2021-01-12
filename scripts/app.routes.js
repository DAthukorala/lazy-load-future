export default function routes($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider.state({
        name: 'billing.**',
        url: '/billing',
        lazyLoad: (transition) =>
            transition.injector().get('$ocLazyLoad').load('./dist/billing.js')
    });

    $stateProvider.state({
        name: 'documents.**',
        url: '/documents',
        lazyLoad: (transition) =>
            transition.injector().get('$ocLazyLoad').load('./dist/documents.js')
    });

    $stateProvider.state({
        name: 'labs.**',
        url: '/labs',
        lazyLoad: (transition) =>
            transition.injector().get('$ocLazyLoad').load('./dist/labs.js')
    });
}