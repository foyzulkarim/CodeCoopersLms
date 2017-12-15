module App {
    export class SelectViewModel {
        id: string;
        value: string;
    }
    export class Permission extends Entity {
        roleId: string;
        resourceId: string;
        isAllowed: boolean;
        isDisabled: boolean;
    }
}