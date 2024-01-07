export function isPalindrome(num: number): boolean {
    const str = num.toString();
    return str === str.split('').reverse().join('');
}

export function isPrime(number: number): boolean {
    if (number <= 1) return false;
    for (let i = 2; i * i <= number; i++) {
        if (number % i === 0) return false;
    }
    return true;
}