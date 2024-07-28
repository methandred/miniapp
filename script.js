document.getElementById('lotteryButton').addEventListener('click', function() {
    const resultElement = document.getElementById('result');
    const result = Math.random() < 0.5 ? 'Ви виграли!' : 'Спробуйте ще раз!';
    resultElement.textContent = result;
});
