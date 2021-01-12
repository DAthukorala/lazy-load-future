import billingDemo from './components/billing-demo/billing-demo.component';
import routes from './billing.routes';

angular.module('billing', ['ui.router'])
    .config(routes)
    .component('billingDemo', billingDemo());