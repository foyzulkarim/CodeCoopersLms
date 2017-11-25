module App {
    export class Enrollment extends Entity {
        constructor() {
            super();
        }

        studentId: string;
        courseId: string;
        isPaid: boolean;
        paidTotal: number;
        due: number;
        isCompleted: boolean;
        completedContent: number;
    }
}