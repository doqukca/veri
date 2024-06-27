const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

let data = [];

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// POST isteği dinle
app.post('/saveData', (req, res) => {
    let newData = req.body;

    // Veriyi diziye ekle (gerçek bir uygulamada veritabanına kaydedilir)
    data.push(newData);

    // Başarılı yanıt döndür
    res.status(200).send('Veri kaydedildi');
});

// Veri listeleme endpoint'i
app.get('/getData', (req, res) => {
    res.json(data);
});

// Sunucuyu dinlemeye başla
app.listen(port, () => {
    console.log(`Sunucu http://localhost:${port} adresinde çalışıyor`);
});
