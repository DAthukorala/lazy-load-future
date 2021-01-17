export default function documentsDemo() {
    return {
        template: require("./documents-demo.component.html"),
        controller: ('documentsDemoController', documentsDemoController),
        controllerAs: 'ctrl'
    };
}

function documentsDemoController() {
    let self = this;
}