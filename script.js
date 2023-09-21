function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert height to meters
    const bmi = weight / (height * height);
  
    let result = '';
    if (isNaN(bmi) || bmi <= 0) {
      result = 'Please enter valid weight and height.';
    } else {
      if (bmi < 18.5) {
        result = `BMI: ${bmi.toFixed(2)} - Underweight`;
      } else if (bmi < 24.9) {
        result = `BMI: ${bmi.toFixed(2)} - Normal weight`;
      } else if (bmi < 29.9) {
        result = `BMI: ${bmi.toFixed(2)} - Overweight`;
      } else {
        result = `BMI: ${bmi.toFixed(2)} - Obesity`;
      }
    }
  
    document.getElementById('result').innerText = result;
  }
  