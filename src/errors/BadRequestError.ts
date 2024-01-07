import {ValidationError} from "class-validator";

import {CustomError} from "./CustomError";
import {SetPrototypeOf} from "../decorators/decorators";

@SetPrototypeOf(BadRequestError)
export default class BadRequestError extends CustomError {
    private static readonly _statusCode = 400;
    private readonly _code: number;
    private readonly _logging: boolean;
    private readonly _context: { [key: string]: any };

    constructor(params?: {code?: number, message?: string, context?: ValidationError[],logging?: boolean}) {
        const { code, message, logging } = params || {};

        super(message || "Bad request");
        this._code = code || BadRequestError._statusCode;
        this._logging = logging || false;
        this._context = params?.context || {};
    }

    get errors() {
        return [{ message: this.message, context: this._context }];
    }

    get statusCode() {
        return this._code;
    }

    get logging() {
        return this._logging;
    }
}