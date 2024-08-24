function showPrimes(n) {
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            primeNum.push(i);
        }
    }
}
function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}
let num, check;
const primeNum = [];
input = prompt("Enter positive integer");
num = Number(input);
while (num <= 0 || isNaN(num) == true) {
    input = prompt("Enter positive integer");
    num = Number(input);
}
if (num > 2) {
    showPrimes(num);
    alert("For n = " + num + " prime numbers are " + primeNum);
} else if (num == 2) {
    showPrimes(num);
    alert("For n = " + num + " prime number is 2" );
} 




