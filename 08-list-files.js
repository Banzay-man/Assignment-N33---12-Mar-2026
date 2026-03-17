const fs = require('fs');
const path = require('path');

const folderPath = __dirname;

fs.readdir(folderPath, (err, files) => {
    if (err) {
        console.error('დირექტორიის წაკითხვის შეცდომა:', err);
        return;
    }

    console.log('ფაილების სია:');
    console.log(files);
});