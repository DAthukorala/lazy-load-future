export default function homeDemo() {
    return {
        template: require("./home-demo.component.html"),
        controller: ('homeDemoController', homeDemoController),
        controllerAs: 'ctrl'
    };
}

function homeDemoController() {
    let self = this;
}