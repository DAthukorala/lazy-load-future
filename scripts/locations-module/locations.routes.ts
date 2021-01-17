import { StateProvider } from "@uirouter/angularjs";

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider: StateProvider): void {
    $stateProvider
        .state('locations', {
            url: '/locations',
            component: 'allLocations'
        });
}