const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'greet.txt');

fs.writeFile(filePath, 'გამარჯობა, ეს არის Node.js!', 'utf8', (err) => {
    if (err) {
        console.error('ფაილის ჩაწერის შეცდომა:', err);
        return;
    }

    console.log('greet.txt წარმატებით შეიქმნა.');
});