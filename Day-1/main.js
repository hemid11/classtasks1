function addRow() {
    var companyname = document.getElementById("firstName").value;
    var contactname = document.getElementById("lastName").value;
    var contacttitle = document.getElementById("contacttitle").value;

    if (companyname === "" || contactname === "" || contacttitle === "") {
        alert("Butun xanalar doldurulmalidir.");
        return;
    }

    var table = document.getElementById("myTable");
    var row = table.insertRow(table.rows.length);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = companyname;
    cell2.innerHTML = contactname;
    cell3.innerHTML = contacttitle;
    cell4.innerHTML = '<button class="add-remove-btn" onclick="removeRow(this)">Delete</button>';

    document.getElementById("companyname").value = "";
    document.getElementById("contactname").value = "";
    document.getElementById("contacttitle").value = "";
}
function removeRow(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}