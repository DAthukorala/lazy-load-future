import homeDemo from './components/home-demo/home-demo.component';
import routes from './home.routes';

angular.module('home', ['ui.router'])
    .config(routes)
    .component('homeDemo', homeDemo());