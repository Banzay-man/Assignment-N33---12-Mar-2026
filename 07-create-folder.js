const fs = require('fs');
const path = require('path');

const folderPath = path.join(__dirname, 'test_folder');

fs.mkdir(folderPath, (err) => {
    if (err) {
        console.error('ფოლდერის შექმნის შეცდომა:', err);
        return;
    }

    console.log('test_folder წარმატებით შეიქმნა.');
});