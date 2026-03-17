const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'temp.txt');

fs.unlink(filePath, (err) => {
    if (err) {
        console.error('ფაილის წაშლის შეცდომა:', err);
        return;
    }

    console.log('temp.txt წარმატებით წაიშალა.');
});