
function fieldValue(field) {
    const inputedvalue = parseFloat(document.getElementById(field).value)


    if (isNaN(inputedvalue)) {
        alert(" please Input  Value")
    }
    else { return inputedvalue }
}

function resetValue() {
    document.getElementById("incomeField").value = ""
    document.getElementById("foodField").value = ""
    document.getElementById("clothField").value = ""
    document.getElementById("rentField").value = ""
    document.getElementById("saveField").value = ""
}

document.getElementById("calculateBtn").addEventListener("click", function () {

    const incomeField = fieldValue("incomeField")
    const foodField = fieldValue("foodField")
    const clothField = fieldValue("clothField")
    const rentField = fieldValue("rentField")

    // update calculations
    if (incomeField && foodField && clothField && rentField) {
        let totalExpenses = parseFloat(document.getElementById("totalExpenses").innerText)

        totalExpenses = totalExpenses + foodField + clothField + rentField

        if (totalExpenses > incomeField) {
            alert("you cant spend more then your income")
        }
        else {
            // update expnses
            document.getElementById("totalExpenses").innerText = totalExpenses
            // update balances
            document.getElementById("totalBalance").innerText  = incomeField - totalExpenses
        }
    }

    resetValue()
})
