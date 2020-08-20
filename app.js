let health = 100

let healthElem = document.getElementById('health')
let slapBtn = document.getElementById("slap")
let punchBtn = document.getElementById("punch")
let kickBtn = document.getElementById("kick")


function drawBoard() {

}

function drawHealth() {

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

