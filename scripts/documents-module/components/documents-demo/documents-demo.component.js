import * as template from "./documents-demo.component.html";

export default function documentsDemo() {
    return {
        template: template,
        controller: ('documentsDemoController', documentsDemoController),
        controllerAs: 'ctrl'
    };
}

function documentsDemoController() {
    let self = this;
}