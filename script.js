const primeNumberElement = document.getElementById('prime-number');
let primes = [2];
let currentIndex = 0;

function isPrime(num) {
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
        if (num % i === 0) return false;
    }
    return num > 1;
}

function getNextPrime() {
    let nextPrime = primes[primes.length - 1] + 1;
    while (!isPrime(nextPrime)) {
        nextPrime++;
    }
    primes.push(nextPrime);
    return nextPrime;
}

function showNextPrime() {
    if (currentIndex === primes.length - 1) {
        getNextPrime();
    }
    currentIndex++;
    primeNumberElement.textContent = primes[currentIndex];
}

function showPreviousPrime() {
    if (currentIndex > 0) {
        currentIndex--;
        primeNumberElement.textContent = primes[currentIndex];
    }
}

document.body.addEventListener('click', (e) => {
    if (e.button === 0) {
        showNextPrime();
    } else if (e.button === 2) {
        showPreviousPrime();
    }
});

document.body.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});
