const Ageadd = document.getElementById('+Age');
const Ageminus = document.getElementById('-Age');
const Weightadd = document.getElementById('+Weight');
const Weightminus = document.getElementById('-Weight');
const rangeInput = document.getElementById('cm');
const rangeValue = document.getElementById('range');
const cal = document.getElementById('cal');
let Age = 0;
let Weight = 0;
let displayage = document.getElementById('Age').innerHTML = Age;
let displayweight = document.getElementById('Weight').innerHTML = Weight;

Ageadd.onclick = function () {
    Age++
    document.getElementById('Age').innerHTML = Age;

}

Ageminus.onclick = function () {

    if (Age <= 0) {

    } else {
        Age--
        document.getElementById('Age').innerHTML = Age;

    }


}
Weightadd.onclick = function () {
    Weight++
    document.getElementById('Weight').innerHTML = Weight;
    myWeight();
}

Weightminus.onclick = function () {
    if (Weight <= 0) {

    } else {
        Weight--
        document.getElementById('Weight').innerHTML = Weight;
        myWeight();
    }

}

function update() {

    rangeValue.textContent = rangeInput.value;
    const value = (rangeInput.value - rangeInput.min) / (rangeInput.max - rangeInput.min);
    myHeight();
}


rangeInput.addEventListener('input', update);


function myWeight() {
    let w = Weight
    return w;
}

function myHeight() {


    let myHeight = rangeInput.value / 100;
    let result = myHeight * myHeight;

    return result;
}


cal.onclick = function () {
    let Height = myHeight();
    let Weight = myWeight();

    let result = Weight / Height;

    result = Math.round(result * 100) / 100
    let BMI;
    let bmiresult;
    if (result > 30) {
        BMI = 'Obesity';
    }
    else if (result >= 25) {
        BMI = 'Over Weight';
    }
    else if (result >= 18.5) {
        BMI = 'Normal Weight';
    } else if (Weight <= 0) {
        alert("Please input");
        return;
    }

    else {
        BMI = 'Under Weight';
    }

    document.getElementById('div').innerHTML = `
         <div class="bg-[#eeeefd] px-24 pb-20 pt-8 rounded-lg">
    <h3 class="uppercase text-center mb-8 text-[#2B3568] font-['Inter'] font-bold text-2xl">Bmi Calculator</h3>
    <h3 class="text-center mb-3 text-[#2B3568] font-['Inter'] font-semibold text-xl">Body Mass Index</h3>
    <h3 class="text-center mb-3 text-[#2B3568] font-['Inter'] font-semibold text-xl">BMI Results</h3>
    <h3 class="text-center text-8xl font-['Inter'] text-[#6B63F6] font-bold mb-3">${result}</h3>
    <h3 class="text-center mb-3 text-[#2B3568] font-['Inter'] font-semibold text-xl">${BMI}</h3>
    <h3 class="text-center font-['Inter'] font-medium text-[#2B3568]">
    Underweight: BMI less than 18.5 <br>
    Normal weight: BMI 18.5 to 24.9
    <br> Overweight: BMI 25 to 29.9
    <br> Obesity: 30 to 40</h3>
        <button id="backButton" class="bg-[#6D63FF] rounded-2xl py-3 px-28 font-['Inter'] font-semibold text-white mt-10">Back</button>


    </div>
    

`
        ;
    const back = document.getElementById('backButton');
    back.onclick = function () {
        location.reload();
    }
}








