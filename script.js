function checkHealth() {
  const heartRate = parseInt(document.getElementById('heartRate').value);
  const bloodPressure = document.getElementById('bloodPressure').value.trim();
  const temperature = parseFloat(document.getElementById('temperature').value);
  const resultDiv = document.getElementById('result');

  if (!heartRate || !bloodPressure || !temperature) {
    resultDiv.textContent = "⚠️ Please fill in all the fields!";
    resultDiv.className = "result warning";
    return;
  }

  const isHeartRateNormal = heartRate >= 60 && heartRate <= 100;
  const [systolic, diastolic] = bloodPressure.split('/').map(Number);
  const isBPValid = !isNaN(systolic) && !isNaN(diastolic);
  const isBPNormal = isBPValid && systolic >= 90 && systolic <= 120 && diastolic >= 60 && diastolic <= 80;
  const isTempNormal = temperature >= 36.1 && temperature <= 37.2;

  if (isHeartRateNormal && isBPNormal && isTempNormal) {
    resultDiv.textContent = "✅ All readings are within a healthy range!";
    resultDiv.className = "result normal";
  } else if (!isHeartRateNormal || !isBPNormal || !isTempNormal) {
    resultDiv.textContent = "⚠️ Some readings are out of range. Please monitor your health.";
    resultDiv.className = "result warning";
  } else {
    resultDiv.textContent = "❌ Abnormal readings detected. Consult a doctor.";
    resultDiv.className = "result danger";
  }
}
