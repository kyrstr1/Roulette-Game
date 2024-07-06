let balance = 1000;

function playRoulette() {
    const betAmount = parseFloat(document.getElementById('betAmount').value);
    const betNumber = parseInt(document.getElementById('betNumber').value);
    const resultDiv = document.getElementById('result');
    const rouletteNumbersDiv = document.getElementById('rouletteNumbers');
    const balanceSpan = document.getElementById('balance');

    if (isNaN(betAmount) || isNaN(betNumber) || betNumber < 0 || betNumber > 36) {
        resultDiv.innerHTML = "Please enter a valid bet amount and number.";
        return;
    }

    if (betAmount > balance) {
        resultDiv.innerHTML = "Insufficient balance.";
        return;
    }

    const winningNumber = Math.floor(Math.random() * 37);
    let currentNumber = 0;
    let count = 0;
    const maxCount = 20;

    const interval = setInterval(() => {
        currentNumber = Math.floor(Math.random() * 37);
        rouletteNumbersDiv.innerHTML = currentNumber;
        count++;

        if (count >= maxCount) {
            clearInterval(interval);
            rouletteNumbersDiv.innerHTML = winningNumber;
            let resultMessage = "";

            if (betNumber === winningNumber) {
                const winnings = betAmount * 35;
                balance += winnings;
                resultMessage = `Congratulations! You have won: ${winnings} $`;
            } else {
                balance -= betAmount;
                resultMessage = `You have lost. Your Bet Amount: ${betAmount} $`;
            }

            balanceSpan.innerHTML = balance;
            resultDiv.innerHTML = resultMessage;
        }
    }, 100);
}
