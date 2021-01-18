import * as template from "./home-demo.component.html";

export default function homeDemo() {
    return {
        template: template,
        controller: ('homeDemoController', homeDemoController),
        controllerAs: 'ctrl'
    };
}

function homeDemoController() {
    let self = this;
}