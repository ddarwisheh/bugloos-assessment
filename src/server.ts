import express, { Request, Response } from 'express';
import { mapDataAndSave } from '.';
import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = 3000;

const mongoUrl = process.env.MONGO_URL || '';
const dbName = process.env.DB_NAME || '';

app.use(express.static('public'))

// connect to mongodb 
async function connectToMongo() {
    try {
        const client = await MongoClient.connect(mongoUrl);
        console.log('Connected to MongoDB');
        const db = client.db(dbName);


        app.use(express.static('public'))

        app.get('/', async (req: Request, res: Response) => {
            const url: string = String(req?.query?.url)
            try {
                const convertedData = await mapDataAndSave(db, url)
                res.json(convertedData);
            } catch (error: any) {
                res.status(500).json({ error: error.message });
            }
        });

        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });

    } catch (err) {
        console.error('Failed to connect to MongoDB:', err);
    }
}

connectToMongo();