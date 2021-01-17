import * as angular from 'angular';
import '@uirouter/angularjs';
import 'oclazyload';
import routes from './app.routes';

angular.module('app', ['ui.router', 'oc.lazyLoad'])
    .config(routes);