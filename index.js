function getRandomInt(min, max) {
    return min + Math.floor(Math.random() * (max - min))
}

let firstCard = getRandomInt(2, 11)
let secondCard = getRandomInt(2, 11)

let sum = firstCard + secondCard

console.log(sum)