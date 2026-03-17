const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data.json');

fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
        console.log('data.json არ არსებობს.');
    } else {
        console.log('data.json არსებობს.');
    }
});