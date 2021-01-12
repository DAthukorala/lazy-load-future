export default function documentsDemo() {
    return {
        // templateUrl: 'scripts/documents-module/components/documents-demo/documents-demo.component.html',
        template:'<h2>This is the documents demo component</h2>',
        controller: ('documentsDemoController', documentsDemoController),
        controllerAs: 'ctrl'
    };
}

function documentsDemoController() {
    let self = this;
}