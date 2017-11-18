module App {
    export class Course extends Entity {
        constructor() {
            super();
        }

        title: string;
        price: number;
        tags: string;
        totalStudentsEnrolled: number;
        publishDate: Date;
        totalLecturesCount: number;
        subTitle: string;
        courseSummary: string;
        courseShortDescription: string;
        language: string;
        achieve: string;
        requirements: string;
        fullDescription: string;
        teacherId: string;
        teacher:string;


    }
    export enum LevelOfAudience {
        Beginner,
        Intermediate,
        Advance
    }
}