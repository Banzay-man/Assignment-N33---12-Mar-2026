const fs = require('fs');
const path = require('path');

const user = {
    name: 'Beka',
    age: 44,
    profession: 'Network Specialist',
    skills: ['Node.js', 'Linux', 'Cisco']
};

const filePath = path.join(__dirname, 'data.json');
const jsonData = JSON.stringify(user, null, 2);

fs.writeFile(filePath, jsonData, 'utf8', (err) => {
    if (err) {
        console.error('JSON ფაილის ჩაწერის შეცდომა:', err);
        return;
    }

    console.log('data.json წარმატებით შეიქმნა.');
});