export default function routes($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider.state({
        name: 'home.**',
        url: '/home',
        lazyLoad: (transition) =>
            transition.injector().get('$ocLazyLoad').load('home.js')
    });

    $stateProvider.state({
        name: 'billing.**',
        url: '/billing',
        lazyLoad: (transition) =>
            transition.injector().get('$ocLazyLoad').load('billing.js')
    });

    $stateProvider.state({
        name: 'documents.**',
        url: '/documents',
        lazyLoad: (transition) =>
            transition.injector().get('$ocLazyLoad').load('documents.js')
    });

    $stateProvider.state({
        name: 'labs.**',
        url: '/labs',
        lazyLoad: (transition) =>
            transition.injector().get('$ocLazyLoad').load('labs.js')
    });

    $stateProvider.state({
        name: 'locations.**',
        url: '/locations',
        lazyLoad: (transition) =>
            transition.injector().get('$ocLazyLoad').load('locations.js')
    });
}