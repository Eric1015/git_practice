function calculate() {
    console.log(1 + 2);
    var number = document.getElementById("number_input").value;
    var arr = number.split("");
    var sum = 0;
    for (var elem of arr) {
        sum += parseInt(elem, 10);
    }
    console.log(sum);
}

function answer2() {
    var number = document.getElementById("number_input").value;
    var sum = 0;
    for (var i = 0; i < number.length; i++) {
        sum += parseInt(number.charAt(i), 10);
    }
    console.log(sum);
}