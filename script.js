function bmiCalculate() {
  var h = document.getElementById("height").value;
  var w = document.getElementById("weight").value;
  var result = document.getElementById("result");
  var category = document.getElementById("category");

  var bmi = w / (((h / 100) * h) / 100);
  var total = bmi.toFixed(2);

  // // result//

  if (bmi < 18.5) {
    category.innerHTML = "You are underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    category.innerHTML = " you are Normal ";
  } else if (bmi >= 25 && bmi <= 29.9) {
    category.innerHTML = " you are Overweight";
  }
  document.getElementById("result").innerHTML = total;

  if(h == "" || w ==""){
    alert("please enter value");
    return false;
  }
}



// for reset//

function myfun() {
  //   document.getElementById("re").onclick = myfun;

  document.getElementById("height").innerHTML = "";
  document.getElementById("weight").innerHTML = "";
}
