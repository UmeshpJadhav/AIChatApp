import http from 'http';
import dotenv from 'dotenv';
dotenv.config();  // Ensure dotenv is loaded before config

import app from './src/app';
import { config } from './src/config/config';

// Create HTTP server
const server = http.createServer(app);

const startServer = () => {
    const port = Number(config.port) || 3000; // Ensure it's a number

    server.listen(port, () => {
        console.log(`🚀 Server is running on port ${port}`);
    });

    // Handle common server errors
    server.on('error', (error) => {
        console.error("❌ Server Error:", error);
    });
};

startServer();
