angular.module('home')
    .config($stateProvider => {
        $stateProvider.state('home', {
            url: '/home',
            component: 'homeDemo'
        })
    });