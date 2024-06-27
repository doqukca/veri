// delete.js dosyası

// Form submit olayını dinle
document.getElementById('deleteForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Formun default submit işlemini engelle

    // Silinecek ismi al
    var deleteName = document.getElementById('deleteName').value;

    // localStorage'dan verileri al
    var savedData = JSON.parse(localStorage.getItem('savedData')) || [];

    // İsim eşleşmesi yapıp veriyi sil
    savedData = savedData.filter(function(item) {
        return item.name !== deleteName;
    });

    // Yeni veriyi localStorage'a kaydet
    localStorage.setItem('savedData', JSON.stringify(savedData));

    // Başarılı mesajını göster (isteğe bağlı)
    alert('Veri başarıyla silindi!');

    // Formu sıfırla
    document.getElementById('deleteForm').reset();
});
