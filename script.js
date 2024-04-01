const fs = require('fs');

const fileName = 'файл.txt'; // указать имя файла, который нужно прочитать и записать

fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
        console.error('Ошибка чтения файла:', err);
        return;
    }

    const reversedText = data.split('').reverse().join('');
    
    fs.writeFile(fileName, reversedText, 'utf8', (err) => {
        if (err) {
            console.error('Ошибка записи файла:', err);
            return;
        }
        
        console.log(`Текст в файле ${fileName} был записан в обратном порядке.`);
    });
});