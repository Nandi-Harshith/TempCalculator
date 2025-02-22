function convertTemperature() {
    const inputTemp = document.getElementById('inputTemp').value;
    const unitSelect = document.getElementById('unitSelect').value;
    const resultDiv = document.getElementById('result');

    if (isNaN(inputTemp) || inputTemp === '') {
        resultDiv.innerHTML = '<span style="color: red;">Please enter a valid number.</span>';
        return;
    }

    let result;
    if (unitSelect === 'celsius') {
        result = (inputTemp * 9/5) + 32;
        resultDiv.innerHTML = `${inputTemp}°C is equal to ${result.toFixed(2)}°F`;
    } else {
        result = (inputTemp - 32) * 5/9;
        resultDiv.innerHTML = `${inputTemp}°F is equal to ${result.toFixed(2)}°C`;
    }
}
