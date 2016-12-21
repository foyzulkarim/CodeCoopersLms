module Vta {
    "use strict";

    export class ContentDetailController {
        private courseService: CourseService;
        private stateService: angular.ui.IStateService;
        private contentId: string;
        Content: ContentDetailViewModel;
        private param: angular.ui.IStateParamsService;
        Url: string;

        static $inject = ["$stateParams", "$state", "courseService"];

        constructor(param: angular.ui.IStateParamsService, $state: angular.ui.IStateService, courseService: CourseService) {
            if (!param["contentId"] && param["contentId"] === "00000000-0000-0000-0000-000000000000") {
                $state.go("home");
            } else {
                this.Content = new ContentDetailViewModel();
                this.courseService = courseService;
                this.param = param;
                this.contentId = this.param["contentId"];
                this.init();
                this.Url = "";
            }
        }


       private  init(): void {
            var self = this;
            var request = new DetailRequest(this.contentId);
            self.courseService.getContentDetail(request).then((response: ContentDetailResponse): ContentDetailResponse => {
                self.Content = response.ContentDetail;
                console.log(self.Content.Files[0].Id);
                this.Url = "/api/videos2?fileId=" + self.Content.Files[0].Id;
                var element = document.getElementById('video1') as HTMLVideoElement;
                element.src = this.Url;                
                return response;
            });
            console.log("i am in course controller init method");
        }

        download(id : string): void {
            var self = this;
            var request = new DetailRequest(id);
            self.courseService.download(request);
        }
    }

    angular.module("vta").controller("ContentDetailController", ContentDetailController);
}