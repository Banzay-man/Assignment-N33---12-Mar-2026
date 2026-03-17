const fs = require('fs');
const path = require('path');

const oldPath = path.join(__dirname, 'old_name.txt');
const newPath = path.join(__dirname, 'new_name.txt');

fs.rename(oldPath, newPath, (err) => {
    if (err) {
        console.error('ფაილის გადარქმევის შეცდომა:', err);
        return;
    }

    console.log('old_name.txt გადაერქვა new_name.txt-ად.');
});