const fs = require('fs');
const path = require('path');

const nestedFolderPath = path.join(__dirname, 'logs', '2026', 'march');

fs.mkdir(nestedFolderPath, { recursive: true }, (err) => {
    if (err) {
        console.error('Nested ფოლდერების შექმნის შეცდომა:', err);
        return;
    }

    console.log('logs/2026/march წარმატებით შეიქმნა.');
});