export default function homeDemo() {
    return {
        // templateUrl: 'scripts/home-module/components/home-demo/home-demo.component.html',
        template:'<h2>Welcome home</h2>',
        controller: ('homeDemoController', homeDemoController),
        controllerAs: 'ctrl'
    };
}

function homeDemoController() {
    let self = this;
}