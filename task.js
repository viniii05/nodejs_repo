const http = require('http');

const route = require('./routes');
const server = http.createServer(route);

server.listen(3000, () => {
    console.log('Server running on port 3000');
});