import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import connectToMongoDB from './src/db/connectToMongoDB.js';
import router from './routes.js';

dotenv.config();
const PORT_URL = process.env.PORT_URL || 7272;
const CLIENT_CORS_URL = process.env.CLIENT_CORS_URL;

const app = express();

app.use(cors({
    origin: CLIENT_CORS_URL,
}));
app.use(express.json());
app.use(cookieParser());
app.use('/', router);

const server = async () => {
    try {
        await connectToMongoDB();

        app.listen(PORT_URL, () => {
            console.log(`Server is running on port http://localhost:${PORT_URL}`);
        });
    } catch (error) {
        console.log("Failed to start server ...", error.message);
        process.exit(1);
    }
};

server();