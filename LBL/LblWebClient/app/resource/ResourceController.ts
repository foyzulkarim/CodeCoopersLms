module App {
    export class ResourceController extends BaseController<Resource> {
        resourceTypeList: ResourceType[] = [];
        selectedResource: ResourceType;

        static $inject = ["ResourceService"];
        constructor(service: ResourceService) {
            super(service);
            this.reset();
            this.loadResourceTypeList();
        }

        loadResourceTypeList(): void {
            var self = this;
            self.resourceTypeList.push(new ResourceType("WebPage", "WebPage"));
            self.resourceTypeList.push(new ResourceType("Div", "Div"));
            self.resourceTypeList.push(new ResourceType("UI-Control", "UI-Control"));
        }

        addResource(): void {
            var self = this;

            let successCallback = (response: any): void => {
                alert('Resources added successfully');
                self.reset();
            };
            let errorCallback = (error: any): void => {
                console.log(error);
            };

            self.model.type = self.selectedResource.id;           
            self.service.save(self.model).then(successCallback, errorCallback);
        }

        reset() {
            var self = this;
            self.model = new Resource();
        }
    }

    angular.module('app').controller('ResourceController', ResourceController);
}