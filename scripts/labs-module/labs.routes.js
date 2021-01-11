angular.module('labs')
    .config($stateProvider => {
        $stateProvider.state('labs', {
            url: '/labs',
            component: 'labsDemo'
        })
    });