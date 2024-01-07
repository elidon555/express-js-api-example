export function SetPrototypeOf<T extends { new (...args: any[]): {} }>(target: T) {
    return function (constructor: T) {
        Reflect.setPrototypeOf(constructor.prototype, target.prototype);

        return class extends constructor {
            constructor(...args: any[]) {
                super(...args);
                Reflect.setPrototypeOf(this, constructor.prototype);
            }
        };
    };
}
