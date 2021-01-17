export default function labsDemo() {
    return {
        template: require("./labs-demo.component.html"),
        controller: ('labsDemoController', labsDemoController),
        controllerAs: 'ctrl'
    };
}

function labsDemoController() {
    let self = this;
}