let resultOut = document.getElementById('result');
let submitButton = document.getElementById('subButton')

 function primeChecker() {      
    let inputVal =  parseInt(document.getElementById('input').value);
    
    if (isNaN(inputVal) || inputVal <= 1 ) {
        resultOut.textContent = "Please Enter a number greater than 1."
        return;
    };
    
    let isPrime = true;
    for (i = 2; i <= Math.sqrt(inputVal); i++) {
        if (inputVal % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        resultOut.textContent = `${inputVal} is a Prime Number`
    } else {
        resultOut.textContent = `${inputVal} is not a Prime Number`
    };
    
 };

 submitButton.addEventListener('click', primeChecker); 