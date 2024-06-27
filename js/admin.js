// admin.js dosyası

// Form submit olayını dinle
document.getElementById('addForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Formun default submit işlemini engelle

    // Formdaki verileri al
    var name = document.getElementById('name').value;
    var status = document.getElementById('status').value;
    var address = document.getElementById('address').value;
    var inspection = document.getElementById('inspection').value;
    var date = document.getElementById('date').value;

    // Yeni bir obje oluştur
    var newData = {
        name: name,
        status: status,
        address: address,
        inspection: inspection,
        date: date,
        datePlus7: calculateDate(date, 7),
        datePlus28: calculateDate(date, 28)
    };

    // Verileri tabloya ekle
    addToTable(newData);

    // Formu sıfırla
    document.getElementById('addForm').reset();

    // localStorage'a veriyi kaydet
    saveDataLocally(newData);
});

// Tarih hesaplama fonksiyonu
function calculateDate(baseDate, daysToAdd) {
    var date = new Date(baseDate);
    date.setDate(date.getDate() + daysToAdd);

    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
}

// Veriyi tabloya ekleme fonksiyonu
function addToTable(data) {
    var tableBody = document.getElementById('dataTableBody');
    var newRow = document.createElement('tr');

    // Duruma göre sınıf ekleyerek satır rengini belirle
    switch(data.status) {
        case 'olumlu':
            newRow.className = 'table-row-olumlu';
            break;
        case 'olumsuz':
            newRow.className = 'table-row-olumsuz';
            break;
        case 'sabit':
            newRow.className = 'table-row-sabit';
            break;
        default:
            newRow.className = ''; // Varsayılan durum
    }

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
}

// localStorage'a veriyi kaydetme fonksiyonu
function saveDataLocally(data) {
    // localStorage'ta 'savedData' adında bir anahtar ile veriyi kaydet
    var savedData = JSON.parse(localStorage.getItem('savedData')) || [];
    savedData.push(data);
    localStorage.setItem('savedData', JSON.stringify(savedData));
}
