export function isPalindrome(num: number): boolean {
    if (num < 0) return false;
    if (num < 10) return true;

    let reversed = 0;
    let original = num;
    while (original > 0) {
        reversed = (reversed * 10) + (original % 10);
        original = Math.floor(original / 10);
    }
    return num === reversed;
}

export function isPrime(number: number): boolean {
    if (number <= 1) return false;
    if (number <= 3) return true;
    if (number % 2 === 0 || number % 3 === 0) return false;

    for (let i = 5; i * i <= number; i += 6) {
        if (number % i === 0 || number % (i + 2) === 0) return false;
    }
    return true;
}