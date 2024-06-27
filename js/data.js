// Örnek veri seti
let data = [];

// Verileri listelemek için fonksiyon
function renderData() {
    let listContainer = document.getElementById("list-items");
    listContainer.innerHTML = "";

    data.forEach(item => {
        let listItem = document.createElement("div");
        listItem.classList.add("list-item");

        // Geribildirim tipine göre arka plan rengi ayarla
        let feedbackColor = "";
        switch (item.feedback) {
            case "olumlu":
                feedbackColor = "green";
                break;
            case "olumsuz":
                feedbackColor = "red";
                break;
            case "sabit":
                feedbackColor = "gray";
                break;
            default:
                feedbackColor = "white";
                break;
        }

        listItem.style.backgroundColor = feedbackColor;
        
        listItem.innerHTML = `
            <p><strong>Numara:</strong> ${item.id}</p>
            <p><strong>Adres:</strong> ${item.address}</p>
            <p><strong>İsim:</strong> ${item.name}</p>
            <p><strong>Geribildirim:</strong> ${item.feedback}</p>
            <p><strong>Yapı Denetimi:</strong> ${item.inspection}</p>
            <p><strong>Tarih:</strong> ${item.date}</p>
            <p><strong>${getDaysText(7)}:</strong> ${item.datePlus7}</p>
            <p><strong>${getDaysText(28)}:</strong> ${item.datePlus28}</p>
        `;
        listContainer.appendChild(listItem);
    });
}

// Tarih hesaplama fonksiyonu
function calculateDatePlusDays(dateString, days) {
    let date = new Date(dateString);
    date.setDate(date.getDate() + days);
    return date.toISOString().split('T')[0]; // ISO formatında tarihi alıyoruz
}

// Gün sayısına göre metin döndürme fonksiyonu
function getDaysText(days) {
    return days + " gün sonraki tarih";
}

// Veri ekleme işlevi
function addData() {
    let id = document.getElementById("id").value;
    let address = document.getElementById("address").value;
    let name = document.getElementById("name").value;
    let feedback = document.getElementById("feedback").value;
    let inspection = document.getElementById("inspection").value;
    let date = document.getElementById("date").value;
    let datePlus7 = calculateDatePlusDays(date, 7);
    let datePlus28 = calculateDatePlusDays(date, 28);

    // Yeni veri objesini oluştur
    let newData = {
        id: id,
        address: address,
        name: name,
        feedback: feedback,
        inspection: inspection,
        date: date,
        datePlus7: datePlus7,
        datePlus28: datePlus28
    };

    // Veriyi ekle ve tekrar listele
    data.push(newData);
    renderData();

    // Formu sıfırla
    document.getElementById("id").value = "";
    document.getElementById("address").value = "";
    document.getElementById("name").value = "";
    document.getElementById("feedback").value = "olumlu"; // Varsayılan olarak olumlu seçili olsun
    document.getElementById("inspection").value = "T.U.S  Fİ İzmir";
    document.getElementById("date").value = "";
}
