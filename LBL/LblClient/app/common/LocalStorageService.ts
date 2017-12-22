module App {

    export enum LocalStorageKeys {
        UserInfo
    }

    export class LocalStorageService {

        storage: Storage;

        constructor() {
            this.storage = localStorage;
        }

        save(key: LocalStorageKeys, value : any): void {
            let string = key.toString();
            this.storage.setItem(string, value);
        }

        get(key: LocalStorageKeys): any {
            let string = key.toString();
            return this.storage.getItem(string);
        }
    }

    angular.module('app').service('LocalStorageService', LocalStorageService);
}