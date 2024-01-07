import { isPalindrome } from '../../utils/numberUtils';


describe('isPalindrome (Numbers Only)', () => {
    it('return true for a palindromic number', () => {
        expect(isPalindrome(12321)).toBe(true);
    });

    it('return false for a non-palindromic number', () => {
        expect(isPalindrome(12345)).toBe(false);
    });

    it('handle single digit numbers as palindromes', () => {
        expect(isPalindrome(7)).toBe(true);
    });

    it('return true for a number with all the same digits', () => {
        expect(isPalindrome(1111)).toBe(true);
    });

    it('return true for 0', () => {
        expect(isPalindrome(0)).toBe(true);
    });

    it('return false for negative numbers', () => {
        expect(isPalindrome(-121)).toBe(false);
    });

    it('can not handle very large numbers', () => {
        expect(isPalindrome(12345678987654321)).toBe(false);
    });
});