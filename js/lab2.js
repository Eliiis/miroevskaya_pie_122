//лаб 3 задание 1
function abc(a,b,c){
    let flag = 0;
    if (a > 0) {flag += 1};
    if (b > 0) {flag += 1};
    if (c > 0) {flag += 1};
    let answer = false;
    if (flag == 2) {answer = true};
    return answer;
}


document.getElementById("abc").onclick = function() {
    // Получаем значение (из input)
    const aInput = document.getElementById("aInput").value;
    const bInput = document.getElementById("bInput").value;
    const cInput = document.getElementById("cInput").value;
    let ans = abc(aInput, bInput, cInput);
    document.getElementById('exOneResult').innerText = `Утверждение является ${ans}`;
};

//задание 2
function avr(num1, num2, num3) {
    let agr;
    if ((num1>num2)&&(num1<num3)) {
        agr = num1;
    } else if ((num1 <= num2) && (num1 >= num3)) {
        agr = num1;
    } else if ((num2>=num1) && (num2 <=num3)) {
        agr = num2;
    } else if ((num2<=num1) && (num2>=num3)) {
        agr = num2;
    } else if ((num3>=num1) && (num3<=num2)) {
        agr = num3;
    } else if ((num3 <= num1) && (num3 >= num2)) {
        agr = num3;
    }
    return agr;
}
document.getElementById("avr").onclick = function() {
    // Получаем значение (из input)
    let firstInput = parseInt(document.getElementById("firstInput").value);
    let secondInput = parseInt(document.getElementById("secondInput").value);
    let thirdInput = parseInt(document.getElementById("thirdInput").value);
    let agr = avr(firstInput, secondInput, thirdInput);
    document.getElementById('exTwoResult').innerText = `Средним будет число ${agr}`;
};
//задание 3
function system(x) {
    let y;
    const a = 5.5;
    const b = 3.1;
    if (x > 1 || x === 1) {
        y = Math.exp(x) + 1;

    } else if (x > 0 && x < 1) {
        y = Math.cos(Math.sqrt(a * x)) ** 2;

    } else if (x < 0 || x === 0){
        y = Math.log(b + Math.sqrt(Math.abs(x)));

    }
    return y;
}
document.getElementById("system").onclick = function() {
    // Получаем значение (из input)
    let x = document.getElementById("xInput").value;
    let y = system(x);
    document.getElementById('exThreeResult').innerText = `Функция принимает значение ${y}`;
};
