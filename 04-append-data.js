const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'log.txt');
const currentDateTime = new Date().toLocaleString();
const textToAppend = `ლოგი: ${currentDateTime}\n`;

fs.appendFile(filePath, textToAppend, 'utf8', (err) => {
    if (err) {
        console.error('log.txt-ში დამატების შეცდომა:', err);
        return;
    }

    console.log('თარიღი და დრო წარმატებით დაემატა log.txt ფაილში.');
});