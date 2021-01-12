export default function billingDemo() {
    return {
        // templateUrl: 'scripts/billing-module/components/billing-demo/billing-demo.component.html',
        template:'<h2>This is the billing demo component</h2>',
        controller: ('billingDemoController', billingDemoController),
        controllerAs: 'ctrl'
    };
}

function billingDemoController() {
    let self = this;
}