const fs = require('fs');
const path = 'message.txt';

const handleRoutes = (req,res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        fs.readFile(path, 'utf8', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });

            

            if (data) {
                const formattedMessages = data
                res.write('<p>' + formattedMessages + '</p>');
            }

            res.write('<form action="/message" method="POST">');
            res.write('<input type="text" name="message" placeholder="Enter your message here">');
            res.write('<button type="submit">Send</button>');
            res.write('</form>');
            res.write('</body>');
            res.write('</html>');

            res.end();
        });
    } else if (url === '/message' && method === 'POST') {
        const body = [];

        req.on('data', (chunk) => {
            body.push(chunk);
        });

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];

            fs.writeFile(path, message, (err) => {
                res.writeHead(302, { 'Location': '/' });
                res.end();
            });
        });

        return;
    }
}

module.exports = handleRoutes;