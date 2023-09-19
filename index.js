function addToDisplay(value) {
    document.calculator.display.value += value;
}

function clearDisplay() {
    document.calculator.display.value = '';
}

function calculate() {
    try {
        const result = eval(document.calculator.display.value);
        if (!isNaN(result)) {
            document.calculator.display.value = result;
        }
    } catch (error) {
        document.calculator.display.value = 'Error';
    }
}