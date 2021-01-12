import documentsDemo from './components/documents-demo/documents-demo.component';
import routes from './documents.routes';

angular.module('documents', ['ui.router'])
    .config(routes)
    .component('documentsDemo', documentsDemo());