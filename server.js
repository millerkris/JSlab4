const http = require('http');
const fs = require('fs');

const fileName = 'файл.txt'; // Укажите здесь реальное имя файла

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        fs.readFile(fileName, 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end('Ошибка чтения файла');
                return;
            }

            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(data);
        });
    } else if (req.method === 'POST' && req.url === '/') {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk;
        });

        req.on('end', () => {
            fs.appendFile(fileName, body, 'utf8', (err) => {
                if (err) {
                    res.writeHead(500);
                    res.end('Ошибка записи в файл');
                    return;
                }

                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end('Данные успешно добавлены в файл');
            });
        });
    } else {
        res.writeHead(404);
        res.end('Ресурс не найден');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});