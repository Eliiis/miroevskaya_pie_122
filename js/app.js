function calculateCircleProperties(area) {
    const pi = 3.14;
    let radius = Math.sqrt(area / pi);
    let diameter = 2 * radius;
    let circumference = 2 * pi * radius;
    return { diameter, circumference };
}

// Функция для обработки нажатия кнопки
document.getElementById("solveButton").onclick = function() {
    // Получаем значение площади (из input)
    const areaInput = document.getElementById("areaInput").value;
    let area = parseFloat(areaInput);
    const { diameter, circumference } = calculateCircleProperties(area);
    // Выводим результаты
    document.getElementById("resultDiameter").innerText = `Диаметр D: ${diameter.toFixed(2)}`;
    document.getElementById("resultCircumference").innerText = `Длина L окружности: ${circumference.toFixed(2)}`;
};
//задание 2
function swapHundredsAndTens(number) {
    let numStr = number.toString();
    let hundreds = numStr[0];
    let tens = numStr[1];
    let units = numStr[2];
    let newNumber = `${tens}${hundreds}${units}`;
    return parseInt(newNumber, 10);
}

document.getElementById("lab2").onclick = function() {
    // Получаем значение (из input)
    const numbersImput = document.getElementById("numbersInput").value;
    let originalNumber = parseFloat(numbersImput);
    let newNumber = swapHundredsAndTens(originalNumber);
    document.getElementById('result').innerText = `Исходное число: ${originalNumber}, новое число: ${newNumber}`;
};
//лаб 3 задание 1
function abc(a,b,c){
    let flag = 0;
    if (a > 0) flag +=1;
    if (b > 0) flag +=1;
    if (c > 0) flag +=1;
    let answer = false;
    if (flag == 2) answer = true;
    return answer;
}

document.getElementById("abc").onclick = function() {
    // Получаем значение (из input)
    const aInput = document.getElementById("aInput").value;
    const bInput = document.getElementById("bInput").value;
    const cInput = document.getElementById("cInput").value;
    alert(aInput)
    let answer = abc(aInput, bInput, cInput);
    alert(a+b+c)
    document.getElementById('exOneResult').innerText = `Утверждение ${answer}`;
};
