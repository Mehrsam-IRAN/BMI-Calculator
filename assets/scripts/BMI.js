document.getElementById('FORM').addEventListener('submit', function(event){
            event.preventDefault()
            BMI()
        })
        let el;
        let EL;
        function BMI() {
    let W = document.getElementById('height').value;
    let N = document.getElementById('weight').value;

    W = W / 100;

    let d = document.querySelector(".result");

    if (el == undefined) {
        el = document.createElement("p");
        EL = document.createElement("p");

        d.appendChild(el);
        d.appendChild(EL);
    }

    if (W <= 0 || N <= 0) {
        EL.textContent = "Please enter valid height and weight!";
        EL.style.color = "red";
        el.textContent = "";
        return;
    }

    let s = N / (W * W);

    el.textContent = "Your BMI is: " + s.toFixed(2);
    el.style.color = "#ffffff";

    if (s < 18.5) {
        EL.textContent = "Underweight";
        EL.style.color = "red";
        document.body.style.backgroundColor = "#2B0000";
    } else if (s < 25) {
        EL.textContent = "Healthy weight";
        EL.style.color = "green";
        document.body.style.backgroundColor = "#001B00";
    } else if (s < 30) {
        EL.textContent = "Overweight";
        EL.style.color = "orange";
        document.body.style.backgroundColor = "#4A2000";
    } else {
        EL.textContent = "Obesity";
        EL.style.color = "red";
        document.body.style.backgroundColor = "#2B0000";
    }
}