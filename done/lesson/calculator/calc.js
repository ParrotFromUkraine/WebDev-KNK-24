const display = document.getElementById("display");

function appendValue(value) {
    if (display.value === "0") display.value = "";
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value) || "0";
    } catch {
        display.value = "Ошибка";
    }
}

document.addEventListener("keydown", (event) => {
    const validKeys = "0123456789+-*/.=BackspaceEnter";
    if (validKeys.includes(event.key)) {
        if (event.key === "Enter" || event.key === "=") calculate();
        else if (event.key === "Backspace") display.value = display.value.slice(0, -1);
        else appendValue(event.key);
    }
});