const form = document.getElementById('validation-form');
const resultDiv = document.getElementById('result');
const errorDiv = document.getElementById('error');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const firstNumber = parseFloat(document.getElementById('first-number').value);
    const secondNumber = parseFloat(document.getElementById('second-number').value);

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        errorDiv.textContent = "Por favor, insira números válidos.";
        resultDiv.textContent = "";
    } else if (secondNumber > firstNumber) {
        errorDiv.textContent = "";
        resultDiv.textContent = "Formulário válido! O segundo número é maior que o primeiro.";
    } else {
        errorDiv.textContent = "O segundo número deve ser maior que o primeiro.";
        resultDiv.textContent = "";
    }
});
