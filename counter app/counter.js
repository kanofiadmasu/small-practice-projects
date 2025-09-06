
 let countValue = 0;
 let incClicks = 0;
 let decClicks= 0;

 let counter = document.getElementById('count')
 let incButton = document.querySelector('.inc-button');
 let decButton = document.querySelector('.dec-button');

 let incDisplay = document.getElementById('incCount');
 let decDisplay = document.getElementById('decCount');
 

 incButton.addEventListener('click', increment);
 decButton.addEventListener('click', decrement);

function increment() {
    if (countValue < 10) {
    countValue++;
    incClicks++;
    update();
    }
};

function decrement() {
    if (countValue > 0 ) {
    countValue--
    decClicks++
    update();
    }
};

function update() {
    counter.textContent = countValue
    incDisplay.textContent = incClicks
    decDisplay.textContent = decClicks

}
