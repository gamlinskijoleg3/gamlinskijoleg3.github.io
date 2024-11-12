const grid = document.getElementById("grid");
const colorInput = document.getElementById("color-input");
const inputA = document.getElementById("input-a");
const inputB = document.getElementById("input-b");

let currentColor = colorInput.value, a, b;
const CENTER_X = 177;
const CENTER_Y = 177;
const SCALE = 20;
const GRID_LIMIT = 335
let DOTS_CONSETRATION = 0.01;

function placeDot(x) {
    let y = -b * Math.sqrt(x ** 2 / a ** 2 - 1);
    if (!isNaN(y)) {
        let dot = document.createElement("div");
        dot.className = "dot";
        if (CENTER_X - 10 + x * SCALE > 0 && CENTER_X - 10 + x * SCALE < GRID_LIMIT && CENTER_Y - 10 + y * SCALE > 0 && CENTER_Y - 10 + y * SCALE < GRID_LIMIT) {
            dot.style.backgroundColor = currentColor;
            dot.style.left = CENTER_X + x * SCALE + "px";
            dot.style.top = CENTER_Y + y * SCALE + "px";
            grid.appendChild(dot);
        }
    }

    y = b * Math.sqrt(x ** 2 / a ** 2 - 1);
    if (!isNaN(y)) {
        let dot = document.createElement("div");
        dot.className = "dot";
        if (CENTER_X - 10 + x * SCALE > 0 && CENTER_X - 10 + x * SCALE < GRID_LIMIT && CENTER_Y - 10 + y * SCALE > 0 && CENTER_Y - 10 + y * SCALE < GRID_LIMIT) {
            dot.style.backgroundColor = currentColor;
            dot.style.left = CENTER_X + x * SCALE + "px";
            dot.style.top = CENTER_Y + y * SCALE + "px";
            grid.appendChild(dot);
        }
    }
}

function updateGraph() {
    a = parseFloat(inputA.value);
    b = parseFloat(inputB.value);
    if (a > 0 && b > 0) {
        document.querySelectorAll(".dot").forEach((element) => {
            element.remove();
        });
        for (let i = -10; i < 11; i += DOTS_CONSETRATION) {
            placeDot(i);
        }
    }
}

inputA.onchange = updateGraph;
inputB.onchange = updateGraph;

colorInput.onchange = function () {
    currentColor = colorInput.value;
    document.querySelectorAll(".dot").forEach((element) => {
        element.style.backgroundColor = currentColor;
    });
};
