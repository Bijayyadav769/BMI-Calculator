let btn = document.querySelector("#btn");

let heightInput = document.querySelector("#height");

let weightInput = document.querySelector("#weight");

let result = document.querySelector("#result");


btn.addEventListener("click", function() {
    let height = Number(heightInput.value);
    let weight = Number(weightInput.value);

    let heightMeter= height / 100;

    let BMI = weight/(heightMeter*heightMeter);
    result.innerText=BMI.toFixed(2);

});
