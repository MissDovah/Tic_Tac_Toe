let arrX = [];
let arrO = [];
let bool = true;

buttons = document.getElementsByClassName('btn');

buttons = [...buttons];
buttons.forEach(button => {

    button.addEventListener('click', function (event) {
        let player;
        let box = button.value;
        //Player toggle x's and o's
        if (bool) {
            player = "x";
            bool = false;
            button.disabled = true;
            document.getElementById("turn").innerText = "Player 2's Turn";
        } else {
            player = "o";
            bool = true;
            button.disabled = true;
            document.getElementById("turn").innerText = "Player 1's Turn";
        }

        document.getElementById(box).innerText = player;

        //console.log(player);
        //console.log(button.value);
        if (player == "x") {
            arrX.push(box);
            console.log(arrX, 'arrX');
        } else {
            arrO.push(box);
            console.log(arrO, 'arrO');
        }
        if (arrX.includes('a') && arrX.includes('b') && arrX.includes('c') || arrX.includes('d') && arrX.includes('e') && arrX.includes('f') || arrX.includes('g') && arrX.includes('h') && arrX.includes('i') || arrX.includes('a') && arrX.includes('d') && arrX.includes('g') || arrX.includes('a') && arrX.includes('e') && arrX.includes('i') || arrX.includes('b') && arrX.includes('e') && arrX.includes('h') || arrX.includes('c') && arrX.includes('f') && arrX.includes('i') || arrX.includes('c') && arrX.includes('e') && arrX.includes('g')) {
            alert("PLAYER 1 WINS!!!");
            buttons.forEach(button => button.disabled = true)
        } else if (arrO.includes('a') && arrO.includes('b') && arrO.includes('c') || arrO.includes('d') && arrO.includes('e') && arrO.includes('f') || arrO.includes('g') && arrO.includes('h') && arrO.includes('i') || arrO.includes('a') && arrO.includes('d') && arrO.includes('g') || arrO.includes('a') && arrO.includes('e') && arrO.includes('i') || arrO.includes('b') && arrO.includes('e') && arrO.includes('h') || arrO.includes('c') && arrO.includes('f') && arrO.includes('i') || arrO.includes('c') && arrO.includes('e') && arrO.includes('g')) {

            alert("PLAYER 2 WINS!!!");
            buttons.forEach(button => button.disabled = true)
        } else if (arrX.length + arrO.length == 9) {
            alert("IT'S A DRAW!!!");
            buttons.forEach(button => button.disabled = true)
        }






    })
});

