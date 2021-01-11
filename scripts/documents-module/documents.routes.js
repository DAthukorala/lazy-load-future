angular.module('documents')
    .config($stateProvider => {
        $stateProvider.state('documents', {
            url: '/documents',
            component: 'documentsDemo'
        })
    });