let out = document.getElementById("output");

function display(num) {
    out.value = out.value + num;
}

function calculate() {
    try {
        out.value = eval(out.value);
        if (isNaN(out.value)) throw "Error";
    } catch (err) {
        alert("Invalid")
    }
}

function Clear() {
    out.value = "";
}

function del() {
    out.value = out.value.slice(0, -1);
}