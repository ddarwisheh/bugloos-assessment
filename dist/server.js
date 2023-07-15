"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const _1 = require(".");
const mongodb_1 = require("mongodb");
const dotenv_1 = __importDefault(require("dotenv"));
// Load environment variables from .env file
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = 3000;
const mongoUrl = process.env.MONGO_URL || '';
const dbName = process.env.DB_NAME || '';
app.use(express_1.default.static('public'));
// connect to mongodb 
async function connectToMongo() {
    try {
        const client = await mongodb_1.MongoClient.connect(mongoUrl);
        console.log('Connected to MongoDB');
        const db = client.db(dbName);
        app.use(express_1.default.static('public'));
        app.get('/', async (req, res) => {
            const url = String(req?.query?.url);
            try {
                const convertedData = await (0, _1.mapDataAndSave)(db, url);
                res.json(convertedData);
            }
            catch (error) {
                res.status(500).json({ error: error.message });
            }
        });
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    }
    catch (err) {
        console.error('Failed to connect to MongoDB:', err);
    }
}
connectToMongo();
