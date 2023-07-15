"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertData = void 0;
/*
    - map on object according mapping.yaml config file
 */
const convert = (map, item) => {
    const convertedItem = {};
    Object.keys(map).forEach((key) => {
        const apiResponseKey = map[key];
        const isNested = typeof apiResponseKey != 'string';
        const value = isNested ? item[apiResponseKey.api_key_name] : item[apiResponseKey];
        convertedItem[key] = isNested ? convert(apiResponseKey, value) : value;
    });
    return convertedItem;
};
/*
    - map array of data according mapping.yaml config file
 */
function convertData(apiResponse, mapping) {
    const data = Array.isArray(apiResponse) ? apiResponse : [apiResponse];
    const convertedData = data.map((item) => {
        const convertedItem = convert(mapping, item);
        return convertedItem;
    });
    return convertedData;
}
exports.convertData = convertData;
