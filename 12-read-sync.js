const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'greet.txt');

try {
    const data = fs.readFileSync(filePath, 'utf8');
    console.log('Sync წაკითხვა:');
    console.log(data);
} catch (err) {
    console.error('Sync წაკითხვის შეცდომა:', err);
}