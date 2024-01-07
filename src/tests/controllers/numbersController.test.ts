import request from 'supertest';

import app from '../../app'

describe('numbersController', () => {
    it('should return filtered numbers and time of execution', async () => {

        const response = await request(app)
            .post('/api/numbers')
            .send({ minNumber: 1, maxNumber: 10, feature: ['prime','palindrome'] });
        const expectedResData = [2, 3, 5, 7]

        expect(response.status).toBe(200);
        expect(response.body.data).toEqual(expect.arrayContaining(expectedResData));
        expect(response.body.data.length).toEqual(expectedResData.length);
        expect(response.body).toHaveProperty('timeOfExecution');
    });

    it('should throw BadRequestError if validation fails', async () => {

        const response = await request(app)
            .post('/api/numbers')
            .send({ minNum: 'invalid', max: 10 });

        expect(response.status).toBe(400);
        expect(response.body).toEqual(expect.anything());
    });
});

