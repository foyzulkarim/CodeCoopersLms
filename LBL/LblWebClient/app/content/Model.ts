module App {
    export class Category {
        id: number;
        catetoryType: string;

        constructor(id: number, categoryType: string) {
            this.id = id;
            this.catetoryType = categoryType;
        }
    }
    export class Content extends Entity {

        constructor() {
            super();
        }

        serial: number;
        title: string;
        description: string;
        url: string;
        totalSeconds: number;
        tags: string;
        category: number;
        courseTitle: string;
        courseId: string;
    }
}