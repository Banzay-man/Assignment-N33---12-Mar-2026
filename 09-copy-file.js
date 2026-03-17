const fs = require('fs');
const path = require('path');

const sourcePath = path.join(__dirname, 'source.txt');
const destinationPath = path.join(__dirname, 'destination.txt');

fs.copyFile(sourcePath, destinationPath, (err) => {
    if (err) {
        console.error('ფაილის კოპირების შეცდომა:', err);
        return;
    }

    console.log('source.txt დაკოპირდა destination.txt-ში.');
});