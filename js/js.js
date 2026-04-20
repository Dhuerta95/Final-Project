function calculateRefund() {
    let income = parseFloat(document.getElementById("income").value);
    let dependents = parseInt(document.getElementById("dependents").value);

    if (isNaN(income) || isNaN(dependents)) {
        document.getElementById("result").textContent = "Enter valid numbers.";
        return;
    }

    if (dependents > 3) dependents = 3;

    let baseRefund;

    if (income < 30000) {
        baseRefund = 1200;
    } else if (income <= 70000) {
        baseRefund = 800;
    } else {
        baseRefund = 300;
    }

    let dependentBonus = dependents * 500;
    let totalRefund = baseRefund + dependentBonus;

    document.getElementById("result").textContent =
        "Estimated refund: $" + totalRefund;
}