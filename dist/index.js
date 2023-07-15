"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const ApiHandler_1 = require("./ApiHandler");
const Converter_1 = require("./Converter");
const YamlReader_1 = require("./YamlReader");
const Database_1 = require("./Database");
async function main() {
    const apiResponse = await (0, ApiHandler_1.fetchDataFromApi)();
    const mapping = (0, YamlReader_1.loadMapping)('mapping.yaml');
    const databaseObject = (0, Converter_1.convertData)(apiResponse, mapping);
    return (0, Database_1.saveObject)(databaseObject);
}
exports.main = main;
// main().catch((error) => {
//     console.error('An error occurred:');
//     console.error(error);
// });
