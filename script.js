const gameBot = function () {
    const secretNumber = Math.floor(Math.random() * 100 + 1);
    console.log(secretNumber);
    let attempts = 3;

    return function guess() {
        let answer = prompt("Угадай число от 1 до 100");

        if (answer === null) {
            return alert("Игра закончена");
        }

        const value = +answer;

        if (value === secretNumber) {
            alert("Вы угадали число, поздравляю! Игра закончена!")
            return
        }

        attempts--;

        if (attempts === 0) {
            if(confirm("Попытки закончились, хотите сыграть еще?")) {
                return gameBot()();
            } else {
                return alert("Игра закончена");
            }
        }

        if (isNaN(value)) {
            alert("Введите число!");
            return guess();
        } else if (value === 0) {
            alert(`Введите числа от 1 до 100! Осталось попыток ${attempts}`)
            return guess();
        } else if (value > secretNumber) {
            alert(`Загаданное число меньше! Попытайся снова, осталось попыток ${attempts}`)
            return guess();
        } else if (value < secretNumber) {
            alert(`Загаданное число больше! Попытайся снова, осталось попыток ${attempts}`)
            return guess();
        }
    }
}

const startGame = gameBot();
startGame();