module App {
    export class Student extends Entity{
        constructor() {
            super();
        }

        name: string;
        phone: string;
        email: string;
    }
     
    export class BaseRequestModel {
        orderBy: string;
        isAscending: boolean;
        page: number;
        keyword: string;          
    }
}