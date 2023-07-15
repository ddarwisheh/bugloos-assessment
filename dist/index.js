"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapDataAndSave = void 0;
const ApiHandler_1 = require("./ApiHandler");
const Converter_1 = require("./Converter");
const YamlReader_1 = require("./YamlReader");
const Database_1 = require("./Database");
/*
    - fetch data
    - get config file for mapping
    - map th fetched data according to mapping.yaml config
    - save the data to db
 */
async function mapDataAndSave(db, url) {
    const apiResponse = await (0, ApiHandler_1.fetchDataFromApi)(url);
    const mapping = (0, YamlReader_1.loadMapping)('mapping.yaml');
    const databaseObject = (0, Converter_1.convertData)(apiResponse, mapping);
    return (0, Database_1.saveObject)(databaseObject, db);
}
exports.mapDataAndSave = mapDataAndSave;
