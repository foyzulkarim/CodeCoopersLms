module App {

    export enum LocalStorageKeys {
        UserInfo
    }

    export class LocalStorageService {

        storage: Storage;

        constructor() {
            this.storage = localStorage;
        }

        save(key: LocalStorageKeys, value: any): void {
            let storageKey = this.getStorageKey(key);
            let storageValue = JSON.stringify(value);
            this.storage.setItem(storageKey, storageValue);
        }

        get(key: LocalStorageKeys): any {
            let storageKey = this.getStorageKey(key);
            let strItem = this.storage.getItem(storageKey);
            let item = JSON.parse(strItem);
            return item;
        }

        remove(key: LocalStorageKeys): void {
            let storageKey = this.getStorageKey(key);
            this.storage.removeItem(storageKey);
        }

        private getStorageKey(key: LocalStorageKeys): string {
            let storageKey = LocalStorageKeys[key].toString();
            return storageKey;
        }
    }

    angular.module('app').service('LocalStorageService', LocalStorageService);
}