import labsDemo from './components/labs-demo/labs-demo.component';
import routes from './labs.routes';

angular.module('labs', ['ui.router'])
    .config(routes)
    .component('labsDemo', labsDemo());