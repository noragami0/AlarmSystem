export class CheckerUtils {
    static isNullOrUndefined(value) {
        return value === undefined || value === null;
    }

    static isNotNullOrUndefined(value) {
        return value !== undefined && value !== null;
    }

    static isUndefined(value) {
        return value === undefined;
    }

    static isNotUndefined(value) {
        return value !== undefined;
    }
}
