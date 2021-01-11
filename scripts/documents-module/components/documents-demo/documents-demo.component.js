angular.module('documents').component('documentsDemo', {
    templateUrl: 'scripts/documents-module/components/documents-demo/documents-demo.component.html',
    controller: ('documentsDemoController', documentsDemoController),
    controllerAs: 'ctrl'
});

function documentsDemoController() {
    let self = this;
}