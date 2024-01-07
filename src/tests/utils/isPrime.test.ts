import { isPrime } from '../../utils/numberUtils';

describe('isPrime', () => {
    it('return false for negative numbers', () => {
        expect(isPrime(-1)).toBe(false);
        expect(isPrime(-2)).toBe(false);
        expect(isPrime(-3)).toBe(false);
    });

    it('return false for 0 and 1', () => {
        expect(isPrime(0)).toBe(false);
        expect(isPrime(1)).toBe(false);
    });

    it('return true for prime numbers', () => {
        expect(isPrime(2)).toBe(true);
        expect(isPrime(3)).toBe(true);
        expect(isPrime(5)).toBe(true);
        expect(isPrime(7)).toBe(true);
        expect(isPrime(11)).toBe(true);
        expect(isPrime(13)).toBe(true);
        expect(isPrime(17)).toBe(true);
    });

    it('return false for non-prime numbers', () => {
        expect(isPrime(4)).toBe(false);
        expect(isPrime(6)).toBe(false);
        expect(isPrime(8)).toBe(false);
        expect(isPrime(9)).toBe(false);
        expect(isPrime(10)).toBe(false);
        expect(isPrime(12)).toBe(false);
        expect(isPrime(14)).toBe(false);
    });

    it('return true for large prime numbers', () => {
        expect(isPrime(7919123212)).toBe(false);
    });

    it('return false for large non-prime numbers', () => {
        expect(isPrime(80000000000)).toBe(false);
    });
});
