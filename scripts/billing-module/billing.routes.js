angular.module('billing')
    .config($stateProvider => {
        $stateProvider.state('billing', {
            url: '/billing',
            component: 'billingDemo'
        })
    });