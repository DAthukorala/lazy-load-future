export default function homeDemo() {
    return {
        templateUrl: 'scripts/home-module/components/home-demo/home-demo.component.html',
        controller: ('homeDemoController', homeDemoController),
        controllerAs: 'ctrl'
    };
}

function homeDemoController() {
    let self = this;
}