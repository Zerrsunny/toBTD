var player1 = prompt("Player 1 name : ")
var player2 = prompt("Player 2 name : ")
document.getElementById("Welcome").innerHTML += "Welcome " + player1 + " & " + player2

function random_numberx(x){
var x = Math.floor(Math.random() * 10)
console.log(player1+" ได้ "+x)
return x
}

function random_numbery(y){
var y = Math.floor(Math.random() * 10)
console.log(player2+" ได้ "+y)
return y
}

function random_number(a, b) {

    let s = random_numberx(a)
    let d = random_numbery(b)
    
    if (s > d) {
        alert("ยินดีด้วยคุณ " + player1 + " ชนะ")
    }
    else if (s == d) {
        alert("คะแนนของพวกคุณเสมอกัน")
    }
    else if (s < d) {
        alert("ยินดีด้วยคุณ " + player2 + " ชนะ")
    }
    
}