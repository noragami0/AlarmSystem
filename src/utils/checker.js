export class CheckerUtils {
    static isNullOrUndefined(value: any): boolean {
        return value === undefined || value === null;
    }

    static isNotNullOrUndefined(value: any): boolean {
        return value !== undefined && value !== null;
    }

    static isUndefined(value: any): boolean {
        return value === undefined;
    }

    static isNotUndefined(value: any): boolean {
        return value !== undefined;
    }
}
