"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertData = void 0;
function convertData(apiResponse, mapping) {
    const convertedData = {};
    Object.keys(mapping).forEach((key) => {
        const apiResponseKey = mapping[key];
        const value = apiResponse[apiResponseKey];
        convertedData[key] = value;
    });
    // Object.keys(mapping).forEach((apiField) => {
    //     const databaseField = mapping[apiField];
    //     convertedData[databaseField] = apiResponse[apiField];
    // });
    return convertedData;
}
exports.convertData = convertData;
