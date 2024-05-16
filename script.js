function calculateBmi(){
  const weight = document.getElementById('weight').value;

  const Meter = cmInMeter();
  const bmi = weight/(Meter*Meter);
  const result = displayReport(bmi);

  document.getElementById('result').innerHTML ='your BMI is <br>' + bmi 
  document.getElementById('findings').innerHTML = result

  document.getElementById('result').style.display = 'block';
   document.getElementById('findings').style.display = 'block';
}

function cmInMeter(){
 const height = document.getElementById('height').value;
 const heightInMeter = height /100 ;
 return heightInMeter;
}

function displayReport(parameter){

let report;

 if(parameter <18.5 ){
    report ='underweight'
 }

 if(parameter >= 18.5 && parameter <=24.9){
    report = 'normal weight'
 }

 if(parameter >24.9){
    report = 'over weight'
 }

 if(parameter >= 30){
    report = 'obesity'
 }
 return report;
}
