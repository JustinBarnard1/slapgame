let health = 100

let opponentElem = document.getElementById('opponent')
let healthElem = document.getElementById('health')
let slapBtn = document.getElementById("slap")
let punchBtn = document.getElementById("punch")
let kickBtn = document.getElementById("kick")


let challengers = [{

    name: "green-lantern",
    img: "green-lantern.jpg",
    armor: 1,
}
{

    name: "batman",
    img: "batmanderp.jpg",
    armor: 3,
}

{
    name: "hulk",
    img: "hulk.jpg",
    armor: 4,

}
{
    name: "one-punch",
    img: "onepunch.jpg",
    armor: 5,
}
]

function drawBoard() {
    let opponentElem.innerHTML = `<h1> hello </h1>`
}

function drawHealth() {
    healthElem.innerHTML = health
}

function attack(hit) {
    if (hit == "slap") {
        health--;
        console.log(health)
    }
    else if (hit == "punch") {
        health -= 5;
        console.log(health)
    }
    else if (hit == "kick") {
        health -= 10;
        console.log(health)
    }
    drawHealth()

}

drawBoard();
