angular.module('labs').component('labsDemo', {
    templateUrl: 'scripts/labs-module/components/labs-demo/labs-demo.component.html',
    controller: ('labsDemoController', labsDemoController),
    controllerAs: 'ctrl'
});

function labsDemoController() {
    let self = this;
}