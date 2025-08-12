
document.getElementById("calculateBtn").addEventListener("click" , () => {
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const resultBox = document.getElementById("resultBox");

    if (!height || !weight || height <= 0 || weight <= 0) {
        resultBox.textContent = "Please enter valid height and weight";
        resultBox.style.color = "red";
        return;
    }

    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    let message = "";

    if (bmi < 18.5) {
        message = "Underweight";

    } else if (bmi >= 18.5 && bmi <= 24.9) {
        message = "Normal weight";

    } else if (bmi >= 25 && bmi <= 29.9) {
        message = " Overweight";

    } else {
        message = "Obese";
    }

    resultBox.innerHTML = `Your BMI is <strong>${bmi}</strong><br>Status: <strong>${message}</strong>`;
    resultBox.style.color = "#333";
});