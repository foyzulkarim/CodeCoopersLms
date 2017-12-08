module App {

    export class ResourceType {
        constructor(id: string, value: string) {
            this.id = id;
            this.value = value;
        }

        id: string;
        value: string;
    }

    export class Resource extends Entity {
        constructor() {
            super();
        }

        name: string;
        type: string;
        isPublic: boolean;
    }
}