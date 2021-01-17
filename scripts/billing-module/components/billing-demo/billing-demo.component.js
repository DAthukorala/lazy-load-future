export default function billingDemo() {
    return {
        template: require("./billing-demo.component.html"),
        controller: ('billingDemoController', billingDemoController),
        controllerAs: 'ctrl'
    };
}

function billingDemoController() {
    let self = this;
}