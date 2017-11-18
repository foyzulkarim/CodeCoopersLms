module App {
    export class CourseController extends BaseController<Course> {
        levelOfAudiences: string[] = [];
        static $inject = ["CourseService"];
        orderStates: string[] = [];
        constructor(service: CourseService) {
            super(service);
            console.log("I am in Course Controller");
            for (var enumMem in LevelOfAudience) {
                if (LevelOfAudience.hasOwnProperty(enumMem)) {
                    var isValueProperty = parseInt(enumMem, 10) >= 0;
                    if (isValueProperty) {
                        let value = LevelOfAudience[enumMem];
                        this.levelOfAudiences.push(value);
                    }
                }
            }
            this.model.publishDate = new Date();
            this.searchRequest["LevelOfAudience"] = this.levelOfAudiences[0]; 
            //this.save();
            this.loadTeachers();
            this.search();
            this.model = new Course();
        }
        teachers: Teacher[];
        loadTeachers(): void {
            var self = this;
            var successCallback = (response: any): void => {
                console.log(response);
                self.teachers = response.Models;
            };
            var errorCallback = (error: any): void => {
                console.log(error);
            };

            
        }

        //groupChanged(): void {
        //    console.log(this.model.productGroupId);
        //}


        reset(): void {
            this.model = new Course();
        }
    }
    angular.module('app').controller("CourseController", CourseController);
}