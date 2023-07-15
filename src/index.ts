import { fetchDataFromApi } from './ApiHandler';
import { convertData } from './Converter';
import { loadMapping } from './YamlReader';
import { saveObject } from './Database';
import { DatabaseObject } from './Types';

/* 
    - fetch data
    - get config file for mapping
    - map th fetched data according to mapping.yaml config
    - save the data to db
 */

export async function mapDataAndSave(db: any, url: string): Promise<DatabaseObject> {
    const apiResponse = await fetchDataFromApi(url);
    const mapping = loadMapping('mapping.yaml');

    const databaseObject = convertData(apiResponse, mapping);

    return saveObject(databaseObject, db);
}
