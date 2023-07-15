"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveObject = void 0;
/*
    - save array of object to mongodb
 */
async function saveObject(object, db) {
    console.log('Saving object to the database:');
    try {
        const collection = db.collection('documents');
        const result = await collection.insertMany(object);
        return object;
    }
    catch (err) {
        console.error('Error creating document:', err);
        return object;
    }
}
exports.saveObject = saveObject;
