"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchDataFromApi = void 0;
const axios_1 = __importDefault(require("axios"));
async function fetchDataFromApi() {
    const response = await axios_1.default.get('http://localhost:3000/data.json');
    return response.data;
}
exports.fetchDataFromApi = fetchDataFromApi;
