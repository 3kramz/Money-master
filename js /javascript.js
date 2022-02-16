
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