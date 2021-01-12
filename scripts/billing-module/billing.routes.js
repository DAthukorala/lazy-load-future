export default function routes($stateProvider) {
    $stateProvider.state('billing', {
        url: '/billing',
        component: 'billingDemo'
    })
}