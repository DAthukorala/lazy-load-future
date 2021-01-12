export default function billingDemo() {
    return {
        templateUrl: 'scripts/billing-module/components/billing-demo/billing-demo.component.html',
        controller: ('billingDemoController', billingDemoController),
        controllerAs: 'ctrl'
    };
}

function billingDemoController() {
    let self = this;
}