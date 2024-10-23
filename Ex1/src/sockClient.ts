// client.ts
import * as net from 'net';

const client = new net.Socket();

client.connect(8080, '127.0.0.1', () => {
    console.log('Connected to server');
    client.write('Hello from client!');
});

client.on('data', (data) => {
    console.log('Received:', data.toString());
    client.destroy(); // Close the connection after receiving the response
});

client.on('close', () => {
    console.log('Connection closed');
});