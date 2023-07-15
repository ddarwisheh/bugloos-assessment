import { DatabaseObject } from './Types';
/* 
    - save array of object to mongodb
 */
async function saveObject(object: DatabaseObject, db: any) {
    console.log('Saving object to the database:');

    try {
        const collection = db.collection('documents');
        const result = await collection.insertMany(object);
        return object
    } catch (err) {
        console.error('Error creating document:', err);
        return object
    }

}

export { saveObject };
