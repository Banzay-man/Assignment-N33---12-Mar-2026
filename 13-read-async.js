const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'greet.txt');

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Async წაკითხვის შეცდომა:', err);
        return;
    }

    console.log('Async წაკითხვა:');
    console.log(data);
});

console.log('ეს ხაზი შეიძლება დაიბეჭდოს readFile-ის დასრულებამდე.');