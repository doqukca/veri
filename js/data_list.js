// data_list.js dosyası

// Sayfa yüklendiğinde localStorage'dan verileri al ve tabloya ekle
document.addEventListener('DOMContentLoaded', function() {
    var savedData = JSON.parse(localStorage.getItem('savedData')) || [];
    var tableBody = document.getElementById('dataTableBody');

    savedData.forEach(function(data) {
        var newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${data.name}</td>
            <td>${data.status}</td>
            <td>${data.address}</td>
            <td>${data.inspection}</td>
            <td>${data.date}</td>
            <td>${data.datePlus7}</td>
            <td>${data.datePlus28}</td>
        `;
        tableBody.appendChild(newRow);
    });
});
