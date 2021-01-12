export default function labsDemo() {
    return {
        // templateUrl: 'scripts/labs-module/components/labs-demo/labs-demo.component.html',
        template:'<h2>This is the labs demo component</h2>',
        controller: ('labsDemoController', labsDemoController),
        controllerAs: 'ctrl'
    };
}

function labsDemoController() {
    let self = this;
}