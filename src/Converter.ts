import { ApiResponse, DatabaseObject, Mapping } from './Types';

/* 
    - map on object according mapping.yaml config file
 */

const convert = (map: any, item: any) => {
    const convertedItem: DatabaseObject = {};
    Object.keys(map).forEach((key: any): void => {


        const apiResponseKey = map[key]
        const isNested = typeof apiResponseKey != 'string'

        const value = isNested ? item[apiResponseKey.api_key_name] : item[apiResponseKey]

        convertedItem[key] = isNested ? convert(apiResponseKey, value) : value
    })
    return convertedItem
}


/* 
    - map array of data according mapping.yaml config file
 */

function convertData(apiResponse: ApiResponse | ApiResponse[], mapping: Mapping): DatabaseObject {

    const data = Array.isArray(apiResponse) ? apiResponse : [apiResponse]

    const convertedData: DatabaseObject[] = data.map((item: ApiResponse) => {
        const convertedItem: DatabaseObject = convert(mapping, item);
        return convertedItem
    })

    return convertedData;
}

export { convertData };
