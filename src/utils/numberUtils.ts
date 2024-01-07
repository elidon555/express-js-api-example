export function isPalindrome(num: number): boolean {
    if (num < 0) return false;

    const str = num.toString();
    for (let i = 0; i < Math.floor(str.length / 2); i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

export function isPrime(number: number): boolean {
    if (number <= 1) return false;
    if (number === 2) return true;
    if (number % 2 === 0) return false;
    for (let i = 3; i * i <= number; i += 2) {
        if (number % i === 0) return false;
    }
    return true;
}