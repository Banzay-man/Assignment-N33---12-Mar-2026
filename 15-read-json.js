const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data.json');

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('JSON ფაილის წაკითხვის შეცდომა:', err);
        return;
    }

    try {
        const parsedData = JSON.parse(data);
        console.log('სახელი:', parsedData.name);
        console.log('ასაკი:', parsedData.age);
    } catch (parseError) {
        console.error('JSON parse შეცდომა:', parseError);
    }
});