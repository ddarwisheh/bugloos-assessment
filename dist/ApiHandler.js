"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchDataFromApi = void 0;
const axios_1 = __importDefault(require("axios"));
const xml2js_1 = require("xml2js");
/*
    - fetch data using axios
    - check if data xml or json
 */
async function fetchDataFromApi(url) {
    try {
        const response = await axios_1.default.get(url);
        const contentType = response.headers['content-type'];
        const isXml = contentType.includes('application/xml') || contentType.includes('text/xml');
        if (isXml) {
            const xmlData = response.data;
            try {
                const jsonData = await (0, xml2js_1.parseStringPromise)(xmlData, {
                    explicitArray: false,
                });
                return jsonData.data;
            }
            catch (error) {
                throw new Error('Failed to parse XML response');
            }
        }
        return response.data;
    }
    catch (error) {
        if (axios_1.default.isAxiosError(error)) {
            const axiosError = error;
            if (axiosError.response) {
                throw new Error(`Request failed with status code ${axiosError.response.status}`);
            }
            else if (axiosError.request) {
                throw new Error('Request failed, no response received');
            }
            else {
                throw new Error('Request failed, error occurred during processing');
            }
        }
        else {
            throw new Error('Failed to fetch data from API');
        }
    }
}
exports.fetchDataFromApi = fetchDataFromApi;
