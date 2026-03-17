const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'greet.txt');

fs.stat(filePath, (err, stats) => {
    if (err) {
        console.error('ფაილის ინფორმაციის წაკითხვის შეცდომა:', err);
        return;
    }

    console.log('ფაილის ზომა (bytes):', stats.size);
    console.log('შექმნის თარიღი:', stats.birthtime);
});