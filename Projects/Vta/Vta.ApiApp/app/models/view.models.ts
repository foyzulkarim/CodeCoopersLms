module Vta {
    "use strict";

    export class BaseViewModel {
        Id: string;
        Name: string;
    }

    export class CourseViewModel extends BaseViewModel {
        constructor() {
            super();
        }

        Description: string;
        Fee: number;
        Prerequisite: string;

    }

    export class LevelViewModel  extends BaseViewModel{
        constructor() {
            super();
        }

        Contents : ContentViewModel[];
    }

    export class ContentViewModel extends BaseViewModel {
        constructor() {
            super();
        }
        Duration : string;
    }


    export class CourseDetailViewModel extends CourseViewModel{
        constructor() {
            super();
        }

        Levels: LevelViewModel[];
    }

    export class ContentDetailViewModel extends BaseViewModel {
        Course: CourseViewModel;
        Level: LevelViewModel;
        No: Number;
        Duration: string;
        Video: string;
        Poster: string;
        NextContentId: string;
        PreviousContentId: string;
        Description: string;
        Files: ContentViewModel[];
        Websites : HelpSites[];
    }

    export class ContentFileViewModel extends BaseViewModel{
        Content : ContentViewModel;
        Url: string;
        Size: Number;
    }

    export class HelpSites extends BaseViewModel{
        Content: ContentViewModel;
        Url: string;
    }
}