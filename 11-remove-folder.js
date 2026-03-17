const fs = require('fs');
const path = require('path');

const folderPath = path.join(__dirname, 'test_folder');

fs.rmdir(folderPath, (err) => {
    if (err) {
        console.error('ფოლდერის წაშლის შეცდომა:', err);
        return;
    }

    console.log('test_folder წარმატებით წაიშალა.');
});