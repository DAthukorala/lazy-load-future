import * as template from "./labs-demo.component.html";

export default function labsDemo() {
    return {
        template: template,
        controller: ('labsDemoController', labsDemoController),
        controllerAs: 'ctrl'
    };
}

function labsDemoController() {
    let self = this;
}