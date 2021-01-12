export default function labsDemo() {
    return {
        templateUrl: 'scripts/labs-module/components/labs-demo/labs-demo.component.html',
        controller: ('labsDemoController', labsDemoController),
        controllerAs: 'ctrl'
    };
}

function labsDemoController() {
    let self = this;
}