import * as template from "./billing-demo.component.html";

export default function billingDemo() {
    return {
        template: template,
        controller: ('billingDemoController', billingDemoController),
        controllerAs: 'ctrl'
    };
}

function billingDemoController() {
    let self = this;
}