const userCountInput = document.getElementById('userCount');
const resultDiv = document.getElementById('result');
const increaseBtn = document.getElementById('increaseBtn');
const decreaseBtn = document.getElementById('decreaseBtn');

const basePricePerUser = 10; 

function updatePrice() {
    const userCount = parseInt(userCountInput.value) || 0; 
    const totalPrice = userCount * basePricePerUser;
    resultDiv.textContent = `Kaina: ${totalPrice}€`;
}


increaseBtn.addEventListener('click', () => {
    userCountInput.value = parseInt(userCountInput.value) + 1;
    updatePrice();
});

decreaseBtn.addEventListener('click', () => {
    userCountInput.value = Math.max(0, parseInt(userCountInput.value) - 1); // Prevent negative values
    updatePrice();
});

updatePrice();
