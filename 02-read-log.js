const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'greet.txt');

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('ფაილის წაკითხვის შეცდომა:', err);
        return;
    }

    console.log('ფაილის შიგთავსი:');
    console.log(data);
});