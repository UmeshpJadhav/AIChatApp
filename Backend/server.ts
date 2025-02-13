import app from './src/app';
import dotenv from 'dotenv';
dotenv.config();

import http from 'http';

const server = http.createServer(app);

const startServer = async () => {
    try{
        server.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT || 3000}`);
        })

    }
    catch{
        console.log("Error in starting server");
    }
};

startServer();