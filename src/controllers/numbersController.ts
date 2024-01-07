import { Request, Response } from 'express';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

import { NumberRangeFilter } from '../models/NumberRangeFilter';
import BadRequestError from "../errors/BadRequestError";

export const numbersController = async (req: Request, res: Response) => {

    const numberRangeFilter = plainToInstance(NumberRangeFilter, req.body as NumberRangeFilter);

    const errors = await validate(numberRangeFilter);

    if (errors.length > 0) {
        throw new BadRequestError({context: errors, logging: true});
    }

    const start = process.hrtime();

    const data = numberRangeFilter.filterNumbers();
    const [seconds, nanoseconds] = process.hrtime(start);
    const timeOfExecution = seconds + nanoseconds / 1e9;

    res.send({ data, timeOfExecution });
};
